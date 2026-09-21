import React, { useState } from 'react';
import { Plus, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  onOpenContactModal?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenContactModal }) => {
  const { isDuskMode } = useTheme();
  const isV2 = isDuskMode;
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default open first question

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqs: FaqItem[] = [
    {
      question: 'Do I need any marketing experience to use Syncall?',
      answer:
        'No. Syncall is built specifically for founders and operators without a marketing background. Every report and recommendation is translated into plain English, with zero assumed knowledge of ad jargon, acronyms, or complex statistics.',
    },
    {
      question: 'How does the AI decide what to recommend?',
      answer:
        'You set your goal in your own words (e.g. "$25 cost per lead" or "scale Shopify sales"). Syncall’s autonomous engine monitors pacing, ad fatigue, and conversion velocity across every connected account, pinpointing the top 2–3 highest-impact actions to take this week.',
    },
    {
      question: 'What if I don\'t understand a term in my report?',
      answer:
        'Every metric comes with built-in, plain-English tooltips. Hover any term you don\'t recognize (like ROAS, CPA, or Attribution) and get an immediate, jargon-free explanation with real-world examples.',
    },
    {
      question: 'Which ad and analytics accounts can I connect?',
      answer:
        'Google Ads, Meta Ads (Facebook & Instagram), TikTok Ads, Google Analytics (GA4), Shopify, and 40+ other commerce, CRM, and advertising platforms in 1 click.',
    },
    {
      question: 'Will this replace hiring a marketer or agency?',
      answer:
        'Syncall is built to get you results without needing to pay thousands in monthly agency retainers. As your business scales, it also gives any future marketer you hire a clean, unified dashboard with full historical attribution.',
    },
  ];

  return (
    <section id="faq" className={`relative py-14 sm:py-16 lg:py-[100px] overflow-hidden transition-colors duration-500 ${isV2 ? 'bg-[#070814] text-white' : 'bg-white text-slate-900'}`}>
      {/* Background ambient lighting */}
      <div className={`absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none ${isV2 ? 'bg-purple-900/20' : 'bg-purple-100/30'}`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Heading & CTA */}
          <div className="lg:col-span-5 relative">
            <span className={`text-xs font-bold uppercase tracking-widest block mb-3 ${isV2 ? 'text-purple-400' : 'text-purple-600'}`}>
              FAQ
            </span>
            <h2 className={`text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.08] ${isV2 ? 'text-white' : 'text-slate-900'}`}>
              Do you have<br />questions
            </h2>

            {/* "More questions" Pill Button */}
            <div className="mt-8 relative z-10">
              <button
                onClick={onOpenContactModal}
                className={
                  isV2
                    ? 'px-7 py-3.5 rounded-full bg-black/90 hover:bg-black text-white font-bold text-sm border border-white/20 shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] active:scale-95 transition-all cursor-pointer inline-flex items-center gap-2'
                    : 'px-7 py-3.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm shadow-lg shadow-purple-600/25 active:scale-95 transition-all cursor-pointer inline-flex items-center gap-2'
                }
              >
                <span>More questions</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: Clean Accordion List */}
          <div className={`lg:col-span-7 divide-y border-t ${
            isV2 ? 'divide-white/10 border-white/10' : 'divide-slate-200/90 border-slate-200/90'
          }`}>
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={index} className="py-6 sm:py-7 transition-colors">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between gap-6 text-left group focus-visible:outline-none cursor-pointer py-1"
                    aria-expanded={isOpen}
                  >
                    <span className={`text-lg sm:text-xl font-bold transition-colors duration-300 ease-out leading-snug ${
                      isV2 
                        ? 'text-white group-hover:text-purple-300' 
                        : 'text-slate-900 group-hover:text-purple-700'
                    }`}>
                      {faq.question}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 shadow-sm transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isOpen 
                          ? 'rotate-45 bg-purple-700 text-white' 
                          : isV2 
                            ? 'bg-[#181d45] border border-white/15 text-white hover:bg-purple-600' 
                            : 'bg-purple-600 hover:bg-purple-700 text-white'
                      }`}
                    >
                      <Plus className="w-5 h-5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                    </div>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className={`pt-4 pr-12 text-sm sm:text-base leading-relaxed ${isV2 ? 'text-slate-300' : 'text-slate-600'}`}>
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
