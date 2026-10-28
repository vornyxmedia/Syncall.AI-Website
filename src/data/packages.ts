export interface ServicePackage {
  name: string;
  audience: string;
  priceUsd: number;
  description: string;
  recommended?: boolean;
}

export const PACKAGES: ServicePackage[] = [
  {
    name: 'Launch',
    audience: 'Startups and small businesses',
    priceUsd: 199,
    description: 'One ad platform, basic social content, lead tracking and one simple follow-up automation.',
  },
  {
    name: 'Growth',
    audience: 'Growing businesses',
    priceUsd: 399,
    description: 'Google and Meta Ads, creative variations, CRM automation and conversion reporting within defined limits.',
    recommended: true,
  },
  {
    name: 'Scale',
    audience: 'Established businesses',
    priceUsd: 749,
    description: 'Multi-channel campaigns, expanded creative support, advanced workflows and strategic optimisation.',
  },
];
