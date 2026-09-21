import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, ArrowRight, Sparkles, Layers, Target, FileText, Zap, HelpCircle, Store, UserCheck, Users2, ShieldCheck, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenGoalModal: () => void;
  onOpenContactModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenGoalModal, onOpenContactModal }) => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 240);
  };

  const handleLinkClick = (href: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    if (href.startsWith('#')) {
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }
    }
  };

  const isDarkHeader = (theme === 'light' && !scrolled) || theme === 'dark';

  return (
    <header className="fixed top-4 sm:top-5 inset-x-0 z-50 pointer-events-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        <div 
          className={`pointer-events-auto w-full rounded-full transition-all duration-500 ease-out px-4 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between ${
            isDarkHeader
              ? 'bg-[#070814]/75 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/40 text-white'
              : scrolled 
                ? 'bg-white/95 backdrop-blur-2xl border border-purple-200/90 shadow-xl shadow-purple-950/10 text-slate-900' 
                : 'bg-white/90 backdrop-blur-xl border border-slate-200/80 shadow-lg shadow-purple-950/5 text-slate-900'
          }`}
        >
        
        {/* Left: Brand Logo & Desktop Nav Links (Whatagraph layout) */}
        <div className="flex items-center gap-7 lg:gap-9">
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              window.history.pushState(null, '', ' ');
            }}
            className="flex items-center shrink-0 cursor-pointer"
          >
            <img 
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="Syncall.ai" 
              className={`h-7 sm:h-8 w-auto object-contain transition-all ${isDarkHeader ? 'brightness-0 invert' : ''}`} 
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            
            {/* 1. Product Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('product')}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className={`flex items-center gap-1.5 text-sm font-semibold transition-colors duration-300 py-1.5 ${
                  isDarkHeader
                    ? activeDropdown === 'product' ? 'text-purple-300' : 'text-slate-200 hover:text-white'
                    : activeDropdown === 'product' ? 'text-purple-700' : 'text-slate-700 hover:text-purple-700'
                }`}
                onClick={() => setActiveDropdown(activeDropdown === 'product' ? null : 'product')}
              >
                <span>Product</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ease-out ${
                  activeDropdown === 'product' 
                    ? isDarkHeader ? 'rotate-180 text-purple-300' : 'rotate-180 text-purple-700' 
                    : isDarkHeader ? 'text-slate-400' : 'text-slate-400'
                }`} />
              </button>

              {/* Product Dropdown Card */}
              <div 
                className={`absolute top-full pt-3 left-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  activeDropdown === 'product'
                    ? 'opacity-100 translate-y-0 pointer-events-auto visible'
                    : 'opacity-0 translate-y-2 pointer-events-none invisible'
                }`}
              >
                <div className="w-80 rounded-2xl bg-white/95 backdrop-blur-xl border border-purple-100/90 shadow-2xl shadow-purple-950/15 p-3.5 space-y-1">
                  <a 
                    href="#what-you-get" 
                    onClick={() => handleLinkClick('#what-you-get')}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-purple-50/70 transition-colors duration-200 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 ease-out">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block group-hover:text-purple-700 transition-colors duration-200">AI Campaign Optimization</span>
                      <p className="text-[11px] text-slate-500 leading-snug">Autonomously pauses bad ads and shifts budget</p>
                    </div>
                  </a>

                  <a 
                    href="#what-you-get" 
                    onClick={() => handleLinkClick('#what-you-get')}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-purple-50/70 transition-colors duration-200 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 ease-out">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block group-hover:text-purple-700 transition-colors duration-200">Plain-Language Reports</span>
                      <p className="text-[11px] text-slate-500 leading-snug">Clear summaries of what happened and why</p>
                    </div>
                  </a>

                  <a 
                    href="#live-demo" 
                    onClick={() => handleLinkClick('#live-demo')}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-purple-50/70 transition-colors duration-200 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 ease-out">
                      <Target className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block group-hover:text-purple-700 transition-colors duration-200">Live Dashboard Simulator</span>
                      <p className="text-[11px] text-slate-500 leading-snug">Interactive real-time metrics and to-do list</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* 2. Integrations (Direct Link) */}
            <a 
              href="#live-demo" 
              onClick={() => handleLinkClick('#live-demo')}
              className={`text-sm font-semibold transition-colors duration-300 py-1.5 ${
                isDarkHeader ? 'text-slate-200 hover:text-white' : 'text-slate-700 hover:text-purple-700'
              }`}
            >
              Integrations
            </a>

            {/* 3. Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('solutions')}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className={`flex items-center gap-1.5 text-sm font-semibold transition-colors duration-300 py-1.5 ${
                  isDarkHeader
                    ? activeDropdown === 'solutions' ? 'text-purple-300' : 'text-slate-200 hover:text-white'
                    : activeDropdown === 'solutions' ? 'text-purple-700' : 'text-slate-700 hover:text-purple-700'
                }`}
                onClick={() => setActiveDropdown(activeDropdown === 'solutions' ? null : 'solutions')}
              >
                <span>Solutions</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ease-out ${
                  activeDropdown === 'solutions' 
                    ? isDarkHeader ? 'rotate-180 text-purple-300' : 'rotate-180 text-purple-700' 
                    : isDarkHeader ? 'text-slate-400' : 'text-slate-400'
                }`} />
              </button>

              {/* Solutions Dropdown Card */}
              <div 
                className={`absolute top-full pt-3 left-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  activeDropdown === 'solutions'
                    ? 'opacity-100 translate-y-0 pointer-events-auto visible'
                    : 'opacity-0 translate-y-2 pointer-events-none invisible'
                }`}
              >
                <div className="w-80 rounded-2xl bg-white/95 backdrop-blur-xl border border-purple-100/90 shadow-2xl shadow-purple-950/15 p-3.5 space-y-1">
                  <a 
                    href="#built-for" 
                    onClick={() => handleLinkClick('#built-for')}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-purple-50/70 transition-colors duration-200 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 ease-out">
                      <Store className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block group-hover:text-purple-700 transition-colors duration-200">Small Business Owners</span>
                      <p className="text-[11px] text-slate-500 leading-snug">Run ads without a second job learning marketing</p>
                    </div>
                  </a>

                  <a 
                    href="#built-for" 
                    onClick={() => handleLinkClick('#built-for')}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-purple-50/70 transition-colors duration-200 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 ease-out">
                      <UserCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block group-hover:text-purple-700 transition-colors duration-200">Solo Founders & Small Teams</span>
                      <p className="text-[11px] text-slate-500 leading-snug">Expert analysis built right into your workspace</p>
                    </div>
                  </a>

                  <a 
                    href="#built-for" 
                    onClick={() => handleLinkClick('#built-for')}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-purple-50/70 transition-colors duration-200 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 ease-out">
                      <Users2 className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block group-hover:text-purple-700 transition-colors duration-200">Ops, Sales & Support</span>
                      <p className="text-[11px] text-slate-500 leading-snug">Turn ad management into a 5-minute to-do list</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* 4. Pricing (Direct Link to Free Trial) */}
            <button 
              onClick={onOpenGoalModal}
              className={`text-sm font-semibold transition-colors duration-300 py-1.5 text-left ${
                isDarkHeader ? 'text-slate-200 hover:text-white' : 'text-slate-700 hover:text-purple-700'
              }`}
            >
              Pricing
            </button>

            {/* 5. Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('resources')}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className={`flex items-center gap-1.5 text-sm font-semibold transition-colors duration-300 py-1.5 ${
                  isDarkHeader
                    ? activeDropdown === 'resources' ? 'text-purple-300' : 'text-slate-200 hover:text-white'
                    : activeDropdown === 'resources' ? 'text-purple-700' : 'text-slate-700 hover:text-purple-700'
                }`}
                onClick={() => setActiveDropdown(activeDropdown === 'resources' ? null : 'resources')}
              >
                <span>Resources</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ease-out ${
                  activeDropdown === 'resources' 
                    ? isDarkHeader ? 'rotate-180 text-purple-300' : 'rotate-180 text-purple-700' 
                    : isDarkHeader ? 'text-slate-400' : 'text-slate-400'
                }`} />
              </button>

              {/* Resources Dropdown Card */}
              <div 
                className={`absolute top-full pt-3 left-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  activeDropdown === 'resources'
                    ? 'opacity-100 translate-y-0 pointer-events-auto visible'
                    : 'opacity-0 translate-y-2 pointer-events-none invisible'
                }`}
              >
                <div className="w-80 rounded-2xl bg-white/95 backdrop-blur-xl border border-purple-100/90 shadow-2xl shadow-purple-950/15 p-3.5 space-y-1">
                  <a 
                    href="#why-harder" 
                    onClick={() => handleLinkClick('#why-harder')}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-purple-50/70 transition-colors duration-200 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 ease-out">
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block group-hover:text-purple-700 transition-colors duration-200">Why Marketing Feels Hard</span>
                      <p className="text-[11px] text-slate-500 leading-snug">The 3 common barriers and how to overcome them</p>
                    </div>
                  </a>

                  <a 
                    href="#meet-ai" 
                    onClick={() => handleLinkClick('#meet-ai')}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-purple-50/70 transition-colors duration-200 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 ease-out">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block group-hover:text-purple-700 transition-colors duration-200">Meet the AI Engine</span>
                      <p className="text-[11px] text-slate-500 leading-snug">Interactive before/after data translation</p>
                    </div>
                  </a>

                  <a 
                    href="#how-it-works" 
                    onClick={() => handleLinkClick('#how-it-works')}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-purple-50/70 transition-colors duration-200 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 ease-out">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block group-hover:text-purple-700 transition-colors duration-200">How It Works</span>
                      <p className="text-[11px] text-slate-500 leading-snug">4 steps: Connect, Set Goal, Read Data, Act</p>
                    </div>
                  </a>

                  <a 
                    href="#faq" 
                    onClick={() => handleLinkClick('#faq')}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-purple-50/70 transition-colors duration-200 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 ease-out">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block group-hover:text-purple-700 transition-colors duration-200">Frequently Asked Questions</span>
                      <p className="text-[11px] text-slate-500 leading-snug">Answers on tracking, security, and onboarding</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

          </nav>
        </div>

        {/* Right Side Actions: "Log in" link + "Get a demo" button + Light/Dark Toggle */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={onOpenGoalModal}
            className={`text-sm font-semibold transition-colors duration-300 ${
              isDarkHeader ? 'text-white/80 hover:text-white' : 'text-slate-700 hover:text-purple-700'
            }`}
          >
            Log in
          </button>

          <button
            onClick={onOpenContactModal || onOpenGoalModal}
            className={`min-h-[38px] px-5 sm:px-6 py-2 rounded-full font-semibold text-xs sm:text-sm active:scale-[0.98] transition-all duration-300 ease-out focus-visible:outline-none ${
              isDarkHeader
                ? 'bg-black/90 hover:bg-black text-white border border-purple-500/40 shadow-[0_0_20px_rgba(168,85,247,0.35)] hover:shadow-[0_0_30px_rgba(168,85,247,0.55)] hover:border-purple-400'
                : 'bg-purple-600 hover:bg-purple-700 text-white shadow-sm shadow-purple-600/20'
            }`}
          >
            Get a demo
          </button>

          {/* Light / Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className={`flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 ${
              isDarkHeader
                ? 'bg-white/10 hover:bg-white/20 text-white border border-white/15 shadow-[0_0_15px_rgba(168,85,247,0.25)]'
                : 'bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200 shadow-sm'
            }`}
            title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            aria-label={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          >
            {theme === 'light' ? (
              <Sun className="w-4 h-4 text-purple-300" />
            ) : (
              <Moon className="w-4 h-4 text-amber-300" />
            )}
          </button>
        </div>

        {/* Mobile menu hamburger button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-1.5 rounded-full transition-colors duration-300 focus:outline-none ${
            isDarkHeader 
              ? 'text-white hover:text-purple-300 hover:bg-white/10' 
              : 'text-slate-700 hover:text-purple-700 hover:bg-purple-50'
          }`}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 transition-transform duration-300 rotate-90" /> : <Menu className="w-5 h-5 transition-transform duration-300" />}
        </button>
      </div>

      {/* Mobile Floating Menu Card with Smooth Transition */}
      <div 
        className={`lg:hidden pointer-events-auto mt-2.5 w-full max-w-md rounded-3xl bg-white/95 backdrop-blur-2xl border border-purple-100/90 p-5 space-y-4 shadow-2xl shadow-purple-950/15 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] origin-top ${
          mobileMenuOpen
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto visible'
            : 'opacity-0 scale-95 -translate-y-2 pointer-events-none invisible h-0 p-0 m-0 overflow-hidden border-0'
        }`}
      >
        <div className="flex flex-col space-y-1">
          <a
            href="#what-you-get"
            onClick={() => handleLinkClick('#what-you-get')}
            className="text-sm font-semibold text-slate-800 hover:text-purple-700 py-2.5 px-3 rounded-xl hover:bg-purple-50 transition-colors duration-200 flex items-center justify-between"
          >
            <span>Product</span>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </a>

          <a
            href="#live-demo"
            onClick={() => handleLinkClick('#live-demo')}
            className="text-sm font-semibold text-slate-800 hover:text-purple-700 py-2.5 px-3 rounded-xl hover:bg-purple-50 transition-colors duration-200"
          >
            Integrations
          </a>

          <a
            href="#built-for"
            onClick={() => handleLinkClick('#built-for')}
            className="text-sm font-semibold text-slate-800 hover:text-purple-700 py-2.5 px-3 rounded-xl hover:bg-purple-50 transition-colors duration-200 flex items-center justify-between"
          >
            <span>Solutions</span>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </a>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenGoalModal();
            }}
            className="text-sm font-semibold text-slate-800 hover:text-purple-700 py-2.5 px-3 rounded-xl hover:bg-purple-50 transition-colors duration-200 text-left w-full"
          >
            Pricing
          </button>

          <a
            href="#faq"
            onClick={() => handleLinkClick('#faq')}
            className="text-sm font-semibold text-slate-800 hover:text-purple-700 py-2.5 px-3 rounded-xl hover:bg-purple-50 transition-colors duration-200 flex items-center justify-between"
          >
            <span>Resources</span>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </a>
        </div>

        <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenGoalModal();
            }}
            className="w-full py-2 text-center text-sm font-semibold text-slate-700 hover:text-purple-700 transition-colors duration-200"
          >
            Log in
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              if (onOpenContactModal) onOpenContactModal();
              else onOpenGoalModal();
            }}
            className="w-full flex items-center justify-center py-2.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm shadow-sm shadow-purple-600/20 active:scale-[0.98] transition-all duration-300 ease-out"
          >
            Get a demo
          </button>
        </div>
        </div>
      </div>
    </header>
  );
};
