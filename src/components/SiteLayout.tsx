import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ContactModal } from './ContactModal';
import { useTheme } from '../context/ThemeContext';
import { APP_ORIGIN } from '../config';

export type AuthMode = 'signin' | 'signup';
export type PlanKey = 'launch' | 'grow' | 'scale';

export interface SiteActions {
  openAuth: (mode: AuthMode, plan?: PlanKey) => void;
  openContact: () => void;
}

interface SiteLayoutProps {
  children: (actions: SiteActions) => React.ReactNode;
}

export const SiteLayout: React.FC<SiteLayoutProps> = ({ children }) => {
  const { isDuskMode } = useTheme();
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / totalScroll) * 100)));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const actions: SiteActions = {
    openAuth: (mode, plan = 'grow') => {
      window.location.assign(mode === 'signin' ? `${APP_ORIGIN}/login` : `${APP_ORIGIN}/signup?plan=${plan}`);
    },
    openContact: () => setContactModalOpen(true),
  };

  return (
    <div className={`relative min-h-screen font-sans transition-colors duration-500 ${
      isDuskMode
        ? 'bg-[#070814] text-white selection:bg-purple-500 selection:text-white'
        : 'bg-white text-slate-900 selection:bg-purple-600 selection:text-white'
    }`}>
      {/* Top Scroll Reading Progress Indicator */}
      <div
        className="fixed top-0 left-0 right-0 h-[3px] bg-purple-500 z-[100] origin-left pointer-events-none transition-[width] duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navbar
        onOpenSignUp={() => actions.openAuth('signup')}
        onOpenLogin={() => actions.openAuth('signin')}
        onOpenContactModal={actions.openContact}
      />

      {children(actions)}

      <Footer
        onOpenSignUp={() => actions.openAuth('signup')}
        onOpenContactModal={actions.openContact}
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
};
