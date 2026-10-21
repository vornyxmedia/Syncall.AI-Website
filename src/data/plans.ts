// Keys are the plan identifiers the sync.all API accepts at sign-up, and the
// prices mirror PLANS in api/src/modules/billing/plans.ts.
import { Currency, formatPrice } from '../context/CurrencyContext';

export type PlanKey = 'grow' | 'scale' | 'agency';

export interface Plan {
  key: PlanKey;
  name: string;
  prices: Record<Currency, number> | null;
  priceFrom?: boolean;
  note: string;
  features: string[];
  cta: string;
  featured?: boolean;
  contactSales?: boolean;
}

export const PLANS: Plan[] = [
  {
    key: 'grow',
    name: 'Standard',
    prices: { INR: 1200, USD: 29, EUR: 29, GBP: 25 },
    note: 'First month free, no card needed',
    features: [
      'Dashboards across every account you run',
      'CSV and Google Sheets data, with platform connectors as they go live',
      'Anomaly and trend insights',
      'Marketing calculators',
      'Client workspaces for agencies',
    ],
    cta: 'Start your free month',
    featured: true,
  },
  {
    key: 'scale',
    name: 'AI+',
    prices: { INR: 1500, USD: 49, EUR: 49, GBP: 42 },
    priceFrom: true,
    note: 'First month free, no card needed',
    features: [
      'Everything in Standard',
      'Ask your data: questions in plain English, answered from your own numbers',
    ],
    cta: 'Start your free month',
  },
  {
    key: 'agency',
    name: 'Enterprise',
    prices: null,
    note: 'For larger agencies and teams',
    features: [
      'Everything in AI+',
      'Pricing set around your accounts and usage',
    ],
    cta: 'Talk to us',
    contactSales: true,
  },
];

export const planByKey = (key: PlanKey) => PLANS.find((p) => p.key === key)!;

export const planPrice = (plan: Plan, currency: Currency) =>
  plan.prices ? formatPrice(plan.prices[currency], currency) : 'Custom';
