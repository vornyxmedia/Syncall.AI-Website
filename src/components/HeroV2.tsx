import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { GoogleAdsLogo, MetaLogo, GoogleAnalyticsLogo, ShopifyLogo, TikTokLogo, LinkedInLogo, MicrosoftAdsLogo, AmazonLogo } from './BrandLogos';

interface HeroV2Props {
  onOpenGoalModal: (presetGoal?: string) => void;
  onScrollToDemo: () => void;
}

export const HeroV2: React.FC<HeroV2Props> = ({ onOpenGoalModal, onScrollToDemo }) => {
  return (
    <section id="hero" className="relative pt-32 sm:pt-40 lg:pt-44 pb-16 sm:pb-24 overflow-hidden dusk-bg text-left">
      {/* =========================================================================
          ATMOSPHERIC DUSK LIGHTING MESH (Matching media_1789901940089.png)
          ========================================================================= */}
      {/* 1. Warm Sunset Golden-Amber Orb in Upper Left */}
      <div 
        className="absolute top-0 left-0 w-[550px] sm:w-[750px] lg:w-[900px] h-[550px] sm:h-[750px] lg:h-[900px] rounded-full bg-[radial-gradient(circle_at_20%_20%,_rgba(251,191,36,0.32)_0%,_rgba(249,115,22,0.18)_35%,_rgba(234,88,12,0.08)_55%,_transparent_75%)] blur-[100px] pointer-events-none -translate-x-1/4 -translate-y-1/4 z-0" 
      />

      {/* 2. Deep Royal Violet Atmospheric Nebula in Center Wash */}
      <div 
        className="absolute top-1/6 left-1/4 w-[750px] sm:w-[1000px] h-[600px] sm:h-[800px] rounded-full bg-[radial-gradient(circle_at_50%_40%,_rgba(107,33,168,0.58)_0%,_rgba(88,28,135,0.32)_45%,_transparent_75%)] blur-[120px] pointer-events-none z-0" 
      />

      {/* 3. Midnight Cosmic Dark Vignette on Bottom & Right */}
      <div 
        className="absolute bottom-0 right-0 w-[600px] sm:w-[800px] h-[500px] rounded-full bg-[radial-gradient(circle,_rgba(15,23,42,0.6)_0%,_transparent_70%)] blur-[110px] pointer-events-none z-0" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* =========================================================================
              LEFT COLUMN: HERO HEADLINE & OBSIDIAN GLOWING CTAS
              ========================================================================= */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            
            {/* Main Headline (Styled with reference typography) */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[60px] font-extrabold text-white tracking-tight leading-[1.12]">
              Marketing decisions, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-pink-200 to-indigo-200">
                backed by AI
              </span>
            </h1>

            {/* Subheadline in Soft Lavender / Slate */}
            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-xl">
              You don't have to understand marketing. You just have to tell Syncall what you want. Our AI agent platform diagnoses, optimizes, and scales multi-account ad campaigns automatically.
            </p>

            {/* Action Buttons & Collaboration Cursor */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 relative">
              {/* Primary Glowing Obsidian Pill Button */}
              <button
                onClick={() => onOpenGoalModal()}
                className="w-full sm:w-60 px-8 py-4 rounded-full bg-black/90 hover:bg-black text-white font-bold text-sm sm:text-base border border-white/20 shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:shadow-[0_0_35px_rgba(168,85,247,0.65)] hover:border-purple-400/60 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <span>Start Project</span>
                <ArrowRight className="w-4 h-4 text-purple-300 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              {/* Secondary Frosted Glass Pill Button */}
              <button
                onClick={onScrollToDemo}
                className="w-full sm:w-60 px-8 py-4 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white/90 font-semibold text-sm sm:text-base border border-white/10 hover:border-white/25 backdrop-blur-xl active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Play className="w-4 h-4 text-purple-300 fill-purple-300/30" />
                <span>See How It Works</span>
              </button>
            </div>

            {/* Micro-guarantee */}
            <div className="flex items-center gap-2 text-xs text-slate-400 font-medium pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              <span>No credit card required · Set up in under 5 minutes</span>
            </div>

          </div>


          {/* =========================================================================
              RIGHT COLUMN: ORBITAL CONSTELLATION SHOWSTOPPER
              ========================================================================= */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="relative w-full max-w-[540px] h-[500px] sm:h-[560px] flex items-center justify-center select-none">
              
              {/* --- CONCENTRIC ORBITAL RINGS (Hairline circles with subtle opacity) --- */}
              {/* Outer Ring */}
              <div className="absolute w-[460px] sm:w-[520px] h-[460px] sm:h-[520px] rounded-full border border-white/[0.08]" />
              
              {/* Middle Ring */}
              <div className="absolute w-[340px] sm:w-[380px] h-[340px] sm:h-[380px] rounded-full border border-white/[0.12]" />
              
              {/* Inner Ring */}
              <div className="absolute w-[220px] sm:w-[240px] h-[220px] sm:h-[240px] rounded-full border border-white/[0.15]" />

              {/* Ambient Center Glow */}
              <div className="absolute w-44 h-44 rounded-full bg-purple-600/25 blur-2xl pointer-events-none" />

              {/* --- CENTRAL METRIC HUB ("20k+ Specialists") --- */}
              <div className="relative z-20 flex flex-col items-center justify-center text-center p-6 rounded-full bg-[#0d0f24]/90 backdrop-blur-xl border border-white/20 w-36 h-36 sm:w-40 sm:h-40 shadow-[0_0_50px_rgba(147,51,234,0.35)]">
                <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">25+</span>
                <span className="text-xs font-semibold text-purple-300 tracking-wide mt-1 text-center leading-tight">Accounts Connected</span>
              </div>

              {/* --- ORBITING PLATFORM LOGO NODES ---
                  Each node is a rotating pivot (centered on the 25+ hub) holding
                  a radius offset, wrapping a counter-rotating node so the icon
                  itself stays upright while it revolves around the center.
                  8 nodes total: 3 outer, 3 middle, 2 inner, evenly spaced per ring. */}

              {/* Outer ring - Google Analytics */}
              <div className="absolute inset-0 z-20 flex items-center justify-center animate-orbit-outer" style={{ animationDelay: '-37.5s' }}>
                <div className="translate-x-[230px] sm:translate-x-[260px]">
                  <div className="animate-orbit-outer-reverse" style={{ animationDelay: '-37.5s' }}>
                    <div className="w-12 h-12 rounded-2xl bg-black/85 backdrop-blur-xl border border-white/25 flex items-center justify-center shadow-[0_0_22px_rgba(251,191,36,0.55)]">
                      <GoogleAnalyticsLogo className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Outer ring - Google Ads */}
              <div className="absolute inset-0 z-20 flex items-center justify-center animate-orbit-outer" style={{ animationDelay: '-4.17s' }}>
                <div className="translate-x-[230px] sm:translate-x-[260px]">
                  <div className="animate-orbit-outer-reverse" style={{ animationDelay: '-4.17s' }}>
                    <div className="w-12 h-12 rounded-2xl bg-black/85 backdrop-blur-xl border border-white/25 flex items-center justify-center shadow-[0_0_22px_rgba(245,158,11,0.5)]">
                      <GoogleAdsLogo className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Outer ring - LinkedIn */}
              <div className="absolute inset-0 z-20 flex items-center justify-center animate-orbit-outer" style={{ animationDelay: '-20.83s' }}>
                <div className="translate-x-[230px] sm:translate-x-[260px]">
                  <div className="animate-orbit-outer-reverse" style={{ animationDelay: '-20.83s' }}>
                    <div className="w-12 h-12 rounded-2xl bg-black/85 backdrop-blur-xl border border-white/25 flex items-center justify-center shadow-[0_0_22px_rgba(10,102,194,0.55)]">
                      <LinkedInLogo className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle ring - Meta */}
              <div className="absolute inset-0 z-20 flex items-center justify-center animate-orbit-middle">
                <div className="translate-x-[170px] sm:translate-x-[190px]">
                  <div className="animate-orbit-middle-reverse">
                    <div className="w-11 h-11 rounded-2xl bg-black/85 backdrop-blur-xl border border-white/25 flex items-center justify-center shadow-[0_0_20px_rgba(0,129,251,0.6)]">
                      <MetaLogo className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle ring - TikTok */}
              <div className="absolute inset-0 z-20 flex items-center justify-center animate-orbit-middle">
                <div className="translate-x-[170px] sm:translate-x-[190px]">
                  <div className="animate-orbit-middle-reverse">
                    <div className="w-11 h-11 rounded-2xl bg-black/85 backdrop-blur-xl border border-white/25 flex items-center justify-center shadow-[0_0_20px_rgba(244,63,94,0.6)]">
                      <TikTokLogo className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle ring - Amazon (wordmark, so its chip is a wide pill instead of a square) */}
              <div className="absolute inset-0 z-20 flex items-center justify-center animate-orbit-middle" style={{ animationDelay: '-19s' }}>
                <div className="translate-x-[170px] sm:translate-x-[190px]">
                  <div className="animate-orbit-middle-reverse" style={{ animationDelay: '-19s' }}>
                    <div className="h-11 px-3 rounded-2xl bg-black/85 backdrop-blur-xl border border-white/25 inline-flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.5)]">
                      <AmazonLogo className="h-4 w-auto text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Inner ring - Shopify */}
              <div className="absolute inset-0 z-20 flex items-center justify-center animate-orbit-inner" style={{ animationDelay: '-7s' }}>
                <div className="translate-x-[110px] sm:translate-x-[120px]">
                  <div className="animate-orbit-inner-reverse" style={{ animationDelay: '-7s' }}>
                    <div className="w-10 h-10 rounded-2xl bg-black/85 backdrop-blur-xl border border-white/25 flex items-center justify-center shadow-[0_0_18px_rgba(16,185,129,0.5)]">
                      <ShopifyLogo className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Inner ring - Microsoft Ads */}
              <div className="absolute inset-0 z-20 flex items-center justify-center animate-orbit-inner" style={{ animationDelay: '-21s' }}>
                <div className="translate-x-[110px] sm:translate-x-[120px]">
                  <div className="animate-orbit-inner-reverse" style={{ animationDelay: '-21s' }}>
                    <div className="w-10 h-10 rounded-2xl bg-black/85 backdrop-blur-xl border border-white/25 flex items-center justify-center shadow-[0_0_18px_rgba(20,184,166,0.5)]">
                      <MicrosoftAdsLogo className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* =========================================================================
            CONNECTED PLATFORMS STRIP (Real integrations, no placeholder brands)
            ========================================================================= */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-white/[0.08] w-full">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest text-center mb-6">
            Connects with the platforms you already run
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10 lg:gap-12 text-white/80">
            {[
              { Icon: GoogleAdsLogo, name: 'Google Ads', wide: false },
              { Icon: MetaLogo, name: 'Meta', wide: false },
              { Icon: GoogleAnalyticsLogo, name: 'Google Analytics', wide: false },
              { Icon: ShopifyLogo, name: 'Shopify', wide: false },
              { Icon: TikTokLogo, name: 'TikTok', wide: false },
              { Icon: LinkedInLogo, name: 'LinkedIn', wide: false },
              { Icon: MicrosoftAdsLogo, name: 'Microsoft Advertising', wide: false },
              { Icon: AmazonLogo, name: 'Amazon Ads', wide: true },
            ].map(({ Icon, name, wide }) => (
              <Icon
                key={name}
                monochrome
                className={
                  wide
                    ? 'h-8 sm:h-9 w-auto shrink-0 hover:text-white transition-colors duration-300'
                    : 'w-8 h-8 sm:w-9 sm:h-9 shrink-0 hover:text-white transition-colors duration-300'
                }
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
