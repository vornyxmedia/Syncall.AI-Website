import React, { useState } from 'react';
import { 
  TrendingUp, 
  ArrowUpRight, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Sliders, 
  CheckSquare, 
  Square,
  Layers,
  ChevronDown
} from 'lucide-react';
import { TermTooltip } from './TermTooltip';
import { useTheme } from '../context/ThemeContext';

export const InteractiveDashboardDemo: React.FC = () => {
  const { isDuskMode } = useTheme();
  const isV2 = isDuskMode;
  // The dashboard mockup is inverted against the page: light in dark mode, dark in light mode
  const shellDark = !isV2;
  const [activeAccount, setActiveAccount] = useState('E-Commerce Store (Shopify + Ads)');
  const [timeRange, setTimeRange] = useState('7d');
  const [completedTasks, setCompletedTasks] = useState<number[]>([]);

  const toggleTask = (index: number) => {
    if (completedTasks.includes(index)) {
      setCompletedTasks(completedTasks.filter((i) => i !== index));
    } else {
      setCompletedTasks([...completedTasks, index]);
    }
  };

  const tasks = [
    {
      title: 'Pause 2 fatigued Meta creatives in Campaign "Summer Scale"',
      impact: 'Saves ~$380/wk in wasted spend',
      priority: 'Ranked #1',
      badge: 'High Impact',
    },
    {
      title: 'Shift $450 from low-intent Google search keywords to TikTok video #04',
      impact: 'Estimated +22 additional purchases',
      priority: 'Ranked #2',
      badge: 'ROAS Lift',
    },
    {
      title: 'Enable retargeting email sync between Shopify and Meta Custom Audience',
      impact: 'Recovers estimated 14 abandoned carts',
      priority: 'Ranked #3',
      badge: 'Setup',
    },
  ];

  return (
    <section id="live-demo" className={`relative py-14 sm:py-16 lg:py-[100px] border-t border-b overflow-hidden transition-colors duration-500 ${isV2 ? 'bg-[#070814] border-white/10 text-white' : 'bg-white border-purple-100/80 text-slate-900'}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${isV2 ? 'text-white' : 'text-slate-900'}`}>
            See how your dashboard <span className={isV2 ? 'text-purple-300' : 'text-purple-600'}>actually looks</span>
          </h2>
          <p className={`text-base max-w-xl mx-auto ${isV2 ? 'text-slate-300' : 'text-slate-600'}`}>
            No walls of confusing graphs. Just clear summaries, current goal tracking, and your next 3 moves.
          </p>
        </div>

        {/* Dashboard Shell Container */}
        <div className={`rounded-2xl border overflow-hidden transition-all ${shellDark ? 'bg-[#090b1c] border-white/10 text-white' : 'bg-white border-slate-200 text-slate-900'}`}>
          
          {/* Top Bar / Header of Mockup */}
          <div className={`flex flex-wrap items-center justify-between gap-4 p-4 sm:p-5 border-b ${shellDark ? 'bg-[#0e1126] border-white/10' : 'bg-slate-50/90 border-purple-100'}`}>
            
            {/* Account Switcher */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-purple-600 flex items-center justify-center font-bold text-white text-xs shadow-sm">
                S
              </div>
              <div>
                <span className={`text-[10px] block ${shellDark ? 'text-slate-400' : 'text-slate-500'}`}>Active Workspace</span>
                <div className={`flex items-center gap-1.5 text-xs sm:text-sm font-bold ${shellDark ? 'text-white' : 'text-slate-900'}`}>
                  <span>{activeAccount}</span>
                  <ChevronDown className={`w-3.5 h-3.5 ${shellDark ? 'text-slate-400' : 'text-slate-500'}`} />
                </div>
              </div>
            </div>

            {/* Current Active Goal Banner */}
            <div className={`hidden md:flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs ${
              shellDark 
                ? 'bg-purple-950/40 border-purple-500/30 text-purple-200' 
                : 'bg-purple-50 border-purple-200 text-purple-900'
            }`}>
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="font-semibold">Goal:</span>
              <span className={shellDark ? 'text-slate-300' : 'text-slate-700'}>Scale store sales under $24 CPA</span>
              <span className={`text-[10px] font-bold ml-1 ${shellDark ? 'text-emerald-400' : 'text-emerald-700'}`}>(On Track · 91%)</span>
            </div>

            {/* Timeframe selector */}
            <div className={`flex items-center gap-1 p-1 rounded-xl border text-xs shadow-sm ${
              shellDark ? 'bg-[#0e1126] border-white/10' : 'bg-white border-purple-200'
            }`}>
              {['7d', '30d', '90d'].map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-3 py-1 rounded-lg font-medium transition-colors ${
                    timeRange === range
                      ? 'bg-purple-600 text-white shadow-sm'
                      : shellDark
                        ? 'text-slate-400 hover:text-white hover:bg-white/5'
                        : 'text-slate-600 hover:text-purple-700 hover:bg-purple-50'
                  }`}
                >
                  {range === '7d' ? 'Last 7 days' : range === '30d' ? 'Last 30 days' : 'Last quarter'}
                </button>
              ))}
            </div>

          </div>

          {/* Main Dashboard Body */}
          <div className={`p-5 sm:p-8 space-y-6 transition-colors ${shellDark ? 'bg-[#090b1c]' : 'bg-white'}`}>
            
            {/* Plain English Summary Box */}
            <div className={`p-5 rounded-2xl border space-y-2 shadow-sm ${
              shellDark 
                ? 'bg-purple-950/20 border-purple-500/30 text-slate-200' 
                : 'bg-purple-50/90 border-purple-200 text-slate-900'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-bold uppercase tracking-wider ${shellDark ? 'text-purple-300' : 'text-purple-900'}`}>
                    PLAIN-LANGUAGE BRIEFING · UPDATED 12 MIN AGO
                  </span>
                </div>
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded border ${
                  shellDark 
                    ? 'text-emerald-400 bg-emerald-950/40 border-emerald-500/30' 
                    : 'text-emerald-700 bg-emerald-50 border-emerald-200'
                }`}>+18.4% Revenue Growth</span>
              </div>
              <p className={`text-xs sm:text-sm leading-relaxed font-normal ${shellDark ? 'text-slate-300' : 'text-slate-700'}`}>
                “Your ads generated <strong className={shellDark ? 'text-white font-semibold' : 'text-slate-900'}>142 new customers</strong> this week at an average of <strong className={shellDark ? 'text-emerald-400 font-semibold' : 'text-emerald-700'}>$19.40 each</strong>, well below your target of $24. Google Search is driving high-intent conversions, while TikTok is bringing cheap discovery. Two specific ads on Meta are slowing you down - fixing them today will save you approximately $380 this week.”
              </p>
            </div>

            {/* Key Metrics Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              
              <div className={`p-4 rounded-2xl border shadow-sm ${
                shellDark ? 'bg-[#0e1126] border-white/10 text-white' : 'bg-white border-purple-100'
              }`}>
                <div className={`text-[11px] flex items-center justify-between ${shellDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  <span>Ad Spend</span>
                  <span className={`text-[10px] ${shellDark ? 'text-slate-500' : 'text-slate-400'}`}>All channels</span>
                </div>
                <div className={`text-xl sm:text-2xl font-bold mt-1 ${shellDark ? 'text-white' : 'text-slate-900'}`}>
                  $3,840.00
                </div>
                <div className={`text-[11px] mt-1 flex items-center gap-1 ${shellDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  <span>Paced to $15k budget</span>
                </div>
              </div>

              <div className={`p-4 rounded-2xl border shadow-sm ${
                shellDark ? 'bg-[#0e1126] border-white/10 text-white' : 'bg-white border-purple-100'
              }`}>
                <div className={`text-[11px] flex items-center justify-between ${shellDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  <span>Cost Per Customer (<TermTooltip term="CPA">CPA</TermTooltip>)</span>
                  <span className={`font-bold ${shellDark ? 'text-emerald-400' : 'text-emerald-600'}`}>-14%</span>
                </div>
                <div className={`text-xl sm:text-2xl font-bold mt-1 ${shellDark ? 'text-emerald-400' : 'text-emerald-600'}`}>
                  $19.40
                </div>
                <div className={`text-[11px] mt-1 ${shellDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Target is <span className={`font-medium ${shellDark ? 'text-slate-200' : 'text-slate-700'}`}>$24.00</span> (Beat by $4.60)
                </div>
              </div>

              <div className={`p-4 rounded-2xl border shadow-sm ${
                shellDark ? 'bg-[#0e1126] border-white/10 text-white' : 'bg-white border-purple-100'
              }`}>
                <div className={`text-[11px] flex items-center justify-between ${shellDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  <span>Return on Spend (<TermTooltip term="ROAS">ROAS</TermTooltip>)</span>
                  <span className={`${shellDark ? 'text-purple-400' : 'text-purple-600'} font-bold`}>+28%</span>
                </div>
                <div className={`text-xl sm:text-2xl font-bold mt-1 ${shellDark ? 'text-purple-300' : 'text-purple-700'}`}>
                  3.42x
                </div>
                <div className={`text-[11px] mt-1 ${shellDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Every $1 spent = $3.42 returned
                </div>
              </div>

              <div className={`p-4 rounded-2xl border shadow-sm ${
                shellDark ? 'bg-[#0e1126] border-white/10 text-white' : 'bg-white border-purple-100'
              }`}>
                <div className={`text-[11px] flex items-center justify-between ${shellDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  <span>Tracked Revenue</span>
                  <span className={`${shellDark ? 'text-purple-300' : 'text-purple-700'} font-semibold text-[10px]`}>Shopify</span>
                </div>
                <div className={`text-xl sm:text-2xl font-bold mt-1 ${shellDark ? 'text-white' : 'text-slate-900'}`}>
                  $13,132.80
                </div>
                <div className={`text-[11px] mt-1 ${shellDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  142 verified orders
                </div>
              </div>

            </div>

            {/* Split Grid: Interactive Chart & Prioritized To-Do List */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column: Visual Channel Attribution Trend */}
              <div className={`lg:col-span-7 p-5 rounded-2xl border space-y-4 ${
                shellDark ? 'bg-[#0e1126] border-white/10' : 'bg-slate-50/70 border-purple-100'
              }`}>
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-bold ${shellDark ? 'text-white' : 'text-slate-900'}`}>Daily Return & Spend Trend</span>
                  <div className="flex items-center gap-3 text-[10px]">
                    <span className={`flex items-center gap-1 font-semibold ${shellDark ? 'text-purple-300' : 'text-purple-700'}`}>
                      <span className="w-2 h-2 rounded-full bg-purple-500" /> Revenue
                    </span>
                    <span className={`flex items-center gap-1 font-semibold ${shellDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      <span className={`w-2 h-2 rounded-full ${shellDark ? 'bg-slate-600' : 'bg-slate-400'}`} /> Ad Spend
                    </span>
                  </div>
                </div>

                {/* Visual Chart Bars */}
                <div className={`h-44 flex items-end justify-between gap-2 pt-4 px-2 border-b ${shellDark ? 'border-white/10' : 'border-slate-200'}`}>
                  {[
                    { day: 'Mon', spend: 40, rev: 82, roas: '3.1x' },
                    { day: 'Tue', spend: 45, rev: 95, roas: '3.3x' },
                    { day: 'Wed', spend: 55, rev: 110, roas: '3.0x' },
                    { day: 'Thu', spend: 42, rev: 130, roas: '4.2x' },
                    { day: 'Fri', spend: 65, rev: 155, roas: '3.6x' },
                    { day: 'Sat', spend: 75, rev: 180, roas: '3.8x' },
                    { day: 'Sun', spend: 60, rev: 145, roas: '3.5x' },
                  ].map((bar, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group cursor-pointer relative">
                      {/* Tooltip on hover with smooth fade & translate */}
                      <div className="absolute bottom-full mb-2 z-30 p-2 rounded-xl bg-slate-900/95 text-white text-[10px] whitespace-nowrap shadow-xl opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
                        <div>{bar.day}: ${bar.rev * 14} Rev</div>
                        <div className="text-slate-300">${bar.spend * 8} Spend</div>
                        <div className="text-emerald-400 font-bold">{bar.roas} ROAS</div>
                      </div>

                      <div className="w-full flex items-end justify-center gap-1 h-full">
                        {/* Spend bar */}
                        <div 
                          className={`w-2.5 rounded-t transition-all duration-300 ease-out ${
                            shellDark ? 'bg-slate-700 group-hover:bg-slate-600' : 'bg-slate-300 group-hover:bg-slate-400'
                          }`}
                          style={{ height: `${bar.spend}%` }}
                        />
                        {/* Revenue bar */}
                        <div 
                          className={`w-2.5 rounded-t transition-all duration-300 ease-out shadow-sm ${
                            shellDark ? 'bg-purple-500 group-hover:bg-purple-400' : 'bg-purple-600 group-hover:bg-purple-700'
                          }`}
                          style={{ height: `${bar.rev * 0.55}%` }}
                        />
                      </div>
                      <span className={`text-[10px] font-medium transition-colors duration-200 ${
                        shellDark ? 'text-slate-400 group-hover:text-purple-300' : 'text-slate-500 group-hover:text-purple-700'
                      }`}>{bar.day}</span>
                    </div>
                  ))}
                </div>

                <div className={`flex items-center justify-between text-[11px] ${shellDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  <span>Channel breakdown: Meta (54%) · Google (32%) · TikTok (14%)</span>
                  <span className={`${shellDark ? 'text-purple-300' : 'text-purple-700'} font-semibold`}>All accounts synced</span>
                </div>
              </div>

              {/* Right Column: The Prioritized To-Do List */}
              <div className={`lg:col-span-5 p-5 rounded-2xl border space-y-4 flex flex-col justify-between ${
                shellDark ? 'bg-[#0e1126] border-white/10' : 'bg-slate-50/70 border-purple-100'
              }`}>
                <div>
                  <div className={`flex items-center justify-between pb-2 border-b ${shellDark ? 'border-white/10' : 'border-purple-100'}`}>
                    <span className={`text-xs font-bold flex items-center gap-1.5 ${shellDark ? 'text-white' : 'text-slate-900'}`}>
                      <CheckCircle2 className={`w-3.5 h-3.5 ${shellDark ? 'text-purple-400' : 'text-purple-600'}`} />
                      Prioritized To-Do List
                    </span>
                    <span className={`text-[10px] font-medium ${shellDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      {completedTasks.length}/3 Handled
                    </span>
                  </div>
                  <p className={`text-[11px] mt-1 mb-3 ${shellDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Instead of hundreds of numbers, act on the 3 changes that move your goal the most:
                  </p>

                  <div className="space-y-2.5">
                    {tasks.map((task, idx) => {
                      const isDone = completedTasks.includes(idx);
                      return (
                        <div
                          key={idx}
                          onClick={() => toggleTask(idx)}
                          className={`p-3 rounded-2xl border transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer text-left ${
                            isDone
                              ? shellDark
                                ? 'bg-emerald-950/40 border-emerald-500/40 shadow-xs'
                                : 'bg-emerald-50/80 border-emerald-300/90 shadow-xs'
                              : shellDark
                                ? 'bg-[#131738] border-white/10 hover:border-purple-500/40 hover:bg-[#181d45]'
                                : 'bg-white border-purple-100 hover:border-purple-300 hover:bg-slate-50/60'
                          }`}
                        >
                          <div className="flex items-start gap-2.5">
                            <button className={`mt-0.5 shrink-0 transition-transform duration-200 active:scale-90 ${shellDark ? 'text-purple-400' : 'text-purple-600'}`}>
                              {isDone ? (
                                <CheckSquare className="w-4 h-4 text-emerald-400 transition-colors duration-200" />
                              ) : (
                                <Square className={`w-4 h-4 transition-colors duration-200 ${shellDark ? 'text-slate-500 hover:text-purple-300' : 'text-slate-400 hover:text-purple-600'}`} />
                              )}
                            </button>
                            <div className="space-y-0.5 flex-1">
                              <div className="flex items-center justify-between">
                                <span className={`text-[10px] font-bold ${shellDark ? 'text-purple-300' : 'text-purple-700'}`}>
                                  {task.priority}
                                </span>
                                <span className={`text-[9px] px-1.5 py-0.5 rounded font-semibold border ${
                                  shellDark 
                                    ? 'bg-purple-950/60 text-purple-200 border-purple-500/30' 
                                    : 'bg-purple-50 text-purple-700 border-purple-200'
                                }`}>
                                  {task.badge}
                                </span>
                              </div>
                              <p className={`text-xs font-semibold transition-colors duration-300 ${
                                isDone 
                                  ? shellDark ? 'line-through text-slate-500' : 'line-through text-slate-400' 
                                  : shellDark ? 'text-white' : 'text-slate-900'
                              }`}>
                                {task.title}
                              </p>
                              <p className={`text-[11px] font-medium ${shellDark ? 'text-emerald-400' : 'text-emerald-700'}`}>
                                {task.impact}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <span className={`text-[10px] italic font-medium ${shellDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Click any task to mark as applied in your connected accounts
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
