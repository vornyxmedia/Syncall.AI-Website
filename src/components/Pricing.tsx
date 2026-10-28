import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { PLANS, PlanKey, planPrice } from '../data/plans';
import { CURRENCIES, CURRENCY_NAMES, formatPrice, useCurrency } from '../context/CurrencyContext';
import { PACKAGES } from '../data/packages';
import { CONTACT_EMAIL } from '../config';

interface PricingProps {
  onChoosePlan: (plan: PlanKey) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onChoosePlan }) => {
  const { isDuskMode } = useTheme();
  const isV2 = isDuskMode;
  const { currency, setCurrency } = useCurrency();

  return (
    <section id="pricing" className={`relative py-14 sm:py-16 lg:py-[100px] overflow-hidden transition-colors duration-500 ${isV2 ? 'bg-[#070814] text-white' : 'bg-white text-slate-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 sm:mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] ${isV2 ? 'text-white' : 'text-slate-900'}`}>
            Simple pricing. First month free.
          </h2>
          <p className={`text-base sm:text-lg max-w-2xl mx-auto leading-relaxed ${isV2 ? 'text-slate-400' : 'text-slate-500'}`}>
            Try Standard or AI+ free for your first month, with no credit card. Cancel any time.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div role="radiogroup" aria-label="Currency" className={`inline-flex p-1 rounded-full text-sm font-semibold ${isV2 ? 'bg-white/[0.06] border border-white/10' : 'bg-slate-100'}`}>
            {CURRENCIES.map((c) => (
              <button
                key={c}
                type="button"
                role="radio"
                aria-checked={currency === c}
                onClick={() => setCurrency(c)}
                className={`px-4 py-1.5 rounded-full transition-colors cursor-pointer ${
                  currency === c
                    ? 'bg-purple-600 text-white'
                    : isV2 ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PLANS.map((plan) => (
            <div
              key={plan.key}
              className={`rounded-2xl p-7 flex flex-col border transition-all duration-300 ${
                plan.featured
                  ? isV2 ? 'bg-[#131738] border-purple-500/60' : 'bg-purple-50/60 border-purple-300'
                  : isV2 ? 'bg-[#0e1126] border-white/10' : 'bg-white border-slate-200/90'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className={`text-xl font-bold tracking-tight ${isV2 ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
                {plan.prices && (
                  <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${isV2 ? 'bg-purple-500/20 text-purple-200' : 'bg-purple-100 text-purple-700'}`}>
                    1 month free
                  </span>
                )}
              </div>

              <div className="mt-5 flex items-baseline gap-1">
                {plan.priceFrom && <span className={`text-sm font-medium mr-1 ${isV2 ? 'text-slate-400' : 'text-slate-500'}`}>From</span>}
                <span className={`text-4xl font-extrabold tracking-tight ${isV2 ? 'text-white' : 'text-slate-900'}`}>{planPrice(plan, currency)}</span>
                {plan.prices && <span className={`text-sm font-medium ${isV2 ? 'text-slate-400' : 'text-slate-500'}`}>/month</span>}
              </div>
              <p className={`mt-1.5 text-xs font-semibold ${isV2 ? 'text-purple-300' : 'text-purple-700'}`}>{plan.note}</p>

              <ul className="mt-7 space-y-2.5 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isV2 ? 'text-purple-300' : 'text-purple-600'}`} />
                    <span className={`text-sm leading-normal ${isV2 ? 'text-slate-200' : 'text-slate-700'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.contactSales ? (
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Enterprise plan')}`}
                  className={`mt-8 w-full py-3 rounded-full font-bold text-sm inline-flex items-center justify-center gap-2 border transition-colors ${
                    isV2 ? 'border-white/20 text-white hover:bg-white/10' : 'border-slate-300 text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => onChoosePlan(plan.key)}
                  className={`mt-8 w-full py-3 rounded-full font-bold text-sm inline-flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                    plan.featured
                      ? 'bg-purple-600 hover:bg-purple-700 text-white'
                      : isV2 ? 'border border-white/20 text-white hover:bg-white/10' : 'border border-slate-300 text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          ))}
        </div>

        <p className={`mt-10 text-center text-xs font-medium ${isV2 ? 'text-slate-400' : 'text-slate-500'}`}>
          Prices in {CURRENCY_NAMES[currency]}. No card is taken during the free month, so nothing is charged unless you choose to subscribe. See our{' '}
          <a href="/legal/refunds.html" className="underline hover:text-purple-500">refund policy</a>.
        </p>

        <div className="mt-20 max-w-5xl mx-auto">
          <h3 className={`text-2xl sm:text-3xl font-extrabold tracking-tight text-center ${isV2 ? 'text-white' : 'text-slate-900'}`}>
            Bundled monthly packages
          </h3>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-7 flex flex-col border transition-all duration-300 ${
                  pkg.recommended
                    ? isV2 ? 'bg-[#131738] border-purple-500/60' : 'bg-purple-50/60 border-purple-300'
                    : isV2 ? 'bg-[#0e1126] border-white/10' : 'bg-white border-slate-200/90'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h4 className={`text-xl font-bold tracking-tight ${isV2 ? 'text-white' : 'text-slate-900'}`}>{pkg.name}</h4>
                  {pkg.recommended && (
                    <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${isV2 ? 'bg-purple-500/20 text-purple-200' : 'bg-purple-100 text-purple-700'}`}>
                      Recommended
                    </span>
                  )}
                </div>
                <p className={`mt-1.5 text-sm ${isV2 ? 'text-slate-400' : 'text-slate-500'}`}>{pkg.audience}</p>

                <div className="mt-5 flex items-baseline gap-1">
                  <span className={`text-4xl font-extrabold tracking-tight ${isV2 ? 'text-white' : 'text-slate-900'}`}>{formatPrice(pkg.priceUsd, 'USD')}</span>
                  <span className={`text-sm font-medium ${isV2 ? 'text-slate-400' : 'text-slate-500'}`}>/month</span>
                </div>

                <p className={`mt-5 text-sm leading-relaxed flex-1 ${isV2 ? 'text-slate-200' : 'text-slate-700'}`}>{pkg.description}</p>

                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`${pkg.name} package`)}`}
                  className={`mt-8 w-full py-3 rounded-full font-bold text-sm inline-flex items-center justify-center gap-2 transition-colors ${
                    pkg.recommended
                      ? 'bg-purple-600 hover:bg-purple-700 text-white'
                      : isV2 ? 'border border-white/20 text-white hover:bg-white/10' : 'border border-slate-300 text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  Talk to us
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>

          <p className={`mt-10 text-center text-xs font-medium ${isV2 ? 'text-slate-400' : 'text-slate-500'}`}>
            Packages are priced in US dollars. Ad spend, third-party subscriptions and substantial production costs are billed separately.
          </p>
        </div>
      </div>
    </section>
  );
};
