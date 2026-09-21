import React from 'react';

interface FloatingDiamondProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  rotation?: string;
  colorVariant?: 'purple' | 'cyan' | 'indigo';
  isPaired?: boolean;
  floatDelay?: boolean;
}

export const FloatingDiamond: React.FC<FloatingDiamondProps> = ({
  className = '',
  size = 'md',
  rotation = 'rotate-[45deg]',
  colorVariant = 'purple',
  isPaired = true,
  floatDelay = false,
}) => {
  const sizeClasses = {
    sm: 'w-24 h-24 sm:w-32 sm:h-32 rounded-[20px] sm:rounded-[28px]',
    md: 'w-36 h-36 sm:w-48 sm:h-48 rounded-[28px] sm:rounded-[38px]',
    lg: 'w-48 h-48 sm:w-60 sm:h-60 rounded-[34px] sm:rounded-[46px]',
  }[size];

  const companionSizeClasses = {
    sm: 'w-14 h-14 sm:w-18 sm:h-18 rounded-[12px] sm:rounded-[16px] -top-4 -right-4',
    md: 'w-20 h-20 sm:w-28 sm:h-28 rounded-[16px] sm:rounded-[22px] -top-6 -right-6',
    lg: 'w-28 h-28 sm:w-36 sm:h-36 rounded-[22px] sm:rounded-[30px] -top-8 -right-8',
  }[size];

  const gradientMap = {
    purple: 'from-purple-50/90 via-indigo-50/60 to-white/30 shadow-purple-900/5',
    cyan: 'from-cyan-50/90 via-indigo-50/60 to-white/30 shadow-cyan-900/5',
    indigo: 'from-indigo-50/90 via-purple-50/60 to-white/30 shadow-indigo-900/5',
  };

  return (
    <div className={`pointer-events-none select-none z-0 absolute overflow-visible ${className}`}>
      <div className={`relative ${floatDelay ? 'animate-float-delayed' : 'animate-float'}`}>
        {/* Main Diamond */}
        <div
          className={`${sizeClasses} ${rotation} bg-gradient-to-br ${gradientMap[colorVariant]} border border-white/90 shadow-2xl backdrop-blur-[2px]`}
        />
        {/* Companion Diamond */}
        {isPaired && (
          <div
            className={`absolute ${companionSizeClasses} ${rotation} bg-gradient-to-br from-white/80 via-purple-50/40 to-white/20 border border-white/80 shadow-lg shadow-purple-900/5 -z-10`}
          />
        )}
      </div>
    </div>
  );
};
