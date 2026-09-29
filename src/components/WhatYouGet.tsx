import React from 'react';
import { FileText, Target, Layers, ListOrdered, HelpCircle, Share2, Check } from 'lucide-react';
import { TermTooltip } from './TermTooltip';
import { useTheme } from '../context/ThemeContext';

export const WhatYouGet: React.FC = () => {
  const { isDuskMode } = useTheme();
  const isV2 = isDuskMode;

  return (
    <section id="what-you-get" className={`relative py-14 sm:py-16 lg:py-[100px] overflow-hidden transition-colors duration-500 ${isV2 ? 'bg-[#070814] text-white' : 'bg-slate-50/50 text-slate-900'}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${isV2 ? 'text-white' : 'text-slate-900'}`}>
            What you get
          </h2>

          <h3 className={`text-xl sm:text-2xl font-bold ${isV2 ? 'text-purple-300' : 'text-purple-700'}`}>
            Reporting, optimization, and a goal - handled.
          </h3>

          <p className={`text-base sm:text-lg leading-relaxed max-w-2xl mx-auto ${isV2 ? 'text-slate-300' : 'text-slate-600'}`}>
            Three things marketing expertise normally does for you. Syncall's AI does all three, in plain language, without you having to interpret anything yourself.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          
          {/* Feature 1 */}
          <div className={`p-7 rounded-2xl border flex flex-col justify-between transition-all duration-300 ${
            isV2 
              ? 'bg-[#0e1126] border-white/10 text-white' 
              : 'bg-white border-purple-100'
          }`}>
            <div className="space-y-4">
              <FileText className={`w-6 h-6 ${isV2 ? 'text-purple-300' : 'text-purple-600'}`} />
              <h4 className={`text-lg font-bold ${isV2 ? 'text-white' : 'text-slate-900'}`}>
                Reports that explain themselves
              </h4>
              <p className={`text-sm leading-relaxed ${isV2 ? 'text-slate-300' : 'text-slate-600'}`}>
                No dashboards full of unlabelled charts. Every report comes with a plain-language summary of what happened and why it matters.
              </p>
            </div>
            
            <div className={`mt-6 pt-4 border-t text-xs font-semibold ${
              isV2 ? 'border-white/10 text-purple-300' : 'border-purple-100 text-purple-700'
            }`}>
              <span>Written for founders, not analysts</span>
            </div>
          </div>

          {/* Feature 2 */}
          <div className={`p-7 rounded-2xl border flex flex-col justify-between transition-all duration-300 ${
            isV2 
              ? 'bg-[#0e1126] border-white/10 text-white' 
              : 'bg-white border-purple-100'
          }`}>
            <div className="space-y-4">
              <Target className={`w-6 h-6 ${isV2 ? 'text-purple-300' : 'text-purple-600'}`} />
              <h4 className={`text-lg font-bold ${isV2 ? 'text-white' : 'text-slate-900'}`}>
                One goal, tracked automatically
              </h4>
              <p className={`text-sm leading-relaxed ${isV2 ? 'text-slate-300' : 'text-slate-600'}`}>
                Tell Syncall what success looks like - more customers, more bookings, a lower cost per sale - in your own words, and it tracks progress toward it.
              </p>
            </div>

            <div className={`mt-6 pt-4 border-t text-xs font-semibold ${
              isV2 ? 'border-white/10 text-purple-300' : 'border-purple-100 text-purple-700'
            }`}>
              <span>Translates plain words into key targets</span>
            </div>
          </div>

          {/* Feature 3 */}
          <div className={`p-7 rounded-2xl border flex flex-col justify-between transition-all duration-300 ${
            isV2 
              ? 'bg-[#0e1126] border-white/10 text-white' 
              : 'bg-white border-purple-100'
          }`}>
            <div className="space-y-4">
              <Layers className={`w-6 h-6 ${isV2 ? 'text-purple-300' : 'text-purple-600'}`} />
              <h4 className={`text-lg font-bold ${isV2 ? 'text-white' : 'text-slate-900'}`}>
                All your accounts, one place
              </h4>
              <p className={`text-sm leading-relaxed ${isV2 ? 'text-slate-300' : 'text-slate-600'}`}>
                Connect your ad accounts, website analytics, and store or CRM in a few clicks - no technical setup, no separate logins to check every morning.
              </p>
            </div>

            <div className={`mt-6 pt-4 border-t text-xs font-semibold ${
              isV2 ? 'border-white/10 text-purple-300' : 'border-purple-100 text-purple-700'
            }`}>
              <span>Meta + Google + TikTok + Shopify unified</span>
            </div>
          </div>

          {/* Feature 4 */}
          <div className={`p-7 rounded-2xl border flex flex-col justify-between transition-all duration-300 ${
            isV2 
              ? 'bg-[#0e1126] border-white/10 text-white' 
              : 'bg-white border-purple-100'
          }`}>
            <div className="space-y-4">
              <ListOrdered className={`w-6 h-6 ${isV2 ? 'text-purple-300' : 'text-purple-600'}`} />
              <h4 className={`text-lg font-bold ${isV2 ? 'text-white' : 'text-slate-900'}`}>
                A prioritized to-do list, not a wall of data
              </h4>
              <p className={`text-sm leading-relaxed ${isV2 ? 'text-slate-300' : 'text-slate-600'}`}>
                Instead of hundreds of numbers, you get a short, ranked list of the two or three changes that will move your goal the most this week.
              </p>
            </div>

            <div className={`mt-6 pt-4 border-t text-xs ${
              isV2 ? 'border-white/10 text-slate-400' : 'border-purple-100 text-slate-600'
            }`}>
              <span className={`font-semibold ${isV2 ? 'text-purple-300' : 'text-purple-700'}`}>Ranked by impact on your goal</span>
            </div>
          </div>

          {/* Feature 5 - Interactive Jargon Glossary Tooltip */}
          <div className={`p-7 rounded-2xl border flex flex-col justify-between transition-all duration-300 ${
            isV2 
              ? 'bg-[#0e1126] border-white/10 text-white' 
              : 'bg-white border-purple-100'
          }`}>
            <div className="space-y-4">
              <HelpCircle className={`w-6 h-6 ${isV2 ? 'text-purple-300' : 'text-purple-600'}`} />
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

            <div className={`mt-6 pt-4 border-t text-xs font-semibold ${
              isV2 ? 'border-white/10 text-purple-300' : 'border-purple-100 text-purple-700'
            }`}>
              <span>Assumes zero prior marketing background</span>
            </div>
          </div>

          {/* Feature 6 */}
          <div className={`p-7 rounded-2xl border flex flex-col justify-between transition-all duration-300 ${
            isV2 
              ? 'bg-[#0e1126] border-white/10 text-white' 
              : 'bg-white border-purple-100'
          }`}>
            <div className="space-y-4">
              <Share2 className={`w-6 h-6 ${isV2 ? 'text-purple-300' : 'text-purple-600'}`} />
              <h4 className={`text-lg font-bold ${isV2 ? 'text-white' : 'text-slate-900'}`}>
                Reports you can actually share
              </h4>
              <p className={`text-sm leading-relaxed ${isV2 ? 'text-slate-300' : 'text-slate-600'}`}>
                Send a clean, plain-language summary to a business partner, investor, or co-founder without translating it yourself first.
              </p>
            </div>

            <div className={`mt-6 pt-4 border-t text-xs ${
              isV2 ? 'border-white/10 text-slate-400' : 'border-purple-100 text-slate-600'
            }`}>
              <span className={`${isV2 ? 'text-purple-300' : 'text-purple-700'} font-semibold`}>Share as PDF or link</span>
            </div>
          </div>

        </div>

        {/* Feature 7: Spotlight card */}
        <div className={`p-8 sm:p-10 rounded-2xl border text-white relative overflow-hidden transition-all duration-300 ${
          isV2 
            ? 'border-white/10 bg-[#120b29]' 
            : 'border-purple-900 bg-purple-900'
        }`}>
          

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left description */}
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Campaign optimization
              </h4>

              <p className="text-sm sm:text-base text-purple-100 leading-relaxed font-normal">
                This is the part that replaces needing an expert. Set a goal, and Syncall's trained AI continuously compares your actual performance against it across every connected channel - then tells you, in plain terms, exactly what to change: which ad to pause, where to move budget, which audience to try next. You make the call. The AI does the analysis a marketer would normally charge you for.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white/[0.07] flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-purple-200 shrink-0" />
                  <span className="text-xs font-semibold text-white">Which ad to pause</span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.07] flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-purple-200 shrink-0" />
                  <span className="text-xs font-semibold text-white">Where to move budget</span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.07] flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-purple-200 shrink-0" />
                  <span className="text-xs font-semibold text-white">Which audience to test</span>
                </div>
              </div>
            </div>

            {/* Right mini dashboard preview */}
            <div className={`lg:col-span-5 rounded-2xl p-5 border space-y-3 ${
              isV2 ? 'bg-[#0e1126] border-white/15 text-white' : 'bg-white border-purple-200 text-slate-900'
            }`}>
              <div className={`flex items-center justify-between pb-2 border-b ${isV2 ? 'border-white/10' : 'border-slate-100'}`}>
                <span className={`text-xs font-bold ${isV2 ? 'text-white' : 'text-slate-900'}`}>
                  Recommendations
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
                  <span className={isV2 ? 'text-purple-300' : 'text-purple-900'}>#1</span>
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
                  <span className={isV2 ? 'text-white' : 'text-slate-800'}>#2</span>
                  <span className="text-emerald-400 font-bold">+12% Conv</span>
                </div>
                <p className={`text-[11px] leading-relaxed ${isV2 ? 'text-slate-400' : 'text-slate-500'}`}>
                  Google search term "budget marketing software" is generating leads at $14 each. Increase bid cap by $0.35.
                </p>
              </div>

              <div className={`p-2 text-center text-[10px] font-medium ${isV2 ? 'text-slate-400' : 'text-slate-500'}`}>
                You make the call. Every change can be undone.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
