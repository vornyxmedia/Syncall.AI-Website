import React, { useState, useEffect, useMemo } from 'react';
import { Check, Loader2, ArrowRight } from 'lucide-react';
import { GoogleAdsLogo, MetaLogo, ShopifyLogo, TikTokLogo, GoogleAnalyticsLogo, LinkedInLogo, MicrosoftAdsLogo, XLogo, AmazonLogo } from './BrandLogos';
import { useTheme } from '../context/ThemeContext';

interface ThreeKindsOfScaleProps {
  onOpenContactModal?: () => void;
}

// 5 Portfolio Brands configuration — static, defined once at module scope
// so it isn't rebuilt on every tick of the sync-status animation below.
const PORTFOLIO_BRANDS = [
  { id: 'autofinder', name: 'AutoFinder', loadingStatus: 'Syncing budget', syncedStatus: 'Budget synced' },
  { id: 'wave-capital', name: 'Wave Capital', loadingStatus: 'Preparing analysis', syncedStatus: 'Analysis ready' },
  { id: 'fluid', name: 'Fluid', loadingStatus: 'Collecting data', syncedStatus: 'Data collected' },
  { id: 'rudder-media', name: 'Rudder Media', loadingStatus: 'Syncing accounts', syncedStatus: 'Accounts synced' },
  { id: 'sherway-nursery', name: 'Sherway Nursery', loadingStatus: 'Building report', syncedStatus: 'Report ready' },
] as const;

// Regional roll-up shown on the multi-location card
const LOCATION_REGIONS = [
  { region: 'Northeast', locations: 312, leads: '4,820', cpl: '$21' },
  { region: 'Southeast', locations: 287, leads: '4,105', cpl: '$19' },
  { region: 'Midwest', locations: 341, leads: '3,960', cpl: '$24' },
  { region: 'West', locations: 308, leads: '5,230', cpl: '$18' },
] as const;

