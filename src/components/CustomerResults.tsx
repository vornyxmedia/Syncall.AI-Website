import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface TestimonialCard {
  id: string;
  metric: string;
  metricLabel: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export const CustomerResults: React.FC = () => {
  const { isDuskMode } = useTheme();
  const isV2 = isDuskMode;

  const testimonials: TestimonialCard[] = [
    {
      id: 'rentable',
      metric: '5000+',
      metricLabel: 'data sources streamlined',
      quote: "Syncall has become an essential partner for scaling our reporting, and my teams love it because it saves so much time. We'd recommend it to any team looking to automate data reporting and use AI for insights.",
      author: 'Danielle Roberts',
      role: 'Director of Implementation & Support',
      company: 'Rentable',
      avatar: `${import.meta.env.BASE_URL}avatar-danielle.jpg`,
    },
    {
      id: 'dtch',
      metric: '50%',
      metricLabel: 'decrease in client CPA',
      quote: "Syncall is easy to use, visually attractive, and much smoother compared to complex tools like Looker Studio. Our team spots wasted ad spend instantly.",
      author: 'Stef Oosterik',
      role: 'Quality Manager & Founder',
      company: 'Dtch. Digitals',
      avatar: `${import.meta.env.BASE_URL}avatar-stef.jpg`,
    },
    {
      id: 'yourfellow',
      metric: '65%',
      metricLabel: 'cost savings vs. retainers',
      quote: "The biggest advantage of Syncall is having cross-channel insights all in one place. Traditional agencies were charging ten times more with slower turnaround.",
      author: 'Linda van Baal',
      role: 'Online Marketing Consultant',
      company: 'YourFellow',
      avatar: `${import.meta.env.BASE_URL}avatar-linda.jpg`,
    },
    {
      id: 'aura',
      metric: '3.8x',
      metricLabel: 'blended ROAS pacing',
      quote: "Before Syncall, our ad numbers were just a fog of acronyms. Now we wake up, review our daily plain-English briefing, and execute budget fixes in under 60 seconds.",
      author: 'Marcus Chen',
      role: 'Head of Growth',
      company: 'Aura Commerce',
      avatar: `${import.meta.env.BASE_URL}problem-founder-workspace.jpg`,
    },
  ];

  return (
    <section id="customer-results" className={`relative py-14 sm:py-16 lg:py-[100px] overflow-hidden transition-colors duration-500 ${isV2 ? 'bg-[#070814] text-white' : 'bg-white text-slate-900'}`}>
      {/* Background glow behind the cards */}
      <div className={`absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[380px] rounded-full blur-[140px] pointer-events-none ${
        isV2 ? 'bg-purple-800/35' : 'bg-purple-200/50'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-16">
          <div className="max-w-xl space-y-2">
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] ${isV2 ? 'text-white' : 'text-slate-900'}`}>
              Real numbers from teams that made the switch
            </h2>
          </div>

          <div className={`max-w-xs text-sm sm:text-base leading-relaxed md:pb-1 ${isV2 ? 'text-slate-400' : 'text-slate-500'}`}>
            Forward-thinking teams have already switched to AI-ready marketing intelligence.
          </div>
        </div>

        {/* Testimonial Cards: continuous marquee (pauses on hover, static for reduced motion) */}
        <div className="group -mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-marquee [animation-duration:50s] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                aria-hidden={copy === 1}
                className={`flex shrink-0 items-stretch gap-6 pr-6 ${copy === 1 ? 'motion-reduce:hidden' : ''}`}
              >
                  {testimonials.map((item) => (
                    <div
                      key={`${copy}-${item.id}`}
                      className={`w-[85vw] sm:w-[389px] shrink-0 rounded-2xl overflow-hidden flex flex-col justify-between border transition-all duration-300 ${
                        isV2
                          ? 'bg-[#0e1126] border-white/10 text-white'
                          : 'bg-white border-slate-200/90'
                      }`}
                    >
                      {/* Headline stat */}
                      <div className={`px-7 sm:px-8 pt-7 sm:pt-8 flex items-baseline gap-3 ${isV2 ? 'bg-[#0e1126]' : 'bg-white'}`}>
                        <span className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${isV2 ? 'text-purple-300' : 'text-purple-700'}`}>
                          {item.metric}
                        </span>
                        <span className={`text-xs sm:text-sm font-medium leading-tight max-w-[130px] ${isV2 ? 'text-slate-400' : 'text-slate-500'}`}>
                          {item.metricLabel}
                        </span>
                      </div>

                      {/* Bottom Half: Quote & Author Profile */}
                      <div className={`p-7 sm:p-8 flex flex-col justify-between flex-1 space-y-6 ${isV2 ? 'bg-[#0e1126]' : 'bg-white'}`}>
                        <p className={`text-sm sm:text-[15px] leading-relaxed font-normal ${isV2 ? 'text-slate-300' : 'text-slate-600'}`}>
                          {item.quote}
                        </p>

                        <div className={`flex items-center gap-3 pt-4 border-t ${isV2 ? 'border-white/10' : 'border-slate-100'}`}>
                          <img
                            src={item.avatar}
                            alt={item.author}
                            className={`w-11 h-11 rounded-full object-cover shrink-0 border ${isV2 ? 'border-white/20' : 'border-slate-200'}`}
                          />
                          <div>
                            <h4 className={`text-sm font-bold leading-tight ${isV2 ? 'text-white' : 'text-slate-900'}`}>
                              {item.author}
                            </h4>
                            <p className={`text-xs font-medium pt-0.5 ${isV2 ? 'text-slate-400' : 'text-slate-500'}`}>
                              {item.role} @ {item.company}
                            </p>
                          </div>
                        </div>
                      </div>

                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
