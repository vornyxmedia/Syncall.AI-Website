import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '../context/ThemeContext';
import { CurrencyProvider } from '../context/CurrencyContext';
import { AboutPage } from './AboutPage';
import '../index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <CurrencyProvider>
        <AboutPage />
      </CurrencyProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
