import React, { useState, useEffect, useMemo } from 'react';
import { Check, Loader2, ArrowRight } from 'lucide-react';
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

type AccountStatus = 'healthy' | 'fixed' | 'flagged';

const SCAN_COLS = 12;
const SCAN_TOTAL = SCAN_COLS * 10;
const SCAN_STEP_MS = 45;
const SCAN_HOLD_MS = 3200;

// Deterministic spread of outcomes so the grid looks organic but never jumps
// between renders: roughly 1 in 12 accounts gets auto-fixed, 1 in 12 flagged.
const accountStatus = (i: number): AccountStatus => {
  const h = (i * 7919 + 13) % 23;
  if (h === 0 || h === 11) return 'flagged';
  if (h === 3 || h === 17) return 'fixed';
  return 'healthy';
};

const ACCOUNT_STATUSES: AccountStatus[] = Array.from({ length: SCAN_TOTAL }, (_, i) => accountStatus(i));

const FIXED_EVENTS = [
  'Meta ad set overspending by 18%, paused',
  'Broken tracking link on Google Ads, repaired',
  'TikTok budget ran out by 2pm, rebalanced',
  'Weekly client report sent',
];

const FLAGGED_EVENTS = [
  'Shopify sales down 40% since Tuesday',
  'LinkedIn cost per lead jumped to $142',
  'Checkout pixel stopped firing',
];

const scanEventFor = (i: number) => {
  const status = ACCOUNT_STATUSES[i];
  const pool = status === 'flagged' ? FLAGGED_EVENTS : FIXED_EVENTS;
  return { status, client: `Client #${String(i + 1).padStart(3, '0')}`, text: pool[i % pool.length] };
};

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

const AccountHealthScan: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  // Number of accounts the agent has checked so far in the current sweep
  const [scanned, setScanned] = useState(() => (prefersReducedMotion() ? SCAN_TOTAL : 0));

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const timer = scanned < SCAN_TOTAL
      ? setTimeout(() => setScanned((n) => n + 1), SCAN_STEP_MS)
      : setTimeout(() => setScanned(0), SCAN_HOLD_MS);
    return () => clearTimeout(timer);
  }, [scanned]);

  const counts = useMemo(() => {
    const c = { healthy: 0, fixed: 0, flagged: 0 };
    for (let i = 0; i < scanned; i++) c[ACCOUNT_STATUSES[i]]++;
    return c;
  }, [scanned]);

  // Most recent non-healthy account the sweep has passed, shown in the ticker
  const latestEvent = useMemo(() => {
    for (let i = scanned - 1; i >= 0; i--) {
      if (ACCOUNT_STATUSES[i] !== 'healthy') return { index: i, ...scanEventFor(i) };
    }
    return null;
  }, [scanned]);

  const cellClass = (i: number) => {
    if (i >= scanned) return isDark ? 'bg-white/[0.05]' : 'bg-slate-200/70';
    const status = ACCOUNT_STATUSES[i];
    if (status === 'flagged') return 'bg-amber-400';
    if (status === 'fixed') return 'bg-purple-500';
    return isDark ? 'bg-emerald-400/35' : 'bg-emerald-500/35';
  };

  const muted = isDark ? 'text-slate-400' : 'text-slate-500';

  return (
    <div className={`rounded-xl p-4 border space-y-3 ${
      isDark ? 'bg-[#0b0d20] border-white/10' : 'bg-white border-slate-200'
    }`}>
      <div className={`flex items-baseline justify-between text-xs ${muted}`}>
        <span>Checked today</span>
        <span className="tabular-nums">
          <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{scanned}</span> / {SCAN_TOTAL}
        </span>
      </div>

      {/* One cell per client account */}
      <div className="grid gap-[3px]" style={{ gridTemplateColumns: `repeat(${SCAN_COLS}, minmax(0, 1fr))` }} aria-hidden="true">
        {ACCOUNT_STATUSES.map((_, i) => (
          <div key={i} className={`aspect-square rounded-[3px] transition-colors duration-200 ${cellClass(i)}`} />
        ))}
      </div>

      <div className={`flex items-center gap-4 text-[11px] ${muted}`}>
        <span className="flex items-center gap-1.5"><span className={`w-2 h-2 rounded-[2px] ${isDark ? 'bg-emerald-400/35' : 'bg-emerald-500/35'}`} />{counts.healthy} fine</span>
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-[2px] bg-purple-500" />{counts.fixed} fixed</span>
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-[2px] bg-amber-400" />{counts.flagged} for you</span>
      </div>

      <div className={`pt-3 border-t text-xs truncate ${isDark ? 'border-white/10 text-slate-300' : 'border-slate-200 text-slate-600'}`}>
        {latestEvent ? (
          <>
            <span className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>{latestEvent.client}</span>
            <span className={muted}> — </span>
            {latestEvent.text}
          </>
        ) : (
          <span className={muted}>Checking pacing, tracking and reports</span>
        )}
      </div>
    </div>
  );
};

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
              <h3 className={`text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug mb-3 ${isV2 ? 'text-white' : 'text-slate-900'}`}>
                100s of Accounts
              </h3>
              <p className={`text-sm leading-relaxed font-normal mb-6 ${isV2 ? 'text-slate-300' : 'text-slate-600'}`}>
                Agents run reporting, QA, and pacing on every client. Monitor hundreds daily in minutes, not days.
              </p>
            </div>

            {/* Visual: Agent health sweep across every client account */}
            <AccountHealthScan isDark={isV2} />

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
