// Keys are the plan identifiers the sync.all API accepts at sign-up
// (api/src/modules/billing/plans.ts); names and prices are what the site shows.
export type PlanKey = 'grow' | 'scale' | 'agency';

export interface Plan {
  key: PlanKey;
  name: string;
  price: string;
  pricePrefix?: string;
  period?: string;
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
    price: '₹1,200',
    period: '/month',
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
    pricePrefix: 'From',
    price: '₹1,500',
    period: '/month',
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
    price: 'Custom',
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
