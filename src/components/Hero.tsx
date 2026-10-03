import React from 'react';
import { HeroV2 } from './HeroV2';

interface HeroProps {
  onOpenSignUp: () => void;
  onScrollToDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSignUp, onScrollToDemo }) => {
  return <HeroV2 onOpenSignUp={onOpenSignUp} onScrollToDemo={onScrollToDemo} />;
};
