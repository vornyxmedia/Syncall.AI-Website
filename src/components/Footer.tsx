import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface FooterProps {
  onOpenSignUp?: () => void;
  onOpenContactModal?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const { isDuskMode } = useTheme();
  const isV2 = isDuskMode;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`relative text-slate-400 pt-16 sm:pt-20 pb-12 overflow-hidden transition-colors duration-500 ${
      isV2 ? 'bg-[#070814] border-t border-white/10' : 'bg-[#0b0f1f]'
    }`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 5-Column Grid (Matching Reference: media_1789808524624.png) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14">
          
          {/* Brand Column (Span 4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="inline-block">
              <img 
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="Syncall.ai" 
                className="h-13 sm:h-16 w-auto object-contain brightness-0 invert" 
              />
            </a>
            
            <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
              The AI Agent Platform <br />
              Built for Multi-Account Marketing
            </p>

            {/* Social Icons (LinkedIn, X/Twitter, GitHub, YouTube) */}
            <div className="flex items-center gap-3.5 pt-2 text-slate-400">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="LinkedIn"
                className="hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.95 0-1.72.78-1.72 1.73s.77 1.73 1.72 1.73 1.73-.78 1.73-1.73-.78-1.73-1.73-1.73z"/>
                </svg>
              </a>

              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="X (Twitter)"
                className="hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="GitHub"
                className="hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>

              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="YouTube"
                className="hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Navigation 4 Columns (Span 8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8 text-xs">
            
            {/* Column 1: PLATFORM & MARKETING APPS */}
            <div className="space-y-8">
              <div className="space-y-3">
                <span className="font-bold text-white uppercase tracking-wider block">Platform</span>
                <ul className="space-y-2 text-slate-400">
                  <li><a href="#what-you-get" className="hover:text-white transition-colors">Data Cloud</a></li>
                  <li><a href="#meet-ai" className="hover:text-white transition-colors">AI Agents Showcase</a></li>
                  <li><a href="#one-platform" className="hover:text-white transition-colors">Integrations</a></li>
                  <li><a href="#what-you-get" className="hover:text-white transition-colors">Snowflake Connected App</a></li>
                </ul>
              </div>

              <div className="space-y-3">
                <span className="font-bold text-white uppercase tracking-wider block">Marketing Apps</span>
                <ul className="space-y-2 text-slate-400">
                  <li><a href="#what-you-get" className="hover:text-white transition-colors">Reporting</a></li>
                  <li><a href="#live-demo" className="hover:text-white transition-colors">Dashboards</a></li>
                  <li><a href="#what-you-get" className="hover:text-white transition-colors">Generative Data Apps</a></li>
                  <li><a href="#meet-ai" className="hover:text-white transition-colors">AI Agents</a></li>
                  <li><a href="#what-you-get" className="hover:text-white transition-colors">Budget Management</a></li>
                </ul>
              </div>
            </div>

            {/* Column 2: FOR TEAMS */}
            <div className="space-y-3">
              <span className="font-bold text-white uppercase tracking-wider block">For Teams</span>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#built-for" className="hover:text-white transition-colors">Marketing</a></li>
                <li><a href="#what-you-get" className="hover:text-white transition-colors">Insights & Analytics</a></li>
                <li><a href="#one-platform" className="hover:text-white transition-colors">Engineering & Product</a></li>
                <li><a href="#three-kinds-of-scale" className="hover:text-white transition-colors">Client Success</a></li>
                <li><a href="#three-kinds-of-scale" className="hover:text-white transition-colors">Operations</a></li>
                <li><a href="#built-for" className="hover:text-white transition-colors">Small Business Owners</a></li>
                <li><a href="#built-for" className="hover:text-white transition-colors">Solo Founders</a></li>
              </ul>
            </div>

            {/* Column 3: DISCOVER, CUSTOMER SUPPORT & COMPANY */}
            <div className="space-y-8">
              <div className="space-y-3">
                <span className="font-bold text-white uppercase tracking-wider block">Discover</span>
                <ul className="space-y-2 text-slate-400">
                  <li><a href="#customer-results" className="hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#meet-ai" className="hover:text-white transition-colors">What Gets Measured Podcast</a></li>
                  <li><a href="#customer-results" className="hover:text-white transition-colors">Case Studies</a></li>
                  <li><a href="#live-demo" className="hover:text-white transition-colors">Report Template Gallery</a></li>
                </ul>
              </div>

              <div className="space-y-3">
                <span className="font-bold text-white uppercase tracking-wider block">Customer Support</span>
                <ul className="space-y-2 text-slate-400">
                  <li><a href="#faq" className="hover:text-white transition-colors">Knowledge Base</a></li>
                  <li><a href="#how-it-works" className="hover:text-white transition-colors">Syncall Academy</a></li>
                </ul>
              </div>

              <div className="space-y-3">
                <span className="font-bold text-white uppercase tracking-wider block">Company</span>
                <ul className="space-y-2 text-slate-400">
                  <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                </ul>
              </div>
            </div>

            {/* Column 4: CONTACT */}
            <div className="space-y-6">
              <span className="font-bold text-white uppercase tracking-wider block">Contact</span>
              
              <div className="space-y-1">
                <span className="text-slate-500 font-medium block">Support</span>
                <a href="mailto:info@syncall.ai" className="hover:text-white transition-colors block">info@syncall.ai</a>
                <a href="tel:+919355222725" className="text-slate-400 hover:text-white transition-colors block">+91 93552 22725</a>
              </div>

              <div className="space-y-1">
                <span className="text-slate-500 font-medium block">General Inquiries</span>
                <a href="mailto:info@syncall.ai" className="hover:text-white transition-colors block">info@syncall.ai</a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Syncall. All rights reserved.
            <span className="mx-2 text-slate-700">·</span>
            Powered by <span className="text-slate-300 font-medium">Vornyx Media</span>
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
            
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer ml-2"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
