import React from 'react';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { MeetTheAi } from './components/MeetTheAi';
import { WhatYouGet } from './components/WhatYouGet';
import { InteractiveDashboardDemo } from './components/InteractiveDashboardDemo';
import { HowItWorks } from './components/HowItWorks';
import { BuiltFor } from './components/BuiltFor';
import { Pricing } from './components/Pricing';
import { FaqSection } from './components/FaqSection';
import { ClosingCta } from './components/ClosingCta';
import { OnePlatformSection } from './components/OnePlatformSection';
import { ThreeKindsOfScale } from './components/ThreeKindsOfScale';
import { SiteLayout } from './components/SiteLayout';

import { ThemeProvider } from './context/ThemeContext';

const scrollToDemo = () => {
  const el = document.getElementById('live-demo');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

function HomePage() {
  return (
    <SiteLayout>
      {({ openAuth, openContact }) => {
        const openSignUp = () => openAuth('signup');
        return (
          <main>
            <Hero
              onOpenSignUp={openSignUp}
              onScrollToDemo={scrollToDemo}
            />

            {/* How it works: 3-Tier Interactive Showcase */}
            <HowItWorks onOpenSignUp={openSignUp} />

            {/* Why marketing feels harder than it should */}
            <ProblemSection
              onOpenSignUp={openSignUp}
              onOpenContactModal={openContact}
            />

            {/* Meet the AI: Panoramic 3D Wave Curtain Banner */}
            <MeetTheAi onOpenSignUp={openSignUp} />

            {/* One Platform. Tuned to Every Account You Run */}
            <OnePlatformSection
              onOpenContactModal={openContact}
              onOpenSignUp={openSignUp}
            />

            {/* Three Kinds of Scale. One Platform. */}
            <ThreeKindsOfScale onOpenContactModal={openContact} />

            {/* What you get: 7 Features & Core Spotlight */}
            <WhatYouGet />

            {/* Interactive Dashboard Demo Simulator */}
            <InteractiveDashboardDemo />

            {/* Built for: Personas */}
            <BuiltFor onOpenSignUp={openSignUp} />

            {/* Plans and prices */}
            <Pricing onChoosePlan={(plan) => openAuth('signup', plan)} />

            {/* Frequently asked questions */}
            <FaqSection onOpenContactModal={openContact} />

            {/* Closing call to action */}
            <ClosingCta
              onOpenSignUp={openSignUp}
              onOpenContactModal={openContact}
            />
          </main>
        );
      }}
    </SiteLayout>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
