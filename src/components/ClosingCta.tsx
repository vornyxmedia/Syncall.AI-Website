import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ClosingCtaProps {
  onOpenGoalModal: () => void;
  onOpenContactModal: () => void;
}

export const ClosingCta: React.FC<ClosingCtaProps> = ({ onOpenGoalModal }) => {
  const { isDuskMode } = useTheme();
  const isV2 = isDuskMode;

  return (
    <section id="closing-cta" className={`relative py-20 sm:py-28 overflow-hidden transition-colors duration-500 ${isV2 ? 'bg-[#070814]' : 'bg-white'}`}>
      {/* Subtle background ambient brand glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full blur-[140px] pointer-events-none ${
        isV2 ? 'bg-purple-900/30' : 'bg-purple-100/25'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Card Wrapper */}
        <div className="relative max-w-5xl mx-auto">
          <div className={`relative z-10 rounded-[32px] sm:rounded-[36px] p-8 sm:p-10 lg:p-14 flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-10 transition-all duration-300 ${
            isV2 
              ? 'bg-[#0c0e22]/90 border border-white/15 shadow-[0_0_60px_rgba(0,0,0,0.8),0_0_30px_rgba(168,85,247,0.15)] text-white' 
              : 'bg-white p-8 sm:p-10 lg:p-14 shadow-2xl shadow-purple-950/10 border border-purple-100/80'
          }`}>
            
            {/* Left Headline & Action */}
            <div className="text-left space-y-6 max-w-md">
              <h2 className={`text-2xl sm:text-3xl lg:text-[38px] font-extrabold tracking-tight leading-[1.2] ${isV2 ? 'text-white' : 'text-slate-900'}`}>
                Don't Just Manage <br />
                Marketing Data, Master It. <br />
                <span className={isV2 ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-indigo-300' : 'text-purple-600'}>
                  See Syncall in Action.
                </span>
              </h2>

              <div className="pt-2">
                <button
                  onClick={onOpenGoalModal}
                  className={
                    isV2
                      ? 'inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-black/90 hover:bg-black text-white font-bold text-base border border-white/20 shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] hover:border-white/40 active:scale-95 transition-all duration-200 cursor-pointer'
                      : 'inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-base shadow-lg shadow-purple-600/25 active:scale-95 transition-all duration-200 cursor-pointer'
                  }
                >
                  <span>Schedule a Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Arch Portrait Frame */}
            <div className="relative shrink-0">
              <div className={`w-48 sm:w-56 lg:w-60 h-64 sm:h-72 lg:h-76 rounded-t-full rounded-b-3xl overflow-hidden shadow-xl border-4 ${
                isV2 ? 'border-white/20 bg-[#161a3d]' : 'border-white bg-slate-100'
              }`}>
                <img 
                  src={`${import.meta.env.BASE_URL}problem-founder-workspace.jpg`}
                  alt="Marketing leader with Syncall" 
                  className="w-full h-full object-cover object-top" 
                />
              </div>
              
              {/* Small purple diamond at bottom left of arch */}
              <div className={`absolute -bottom-3 -left-3 w-7 h-7 sm:w-8 sm:h-8 rotate-45 pointer-events-none ${
                isV2 ? 'bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)]' : 'bg-purple-600 shadow-md'
              }`} />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
