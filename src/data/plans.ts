// Mirrors PLANS and PLAN_LIMITS in the sync.all API (api/src/modules/billing/plans.ts).
export type PlanKey = 'starter' | 'grow' | 'scale' | 'agency';

export interface Plan {
  key: PlanKey;
  name: string;
  price: string;
  period?: string;
  note: string;
  features: string[];
  cta: string;
  featured?: boolean;
  contactSales?: boolean;
}

export const PLANS: Plan[] = [
  {
    key: 'starter',
    name: 'Starter',
    price: 'Free',
    note: 'Free forever, no card needed',
    features: [
      '2 connected platform logins',
      '3 synced ad and analytics accounts',
      'Data refreshed every 24 hours',
      '30 days of history',
      '10 AI questions a month',
    ],
    cta: 'Start free',
  },
  {
    key: 'grow',
    name: 'Grow',
    price: '$79',
    period: '/month',
    note: 'First month free, no card needed',
    features: [
      '10 connected platform logins',
      '25 synced ad and analytics accounts',
      'Data refreshed every 6 hours',
      '1 year of history',
      '100 AI questions a month',
    ],
    cta: 'Start your free month',
    featured: true,
  },
  {
    key: 'scale',
    name: 'Scale',
    price: '$199',
    period: '/month',
    note: 'First month free, no card needed',
    features: [
      '25 connected platform logins',
      '100 synced ad and analytics accounts',
      'Data refreshed every hour',
      '2 years of history',
      '500 AI questions a month',
    ],
    cta: 'Start your free month',
  },
  {
    key: 'agency',
    name: 'Agency',
    price: 'Custom',
    note: 'For larger teams and client portfolios',
    features: [
      'Unlimited connected platform logins',
      'Unlimited synced accounts',
      'Data refreshed every hour',
      'Unlimited history',
      'Unlimited AI questions',
    ],
    cta: 'Talk to us',
    contactSales: true,
  },
];

export const planByKey = (key: PlanKey) => PLANS.find((p) => p.key === key)!;
