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
import { GoalModal } from './components/GoalModal';
import { ContactModal } from './components/ContactModal';
import { CustomerResults } from './components/CustomerResults';
import { OnePlatformSection } from './components/OnePlatformSection';
import { ThreeKindsOfScale } from './components/ThreeKindsOfScale';

import { ThemeProvider, useTheme } from './context/ThemeContext';

function MainLayout() {
  const { theme, isDuskMode } = useTheme();
  const [goalModalOpen, setGoalModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [activeGoalPreset, setActiveGoalPreset] = useState<string>('');
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

  const handleOpenGoalModal = (preset?: string) => {
    setActiveGoalPreset(preset || '');
    setGoalModalOpen(true);
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
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 z-[100] origin-left pointer-events-none transition-[width] duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Top Navbar */}
      <Navbar 
        onOpenGoalModal={() => handleOpenGoalModal()} 
        onOpenContactModal={() => setContactModalOpen(true)} 
      />

      {/* Hero Section */}
      <main>
        <Hero 
          onOpenGoalModal={handleOpenGoalModal} 
          onScrollToDemo={scrollToDemo} 
        />

        {/* How it works: 3-Tier Interactive Showcase */}
        <HowItWorks onOpenGoalModal={() => handleOpenGoalModal()} />

        {/* Why marketing feels harder than it should */}
        <ProblemSection 
          onOpenGoalModal={() => handleOpenGoalModal()} 
          onOpenContactModal={() => setContactModalOpen(true)} 
        />

        {/* Meet the AI: Panoramic 3D Wave Curtain Banner */}
        <MeetTheAi onOpenGoalModal={() => handleOpenGoalModal()} />

        {/* Real numbers from teams that made the switch */}
        <CustomerResults />

        {/* One Platform. Tuned to Every Account You Run */}
        <OnePlatformSection 
          onOpenContactModal={() => setContactModalOpen(true)} 
          onOpenGoalModal={() => handleOpenGoalModal()} 
        />

        {/* Three Kinds of Scale. One Platform. */}
        <ThreeKindsOfScale onOpenContactModal={() => setContactModalOpen(true)} />

        {/* What you get: 7 Features & Core Spotlight */}
        <WhatYouGet />

        {/* Interactive Dashboard Demo Simulator */}
        <InteractiveDashboardDemo />

        {/* Built for: Personas */}
        <BuiltFor onOpenGoalModal={() => handleOpenGoalModal()} />

        {/* Frequently asked questions */}
        <FaqSection onOpenContactModal={() => setContactModalOpen(true)} />

        {/* Closing call to action */}
        <ClosingCta 
          onOpenGoalModal={() => handleOpenGoalModal()} 
          onOpenContactModal={() => setContactModalOpen(true)} 
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenGoalModal={() => handleOpenGoalModal()}
        onOpenContactModal={() => setContactModalOpen(true)}
      />

      {/* Modals */}
      <GoalModal 
        isOpen={goalModalOpen} 
        onClose={() => setGoalModalOpen(false)} 
        initialGoal={activeGoalPreset} 
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
