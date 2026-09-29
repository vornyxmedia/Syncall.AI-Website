import React from 'react';
import { 
  BarChart3, 
  MessageSquareWarning, 
  DollarSign, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2 
} from 'lucide-react';
import { FloatingDiamond } from './FloatingDiamond';
import { useTheme } from '../context/ThemeContext';

interface ProblemSectionProps {
  onOpenGoalModal?: () => void;
  onOpenContactModal?: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({
  onOpenGoalModal,
  onOpenContactModal,
}) => {
  const { isDuskMode } = useTheme();
  const isV2 = isDuskMode;

  return (
    <section id="why-harder" className={`relative py-14 sm:py-16 lg:py-[100px] overflow-hidden transition-colors duration-500 ${isV2 ? 'bg-[#070814] text-white' : 'bg-white text-slate-900'}`}>
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -left-20 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[160px] pointer-events-none" />

      {/* Asymmetric Organic Floating Diamond */}
      <FloatingDiamond 
        className="top-12 right-[5%] opacity-30" 
        size="md" 
        rotation="rotate-[36deg]" 
        colorVariant="purple" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Bento Grid: Matching Reference media_1789753064075.png */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* LEFT LARGE HERO CARD */}
          <div className="lg:col-span-5 relative rounded-2xl bg-gradient-to-br from-[#2563EB] via-[#6366F1] to-[#A855F7] p-8 sm:p-12 lg:p-14 flex flex-col justify-between shadow-2xl shadow-purple-950/15 border border-white/20 overflow-hidden text-white min-h-[500px] lg:min-h-[580px]">
            
            {/* Subtle luminous ambient glow effects inside the card */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-cyan-400/25 rounded-full blur-3xl pointer-events-none" />

            {/* Top Text Content */}
            <div className="relative z-10 space-y-5">
              {/* Category Label (Matches "OUR ADVANTAGES" from reference) */}
              <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-white/85">
                OUR ADVANTAGES
              </p>

              {/* Bold Headline (Syncall's copy) */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
                Why marketing feels harder than it should
              </h2>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal pt-1">
                You don't need to become a marketer to grow. You need someone, or something, that already knows this stuff, watching your numbers with you.
              </p>
            </div>

            {/* Bottom Actions (Pill buttons matching reference layout) */}
            <div className="relative z-10 pt-10 sm:pt-12">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                {/* Primary CTA Button */}
                <button
                  onClick={onOpenGoalModal}
                  className="px-7 py-3.5 rounded-full bg-white text-purple-700 font-bold hover:bg-purple-50 shadow-lg shadow-purple-950/20 active:scale-[0.98] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
                >
                  <span>Start free</span>
                  <ArrowRight className="w-4 h-4 text-purple-700" />
                </button>

                {/* Secondary CTA Button */}
                <button
                  onClick={onOpenContactModal}
                  className="px-6 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-semibold backdrop-blur-md border border-white/30 active:scale-[0.98] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-cyan-200" />
                  <span>Get a demo</span>
                </button>
              </div>

              {/* Trust Subtext */}
              <p className="text-xs text-white/75 pt-4 flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
                <span>Zero setup fee · Connects in 2 minutes · No credit card</span>
              </p>
            </div>

          </div>

          {/* RIGHT 2x2 BENTO GRID */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            
            {/* ITEM 1 (Top-Left): Rounded Founder Photo */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg shadow-purple-950/5 border border-purple-100/70 min-h-[260px] sm:min-h-[280px] bg-slate-100">
              <img 
                src={`${import.meta.env.BASE_URL}problem-founder-workspace.jpg`}
                alt="Business owner working relaxed with Syncall AI" 
                className="w-full h-full object-cover object-center" 
              />
              {/* Subtle glassmorphic status badge over the photo */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-white/90 backdrop-blur-md rounded-2xl p-3 border border-white/80 shadow-md flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span className="text-xs font-semibold text-slate-800">
                  Ad fatigue caught early · CPA down 28%
                </span>
              </div>
            </div>

            {/* ITEM 2 (Top-Right): Problem Card 1 */}
            <div className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all ${
              isV2 
                ? 'bg-white/[0.03] border border-white/10 text-white shadow-lg shadow-black/40 hover:border-purple-500/30' 
                : 'bg-[#F3F6FE] border border-blue-100/70 shadow-sm text-slate-900'
            }`}>
              <div className="space-y-4">
                {/* Colorful Icon Container */}
                <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200/80 flex items-center justify-center text-rose-600 shadow-sm">
                  <BarChart3 className="w-6 h-6" />
                </div>
                
                <h3 className={`text-xl font-bold leading-snug ${isV2 ? 'text-white' : 'text-slate-900'}`}>
                  Too many metrics, no idea what they mean
                </h3>
                
                <p className={`text-sm leading-relaxed font-normal ${isV2 ? 'text-slate-300' : 'text-slate-600'}`}>
                  CTR, CPA, ROAS, conversion rate. Every dashboard hands you numbers and assumes you already know whether they're good or bad.
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className={`pt-6 mt-6 border-t flex items-center justify-between text-xs font-semibold ${
                isV2 ? 'border-white/10 text-purple-300' : 'border-purple-100/60 text-purple-700'
              }`}>
                <span>Syncall plain-English advice</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* ITEM 3 (Bottom-Left): Problem Card 2 */}
            <div className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all ${
              isV2 
                ? 'bg-white/[0.03] border border-white/10 text-white shadow-lg shadow-black/40 hover:border-purple-500/30' 
                : 'bg-[#F3F6FE] border border-blue-100/70 shadow-sm text-slate-900'
            }`}>
              <div className="space-y-4">
                {/* Colorful Icon Container */}
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-600 shadow-sm">
                  <MessageSquareWarning className="w-6 h-6" />
                </div>
                
                <h3 className={`text-xl font-bold leading-snug ${isV2 ? 'text-white' : 'text-slate-900'}`}>
                  Advice that contradicts itself
                </h3>
                
                <p className={`text-sm leading-relaxed font-normal ${isV2 ? 'text-slate-300' : 'text-slate-600'}`}>
                  Every platform, video, and forum thread tells you something different. Without a background in it, there's no way to know who's right.
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className={`pt-6 mt-6 border-t flex items-center justify-between text-xs font-semibold ${
                isV2 ? 'border-white/10 text-purple-300' : 'border-purple-100/60 text-purple-700'
              }`}>
                <span>Decisions backed by your data</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* ITEM 4 (Bottom-Right): Problem Card 3 */}
            <div className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all ${
              isV2 
                ? 'bg-white/[0.03] border border-white/10 text-white shadow-lg shadow-black/40 hover:border-purple-500/30' 
                : 'bg-[#F3F6FE] border border-blue-100/70 shadow-sm text-slate-900'
            }`}>
              <div className="space-y-4">
                {/* Colorful Icon Container */}
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200/80 flex items-center justify-center text-indigo-600 shadow-sm">
                  <DollarSign className="w-6 h-6" />
                </div>
                
                <h3 className={`text-xl font-bold leading-snug ${isV2 ? 'text-white' : 'text-slate-900'}`}>
                  Hiring an expert costs more than the campaign
                </h3>
                
                <p className={`text-sm leading-relaxed font-normal ${isV2 ? 'text-slate-300' : 'text-slate-600'}`}>
                  A marketing hire or agency retainer can dwarf your ad budget, before you even know if the campaign is worth running.
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className={`pt-6 mt-6 border-t flex items-center justify-between text-xs font-semibold ${
                isV2 ? 'border-white/10 text-purple-300' : 'border-purple-100/60 text-purple-700'
              }`}>
                <span>Autonomous optimization</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
