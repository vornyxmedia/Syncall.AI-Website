import React from 'react';
import { Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface MeetTheAiProps {
  onOpenGoalModal?: () => void;
}

export const MeetTheAi: React.FC<MeetTheAiProps> = ({ onOpenGoalModal }) => {
  const { isDuskMode } = useTheme();
  const isV2 = isDuskMode;

  const scrollToResults = () => {
    const el = document.getElementById('customer-results');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="meet-ai" className={`relative overflow-hidden transition-colors duration-500 ${isV2 ? 'bg-[#070814]' : 'bg-white'}`}>
      
      {/* 1. PANORAMIC 3D WAVE CURTAIN BANNER (Matching Reference: media_1789753093228.png) */}
      <div className="relative w-full py-16 sm:py-20 lg:py-[100px] overflow-hidden bg-[#160627] text-white flex items-center justify-center">
        
        {/* Authentic 3D Corrugated Parametric Wave Texture Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/meet-ai-wave-curtain.jpg" 
            alt="Parametric AI wave curtain texture" 
            className="w-full h-full object-cover object-center opacity-65 brightness-[0.7]" 
          />
          {/* Dark translucent overlay for optimal contrast and readability */}
          <div className="absolute inset-0 bg-[#0e021a]/60 pointer-events-none" />
          {/* Subtle edge vignette for smooth transition */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#160627]/60 via-transparent to-[#160627]/80 pointer-events-none" />
        </div>

        {/* Content Container (Matching Reference Layout & Copy) */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center">
          
          {/* Main Headline - Clean crisp white, zero text shadow */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-extrabold text-white tracking-tight leading-[1.16]">
            Now with agents built on top of your data foundation
          </h2>

          {/* Body Description - Clean crisp contrast without text shadow */}
          <p className="text-base sm:text-lg lg:text-[19px] text-purple-100 font-medium leading-relaxed max-w-2xl mx-auto pt-5 sm:pt-6">
            It reads the numbers so you don't have to learn to. Every connected account comes with rows of data that mean nothing on their own. Syncall's trained AI turns that into plain-English fixes you can actually act on, catching what breaks before you waste budget.
          </p>

          {/* CTA Action Button */}
          <div className="pt-8 sm:pt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenGoalModal}
              className={
                isV2
                  ? 'px-8 py-3.5 rounded-full bg-black/90 hover:bg-black text-white font-bold text-sm sm:text-base border border-white/20 shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] active:scale-[0.98] transition-all duration-300 cursor-pointer'
                  : 'px-8 py-3.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm sm:text-base shadow-xl shadow-purple-600/30 border border-purple-400/30 active:scale-[0.98] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer'
              }
            >
              Get early access
            </button>
            <button
              onClick={scrollToResults}
              className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base backdrop-blur-md border border-white/20 active:scale-[0.98] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <span>See customer results</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
