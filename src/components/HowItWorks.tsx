import React, { useState } from 'react';
import { Target, TrendingDown, TrendingUp, ShieldCheck, Check, Sparkles, ArrowRight, Layers, Cpu, Zap, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HowItWorksProps {
  onOpenGoalModal?: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenGoalModal }) => {
  const { isDuskMode } = useTheme();
  const isV2 = isDuskMode;
  const [selectedGoal, setSelectedGoal] = useState<'cpa' | 'revenue' | 'waste'>('cpa');
  const [appliedActions, setAppliedActions] = useState<number[]>([0, 1]);

  const toggleAction = (idx: number) => {
    if (appliedActions.includes(idx)) {
      setAppliedActions(appliedActions.filter((i) => i !== idx));
    } else {
      setAppliedActions([...appliedActions, idx]);
    }
  };

  return (
    <section id="how-it-works" className={`relative py-14 sm:py-16 lg:py-[100px] overflow-hidden transition-colors duration-500 ${isV2 ? 'bg-[#070814] text-white' : 'bg-white text-slate-900'}`}>
      
      {/* Ambient background glow */}
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-[160px] pointer-events-none ${isV2 ? 'bg-purple-900/20' : 'bg-purple-100/40'}`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading (Matching Reference: media_1789753001583.png) */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${isV2 ? 'text-white' : 'text-slate-900'}`}>
            How it works
          </h2>
        </div>

        <div className="space-y-12 sm:space-y-16">
          
          {/* CARD 1: STEP 1 - Set your goal (Split Card Layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Visual: Interactive Goal Selector Canvas */}
            <div className="lg:col-span-7">
              <div className={`relative rounded-[36px] p-6 sm:p-12 flex items-center justify-center overflow-hidden transition-all ${
                isV2 
                  ? 'bg-white/[0.03] border border-white/10 shadow-2xl shadow-black/60' 
                  : 'bg-gradient-to-br from-indigo-50/90 via-purple-50/60 to-white/80 border border-purple-100/90 shadow-xl shadow-purple-950/5'
              }`}>
                
                {/* Background ambient lighting inside canvas */}
                <div className={`absolute -top-10 -left-10 w-48 h-48 rounded-full blur-3xl pointer-events-none ${isV2 ? 'bg-purple-600/30' : 'bg-purple-200/50'}`} />
                <div className={`absolute -bottom-10 -right-10 w-48 h-48 rounded-full blur-3xl pointer-events-none ${isV2 ? 'bg-cyan-600/20' : 'bg-cyan-200/40'}`} />

                {/* Inner Device / Goal Card */}
                <div className={`relative w-full max-w-[340px] rounded-3xl p-6 space-y-4 transition-all ${
                  isV2 
                    ? 'bg-[#0c0e22] border border-white/15 text-white shadow-2xl shadow-purple-950/20' 
                    : 'bg-white border border-purple-100 text-slate-900 shadow-2xl shadow-purple-950/10'
                }`}>
                  
                  {/* Brand Header */}
                  <div className={`flex items-center justify-center gap-1.5 pb-2 border-b ${isV2 ? 'border-white/10' : 'border-slate-100'}`}>
                    <img src="/logo.png" alt="Syncall" className={`h-5 w-auto object-contain ${isV2 ? 'brightness-0 invert' : ''}`} />
                  </div>

                  {/* Title */}
                  <h4 className={`text-xl font-extrabold text-center tracking-tight ${isV2 ? 'text-white' : 'text-slate-900'}`}>
                    What's your goal?
                  </h4>

                  {/* 3 Selectable Goal Cards */}
                  <div className="space-y-2.5 pt-1">
                    
                    {/* Goal Option 1: Lower CPA */}
                    <div
                      onClick={() => setSelectedGoal('cpa')}
                      className={`p-3.5 rounded-2xl border cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-between ${
                        selectedGoal === 'cpa'
                          ? 'border-purple-600 bg-purple-50/80 shadow-sm scale-[1.01]'
                          : 'border-slate-200 hover:border-purple-300 bg-white hover:bg-slate-50/80'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-300 ${selectedGoal === 'cpa' ? 'bg-purple-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                          <TrendingDown className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-sm font-bold text-slate-900 block">Lower CPA</span>
                          <span className="text-[11px] text-slate-500">Cut cost per customer</span>
                        </div>
                      </div>
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-300 ${selectedGoal === 'cpa' ? 'border-purple-600 bg-purple-600' : 'border-slate-300'}`}>
                        <div className={`w-2 h-2 rounded-full bg-white transition-all duration-300 ${selectedGoal === 'cpa' ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} />
                      </div>
                    </div>

                    {/* Goal Option 2: Scale Revenue */}
                    <div
                      onClick={() => setSelectedGoal('revenue')}
                      className={`p-3.5 rounded-2xl border cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-between ${
                        selectedGoal === 'revenue'
                          ? 'border-purple-600 bg-purple-50/80 shadow-sm scale-[1.01]'
                          : 'border-slate-200 hover:border-purple-300 bg-white hover:bg-slate-50/80'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-300 ${selectedGoal === 'revenue' ? 'bg-purple-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                          <TrendingUp className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-sm font-bold text-slate-900 block">Scale Revenue</span>
                          <span className="text-[11px] text-slate-500">Find high-ROAS channels</span>
                        </div>
                      </div>
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-300 ${selectedGoal === 'revenue' ? 'border-purple-600 bg-purple-600' : 'border-slate-300'}`}>
                        <div className={`w-2 h-2 rounded-full bg-white transition-all duration-300 ${selectedGoal === 'revenue' ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} />
                      </div>
                    </div>

                    {/* Goal Option 3: Stop Waste */}
                    <div
                      onClick={() => setSelectedGoal('waste')}
                      className={`p-3.5 rounded-2xl border cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-between ${
                        selectedGoal === 'waste'
                          ? 'border-purple-600 bg-purple-50/80 shadow-sm scale-[1.01]'
                          : 'border-slate-200 hover:border-purple-300 bg-white hover:bg-slate-50/80'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-300 ${selectedGoal === 'waste' ? 'bg-purple-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                          <ShieldCheck className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-sm font-bold text-slate-900 block">Cut Wasted Spend</span>
                          <span className="text-[11px] text-slate-500">Pause fatigued creatives</span>
                        </div>
                      </div>
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-300 ${selectedGoal === 'waste' ? 'border-purple-600 bg-purple-600' : 'border-slate-300'}`}>
                        <div className={`w-2 h-2 rounded-full bg-white transition-all duration-300 ${selectedGoal === 'waste' ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} />
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>

            {/* Right Details: Step 1 Information */}
            <div className="lg:col-span-5 text-left space-y-4">
              <span className={`text-xs font-bold uppercase tracking-widest block ${isV2 ? 'text-purple-400' : 'text-purple-600'}`}>
                STEP 1
              </span>
              
              <h3 className={`text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight ${isV2 ? 'text-white' : 'text-slate-900'}`}>
                Set your goal
              </h3>

              <p className={`text-sm sm:text-base leading-relaxed max-w-lg ${isV2 ? 'text-slate-300' : 'text-slate-600'}`}>
                Tell Syncall what you're trying to achieve in plain words. Choose from lower acquisition costs, scaling revenue, or cutting wasted ad spend. Syncall translates your goal into the exact metrics that matter.
              </p>

              <div className="pt-4">
                <button
                  onClick={() => onOpenGoalModal ? onOpenGoalModal() : null}
                  className="px-8 py-3.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm shadow-lg shadow-purple-600/25 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-95 flex items-center gap-2 cursor-pointer"
                >
                  <span>Set your goal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* CARD 2: STEP 2 - Let the AI read the data (Full-Width Banner Card Layout) */}
          <div className="w-full rounded-[36px] overflow-hidden p-8 sm:p-12 lg:p-16 relative text-white shadow-2xl bg-gradient-to-r from-purple-800 via-purple-700 to-indigo-700">
            
            {/* Corner Watermark Diamonds (Matching Reference: media_1789753001583.png) */}
            <div className="absolute -bottom-10 -left-10 pointer-events-none opacity-20">
              <div className="relative">
                <div className="w-48 h-48 rounded-[36px] rotate-[45deg] bg-white border border-white/40" />
                <div className="absolute -top-6 -right-6 w-28 h-28 rounded-[24px] rotate-[45deg] bg-white/60 -z-10" />
              </div>
            </div>

            {/* Background Ambient Aura */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              
              {/* Left Column: Heading & Description */}
              <div className="lg:col-span-7 space-y-5 text-left">
                <span className="text-xs font-bold uppercase tracking-widest text-purple-200 block">
                  STEP 2
                </span>
                
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  Let the AI read <br className="hidden sm:inline" /> the data
                </h3>

                <p className="text-base sm:text-lg text-purple-100/90 leading-relaxed max-w-xl">
                  Connect your ad accounts and analytics. Syncall analyzes performance, spots fatigue, finds wasted spend, and surfaces high-intent customer segments without manual digging.
                </p>

                {/* 3 Real Value Bullets */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-white">Full cross-channel normalization in real time</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-white">Ad creative fatigue & spend leak detection</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-white">Plain English summaries anyone on your team can read</span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => onOpenGoalModal ? onOpenGoalModal() : null}
                    className="px-8 py-3.5 rounded-full bg-white text-purple-700 hover:bg-purple-50 font-bold text-sm shadow-xl active:scale-95 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center gap-2 cursor-pointer"
                  >
                    <span>Connect your accounts</span>
                    <ArrowRight className="w-4 h-4 text-purple-700" />
                  </button>
                </div>
              </div>

              {/* Right Column: Mini Graphic Canvas */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-[340px] rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 space-y-4 shadow-2xl">
                  <div className="flex items-center justify-between pb-3 border-b border-white/15 text-white text-xs font-bold">
                    <span>Active Diagnostics</span>
                    <span className="flex items-center gap-1 text-emerald-300">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Live
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    <div className="p-3 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-between">
                      <span className="text-xs font-semibold text-white">Meta Ad Fatigue</span>
                      <span className="text-xs font-bold text-rose-300">-28% CPA</span>
                    </div>

                    <div className="p-3 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-between">
                      <span className="text-xs font-semibold text-white">Google Search Waste</span>
                      <span className="text-xs font-bold text-amber-300">-$380/wk</span>
                    </div>

                    <div className="p-3 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-between">
                      <span className="text-xs font-semibold text-white">Shopify Retargeting</span>
                      <span className="text-xs font-bold text-cyan-300">+14 Carts</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* CARD 3: STEP 3 - Follow the plan (Split Card Layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Column: Step 3 Information */}
            <div className="lg:col-span-5 text-left space-y-4 order-2 lg:order-1">
              <span className={`text-xs font-bold uppercase tracking-widest block ${isV2 ? 'text-purple-400' : 'text-purple-600'}`}>
                STEP 3
              </span>
              
              <h3 className={`text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight ${isV2 ? 'text-white' : 'text-slate-900'}`}>
                Follow the plan
              </h3>

              <p className={`text-sm sm:text-base leading-relaxed max-w-lg ${isV2 ? 'text-slate-300' : 'text-slate-600'}`}>
                Act on a short, ranked list of what to change next. No interpretation, no second-guessing required. Apply autonomous fixes or budget shifts across your channels in a single click.
              </p>

              <div className="pt-4">
                <button
                  onClick={() => onOpenGoalModal ? onOpenGoalModal() : null}
                  className="px-8 py-3.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm shadow-lg shadow-purple-600/25 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-95 flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-purple-200" />
                  <span>Start free</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Visual: 1-Click Action Checklist Canvas */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className={`relative rounded-[36px] p-6 sm:p-12 flex items-center justify-center overflow-hidden transition-all ${
                isV2 
                  ? 'bg-white/[0.03] border border-white/10 shadow-2xl shadow-black/60' 
                  : 'bg-gradient-to-br from-purple-50/90 via-indigo-50/60 to-white/80 border border-purple-100/90 shadow-xl shadow-purple-950/5'
              }`}>
                
                {/* Inner Action Checklist Card */}
                <div className={`relative w-full max-w-[360px] rounded-3xl p-6 space-y-3.5 transition-all ${
                  isV2 
                    ? 'bg-[#0c0e22] border border-white/15 text-white shadow-2xl shadow-purple-950/20' 
                    : 'bg-white border border-purple-100 text-slate-900 shadow-2xl shadow-purple-950/10'
                }`}>
                  
                  <div className={`flex items-center justify-between pb-3 border-b ${isV2 ? 'border-white/10' : 'border-slate-100'}`}>
                    <span className={`text-xs uppercase tracking-wider font-bold ${isV2 ? 'text-slate-400' : 'text-slate-400'}`}>1-Click Execution</span>
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">AI Verified</span>
                  </div>

                  {/* Task 1 */}
                  <div 
                    onClick={() => toggleAction(0)}
                    className={`p-3 rounded-2xl border transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-between cursor-pointer ${
                      appliedActions.includes(0) 
                        ? (isV2 ? 'bg-purple-950/50 border-purple-500/40 text-white' : 'bg-purple-50/90 border-purple-200') 
                        : (isV2 ? 'bg-white/[0.04] border-white/10 text-slate-200 hover:border-white/20' : 'bg-slate-50 border-slate-200 hover:border-purple-200 hover:bg-white')
                    }`}
                  >
                    <div className="text-left">
                      <span className={`text-xs font-bold block ${isV2 ? 'text-white' : 'text-slate-900'}`}>Pause Ad A (Fatigued)</span>
                      <span className={`text-[10px] ${isV2 ? 'text-slate-400' : 'text-slate-500'}`}>Saves ~$240/wk in wasted budget</span>
                    </div>
                    <div className={`px-2.5 py-1 rounded-full text-[10px] font-bold transition-all duration-300 ${
                      appliedActions.includes(0) ? 'bg-emerald-600 text-white' : (isV2 ? 'bg-white/10 text-slate-300' : 'bg-slate-200 text-slate-700')
                    }`}>
                      {appliedActions.includes(0) ? 'Applied ✓' : 'Apply'}
                    </div>
                  </div>

                  {/* Task 2 */}
                  <div 
                    onClick={() => toggleAction(1)}
                    className={`p-3 rounded-2xl border transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-between cursor-pointer ${
                      appliedActions.includes(1) 
                        ? (isV2 ? 'bg-purple-950/50 border-purple-500/40 text-white' : 'bg-purple-50/90 border-purple-200') 
                        : (isV2 ? 'bg-white/[0.04] border-white/10 text-slate-200 hover:border-white/20' : 'bg-slate-50 border-slate-200 hover:border-purple-200 hover:bg-white')
                    }`}
                  >
                    <div className="text-left">
                      <span className={`text-xs font-bold block ${isV2 ? 'text-white' : 'text-slate-900'}`}>Shift $500 to Top Ad B</span>
                      <span className={`text-[10px] ${isV2 ? 'text-slate-400' : 'text-slate-500'}`}>Estimated +22 additional sales</span>
                    </div>
                    <div className={`px-2.5 py-1 rounded-full text-[10px] font-bold transition-all duration-300 ${
                      appliedActions.includes(1) ? 'bg-emerald-600 text-white' : (isV2 ? 'bg-white/10 text-slate-300' : 'bg-slate-200 text-slate-700')
                    }`}>
                      {appliedActions.includes(1) ? 'Applied ✓' : 'Apply'}
                    </div>
                  </div>

                  {/* Task 3 */}
                  <div 
                    onClick={() => toggleAction(2)}
                    className={`p-3 rounded-2xl border transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-between cursor-pointer ${
                      appliedActions.includes(2) ? 'bg-purple-50/90 border-purple-200' : 'bg-slate-50 border-slate-200 hover:border-purple-200 hover:bg-white'
                    }`}
                  >
                    <div className="text-left">
                      <span className="text-xs font-bold text-slate-900 block">Sync Abandoned Cart Audience</span>
                      <span className="text-[10px] text-slate-500">Shopify to Meta instant match</span>
                    </div>
                    <div className={`px-2.5 py-1 rounded-full text-[10px] font-bold transition-all duration-300 ${
                      appliedActions.includes(2) ? 'bg-emerald-600 text-white' : 'bg-purple-600 text-white'
                    }`}>
                      {appliedActions.includes(2) ? 'Applied ✓' : 'Apply'}
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
