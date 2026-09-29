import React from 'react';
import { Store, UserCheck, Users2, Check, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface BuiltForProps {
  onOpenGoalModal?: () => void;
}

export const BuiltFor: React.FC<BuiltForProps> = ({ onOpenGoalModal }) => {
  const { isDuskMode } = useTheme();
  const isV2 = isDuskMode;

  const personas = [
    {
      title: 'Small business owners',
      subtitle: 'Running your own ads and social pages while running everything else.',
      body: "Syncall tells you what's working without a second job learning marketing.",
      icon: Store,
      badge: 'Local Retail, E-Com & Services',
      highlight: 'Saves 8–12 hours every week',
      features: [
        'No complicated spreadsheets to build',
        'Automatic spend guards so you never overspend',
        'Simple weekly WhatsApp / Email digests',
      ],
    },
    {
      title: 'Solo founders & small teams',
      subtitle: 'No budget for a marketing hire yet.',
      body: 'Get the analysis and the recommendations an expert would give, built into your dashboard.',
      icon: UserCheck,
      badge: 'Early-Stage Startups & Bootstrappers',
      highlight: 'Replaces a $4,500/mo retainer',
      features: [
        'Direct multi-touch CAC & ROAS tracking',
        'Clear recommendations on which channels scale',
        'Boardroom-ready reports for co-founders & investors',
      ],
    },
    {
      title: 'Ops, sales, and support teams',
      subtitle: 'Handed marketing duties on top of your real job.',
      body: 'Syncall turns “figure out the ads” into a short list you can act on in minutes.',
      icon: Users2,
      badge: 'Cross-functional Operators',
      highlight: 'Clear actions in 5 minutes a day',
      features: [
        'Ranked to-do list replaces guesswork',
        'Hover jargon-buster for every ad metric',
        'Zero specialized certification required',
      ],
    },
  ];

  return (
    <section id="built-for" className={`relative py-14 sm:py-16 lg:py-[100px] overflow-hidden transition-colors duration-500 ${isV2 ? 'bg-[#070814] text-white' : 'bg-white text-slate-900'}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 sm:mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] ${isV2 ? 'text-white' : 'text-slate-900'}`}>
            Built for people running marketing without a marketing background
          </h2>

          <p className={`text-base sm:text-lg max-w-2xl mx-auto leading-relaxed ${isV2 ? 'text-slate-400' : 'text-slate-500'}`}>
            You don't need agency experience or specialized certifications. Syncall translates cross-channel metrics into confident, daily actions.
          </p>
        </div>

        {/* Persona Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {personas.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div 
                key={idx}
                className={`rounded-2xl p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden transition-all duration-300 border ${
                  isV2 
                    ? 'bg-[#0e1126] border-white/10 text-white' 
                    : 'bg-white border-slate-200/90'
                }`}
              >
                <div className="space-y-6">
                  {/* Top Row: Icon + Persona Category */}
                  <div className="flex items-center justify-between gap-3">
                    <Icon className={`w-6 h-6 shrink-0 ${isV2 ? 'text-purple-300' : 'text-purple-600'}`} />
                    <span className={`text-[11px] font-medium text-right ${isV2 ? 'text-slate-400' : 'text-slate-500'}`}>
                      {p.badge}
                    </span>
                  </div>

                  {/* Title & Pain-Point Subtitle */}
                  <div className="space-y-2">
                    <h3 className={`text-2xl font-bold tracking-tight leading-snug ${isV2 ? 'text-white' : 'text-slate-900'}`}>
                      {p.title}
                    </h3>
                    <p className={`text-xs font-semibold leading-relaxed ${isV2 ? 'text-purple-300' : 'text-purple-700'}`}>
                      {p.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed ${isV2 ? 'text-slate-300' : 'text-slate-600'}`}>
                    {p.body}
                  </p>

                  {/* Persona Feature Bullets */}
                  <ul className="space-y-2.5 pt-2">
                    {p.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isV2 ? 'text-purple-300' : 'text-purple-600'}`} />
                        <span className={`text-sm leading-normal ${isV2 ? 'text-slate-200' : 'text-slate-700'}`}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Impact Line */}
                <div className={`mt-8 pt-5 border-t text-sm font-semibold ${
                  isV2 ? 'border-white/10 text-purple-300' : 'border-slate-100 text-purple-700'
                }`}>
                  {p.highlight}
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Bottom CTA Button */}
        <div className="mt-14 sm:mt-16 flex flex-col items-center justify-center text-center">
          <button
            onClick={onOpenGoalModal}
            className="px-10 py-4 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-base active:scale-95 transition-all cursor-pointer inline-flex items-center gap-2.5"
          >
            <span>Get a Demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className={`mt-6 sm:mt-7 text-xs font-medium ${isV2 ? 'text-slate-400' : 'text-slate-500'}`}>
            Free 14-day trial · No credit card required
          </p>
        </div>

      </div>
    </section>
  );
};

