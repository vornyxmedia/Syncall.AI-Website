import React, { useEffect, useState } from 'react';
import { X, Eye, EyeOff, MailCheck } from 'lucide-react';
import { API_ORIGIN, APP_ORIGIN, CONTACT_EMAIL } from '../config';
import { PlanKey, planByKey } from '../data/plans';

export type AuthMode = 'signin' | 'signup';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: AuthMode;
  plan?: PlanKey;
}

type Status = 'idle' | 'submitting' | 'verify';

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
    subtitle: '',
    submit: 'Create account',
    switchPrompt: 'Already have an account?',
    switchAction: 'Sign in',
  },
};

const UNREACHABLE = `We couldn't reach syncall.ai just now. Please try again in a few minutes, or email ${CONTACT_EMAIL}.`;

const inputClass =
  'w-full rounded-xl bg-white border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-600/15';

const planLine = (key: PlanKey) => {
  const plan = planByKey(key);
  return plan.period ? `${plan.name} plan · ${plan.note}, then ${plan.price}${plan.period}.` : `${plan.name} plan · ${plan.note}.`;
};

async function post(path: string, body: unknown) {
  const res = await fetch(`${API_ORIGIN}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, error: typeof data.error === 'string' ? data.error : null };
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, initialMode = 'signup', plan = 'grow' }) => {
  const [mode, setMode] = useState<AuthMode>(initialMode);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(false);

  // Each open starts on the mode the caller asked for
  useEffect(() => {
    if (isOpen) {
      setMode(initialMode);
      setStatus('idle');
      setError(null);
    }
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
  const submitting = status === 'submitting';

  const switchMode = (next: AuthMode) => {
    setMode(next);
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setStatus('submitting');
    try {
      if (mode === 'signup') {
        const result = await post('/api/auth/signup', {
          name: name.trim(),
          orgName: company.trim(),
          email: email.trim(),
          password,
          plan,
          tosAccepted: acceptedTerms,
        });
        if (!result.ok) throw new Error(result.error ?? 'We could not create your account. Please check the details and try again.');
        setPassword('');
        setStatus('verify');
        return;
      }
      const result = await post('/api/auth/login', { email: email.trim(), password });
      if (!result.ok) throw new Error(result.error ?? 'Invalid email or password');
      window.location.assign(`${APP_ORIGIN}/`);
    } catch (err) {
      setStatus('idle');
      setError(err instanceof TypeError ? UNREACHABLE : (err as Error).message);
    }
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
        className={`relative w-full max-w-md max-h-[calc(100vh-2rem)] overflow-y-auto rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-lg text-left transition-all duration-300 ${
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

        {status === 'verify' ? (
          <div className="mt-8 space-y-4">
            <MailCheck className="w-10 h-10 text-purple-600" />
            <h3 id="auth-modal-title" className="text-2xl font-bold text-slate-900 tracking-tight">Check your inbox</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We sent a verification link to <span className="font-semibold text-slate-900">{email.trim()}</span>. Open it to activate your account, then sign in.
            </p>
            <button
              type="button"
              onClick={() => { setStatus('idle'); switchMode('signin'); }}
              className="w-full py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm transition-colors"
            >
              Go to sign in
            </button>
          </div>
        ) : (
          <>
            <div className="mt-6 space-y-1">
              <h3 id="auth-modal-title" className="text-2xl font-bold text-slate-900 tracking-tight">
                {copy.title}
              </h3>
              <p className="text-sm text-slate-600">{mode === 'signup' ? planLine(plan) : copy.subtitle}</p>
            </div>

            {/* Sign in / Sign up switch */}
            <div className="mt-6 grid grid-cols-2 p-1 rounded-full bg-slate-100 text-sm font-semibold" role="tablist">
              {(['signin', 'signup'] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  role="tab"
                  aria-selected={mode === m}
                  onClick={() => switchMode(m)}
                  className={`py-2 rounded-full transition-colors ${
                    mode === m ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {m === 'signin' ? 'Sign in' : 'Sign up'}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-3.5">
              {mode === 'signup' && (
                <>
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
                      maxLength={120}
                      className={inputClass}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="auth-company" className="text-xs font-semibold text-slate-700 block mb-1.5">
                      Company or agency name
                    </label>
                    <input
                      id="auth-company"
                      type="text"
                      autoComplete="organization"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      maxLength={120}
                      className={inputClass}
                      required
                    />
                  </div>
                </>
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
                    <a href={`${APP_ORIGIN}/forgot-password`} className="text-xs font-semibold text-purple-700 hover:text-purple-800">
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
                    maxLength={200}
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

              {mode === 'signup' && (
                <label className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-600">
                  <input
                    type="checkbox"
                    checked={acceptedTerms}
                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                    className="mt-0.5 h-4 w-4 shrink-0 accent-purple-600"
                    required
                  />
                  <span>
                    I agree to the{' '}
                    <a href="/legal/terms.html" target="_blank" rel="noreferrer" className="underline hover:text-slate-900">Terms of Service</a> and{' '}
                    <a href="/legal/privacy.html" target="_blank" rel="noreferrer" className="underline hover:text-slate-900">Privacy Policy</a>.
                  </span>
                </label>
              )}

              {error && (
                <p role="alert" className="rounded-xl bg-red-50 border border-red-200 px-3.5 py-2.5 text-sm text-red-700">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 rounded-full bg-purple-600 hover:bg-purple-700 disabled:opacity-60 disabled:cursor-wait text-white font-bold text-sm transition-colors"
              >
                {submitting ? 'Please wait…' : copy.submit}
              </button>
            </form>

            <p className="mt-5 text-center text-sm text-slate-600">
              {copy.switchPrompt}{' '}
              <button
                type="button"
                onClick={() => switchMode(mode === 'signin' ? 'signup' : 'signin')}
                className="font-semibold text-purple-700 hover:text-purple-800"
              >
                {copy.switchAction}
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};
