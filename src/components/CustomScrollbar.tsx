import React, { useEffect, useRef, useState } from 'react';

const DESKTOP_QUERY = '(min-width: 1024px) and (pointer: fine)';
const TRACK_MARGIN = 8; // px kept clear at top/bottom of the track

export const CustomScrollbar: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [thumbHeight, setThumbHeight] = useState(0);
  const [thumbTop, setThumbTop] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [hovering, setHovering] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragOffsetRef = useRef(0);

  useEffect(() => {
    const mql = window.matchMedia(DESKTOP_QUERY);
    const update = () => setIsDesktop(mql.matches);
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    let raf = 0;

    const recalc = () => {
      const track = trackRef.current;
      if (!track) return;

      const trackHeight = track.clientHeight;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;

      if (scrollable <= 0) {
        setThumbHeight(trackHeight);
        setThumbTop(0);
        return;
      }

      const viewportRatio = window.innerHeight / doc.scrollHeight;
      const minThumb = 32;
      const height = Math.max(minThumb, trackHeight * viewportRatio);
      const maxTravel = trackHeight - height;
      const progress = window.scrollY / scrollable;

      setThumbHeight(height);
      setThumbTop(maxTravel * progress);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(recalc);
    };

    recalc();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', recalc);

    const resizeObserver = new ResizeObserver(recalc);
    resizeObserver.observe(document.documentElement);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', recalc);
      resizeObserver.disconnect();
    };
  }, [isDesktop]);

  useEffect(() => {
    if (!dragging) return;

    const scrollFromClientY = (clientY: number) => {
      const track = trackRef.current;
      if (!track) return;

      const trackRect = track.getBoundingClientRect();
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const trackHeight = trackRect.height;
      const viewportRatio = window.innerHeight / doc.scrollHeight;
      const height = Math.max(32, trackHeight * viewportRatio);
      const maxTravel = trackHeight - height;

      const rawTop = clientY - trackRect.top - dragOffsetRef.current;
      const clampedTop = Math.min(Math.max(rawTop, 0), maxTravel);
      const progress = maxTravel > 0 ? clampedTop / maxTravel : 0;

      // Instant, not smooth: dragging should track the cursor 1:1. The page's
      // global scroll-behavior:smooth is for anchor-link nav, not this.
      window.scrollTo({ top: progress * scrollable, behavior: 'instant' });
    };

    const onPointerMove = (e: PointerEvent) => scrollFromClientY(e.clientY);
    const onPointerUp = () => setDragging(false);

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
    };
  }, [dragging]);

  if (!isDesktop) return null;

  const handleThumbPointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    dragOffsetRef.current = e.clientY - (trackRef.current?.getBoundingClientRect().top ?? 0) - thumbTop;
    setDragging(true);
  };

  const handleTrackClick = (e: React.MouseEvent) => {
    if (e.target !== trackRef.current) return;
    const track = trackRef.current;
    if (!track) return;

    const trackRect = track.getBoundingClientRect();
    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - window.innerHeight;
    if (scrollable <= 0) return;

    const clickCenterOffset = thumbHeight / 2;
    const rawTop = e.clientY - trackRect.top - clickCenterOffset;
    const maxTravel = trackRect.height - thumbHeight;
    const clampedTop = Math.min(Math.max(rawTop, 0), maxTravel);
    const progress = maxTravel > 0 ? clampedTop / maxTravel : 0;

    window.scrollTo({ top: progress * scrollable, behavior: 'smooth' });
  };

  const active = dragging || hovering;

  return (
    <div
      ref={trackRef}
      onClick={handleTrackClick}
      className="fixed right-1 z-[90] w-2.5 rounded-full transition-colors duration-200"
      style={{ top: TRACK_MARGIN, bottom: TRACK_MARGIN, backgroundColor: active ? 'rgba(255,255,255,0.06)' : 'transparent' }}
    >
      <div
        onPointerDown={handleThumbPointerDown}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        className={`absolute left-0 w-full rounded-full cursor-pointer bg-gradient-to-b from-purple-500 via-pink-500 to-indigo-500 transition-[opacity,width] duration-200 ${
          active ? 'opacity-100' : 'opacity-40'
        }`}
        style={{ height: thumbHeight, top: thumbTop }}
      />
    </div>
  );
};
