import React from 'react';
import { SiteLayout } from '../components/SiteLayout';
import { useTheme } from '../context/ThemeContext';

export const LEGAL_PAGES = [
  { key: 'terms', label: 'Terms' },
  { key: 'privacy', label: 'Privacy' },
  { key: 'security', label: 'Security' },
  { key: 'subprocessors', label: 'Sub-processors' },
  { key: 'refunds', label: 'Refunds' },
  { key: 'data-deletion', label: 'Data deletion' },
  { key: 'contact', label: 'Contact' },
] as const;

export type LegalPageKey = (typeof LEGAL_PAGES)[number]['key'];

const content = import.meta.glob<string>('./content/*.html', { query: '?raw', import: 'default', eager: true });

interface LegalPageProps {
  page: LegalPageKey;
}

export const LegalPage: React.FC<LegalPageProps> = ({ page }) => {
  const { isDuskMode } = useTheme();
  const isV2 = isDuskMode;
  const html = content[`./content/${page}.html`];

  return (
    <SiteLayout>
      {() => (
        <main className="relative pt-32 sm:pt-36 pb-20 sm:pb-28">
          <div className={`absolute inset-x-0 top-0 h-[28rem] pointer-events-none ${
            isV2 ? 'bg-[radial-gradient(60rem_28rem_at_50%_-10rem,rgba(147,51,234,0.28),transparent_70%)]' : 'bg-[radial-gradient(60rem_28rem_at_50%_-10rem,rgba(233,213,255,0.7),transparent_70%)]'
          }`} />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Legal documents" className="flex gap-2 overflow-x-auto pb-2 mb-10 sm:mb-14 [scrollbar-width:none]">
              {LEGAL_PAGES.map((p) => (
                <a
                  key={p.key}
                  href={`/legal/${p.key}.html`}
                  aria-current={p.key === page ? 'page' : undefined}
                  className={`shrink-0 whitespace-nowrap px-3.5 py-1.5 rounded-full text-[13px] font-semibold border transition-colors ${
                    p.key === page
                      ? 'bg-purple-600 border-purple-600 text-white'
                      : isV2
                        ? 'border-white/10 text-slate-400 hover:text-white hover:border-white/25'
                        : 'border-slate-200 text-slate-600 hover:text-purple-700 hover:border-purple-300'
                  }`}
                >
                  {p.label}
                </a>
              ))}
            </nav>
            <article
              className={`legal-prose ${isV2 ? 'legal-prose--dark' : ''}`}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </main>
      )}
    </SiteLayout>
  );
};
