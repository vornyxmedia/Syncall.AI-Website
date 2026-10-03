import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ClosingCtaProps {
  onOpenSignUp: () => void;
  onOpenContactModal: () => void;
}

export const ClosingCta: React.FC<ClosingCtaProps> = ({ onOpenSignUp }) => {
  const { isDuskMode } = useTheme();
  const isV2 = isDuskMode;

  return (
    <section id="closing-cta" className={`relative py-20 sm:py-28 overflow-hidden transition-colors duration-500 ${isV2 ? 'bg-[#070814]' : 'bg-white'}`}>
      {/* Background glow behind the card */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[260px] rounded-full blur-[100px] pointer-events-none ${
        isV2 ? 'bg-purple-800/40' : 'bg-purple-200/50'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Card Wrapper */}
        <div className="relative max-w-5xl mx-auto">
          <div className={`relative z-10 rounded-2xl p-8 sm:p-10 lg:p-14 flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-10 transition-all duration-300 ${
            isV2 
              ? 'bg-[#0c0e22] border border-white/10 text-white' 
              : 'bg-white border border-slate-200'
          }`}>
            
            {/* Left Headline & Action */}
            <div className="text-left space-y-6 max-w-md">
              <h2 className={`text-2xl sm:text-3xl lg:text-[38px] font-extrabold tracking-tight leading-[1.2] ${isV2 ? 'text-white' : 'text-slate-900'}`}>
                Don't Just Manage <br />
                Marketing Data, Master It. <br />
                <span className={isV2 ? 'text-purple-300' : 'text-purple-600'}>
                  See Syncall in Action.
                </span>
              </h2>

              <div className="pt-2">
                <button
                  onClick={onOpenSignUp}
                  className={
                    isV2
                      ? 'inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-base active:scale-95 transition-all duration-200 cursor-pointer'
                      : 'inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-base active:scale-95 transition-all duration-200 cursor-pointer'
                  }
                >
                  <span>Schedule a Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Arch Portrait Frame */}
            <div className="relative shrink-0">
              <div className={`w-48 sm:w-56 lg:w-60 h-64 sm:h-72 lg:h-76 rounded-t-full rounded-b-2xl overflow-hidden border ${
                isV2 ? 'border-white/10 bg-[#161a3d]' : 'border-slate-200 bg-slate-100'
              }`}>
                <img 
                  src={`${import.meta.env.BASE_URL}problem-founder-workspace.jpg`}
                  alt="Marketing leader with Syncall" 
                  className="w-full h-full object-cover object-top" 
                />
              </div>
              
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
