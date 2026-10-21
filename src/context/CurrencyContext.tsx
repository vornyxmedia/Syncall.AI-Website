import React, { createContext, useContext, useState } from 'react';

export const CURRENCIES = ['INR', 'USD', 'EUR', 'GBP'] as const;
export type Currency = (typeof CURRENCIES)[number];

export const CURRENCY_NAMES: Record<Currency, string> = {
  INR: 'Indian rupees',
  USD: 'US dollars',
  EUR: 'euros',
  GBP: 'British pounds',
};

const STORAGE_KEY = 'syncall_currency';

const GBP_ZONES = new Set(['Europe/London', 'Europe/Belfast', 'Europe/Jersey', 'Europe/Guernsey', 'Europe/Isle_of_Man']);
const EUR_ZONES = new Set([
  'Europe/Amsterdam', 'Europe/Andorra', 'Europe/Athens', 'Europe/Berlin', 'Europe/Bratislava', 'Europe/Brussels',
  'Europe/Dublin', 'Europe/Helsinki', 'Europe/Lisbon', 'Europe/Ljubljana', 'Europe/Luxembourg', 'Europe/Madrid',
  'Europe/Malta', 'Europe/Monaco', 'Europe/Paris', 'Europe/Podgorica', 'Europe/Riga', 'Europe/Rome',
  'Europe/San_Marino', 'Europe/Tallinn', 'Europe/Vatican', 'Europe/Vienna', 'Europe/Vilnius', 'Europe/Zagreb',
  'Europe/Nicosia', 'Asia/Nicosia', 'Asia/Famagusta', 'Atlantic/Azores', 'Atlantic/Madeira', 'Atlantic/Canary',
  'Africa/Ceuta', 'Europe/Mariehamn',
]);

function detectCurrency(): Currency {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && (CURRENCIES as readonly string[]).includes(saved)) return saved as Currency;
  } catch (e) {}
  try {
    const zone = Intl.DateTimeFormat().resolvedOptions().timeZone ?? '';
    if (zone === 'Asia/Kolkata' || zone === 'Asia/Calcutta') return 'INR';
    if (GBP_ZONES.has(zone)) return 'GBP';
    if (EUR_ZONES.has(zone)) return 'EUR';
  } catch (e) {}
  return 'USD';
}

export function formatPrice(amount: number, currency: Currency): string {
  return new Intl.NumberFormat(currency === 'INR' ? 'en-IN' : 'en', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrencyState] = useState<Currency>(detectCurrency);

  const setCurrency = (next: Currency) => {
    setCurrencyState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (e) {}
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) throw new Error('useCurrency must be used within a CurrencyProvider');
  return context;
};
