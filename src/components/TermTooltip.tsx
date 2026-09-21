import React, { useState } from 'react';
import { MARKETING_GLOSSARY, MarketingTerm } from '../data/marketingTerms';
import { Info, Sparkles } from 'lucide-react';

interface TermTooltipProps {
  term: keyof typeof MARKETING_GLOSSARY;
  children?: React.ReactNode;
}

export const TermTooltip: React.FC<TermTooltipProps> = ({ term, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const data: MarketingTerm | undefined = MARKETING_GLOSSARY[term];

  if (!data) return <span>{children || term}</span>;

  return (
    <span 
      className="relative inline-block cursor-help group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className="underline decoration-purple-300 hover:decoration-purple-600 decoration-dashed underline-offset-4 text-purple-700 hover:text-purple-900 font-semibold transition-colors duration-200">
        {children || data.term}
      </span>
      <Info className="inline-block w-3.5 h-3.5 ml-1 text-purple-500 group-hover:text-purple-700 transition-colors duration-200" />

      <div 
        className={`absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2.5 w-72 sm:w-80 p-3.5 rounded-2xl bg-slate-900/95 border border-purple-500/30 shadow-2xl shadow-purple-950/40 backdrop-blur-xl text-left text-xs pointer-events-auto transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto visible' 
            : 'opacity-0 translate-y-2 pointer-events-none invisible'
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-1.5 mb-2">
          <span className="font-bold text-purple-300 tracking-wide">{data.term}</span>
          <span className="text-[10px] text-slate-400 font-medium">{data.fullName}</span>
        </div>
        <p className="text-slate-200 leading-relaxed mb-2.5 font-sans">{data.plainEnglish}</p>
        <div className="rounded-xl bg-purple-950/70 p-2.5 border border-purple-500/20 text-[11px] text-cyan-300 flex items-start gap-2">
          <Sparkles className="w-3.5 h-3.5 text-cyan-300 shrink-0 mt-0.5" />
          <span>{data.example}</span>
        </div>
        {/* Arrow */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-4 border-transparent border-t-slate-900" />
      </div>
    </span>
  );
};
