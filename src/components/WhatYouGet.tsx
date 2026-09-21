import React from 'react';
import { 
  FileText, 
  Target, 
  Layers, 
  ListOrdered, 
  HelpCircle, 
  Share2, 
  Sparkles, 
  Zap, 
  Check, 
  TrendingUp, 
  Eye, 
  ShieldCheck 
} from 'lucide-react';
import { TermTooltip } from './TermTooltip';
import { useTheme } from '../context/ThemeContext';

export const WhatYouGet: React.FC = () => {
  const { isDuskMode } = useTheme();
  const isV2 = isDuskMode;

  return (
    <section id="what-you-get" className={`relative py-14 sm:py-16 lg:py-[100px] overflow-hidden transition-colors duration-500 ${isV2 ? 'bg-[#070814] text-white' : 'bg-slate-50/50 text-slate-900'}`}>
      {/* Ambient background glows */}
      <div className={`absolute top-1/3 left-10 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none ${isV2 ? 'bg-purple-950/40' : 'bg-purple-100/50'}`} />
      <div className={`absolute bottom-1/4 right-10 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none ${isV2 ? 'bg-indigo-950/40' : 'bg-cyan-100/50'}`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Exact Copy */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${isV2 ? 'text-white' : 'text-slate-900'}`}>
            What you get
          </h2>

          <h3 className={`text-xl sm:text-2xl font-bold text-transparent bg-clip-text ${
            isV2 
              ? 'bg-gradient-to-r from-purple-400 via-purple-300 to-indigo-300' 
              : 'bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600'
          }`}>
            Reporting, optimization, and a goal - handled.
          </h3>

          <p className={`text-base sm:text-lg leading-relaxed max-w-2xl mx-auto ${isV2 ? 'text-slate-300' : 'text-slate-600'}`}>
            Three things marketing expertise normally does for you. Syncall's AI does all three, in plain language, without you having to interpret anything yourself.
          </p>
        </div>

        {/* Feature Grid: 6 Standard Cards (Crisp White in V1, Dark Glass in V2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          
          {/* Feature 1 */}
          <div className={`p-7 rounded-3xl border flex flex-col justify-between transition-all duration-300 ${
            isV2 
              ? 'bg-[#0e1126] border-white/10 text-white shadow-[0_0_30px_rgba(0,0,0,0.5)]' 
              : 'bg-white border-purple-100 shadow-md shadow-purple-900/5'
          }`}>
            <div className="space-y-4">
              <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shadow-sm ${
                isV2 ? 'bg-purple-950/60 border-purple-500/30 text-purple-300' : 'bg-purple-50 border-purple-200 text-purple-700'
              }`}>
                <FileText className="w-6 h-6" />
              </div>
              <h4 className={`text-lg font-bold ${isV2 ? 'text-white' : 'text-slate-900'}`}>
                Reports that explain themselves
              </h4>
              <p className={`text-sm leading-relaxed ${isV2 ? 'text-slate-300' : 'text-slate-600'}`}>
                No dashboards full of unlabelled charts. Every report comes with a plain-language summary of what happened and why it matters.
              </p>
            </div>
            
            <div className={`mt-6 pt-4 border-t text-xs font-semibold flex items-center gap-2 ${
              isV2 ? 'border-white/10 text-purple-300' : 'border-purple-100 text-purple-700'
            }`}>
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Written for founders, not analysts</span>
            </div>
          </div>

          {/* Feature 2 */}
          <div className={`p-7 rounded-3xl border flex flex-col justify-between transition-all duration-300 ${
            isV2 
              ? 'bg-[#0e1126] border-white/10 text-white shadow-[0_0_30px_rgba(0,0,0,0.5)]' 
              : 'bg-white border-purple-100 shadow-md shadow-purple-900/5'
          }`}>
            <div className="space-y-4">
              <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shadow-sm ${
                isV2 ? 'bg-cyan-950/60 border-cyan-500/30 text-cyan-300' : 'bg-cyan-50 border-cyan-200 text-cyan-700'
              }`}>
                <Target className="w-6 h-6" />
              </div>
              <h4 className={`text-lg font-bold ${isV2 ? 'text-white' : 'text-slate-900'}`}>
                One goal, tracked automatically
              </h4>
              <p className={`text-sm leading-relaxed ${isV2 ? 'text-slate-300' : 'text-slate-600'}`}>
                Tell Syncall what success looks like - more customers, more bookings, a lower cost per sale - in your own words, and it tracks progress toward it.
              </p>
            </div>

            <div className={`mt-6 pt-4 border-t text-xs font-semibold flex items-center gap-2 ${
              isV2 ? 'border-white/10 text-purple-300' : 'border-purple-100 text-purple-700'
            }`}>
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Translates plain words into key targets</span>
            </div>
          </div>

          {/* Feature 3 */}
          <div className={`p-7 rounded-3xl border flex flex-col justify-between transition-all duration-300 ${
            isV2 
              ? 'bg-[#0e1126] border-white/10 text-white shadow-[0_0_30px_rgba(0,0,0,0.5)]' 
              : 'bg-white border-purple-100 shadow-md shadow-purple-900/5'
          }`}>
            <div className="space-y-4">
              <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shadow-sm ${
                isV2 ? 'bg-indigo-950/60 border-indigo-500/30 text-indigo-300' : 'bg-indigo-50 border-indigo-200 text-indigo-700'
              }`}>
                <Layers className="w-6 h-6" />
              </div>
              <h4 className={`text-lg font-bold ${isV2 ? 'text-white' : 'text-slate-900'}`}>
                All your accounts, one place
              </h4>
              <p className={`text-sm leading-relaxed ${isV2 ? 'text-slate-300' : 'text-slate-600'}`}>
                Connect your ad accounts, website analytics, and store or CRM in a few clicks - no technical setup, no separate logins to check every morning.
              </p>
            </div>

            <div className={`mt-6 pt-4 border-t text-xs font-semibold flex items-center gap-2 ${
              isV2 ? 'border-white/10 text-purple-300' : 'border-purple-100 text-purple-700'
            }`}>
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              <span>Meta + Google + TikTok + Shopify unified</span>
            </div>
          </div>

          {/* Feature 4 */}
          <div className={`p-7 rounded-3xl border flex flex-col justify-between transition-all duration-300 ${
            isV2 
              ? 'bg-[#0e1126] border-white/10 text-white shadow-[0_0_30px_rgba(0,0,0,0.5)]' 
              : 'bg-white border-purple-100 shadow-md shadow-purple-900/5'
          }`}>
            <div className="space-y-4">
              <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shadow-sm ${
                isV2 ? 'bg-amber-950/60 border-amber-500/30 text-amber-300' : 'bg-amber-50 border-amber-200 text-amber-700'
              }`}>
                <ListOrdered className="w-6 h-6" />
              </div>
              <h4 className={`text-lg font-bold ${isV2 ? 'text-white' : 'text-slate-900'}`}>
                A prioritized to-do list, not a wall of data
              </h4>
              <p className={`text-sm leading-relaxed ${isV2 ? 'text-slate-300' : 'text-slate-600'}`}>
                Instead of hundreds of numbers, you get a short, ranked list of the two or three changes that will move your goal the most this week.
              </p>
            </div>

            <div className={`mt-6 pt-4 border-t text-xs flex items-center justify-between ${
              isV2 ? 'border-white/10 text-slate-400' : 'border-purple-100 text-slate-600'
            }`}>
              <span className={`font-semibold ${isV2 ? 'text-purple-300' : 'text-purple-700'}`}>Prioritized: #1, #2, #3</span>
              <span className="text-emerald-400 font-bold">Zero overwhelm</span>
            </div>
          </div>

          {/* Feature 5 - Interactive Jargon Glossary Tooltip */}
          <div className={`p-7 rounded-3xl border-2 flex flex-col justify-between transition-all duration-300 ${
            isV2 
              ? 'bg-[#0e1126] border-purple-500/30 text-white shadow-[0_0_30px_rgba(0,0,0,0.5)]' 
              : 'bg-white border-purple-200 shadow-md shadow-purple-900/5'
          }`}>
            <div className="space-y-4">
              <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shadow-sm ${
                isV2 ? 'bg-purple-950/60 border-purple-500/30 text-purple-300' : 'bg-purple-100 border-purple-200 text-purple-700'
              }`}>
                <HelpCircle className="w-6 h-6" />
              </div>
              <h4 className={`text-lg font-bold ${isV2 ? 'text-white' : 'text-slate-900'}`}>
                Built-in explanations, not jargon
              </h4>
              <p className={`text-sm leading-relaxed ${isV2 ? 'text-slate-300' : 'text-slate-600'}`}>
                Hover any term you don't recognize and get a plain-English definition - the AI assumes nothing about what you already know.
              </p>

              {/* Interactive Demo pills right in the card */}
              <div className={`p-3.5 rounded-xl border space-y-1.5 ${
                isV2 ? 'bg-[#141838] border-white/10' : 'bg-purple-50/80 border-purple-200/80'
              }`}>
                <span className={`text-[11px] block font-medium ${isV2 ? 'text-slate-400' : 'text-slate-600'}`}>Try hovering these terms:</span>
                <div className="flex flex-wrap gap-2 text-xs">
                  <TermTooltip term="ROAS">ROAS</TermTooltip>
                  <span className={isV2 ? 'text-slate-500' : 'text-slate-400'}>·</span>
                  <TermTooltip term="CPA">CPA</TermTooltip>
                  <span className={isV2 ? 'text-slate-500' : 'text-slate-400'}>·</span>
                  <TermTooltip term="CTR">CTR</TermTooltip>
                  <span className={isV2 ? 'text-slate-500' : 'text-slate-400'}>·</span>
                  <TermTooltip term="Attribution">Attribution</TermTooltip>
                </div>
              </div>
            </div>

            <div className={`mt-6 pt-4 border-t text-xs font-semibold flex items-center gap-2 ${
              isV2 ? 'border-white/10 text-purple-300' : 'border-purple-100 text-purple-700'
            }`}>
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Assumes zero prior marketing background</span>
            </div>
          </div>

          {/* Feature 6 */}
          <div className={`p-7 rounded-3xl border flex flex-col justify-between transition-all duration-300 ${
            isV2 
              ? 'bg-[#0e1126] border-white/10 text-white shadow-[0_0_30px_rgba(0,0,0,0.5)]' 
              : 'bg-white border-purple-100 shadow-md shadow-purple-900/5'
          }`}>
            <div className="space-y-4">
              <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shadow-sm ${
                isV2 ? 'bg-emerald-950/60 border-emerald-500/30 text-emerald-300' : 'bg-emerald-50 border-emerald-200 text-emerald-700'
              }`}>
                <Share2 className="w-6 h-6" />
              </div>
              <h4 className={`text-lg font-bold ${isV2 ? 'text-white' : 'text-slate-900'}`}>
                Reports you can actually share
              </h4>
              <p className={`text-sm leading-relaxed ${isV2 ? 'text-slate-300' : 'text-slate-600'}`}>
                Send a clean, plain-language summary to a business partner, investor, or co-founder without translating it yourself first.
              </p>
            </div>

            <div className={`mt-6 pt-4 border-t text-xs flex items-center justify-between ${
              isV2 ? 'border-white/10 text-slate-400' : 'border-purple-100 text-slate-600'
            }`}>
              <span className={`${isV2 ? 'text-purple-300' : 'text-purple-700'} font-semibold`}>1-click PDF & Link share</span>
              <span className="text-emerald-400 font-bold">Ready to send</span>
            </div>
          </div>

        </div>

        {/* Feature 7: Core Feature Spotlight Card (AI-powered campaign optimization) */}
        <div className={`p-8 sm:p-10 rounded-3xl border-2 text-white relative overflow-hidden transition-all duration-300 ${
          isV2 
            ? 'border-purple-500/30 bg-[#120b29] shadow-[0_0_50px_rgba(168,85,247,0.2)]' 
            : 'border-purple-400/60 bg-purple-900 shadow-xl shadow-purple-900/15'
        }`}>
          
          {/* Ambient light glow inside card */}
          <div className="absolute -top-10 -right-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left description */}
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight flex flex-wrap items-center gap-2.5">
                <span>AI-powered campaign optimization</span>
                <span className="text-xs font-semibold text-cyan-300 bg-white/10 px-2.5 py-1 rounded-full border border-white/20">
                  (Core to Syncall)
                </span>
              </h4>

              <p className="text-sm sm:text-base text-purple-100 leading-relaxed font-normal">
                This is the part that replaces needing an expert. Set a goal, and Syncall's trained AI continuously compares your actual performance against it across every connected channel - then tells you, in plain terms, exactly what to change: which ad to pause, where to move budget, which audience to try next. You make the call. The AI does the analysis a marketer would normally charge you for.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white/10 border border-white/15 flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-300 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-semibold text-white">Which ad to pause</span>
                </div>

                <div className="p-3 rounded-xl bg-white/10 border border-white/15 flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-300 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-semibold text-white">Where to move budget</span>
                </div>

                <div className="p-3 rounded-xl bg-white/10 border border-white/15 flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-200 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-semibold text-white">Which audience to test</span>
                </div>
              </div>
            </div>

            {/* Right mini dashboard preview */}
            <div className={`lg:col-span-5 rounded-2xl p-5 border shadow-2xl space-y-3 ${
              isV2 ? 'bg-[#0e1126] border-white/15 text-white' : 'bg-white border-purple-200 text-slate-900'
            }`}>
              <div className={`flex items-center justify-between pb-2 border-b ${isV2 ? 'border-white/10' : 'border-slate-100'}`}>
                <span className={`text-xs font-bold flex items-center gap-1.5 ${isV2 ? 'text-white' : 'text-slate-900'}`}>
                  <Sparkles className={`w-3.5 h-3.5 ${isV2 ? 'text-purple-400' : 'text-purple-600'}`} />
                  Live Campaign Optimization
                </span>
                <span className={`text-[10px] px-2 py-0.5 rounded font-bold border ${
                  isV2 ? 'bg-purple-950/60 text-purple-200 border-purple-500/30' : 'bg-purple-50 text-purple-700 border-purple-200'
                }`}>Goal: $25 CPA</span>
              </div>

              {/* Action item 1 */}
              <div className={`p-3 rounded-xl border text-xs space-y-1 ${
                isV2 ? 'bg-[#181d45] border-white/10' : 'bg-purple-50/70 border-purple-200/80'
              }`}>
                <div className="flex items-center justify-between text-[11px] font-bold">
                  <span className={isV2 ? 'text-purple-300' : 'text-purple-900'}>Recommendation #1 (High Impact)</span>
                  <span className="text-emerald-400 font-bold">+$840 ROI</span>
                </div>
                <p className={`text-[11px] leading-relaxed ${isV2 ? 'text-slate-300' : 'text-slate-600'}`}>
                  Pause "Broad Audience V3" on Meta (spent $240 with 0 sales). Shift budget to "Retargeting Cart Abandoners".
                </p>
              </div>

              {/* Action item 2 */}
              <div className={`p-3 rounded-xl border text-xs space-y-1 ${
                isV2 ? 'bg-[#131738] border-white/10' : 'bg-slate-50 border border-slate-200'
              }`}>
                <div className="flex items-center justify-between text-[11px] font-bold">
                  <span className={isV2 ? 'text-white' : 'text-slate-800'}>Recommendation #2</span>
                  <span className="text-cyan-400 font-bold">+12% Conv</span>
                </div>
                <p className={`text-[11px] leading-relaxed ${isV2 ? 'text-slate-400' : 'text-slate-500'}`}>
                  Google search term "budget marketing software" is generating leads at $14 each. Increase bid cap by $0.35.
                </p>
              </div>

              <div className={`p-2 text-center text-[10px] font-medium ${isV2 ? 'text-slate-400' : 'text-slate-500'}`}>
                You make the call · 1 click to apply · Instant rollback available
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