interface StreamItem {
  icon?: React.ReactNode;
  symbol?: string;
  bg: string;
  text: string;
}

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
  { icon: <AmazonLogo className="h-2.5 w-auto" />, bg: 'bg-white', text: 'text-orange-600' },
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
        ? 'bg-[#0e1126] border-white/10 text-white'
        : 'bg-slate-50 border-slate-200',
    [isV2]
  );

  return (
    <section id="multi-account-scale" className={`relative py-14 sm:py-16 lg:py-[100px] overflow-hidden transition-colors duration-500 ${isV2 ? 'bg-[#070814] text-white' : 'bg-white text-slate-900'}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16 sm:mb-20">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] ${isV2 ? 'text-white' : 'text-slate-900'}`}>
            Three Kinds of Scale. One Platform.
          </h2>
        </div>

        {/* 3 Scale Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-14 sm:mb-16">
          
          {/* COLUMN 1: AGENCIES */}
          <div className={`rounded-2xl p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden transition-all duration-300 border ${cardSurfaceClass}`}>
            <div>
              <p className={`text-xs font-bold uppercase tracking-wider mb-2 ${isV2 ? 'text-purple-300' : 'text-purple-600'}`}>
                AGENCIES
              </p>
              <h3 className={`text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug mb-3 ${isV2 ? 'text-white' : 'text-slate-900'}`}>
                Connect Multiple Accounts
              </h3>
              <p className={`text-sm leading-relaxed font-normal mb-6 ${isV2 ? 'text-slate-300' : 'text-slate-600'}`}>
                Agents run reporting, QA, and pacing on every client. Monitor hundreds daily in minutes, not days.
              </p>
            </div>

            {/* Visual: Smooth Infinite Vertical Account Streams */}
            <div className={`relative h-56 sm:h-64 overflow-hidden rounded-2xl p-3 border ${
              isV2 ? 'bg-[#131738]/60 border-white/10' : 'bg-white border-slate-200'
            }`}>
              {/* Top & Bottom fade masks for seamless streaming */}
              <div className={`absolute inset-x-0 top-0 h-10 z-10 pointer-events-none bg-gradient-to-b ${
                isV2 ? 'from-[#0e1126] to-transparent' : 'from-white to-transparent'
              }`} />
              <div className={`absolute inset-x-0 bottom-0 h-10 z-10 pointer-events-none bg-gradient-to-t ${
                isV2 ? 'from-[#0e1126] to-transparent' : 'from-white to-transparent'
              }`} />

              <div className="grid grid-cols-5 gap-2 sm:gap-2.5 h-full justify-items-center">
                {STREAM_COLUMNS.map((items, idx) => (
                  <StreamColumn key={idx} items={items} isUp={idx % 2 === 0} />
                ))}
              </div>
            </div>

          </div>

          {/* COLUMN 2: PORTFOLIO COMPANIES */}
          <div className="rounded-2xl bg-gradient-to-b from-[#6D28D9] via-[#7C3AED] to-[#4F46E5] text-white p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug mb-3">
                Dozens of Brands
              </h3>
              <p className="text-sm text-white/90 leading-relaxed font-normal mb-8">
                Every operating company runs its own stack. Agents standardize the data and roll it up, portfolio-wide.
              </p>
            </div>

            {/* Visual: brands syncing one by one */}
            <div className="rounded-xl bg-white/[0.07] divide-y divide-white/10 relative z-10">
              {PORTFOLIO_BRANDS.map((brand, idx) => {
                const isTicked = idx < tickedCount;
                return (
                  <div 
                    key={brand.id}
                    className="px-4 py-3 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center font-bold text-xs text-white shrink-0">
                        {brand.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white leading-tight">
                          {brand.name}
                        </h4>
                        {isTicked ? (
                          <span className="text-[11px] text-purple-100 block pt-0.5">
                            {brand.syncedStatus}
                          </span>
                        ) : (
                          <span className="text-[11px] text-purple-200/70 block pt-0.5">
                            {brand.loadingStatus}…
                          </span>
                        )}
                      </div>
                    </div>

                    {isTicked ? (
                      <Check className="w-4 h-4 text-emerald-300 shrink-0" />
                    ) : (
                      <Loader2 className="w-4 h-4 text-white/60 animate-spin shrink-0" />
                    )}
                  </div>
                );
              })}
            </div>

          </div>

          {/* COLUMN 3: MULTI-LOCATION BRANDS */}
          <div className={`rounded-2xl p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden transition-all duration-300 border ${cardSurfaceClass}`}>
            <div>
              <h3 className={`text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug mb-3 ${isV2 ? 'text-white' : 'text-slate-900'}`}>
                1,000s of Locations
              </h3>
              <p className={`text-sm leading-relaxed font-normal mb-8 ${isV2 ? 'text-slate-300' : 'text-slate-600'}`}>
                An agent on every location, rolled up to the brand, online and offline. Treat every market like it's your only one.
              </p>
            </div>

            {/* Visual: every location rolled up by region */}
            <div className={`rounded-xl border text-xs ${isV2 ? 'bg-[#0b0d20] border-white/10' : 'bg-white border-slate-200'}`}>
              <div className={`grid grid-cols-4 gap-2 px-4 py-2.5 border-b ${isV2 ? 'border-white/10 text-slate-400' : 'border-slate-200 text-slate-500'}`}>
                <span>Region</span>
                <span className="text-right">Locations</span>
                <span className="text-right">Leads</span>
                <span className="text-right">Cost / lead</span>
              </div>
              {LOCATION_REGIONS.map((r) => (
                <div key={r.region} className={`grid grid-cols-4 gap-2 px-4 py-2.5 tabular-nums ${isV2 ? 'text-slate-300' : 'text-slate-700'}`}>
                  <span className={`font-medium ${isV2 ? 'text-white' : 'text-slate-900'}`}>{r.region}</span>
                  <span className="text-right">{r.locations}</span>
                  <span className="text-right">{r.leads}</span>
                  <span className="text-right">{r.cpl}</span>
                </div>
              ))}
              <div className={`grid grid-cols-4 gap-2 px-4 py-2.5 border-t font-semibold tabular-nums ${isV2 ? 'border-white/10 text-white' : 'border-slate-200 text-slate-900'}`}>
                <span>Brand total</span>
                <span className="text-right">1,248</span>
                <span className="text-right">18,115</span>
                <span className="text-right">$20</span>
              </div>
            </div>

          </div>

        </div>

        {/* Centered CTA Button */}
        <div className="text-center">
          <button
            onClick={onOpenContactModal}
            className="px-10 py-4 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-base active:scale-[0.98] transition-all duration-300 cursor-pointer inline-flex items-center gap-2"
          >
            <span>Get a Demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
