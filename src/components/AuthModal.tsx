import React, { useEffect, useState } from 'react';
import { X, Eye, EyeOff } from 'lucide-react';
import { GoogleGColorLogo } from './BrandLogos';

export type AuthMode = 'signin' | 'signup';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: AuthMode;
}

const COPY: Record<AuthMode, { title: string; subtitle: string; submit: string; switchPrompt: string; switchAction: string }> = {
  signin: {
    title: 'Welcome back',
    subtitle: 'Sign in to see what your accounts did while you were away.',
    submit: 'Sign in',
    switchPrompt: "Don't have an account?",
    switchAction: 'Sign up',
  },
  signup: {
    title: 'Create your account',
    subtitle: 'Free for 14 days. No credit card required.',
    submit: 'Create account',
    switchPrompt: 'Already have an account?',
    switchAction: 'Sign in',
  },
};

const inputClass =
  'w-full rounded-xl bg-white border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-600/15';

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, initialMode = 'signup' }) => {
  const [mode, setMode] = useState<AuthMode>(initialMode);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isMounted, setIsMounted] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(false);

  // Each open starts on the mode the caller asked for
  useEffect(() => {
    if (isOpen) setMode(initialMode);
  }, [isOpen, initialMode]);

  // Mount/unmount around the fade so the exit transition can play
  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      const timer = setTimeout(() => setIsVisible(true), 20);
      return () => clearTimeout(timer);
    }
    setIsVisible(false);
    const timer = setTimeout(() => setIsMounted(false), 300);
    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isMounted) return null;

  const copy = COPY[mode];

  // TODO: connect to the auth provider (Google OAuth + email/password). No backend exists yet.
  const handleGoogle = () => {};
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-modal-title"
        className={`relative w-full max-w-md rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-lg text-left transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Syncall" className="h-6 w-auto" />

        <div className="mt-6 space-y-1">
          <h3 id="auth-modal-title" className="text-2xl font-bold text-slate-900 tracking-tight">
            {copy.title}
          </h3>
          <p className="text-sm text-slate-600">{copy.subtitle}</p>
        </div>

        {/* Sign in / Sign up switch */}
        <div className="mt-6 grid grid-cols-2 p-1 rounded-full bg-slate-100 text-sm font-semibold" role="tablist">
          {(['signin', 'signup'] as const).map((m) => (
            <button
              key={m}
              type="button"
              role="tab"
              aria-selected={mode === m}
              onClick={() => setMode(m)}
              className={`py-2 rounded-full transition-colors ${
                mode === m ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {m === 'signin' ? 'Sign in' : 'Sign up'}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={handleGoogle}
          className="mt-5 w-full flex items-center justify-center gap-2.5 py-2.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-sm font-semibold text-slate-900 transition-colors"
        >
          <GoogleGColorLogo className="w-[18px] h-[18px]" />
          Continue with Google
        </button>

        <div className="my-5 flex items-center gap-3 text-xs text-slate-400">
          <span className="h-px flex-1 bg-slate-200" />
          or with email
          <span className="h-px flex-1 bg-slate-200" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          {mode === 'signup' && (
            <div>
              <label htmlFor="auth-name" className="text-xs font-semibold text-slate-700 block mb-1.5">
                Full name
              </label>
              <input
                id="auth-name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Cooper"
                className={inputClass}
                required
              />
            </div>
          )}

          <div>
            <label htmlFor="auth-email" className="text-xs font-semibold text-slate-700 block mb-1.5">
              Work email
            </label>
            <input
              id="auth-email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className={inputClass}
              required
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label htmlFor="auth-password" className="text-xs font-semibold text-slate-700">
                Password
              </label>
              {mode === 'signin' && (
                <a href="#" className="text-xs font-semibold text-purple-700 hover:text-purple-800">
                  Forgot password?
                </a>
              )}
            </div>
            <div className="relative">
              <input
                id="auth-password"
                type={showPassword ? 'text' : 'password'}
                autoComplete={mode === 'signin' ? 'current-password' : 'new-password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={mode === 'signup' ? 'At least 8 characters' : 'Your password'}
                minLength={mode === 'signup' ? 8 : undefined}
                className={`${inputClass} pr-11`}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute inset-y-0 right-0 px-3 flex items-center text-slate-400 hover:text-slate-700"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm transition-colors"
          >
            {copy.submit}
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-slate-600">
          {copy.switchPrompt}{' '}
          <button
            type="button"
            onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
            className="font-semibold text-purple-700 hover:text-purple-800"
          >
            {copy.switchAction}
          </button>
        </p>

        {mode === 'signup' && (
          <p className="mt-4 text-center text-[11px] leading-relaxed text-slate-400">
            By creating an account you agree to our{' '}
            <a href="#" className="underline hover:text-slate-600">Terms of Service</a> and{' '}
            <a href="#" className="underline hover:text-slate-600">Privacy Policy</a>.
          </p>
        )}
      </div>
    </div>
  );
};
