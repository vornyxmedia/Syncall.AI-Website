import React, { useState, useEffect, useMemo } from 'react';
import { Check, Loader2, ArrowRight } from 'lucide-react';
import { GoogleAdsLogo, MetaLogo, ShopifyLogo, TikTokLogo, GoogleAnalyticsLogo, LinkedInLogo, MicrosoftAdsLogo, XLogo, AmazonLogo } from './BrandLogos';
import { useTheme } from '../context/ThemeContext';

interface ThreeKindsOfScaleProps {
  onOpenContactModal?: () => void;
}

interface StreamItem {
  icon?: React.ReactNode;
  symbol?: string;
  bg: string;
  text: string;
}

// 5 Portfolio Brands configuration — static, defined once at module scope
// so it isn't rebuilt on every tick of the sync-status animation below.
const PORTFOLIO_BRANDS = [
  {
    id: 'autofinder',
    name: 'AutoFinder',
    icon: '▲',
    iconBg: 'bg-orange-500',
    iconColor: 'text-white',
    loadingStatus: 'Syncing budget...',
    syncedStatus: 'Budget synced',
  },
  {
    id: 'wave-capital',
    name: 'Wave Capital',
    icon: '🌊',
    iconBg: 'bg-cyan-500',
    iconColor: 'text-white',
    loadingStatus: 'Preparing analysis...',
    syncedStatus: 'Analysis ready',
  },
  {
    id: 'fluid',
    name: 'Fluid',
    icon: 'F',
    iconBg: 'bg-blue-500',
    iconColor: 'text-white',
    loadingStatus: 'Collecting data...',
    syncedStatus: 'Data collected',
  },
  {
    id: 'rudder-media',
    name: 'Rudder Media',
    icon: '◎',
    iconBg: 'bg-purple-400',
    iconColor: 'text-purple-950',
    loadingStatus: 'Syncing accounts...',
    syncedStatus: 'Budget synced',
  },
  {
    id: 'sherway-nursery',
    name: 'Sherway Nursery',
    icon: '🌲',
    iconBg: 'bg-emerald-700',
    iconColor: 'text-white',
    loadingStatus: 'Building report...',
    syncedStatus: 'Report ready',
  },
] as const;

// Single cyclic sequence (5 logos, each followed by 3 placeholder marks) that the
// 5 scrolling columns below are sliced from, offset by 4 items each — this is
// what keeps a matching icon lined up at the seam between adjacent columns.
// To add another brand, drop it in here; no column array needs touching.
const PLATFORM_STREAM: StreamItem[] = [
  { icon: <GoogleAdsLogo className="w-5 h-5" />, bg: 'bg-white', text: 'text-slate-700' },
  { icon: <LinkedInLogo className="w-5 h-5" />, bg: 'bg-white', text: 'text-blue-700' },
  { symbol: '★', bg: 'bg-white', text: 'text-amber-500' },
  { symbol: '◇', bg: 'bg-white/80', text: 'text-slate-400' },
  { icon: <MetaLogo className="w-5 h-5" />, bg: 'bg-white', text: 'text-blue-600' },
  { symbol: '✦', bg: 'bg-white', text: 'text-slate-500' },
  { symbol: '◆', bg: 'bg-white', text: 'text-indigo-600' },
  { symbol: '○', bg: 'bg-white/80', text: 'text-slate-400' },
  { icon: <TikTokLogo className="w-5 h-5" />, bg: 'bg-white', text: 'text-slate-900' },
  { icon: <MicrosoftAdsLogo className="w-5 h-5" />, bg: 'bg-white', text: 'text-teal-700' },
  { symbol: '▲', bg: 'bg-white', text: 'text-orange-500' },
  { symbol: '□', bg: 'bg-white/80', text: 'text-slate-400' },
  { icon: <ShopifyLogo className="w-5 h-5" />, bg: 'bg-white', text: 'text-emerald-600' },
  { symbol: '◈', bg: 'bg-white', text: 'text-slate-500' },
  { symbol: '✿', bg: 'bg-white', text: 'text-teal-600' },
  { symbol: '△', bg: 'bg-white/80', text: 'text-slate-400' },
  { icon: <GoogleAnalyticsLogo className="w-5 h-5" />, bg: 'bg-white', text: 'text-amber-600' },
  { icon: <XLogo className="w-5 h-5" />, bg: 'bg-white', text: 'text-slate-900' },
  { icon: <AmazonLogo className="w-5 h-5" />, bg: 'bg-white', text: 'text-orange-600' },
  { symbol: '☆', bg: 'bg-white/80', text: 'text-slate-400' },
];

