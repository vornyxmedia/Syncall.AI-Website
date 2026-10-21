import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '../context/ThemeContext';
import { CurrencyProvider } from '../context/CurrencyContext';
import { LegalPage, LEGAL_PAGES, LegalPageKey } from './LegalPage';
import '../index.css';

const requested = document.body.dataset.page;
const page = LEGAL_PAGES.find((p) => p.key === requested)?.key ?? 'terms';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <CurrencyProvider>
        <LegalPage page={page as LegalPageKey} />
      </CurrencyProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
