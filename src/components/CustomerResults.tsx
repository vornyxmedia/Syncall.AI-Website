import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface TestimonialCard {
  id: string;
  metric: string;
  metricLabel: string;
  gradient: string;
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
      gradient: 'from-purple-800 via-purple-700 to-indigo-800',
      quote: "Syncall has become an essential partner for scaling our reporting, and my teams love it because it saves so much time. We'd recommend it to any team looking to automate data reporting and use AI for insights.",
      author: 'Danielle Roberts',
      role: 'Director of Implementation & Support',
      company: 'Rentable',
      avatar: '/avatar-danielle.jpg',
    },
    {
      id: 'dtch',
      metric: '50%',
      metricLabel: 'decrease in client CPA',
      gradient: 'from-indigo-800 via-purple-800 to-purple-700',
      quote: "Syncall is easy to use, visually attractive, and much smoother compared to complex tools like Looker Studio. Our team spots wasted ad spend instantly.",
      author: 'Stef Oosterik',
      role: 'Quality Manager & Founder',
      company: 'Dtch. Digitals',
      avatar: '/avatar-stef.jpg',
    },
    {
      id: 'yourfellow',
      metric: '65%',
      metricLabel: 'cost savings vs. retainers',
      gradient: 'from-purple-800 via-indigo-800 to-indigo-900',
      quote: "The biggest advantage of Syncall is having cross-channel insights all in one place. Traditional agencies were charging ten times more with slower turnaround.",
      author: 'Linda van Baal',
      role: 'Online Marketing Consultant',
      company: 'YourFellow',
      avatar: '/avatar-linda.jpg',
    },
    {
      id: 'aura',
      metric: '3.8x',
      metricLabel: 'blended ROAS pacing',
      gradient: 'from-purple-900 via-indigo-900 to-purple-800',
      quote: "Before Syncall, our ad numbers were just a fog of acronyms. Now we wake up, review our daily plain-English briefing, and execute budget fixes in under 60 seconds.",
      author: 'Marcus Chen',
      role: 'Head of Growth',
      company: 'Aura Commerce',
      avatar: '/problem-founder-workspace.jpg',
    },
  ];

  return (
    <section id="customer-results" className={`relative py-14 sm:py-16 lg:py-[100px] overflow-hidden transition-colors duration-500 ${isV2 ? 'bg-[#070814] text-white' : 'bg-white text-slate-900'}`}>
      {/* Background ambient lighting */}
      <div className={`absolute top-1/2 left-1/4 w-[700px] h-[450px] rounded-full blur-[160px] pointer-events-none ${isV2 ? 'bg-purple-900/20' : 'bg-purple-100/40'}`} />

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

        {/* Testimonial Cards — Infinite Auto-Scrolling Marquee */}
        <div className="relative overflow-hidden -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 pt-4 pb-14 -mt-4 -mb-8">
          {/* Edge fade masks */}
          <div className={`absolute left-0 top-4 bottom-14 w-16 sm:w-28 lg:w-36 z-20 pointer-events-none bg-gradient-to-r ${isV2 ? 'from-[#070814] via-[#070814]/80' : 'from-white via-white/80'} to-transparent`} />
          <div className={`absolute right-0 top-4 bottom-14 w-16 sm:w-28 lg:w-36 z-20 pointer-events-none bg-gradient-to-l ${isV2 ? 'from-[#070814] via-[#070814]/80' : 'from-white via-white/80'} to-transparent`} />

          <div className="group flex w-full overflow-hidden">
            {[0, 1].map((trackIndex) => (
              <div
                key={trackIndex}
                className="flex shrink-0 gap-6 pr-6 animate-marquee [animation-duration:50s] group-hover:[animation-play-state:paused]"
                aria-hidden={trackIndex === 1}
              >
                {testimonials.map((item) => (
                  <div
                    key={`${trackIndex}-${item.id}`}
                    className={`w-[85vw] sm:w-[380px] lg:w-[420px] shrink-0 rounded-[32px] overflow-hidden flex flex-col justify-between border transition-all duration-300 ${
                      isV2
                        ? 'bg-[#0e1126] border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] text-white'
                        : 'bg-white border-slate-200/90 shadow-xl shadow-purple-950/5'
                    }`}
                  >
                    {/* Top Half: Vibrant Gradient Banner with Big Stat */}
                    <div className={`p-7 sm:p-8 bg-gradient-to-r ${item.gradient} text-white flex flex-col justify-between h-44 sm:h-48 relative overflow-hidden`}>

                      {/* Subtle inner lighting */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />

                      {/* Top Row: Empty Left + Top-Right Diagonal Arrow Badge */}
                      <div className="flex justify-end relative z-10">
                        <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Bottom Row: Big Stat & Label */}
                      <div className="flex items-baseline gap-3 relative z-10">
                        <span className="text-4xl sm:text-5xl font-black tracking-tight text-white">
                          {item.metric}
                        </span>
                        <span className="text-xs sm:text-sm font-medium text-white/90 leading-tight max-w-[130px]">
                          {item.metricLabel}
                        </span>
                      </div>
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
                          className={`w-11 h-11 rounded-full object-cover shrink-0 shadow-sm border ${isV2 ? 'border-white/20' : 'border-slate-200'}`}
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
