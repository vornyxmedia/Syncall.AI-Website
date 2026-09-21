import React, { useState, useEffect } from 'react';
import { X, Sparkles, Target, CheckCircle2, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface GoalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialGoal?: string;
}

export const GoalModal: React.FC<GoalModalProps> = ({ isOpen, onClose, initialGoal = '' }) => {
  const [goalText, setGoalText] = useState(initialGoal);
  const [step, setStep] = useState<'input' | 'processing' | 'success'>('input');
  const [selectedPreset, setSelectedPreset] = useState('');
  const [isMounted, setIsMounted] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (initialGoal) {
      setGoalText(initialGoal);
    }
  }, [initialGoal]);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      const timer = setTimeout(() => setIsVisible(true), 20);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
      const timer = setTimeout(() => setIsMounted(false), 350);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isMounted) return null;

  const presets = [
    'Get more customers at a lower cost per sale',
    'Scale store revenue to $50k/month on Shopify',
    'Get 50 qualified B2B sign-ups under $35 CPA',
    'Stop wasting money on underperforming ads',
  ];

  const handleSelectPreset = (preset: string) => {
    setSelectedPreset(preset);
    setGoalText(preset);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!goalText) return;
    setStep('processing');
    setTimeout(() => {
      setStep('success');
    }, 1800);
  };

  const handleReset = () => {
    setIsVisible(false);
    setTimeout(() => {
      setStep('input');
      onClose();
    }, 300);
  };

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleReset();
      }}
    >
      <div 
        className={`relative w-full max-w-lg rounded-3xl bg-white border-2 border-purple-200 p-6 sm:p-8 shadow-2xl shadow-purple-900/20 text-left overflow-hidden transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-3'
        }`}
      >
        
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100/60 rounded-full blur-3xl pointer-events-none" />

        {/* Close button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'input' && (
          <div className="space-y-5">
            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Tell Syncall what you want to achieve
              </h3>
              <p className="text-xs text-slate-600">
                You don't need marketing jargon. Tell us in plain language what success looks like for your business.
              </p>
            </div>

            {/* Presets */}
            <div className="space-y-2">
              <span className="text-[11px] text-slate-500 block uppercase font-bold tracking-wider">
                Popular starter goals:
              </span>
              <div className="grid grid-cols-1 gap-1.5">
                {presets.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => handleSelectPreset(p)}
                    className={`text-left text-xs p-3 rounded-xl border transition-all flex items-center gap-2.5 focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-none ${
                      selectedPreset === p
                        ? 'bg-purple-50 border-purple-500 text-purple-900 font-semibold shadow-xs'
                        : 'bg-slate-50/70 border-slate-200 text-slate-700 hover:border-purple-300 hover:bg-purple-50/50'
                    }`}
                  >
                    <Target className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                    <span>{p}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Input */}
            <form onSubmit={handleSubmit} className="space-y-4 pt-1">
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                  Or describe your goal in your own words:
                </label>
                <textarea
                  rows={2}
                  value={goalText}
                  onChange={(e) => setGoalText(e.target.value)}
                  placeholder="e.g. I want to double my booking rate while keeping ad spend under $2,000 this month..."
                  className="w-full rounded-xl bg-slate-50 border border-purple-200 p-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-purple-600 focus:bg-white"
                  required
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-purple-600/20 active:scale-[0.99] transition-all"
                >
                  <Sparkles className="w-4 h-4 text-purple-200" />
                  <span>Build My Plan & Start Free</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Free 14-day trial
                </span>
                <span>·</span>
                <span>No credit card required</span>
              </div>
            </form>
          </div>
        )}

        {step === 'processing' && (
          <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-purple-50 border-2 border-purple-300 flex items-center justify-center animate-bounce shadow-md">
              <Zap className="w-8 h-8 text-purple-600" />
            </div>
            <div className="space-y-1">
              <h4 className="text-lg font-bold text-slate-900">
                Syncall AI is translating your goal...
              </h4>
              <p className="text-xs text-slate-500">
                Ingesting goal ➜ Calibrating CPA guardrails ➜ Preparing plain-language dashboard
              </p>
            </div>
            <div className="w-48 h-2 bg-slate-100 rounded-full overflow-hidden">
              <div className="w-full h-full bg-gradient-to-r from-purple-600 to-cyan-500 animate-pulse" />
            </div>
          </div>
        )}

        {step === 'success' && (
          <div className="space-y-5 text-center py-4">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-50 border border-emerald-300 flex items-center justify-center text-emerald-600 shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h4 className="text-2xl font-bold text-slate-900">
                Your Goal is Configured!
              </h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Syncall has translated <span className="text-purple-800 font-semibold">"{goalText}"</span> into continuous tracking benchmarks.
              </p>
            </div>

            {/* Generated Plan Preview */}
            <div className="text-left p-4 rounded-2xl bg-purple-50/70 border border-purple-200 text-xs space-y-2">
              <div className="text-[10px] text-purple-700 font-bold uppercase tracking-wider">
                Your Initial 3-Step Action Plan:
              </div>
              <ul className="space-y-1.5 text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">1.</span> Connect your Meta or Google Ads in 1 click
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">2.</span> Syncall audits your active ad sets for wasted budget
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">3.</span> Get your first plain-language briefing report
                </li>
              </ul>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm shadow-md shadow-purple-600/20 transition-colors"
            >
              Open Dashboard Workspace
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
