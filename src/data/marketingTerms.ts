export interface MarketingTerm {
  term: string;
  fullName: string;
  plainEnglish: string;
  example: string;
}

export const MARKETING_GLOSSARY: Record<string, MarketingTerm> = {
  ROAS: {
    term: 'ROAS',
    fullName: 'Return on Ad Spend',
    plainEnglish: 'How much money you make for every dollar you spend on advertising. A 3.0x ROAS means every $1 spent brings back $3 in revenue.',
    example: 'Spend $1,000, make $3,000 = 3.0x ROAS (Good!)',
  },
  CPA: {
    term: 'CPA',
    fullName: 'Cost Per Acquisition (or Cost Per Sale)',
    plainEnglish: 'The average amount of ad budget it takes to get one paying customer or qualified lead.',
    example: 'Spent $500 to get 20 buyers = $25 CPA.',
  },
  CTR: {
    term: 'CTR',
    fullName: 'Click-Through Rate',
    plainEnglish: 'The percentage of people who saw your ad and actually clicked on it. Tells you if your ad hook and creative are engaging.',
    example: '1,000 views and 30 clicks = 3% CTR.',
  },
  Attribution: {
    term: 'Attribution',
    fullName: 'Multi-Channel Attribution',
    plainEnglish: 'Figuring out which ad actually convinced the customer to buy, especially when they saw your ads on both Google and Meta before purchasing.',
    example: 'Syncall credits both touchpoints fairly instead of guessing.',
  },
  CPM: {
    term: 'CPM',
    fullName: 'Cost Per Mille (Cost Per 1,000 Views)',
    plainEnglish: 'How much the ad network charges just to show your ad 1,000 times to your target audience.',
    example: 'Useful to see if ad auction prices are getting more expensive.',
  },
};
