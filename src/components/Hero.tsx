import React from 'react';
import { HeroV2 } from './HeroV2';

interface HeroProps {
  onOpenGoalModal: (presetGoal?: string) => void;
  onScrollToDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenGoalModal, onScrollToDemo }) => {
  return <HeroV2 onOpenGoalModal={onOpenGoalModal} onScrollToDemo={onScrollToDemo} />;
};
