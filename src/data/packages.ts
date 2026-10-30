import { Currency } from '../context/CurrencyContext';

export interface ServicePackage {
  name: string;
  audience: string;
  prices: Record<Currency, number>;
  description: string;
  recommended?: boolean;
}

export const PACKAGES: ServicePackage[] = [
  {
    name: 'Launch',
    audience: 'Startups and small businesses',
    prices: { INR: 17499, USD: 199, EUR: 199, GBP: 159 },
    description: 'One ad platform, basic social content, lead tracking and one simple follow-up automation.',
  },
  {
    name: 'Growth',
    audience: 'Growing businesses',
    prices: { INR: 34999, USD: 399, EUR: 399, GBP: 319 },
    description: 'Google and Meta Ads, creative variations, CRM automation and conversion reporting within defined limits.',
    recommended: true,
  },
  {
    name: 'Scale',
    audience: 'Established businesses',
    prices: { INR: 65999, USD: 749, EUR: 749, GBP: 599 },
    description: 'Multi-channel campaigns, expanded creative support, advanced workflows and strategic optimisation.',
  },
];
