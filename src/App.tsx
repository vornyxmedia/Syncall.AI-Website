import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { MeetTheAi } from './components/MeetTheAi';
import { WhatYouGet } from './components/WhatYouGet';
import { InteractiveDashboardDemo } from './components/InteractiveDashboardDemo';
import { HowItWorks } from './components/HowItWorks';
import { BuiltFor } from './components/BuiltFor';
import { FaqSection } from './components/FaqSection';
import { ClosingCta } from './components/ClosingCta';
import { Footer } from './components/Footer';
import { AuthModal, AuthMode } from './components/AuthModal';
import { ContactModal } from './components/ContactModal';
import { CustomerResults } from './components/CustomerResults';
import { OnePlatformSection } from './components/OnePlatformSection';
import { ThreeKindsOfScale } from './components/ThreeKindsOfScale';

import { ThemeProvider, useTheme } from './context/ThemeContext';

function MainLayout() {
  const { theme, isDuskMode } = useTheme();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<AuthMode>('signup');
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

  const openAuth = (mode: AuthMode) => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const scrollToDemo = () => {
    const el = document.getElementById('live-demo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
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

      {/* Top Navbar */}
      <Navbar 
        onOpenSignUp={() => openAuth('signup')}
        onOpenLogin={() => openAuth('signin')} 
        onOpenContactModal={() => setContactModalOpen(true)} 
      />

      {/* Hero Section */}
      <main>
        <Hero 
          onOpenSignUp={() => openAuth('signup')} 
          onScrollToDemo={scrollToDemo} 
        />

        {/* How it works: 3-Tier Interactive Showcase */}
        <HowItWorks onOpenSignUp={() => openAuth('signup')} />

        {/* Why marketing feels harder than it should */}
        <ProblemSection 
          onOpenSignUp={() => openAuth('signup')} 
          onOpenContactModal={() => setContactModalOpen(true)} 
        />

        {/* Meet the AI: Panoramic 3D Wave Curtain Banner */}
        <MeetTheAi onOpenSignUp={() => openAuth('signup')} />

        {/* Real numbers from teams that made the switch */}
        <CustomerResults />

        {/* One Platform. Tuned to Every Account You Run */}
        <OnePlatformSection 
          onOpenContactModal={() => setContactModalOpen(true)} 
          onOpenSignUp={() => openAuth('signup')} 
        />

        {/* Three Kinds of Scale. One Platform. */}
        <ThreeKindsOfScale onOpenContactModal={() => setContactModalOpen(true)} />

        {/* What you get: 7 Features & Core Spotlight */}
        <WhatYouGet />

        {/* Interactive Dashboard Demo Simulator */}
        <InteractiveDashboardDemo />

        {/* Built for: Personas */}
        <BuiltFor onOpenSignUp={() => openAuth('signup')} />

        {/* Frequently asked questions */}
        <FaqSection onOpenContactModal={() => setContactModalOpen(true)} />

        {/* Closing call to action */}
        <ClosingCta 
          onOpenSignUp={() => openAuth('signup')} 
          onOpenContactModal={() => setContactModalOpen(true)} 
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenSignUp={() => openAuth('signup')}
        onOpenContactModal={() => setContactModalOpen(true)}
      />

      {/* Modals */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
      />
      <ContactModal 
        isOpen={contactModalOpen} 
        onClose={() => setContactModalOpen(false)} 
      />
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  );
}

export default App;
