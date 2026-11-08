// Keys are the plan identifiers the sync.all API accepts at sign-up, and the
// prices mirror PLANS in api/src/modules/billing/plans.ts.
import { Currency, formatPrice } from '../context/CurrencyContext';

export type PlanKey = 'launch' | 'grow' | 'scale' | 'agency';

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
    key: 'launch',
    name: 'Launch',
    prices: { INR: 17499, USD: 199, EUR: 199, GBP: 159 },
    note: 'First month free, no card needed',
    features: [
      '10 connected logins and 25 ad accounts',
      'Data refreshed every 6 hours, 1 year of history',
      '100 Ask your data questions a month',
      'Up to 3 users',
    ],
    cta: 'Start your free month',
  },
  {
    key: 'grow',
    name: 'Growth',
    prices: { INR: 34999, USD: 399, EUR: 399, GBP: 319 },
    note: 'First month free, no card needed',
    features: [
      '25 connected logins and 100 ad accounts',
      'Data refreshed every hour, 2 years of history',
      '500 Ask your data questions a month',
      'Up to 10 users',
    ],
    cta: 'Start your free month',
    featured: true,
  },
  {
    key: 'scale',
    name: 'Scale',
    prices: { INR: 65999, USD: 749, EUR: 749, GBP: 599 },
    note: 'First month free, no card needed',
    features: [
      '50 connected logins and 250 ad accounts',
      'Data refreshed every hour, 3 years of history',
      '2,000 Ask your data questions a month',
      'Up to 25 users',
    ],
    cta: 'Start your free month',
  },
  {
    key: 'agency',
    name: 'Enterprise',
    prices: null,
    note: 'For larger agencies and teams',
    features: [
      'Everything in Scale',
      'Pricing set around your accounts and usage',
    ],
    cta: 'Talk to us',
    contactSales: true,
  },
];

export const planByKey = (key: PlanKey) => PLANS.find((p) => p.key === key)!;

export const planPrice = (plan: Plan, currency: Currency) =>
  plan.prices ? formatPrice(plan.prices[currency], currency) : 'Custom';
