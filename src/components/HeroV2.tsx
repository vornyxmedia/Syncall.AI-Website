import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import {
  GoogleSheetsLogo, GoogleAnalyticsLogo, GoogleSearchConsoleLogo, YouTubeLogo, GoogleAdsLogo, GoogleLogo,
  FacebookLogo, InstagramLogo, MetaLogo, LinkedInLogo, TikTokLogo, XLogo, PinterestLogo, SnapchatLogo,
  AmazonIconLogo, HubSpotLogo, SalesforceLogo, PipedriveLogo, MailchimpLogo, LogoProps,
} from './BrandLogos';

interface HeroV2Props {
  onOpenGoalModal: (presetGoal?: string) => void;
  onScrollToDemo: () => void;
}

const INTEGRATION_GROUPS: { name: string; items: { name: string; Icon: React.FC<LogoProps> }[] }[] = [
  {
    name: 'Google',
    items: [
      { name: 'Google Sheets', Icon: GoogleSheetsLogo },
      { name: 'Google Analytics', Icon: GoogleAnalyticsLogo },
      { name: 'Google Search Console', Icon: GoogleSearchConsoleLogo },
      { name: 'YouTube', Icon: YouTubeLogo },
      { name: 'Google Ads', Icon: GoogleAdsLogo },
      { name: 'Google Ads Transparency Center', Icon: GoogleLogo },
    ],
  },
  {
    name: 'Meta',
    items: [
      { name: 'Facebook Pages', Icon: FacebookLogo },
      { name: 'Instagram', Icon: InstagramLogo },
      { name: 'Meta Ads', Icon: MetaLogo },
      { name: 'Meta Ad Library', Icon: MetaLogo },
    ],
  },
  {
    name: 'LinkedIn',
    items: [
      { name: 'LinkedIn Pages', Icon: LinkedInLogo },
      { name: 'LinkedIn Ads', Icon: LinkedInLogo },
    ],
  },
  {
    name: 'TikTok',
    items: [
      { name: 'TikTok', Icon: TikTokLogo },
      { name: 'TikTok Ads', Icon: TikTokLogo },
    ],
  },
  {
    name: 'Other social and ads',
    items: [
      { name: 'X (Twitter)', Icon: XLogo },
      { name: 'Pinterest', Icon: PinterestLogo },
      { name: 'Pinterest Ads', Icon: PinterestLogo },
      { name: 'Snapchat Ads', Icon: SnapchatLogo },
      { name: 'Amazon Ads', Icon: AmazonIconLogo },
    ],
  },
  {
    name: 'CRM',
    items: [
      { name: 'HubSpot', Icon: HubSpotLogo },
      { name: 'Salesforce', Icon: SalesforceLogo },
      { name: 'Pipedrive', Icon: PipedriveLogo },
    ],
  },
  {
    name: 'Email',
    items: [{ name: 'Mailchimp', Icon: MailchimpLogo }],
  },
];

// Flat list for the marquee, in group order
const INTEGRATIONS = INTEGRATION_GROUPS.flatMap((group) => group.items);

export const HeroV2: React.FC<HeroV2Props> = ({ onOpenGoalModal, onScrollToDemo }) => {
  return (
    <section id="hero" className="relative z-10 overflow-x-clip bg-[#070814] text-left">
      {/* Warm amber glow anchored to the top-left corner */}
      <img
        src={`${import.meta.env.BASE_URL}hero-glow.svg`}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-0 left-0 w-[90vw] sm:w-[70vw] lg:w-[870px] h-auto"
      />

      {/* Ribbon artwork: composed for the top-right corner, so it bleeds off the top and right edges.
          Its tail is allowed to run past the bottom into the next section (overflow-x-clip only). */}
      <img
        src={`${import.meta.env.BASE_URL}hero-wave.webp`}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-0 right-0 w-[92%] sm:w-[80%] lg:w-[76%] max-w-[1320px] h-auto"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        {/* On desktop this block spans the ribbon's visible body (about 60% of the artwork's height),
            so the copy sits centred against it and the logos follow without a gap */}
        <div className="pt-48 sm:pt-64 lg:pt-20 lg:min-h-[min(46vw,800px)] lg:flex lg:items-center">
        <div className="max-w-2xl lg:max-w-3xl space-y-6 sm:space-y-8">
          <h1 className="text-[44px] sm:text-6xl lg:text-[68px] xl:text-[76px] font-extrabold text-white tracking-tight leading-[1.04]">
            Marketing decisions,{' '}<br className="hidden sm:block" />
            <span className="text-purple-300">backed by AI</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-lg lg:max-w-md">
            You don't have to understand marketing. Tell Syncall what you want, and it finds what's working, fixes what isn't, and tells you why in plain English.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
            <button
              onClick={() => onOpenGoalModal()}
              className="px-7 py-3.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm sm:text-base active:scale-[0.98] transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Start Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onScrollToDemo}
              className="px-7 py-3.5 rounded-full bg-white hover:bg-slate-100 text-slate-900 font-semibold text-sm sm:text-base active:scale-[0.98] transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Play className="w-4 h-4 text-purple-600" />
              <span>See how it works</span>
            </button>
          </div>

          <p className="text-xs text-slate-400">No credit card required · Set up in under 5 minutes</p>
        </div>
        </div>

        {/* Connected platforms: continuous marquee (pauses on hover, static for reduced motion) */}
        <div className="mt-16 lg:mt-0 pt-8 border-t border-white/[0.08] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-10">
          <p className="text-base font-semibold text-white shrink-0">Works with</p>
          <div className="group relative min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
            <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:w-full motion-reduce:flex-wrap">
              {[0, 1].map((copy) => (
                <ul
                  key={copy}
                  aria-hidden={copy === 1}
                  className={`flex shrink-0 items-center gap-12 pr-12 ${copy === 1 ? 'motion-reduce:hidden' : 'motion-reduce:flex-wrap motion-reduce:gap-y-4'}`}
                >
                  {INTEGRATIONS.map(({ name, Icon }) => (
                    <li key={name} className="flex items-center gap-3 whitespace-nowrap text-lg font-semibold text-slate-400">
                      <Icon monochrome className="w-6 h-6 shrink-0 text-slate-500" />
                      <span>{name}</span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