const STREAM_COLUMN_COUNT = 5;
const STREAM_COLUMN_SIZE = 6;
const STREAM_COLUMN_STEP = 4;

// Each column is a 6-item window into PLATFORM_STREAM, offset by 4; the list is
// doubled up front so the scroll animation can loop seamlessly via CSS alone.
const STREAM_COLUMNS: StreamItem[][] = Array.from({ length: STREAM_COLUMN_COUNT }, (_, colIdx) => {
  const window = Array.from({ length: STREAM_COLUMN_SIZE }, (_, i) =>
    PLATFORM_STREAM[(colIdx * STREAM_COLUMN_STEP + i) % PLATFORM_STREAM.length]
  );
  return [...window, ...window];
});

const StreamColumn: React.FC<{ items: StreamItem[]; isUp: boolean }> = ({ items, isUp }) => (
  <div className="flex flex-col gap-2.5 overflow-hidden">
    <div className={`flex flex-col gap-2.5 ${isUp ? 'animate-vertical-up' : 'animate-vertical-down'}`}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-2xl ${item.bg} border border-slate-200/80 shadow-xs flex items-center justify-center text-xs font-bold ${item.text} shrink-0`}
        >
          {item.icon ?? item.symbol}
        </div>
      ))}
    </div>
  </div>
);

export const ThreeKindsOfScale: React.FC<ThreeKindsOfScaleProps> = ({ onOpenContactModal }) => {
  const { isDuskMode } = useTheme();
  const isV2 = isDuskMode;

  // "all cards load and then tick one by one"
  // tickedCount: 0 = all 5 loading, 1 = brand 0 ticked, 2 = brand 0,1 ticked, ..., 5 = all 5 ticked
  const [tickedCount, setTickedCount] = useState(0);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (tickedCount === 0) {
      // All cards load together for 1.4s
      timer = setTimeout(() => {
        setTickedCount(1);
      }, 1400);
    } else if (tickedCount < 5) {
      // Then tick one by one every 800ms
      timer = setTimeout(() => {
        setTickedCount((prev) => prev + 1);
      }, 800);
    } else {
      // Once all 5 are ticked, stay ticked for 3.2s before repeating
      timer = setTimeout(() => {
        setTickedCount(0);
      }, 3200);
    }

    return () => clearTimeout(timer);
  }, [tickedCount]);

  const cardSurfaceClass = useMemo(
    () =>
      isV2
        ? 'bg-[#0e1126] border-white/10 text-white shadow-[0_0_30px_rgba(0,0,0,0.5)]'
        : 'bg-[#F3F6FD] border-blue-100/70 shadow-lg shadow-purple-950/5',
    [isV2]
  );

  return (
    <section id="multi-account-scale" className={`relative py-14 sm:py-16 lg:py-[100px] overflow-hidden transition-colors duration-500 ${isV2 ? 'bg-[#070814] text-white' : 'bg-white text-slate-900'}`}>
      {/* Background ambient lighting */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-[160px] pointer-events-none ${isV2 ? 'bg-purple-900/20' : 'bg-purple-100/40'}`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16 sm:mb-20">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-purple-400">
            BUILT FOR MULTI-ACCOUNT SCALE
          </p>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] ${isV2 ? 'text-white' : 'text-slate-900'}`}>
            Three Kinds of Scale. One Platform.
          </h2>
        </div>

        {/* 3 Scale Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-14 sm:mb-16">
          
          {/* COLUMN 1: AGENCIES (100s of Accounts - Flowing Multi-Account Conveyor) */}
          <div className={`rounded-[32px] p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden transition-all duration-300 border ${cardSurfaceClass}`}>
            <div>
              <p className={`text-xs font-bold uppercase tracking-wider mb-2 ${isV2 ? 'text-purple-300' : 'text-purple-600'}`}>
                AGENCIES
              </p>
              <h3 className={`text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug mb-3 ${isV2 ? 'text-white' : 'text-slate-900'}`}>
                100s of Accounts
              </h3>
              <p className={`text-sm leading-relaxed font-normal mb-6 ${isV2 ? 'text-slate-300' : 'text-slate-600'}`}>
                Agents run reporting, QA, and pacing on every client. Monitor hundreds daily in minutes, not days.
              </p>
            </div>

            {/* Visual: Smooth Infinite Vertical Account Streams */}
            <div className={`relative h-56 sm:h-64 overflow-hidden rounded-2xl p-3 border ${
              isV2 ? 'bg-[#131738]/60 border-white/10' : 'bg-white/40 border-blue-100/60'
            }`}>
              {/* Top & Bottom Gradient Masks for seamless streaming */}
              <div className={`absolute inset-x-0 top-0 h-10 z-10 pointer-events-none bg-gradient-to-b ${
                isV2 ? 'from-[#0e1126] to-transparent' : 'from-[#F3F6FD] to-transparent'
              }`} />
              <div className={`absolute inset-x-0 bottom-0 h-10 z-10 pointer-events-none bg-gradient-to-t ${
                isV2 ? 'from-[#0e1126] to-transparent' : 'from-[#F3F6FD] to-transparent'
              }`} />

              <div className="grid grid-cols-5 gap-2 sm:gap-2.5 h-full justify-items-center">
                {STREAM_COLUMNS.map((items, idx) => (
                  <StreamColumn key={idx} items={items} isUp={idx % 2 === 0} />
                ))}
              </div>
            </div>

          </div>

          {/* COLUMN 2: PORTFOLIO COMPANIES (Dozens of Brands - Live Real-Time Sync Pipeline) */}
          <div className="rounded-[32px] bg-gradient-to-b from-[#6D28D9] via-[#7C3AED] to-[#4F46E5] text-white p-7 sm:p-9 flex flex-col justify-between shadow-2xl shadow-purple-900/25 relative overflow-hidden">
            
            {/* Ambient inner glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-wider text-purple-200 mb-2">
                PORTFOLIO COMPANIES
              </p>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug mb-3">
                Dozens of Brands
              </h3>
              <p className="text-sm text-white/90 leading-relaxed font-normal mb-8">
                Every operating company runs its own stack. Agents standardize the data and roll it up, portfolio-wide.
              </p>
            </div>

            {/* Visual: Live Animated Brand Account Sync Pipeline */}
            <div className="space-y-2.5 relative z-10">
              {PORTFOLIO_BRANDS.map((brand, idx) => {
                const isTicked = idx < tickedCount;
                return (
                  <div 
                    key={brand.id}
                    className="p-3 sm:p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-between shadow-sm transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-xl ${brand.iconBg} flex items-center justify-center font-bold text-xs ${brand.iconColor} shadow-sm shrink-0`}>
                        {brand.icon}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white leading-tight">
                          {brand.name}
                        </h4>
                        {isTicked ? (
                          <span className="text-[10px] text-emerald-300 font-medium flex items-center gap-1 pt-0.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            {brand.syncedStatus}
                          </span>
                        ) : (
                          <span className="text-[10px] text-amber-200 font-medium flex items-center gap-1 pt-0.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse" />
                            {brand.loadingStatus}
                          </span>
                        )}
                      </div>
                    </div>

                    {isTicked ? (
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center transition-all duration-300">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                    ) : (
                      <Loader2 className="w-4 h-4 text-white/80 animate-spin shrink-0" />
                    )}
                  </div>
                );
              })}
            </div>

          </div>

          {/* COLUMN 3: MULTI-LOCATION BRANDS (1,000s of Locations - Radiating Network & Orbiting Nodes) */}
          <div className={`rounded-[32px] p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden transition-all duration-300 border ${cardSurfaceClass}`}>
            <div>
              <p className={`text-xs font-bold uppercase tracking-wider mb-2 ${isV2 ? 'text-purple-300' : 'text-purple-600'}`}>
                MULTI-LOCATION BRANDS
              </p>
              <h3 className={`text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug mb-3 ${isV2 ? 'text-white' : 'text-slate-900'}`}>
                1,000s of Locations
              </h3>
              <p className={`text-sm leading-relaxed font-normal mb-8 ${isV2 ? 'text-slate-300' : 'text-slate-600'}`}>
                An agent on every location, rolled up to the brand, online and offline. Treat every market like it's your only one.
              </p>
            </div>

            {/* Visual: Radar Waves, Orbiting Nodes & Levitation Hub */}
            <div className="h-64 flex items-center justify-center relative overflow-hidden">
              
              {/* Radiating radar wave pulses from central hub */}
              <div className="absolute w-36 h-36 rounded-full border-2 border-purple-400/40 animate-radar-1 pointer-events-none" />
              <div className="absolute w-36 h-36 rounded-full border-2 border-indigo-400/35 animate-radar-2 pointer-events-none" />
              <div className="absolute w-36 h-36 rounded-full border-2 border-cyan-400/30 animate-radar-3 pointer-events-none" />

              {/* Outer Rotating Dashed Orbital Ring with Satellites */}
              <div className="absolute w-60 h-60 rounded-full border border-dashed border-indigo-300/50 animate-orbit-slow pointer-events-none flex items-center justify-between p-1">
                <div className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-sm shadow-purple-500/50 -translate-x-1" />
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-sm shadow-indigo-500/50 translate-x-1" />
              </div>

              {/* Inner Reverse Rotating Orbital Ring */}
              <div className="absolute w-44 h-44 rounded-full border border-purple-200/60 animate-orbit-reverse pointer-events-none flex items-center justify-between p-1">
                <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400/50 -translate-x-1" />
                <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50 translate-x-1" />
              </div>

              {/* Floating Mini Location Beacon Badges */}
              <div className={`absolute top-3 left-3 sm:left-5 px-2.5 py-1 rounded-full backdrop-blur-md border shadow-sm text-[10px] font-bold flex items-center gap-1.5 animate-float-gentle z-20 ${
                isV2 ? 'bg-[#131738]/90 border-white/15 text-white' : 'bg-white/95 border-slate-200/80 text-slate-700'
              }`}>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Store #104</span>
              </div>

              <div className={`absolute bottom-3 right-3 sm:right-5 px-2.5 py-1 rounded-full backdrop-blur-md border shadow-sm text-[10px] font-bold flex items-center gap-1.5 animate-float-gentle [animation-delay:2s] z-20 ${
                isV2 ? 'bg-[#131738]/90 border-white/15 text-white' : 'bg-white/95 border-slate-200/80 text-slate-700'
              }`}>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                <span>Store #389</span>
              </div>

              <div className={`absolute top-4 right-4 px-2.5 py-1 rounded-full backdrop-blur-md border shadow-sm text-[10px] font-bold flex items-center gap-1.5 animate-float-gentle [animation-delay:3.5s] z-20 ${
                isV2 ? 'bg-[#131738]/90 border-white/15 text-white' : 'bg-white/95 border-slate-200/80 text-slate-700'
              }`}>
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                <span>Store #842</span>
              </div>

              {/* Central 3D Brand Hub (Gently levitates) */}
              <div className={`relative w-32 h-32 sm:w-36 sm:h-36 rounded-[36px] border flex items-center justify-center p-5 sm:p-6 z-10 animate-float-gentle ${
                isV2 ? 'bg-[#181d45] border-white/15 shadow-[0_0_40px_rgba(0,0,0,0.8)]' : 'bg-white border-slate-200/90 shadow-2xl shadow-purple-950/15'
              }`}>
                <div className="w-full h-full rounded-2xl bg-gradient-to-tr from-orange-500 via-amber-500 to-orange-400 flex items-center justify-center text-white shadow-lg shadow-orange-500/30">
                  <span className="text-4xl sm:text-5xl font-black tracking-tighter">▲</span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Centered CTA Button */}
        <div className="text-center">
          <button
            onClick={onOpenContactModal}
            className={
              isV2
                ? 'px-10 py-4 rounded-full bg-black/90 hover:bg-black text-white font-bold text-base border border-white/20 shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] active:scale-[0.98] transition-all duration-300 cursor-pointer inline-flex items-center gap-2'
                : 'px-10 py-4 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-base shadow-xl shadow-purple-600/25 active:scale-[0.98] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer inline-flex items-center gap-2'
            }
          >
            <span>Get a Demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
