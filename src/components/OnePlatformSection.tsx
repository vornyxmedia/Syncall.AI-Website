import React from 'react';
import { ArrowRight, UploadCloud, Bot, Loader2, FileSpreadsheet, FileText } from 'lucide-react';
import { GoogleAdsLogo, MetaLogo, ShopifyLogo, TikTokLogo } from './BrandLogos';
import { useTheme } from '../context/ThemeContext';

interface OnePlatformSectionProps {
  onOpenContactModal?: () => void;
  onOpenSignUp?: () => void;
}

export const OnePlatformSection: React.FC<OnePlatformSectionProps> = ({
  onOpenContactModal,
  onOpenSignUp,
}) => {
  const { isDuskMode } = useTheme();
  const isV2 = isDuskMode;

  return (
    <section id="one-platform" className={`relative py-14 sm:py-16 lg:py-[100px] overflow-hidden transition-colors duration-500 ${isV2 ? 'bg-[#070814] text-white' : 'bg-white text-slate-900'}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 sm:mb-20">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] ${isV2 ? 'text-white' : 'text-slate-900'}`}>
            One Platform.<br />
            Tuned to Every Account You Run
          </h2>

          <p className={`text-base sm:text-lg leading-relaxed font-normal max-w-2xl mx-auto ${isV2 ? 'text-slate-400' : 'text-slate-600'}`}>
            A model-agnostic platform for your data, your AI agents, your reports, and your client insights. Built for the way multi-account marketing actually works.
          </p>
        </div>

        {/* Bento Grid: 5 Cards (2 in Row 1, 3 in Row 2) */}
        <div className="space-y-6">
          
          {/* ROW 1: 2 Cards (Data Cloud & Accounts) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* CARD 1: Data Cloud (Left, Dark Card, col-span-6 or 5) */}
            <div className="lg:col-span-6 rounded-2xl bg-[#0A071E] border border-purple-950/80 p-7 sm:p-9 text-white flex flex-col justify-between relative overflow-hidden">
              

              <div className="space-y-6 relative z-10">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Data Cloud
                </h3>

                {/* Inner Performance Table Card */}
                <div className="rounded-2xl bg-[#140F30] border border-purple-900/60 p-5 space-y-3.5">
                  
                  {/* Table Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-purple-900/50">
                    <span className="text-xs sm:text-sm font-bold text-white">
                      Cross-Channel Ad Performance
                    </span>
                    <span className="text-[10px] sm:text-[11px] px-2.5 py-0.5 rounded-full bg-purple-600 text-white font-semibold">
                      Governed
                    </span>
                  </div>

                  {/* Columns Label */}
                  <div className="grid grid-cols-12 text-[10px] uppercase tracking-wider text-slate-400 pb-1">
                    <div className="col-span-6">Provider</div>
                    <div className="col-span-3 text-right">Spend</div>
                    <div className="col-span-3 text-right">CPA</div>
                  </div>

                  {/* Row 1: Google Ads */}
                  <div className="grid grid-cols-12 items-center text-xs py-2 border-b border-purple-900/30">
                    <div className="col-span-6 flex items-center gap-2.5">
                      <GoogleAdsLogo className="w-4 h-4" />
                      <span className="font-semibold text-white">Google Ads</span>
                    </div>
                    <div className="col-span-3 text-right text-slate-300 font-semibold">$12,450</div>
                    <div className="col-span-3 text-right font-bold text-emerald-400">$18.20</div>
                  </div>

                  {/* Row 2: Meta Ads */}
                  <div className="grid grid-cols-12 items-center text-xs py-2 border-b border-purple-900/30">
                    <div className="col-span-6 flex items-center gap-2.5">
                      <MetaLogo className="w-4 h-4" />
                      <span className="font-semibold text-white">Meta Ads</span>
                    </div>
                    <div className="col-span-3 text-right text-slate-300 font-semibold">$16,800</div>
                    <div className="col-span-3 text-right font-bold text-emerald-400">$22.40</div>
                  </div>

                  {/* Row 3: TikTok Ads */}
                  <div className="grid grid-cols-12 items-center text-xs py-2 border-b border-purple-900/30">
                    <div className="col-span-6 flex items-center gap-2.5">
                      <TikTokLogo className="w-4 h-4" />
                      <span className="font-semibold text-white">TikTok Ads</span>
                    </div>
                    <div className="col-span-3 text-right text-slate-300 font-semibold">$6,200</div>
                    <div className="col-span-3 text-right font-bold text-rose-400">$31.10</div>
                  </div>

                  {/* Row 4: Shopify Store */}
                  <div className="grid grid-cols-12 items-center text-xs py-2">
                    <div className="col-span-6 flex items-center gap-2.5">
                      <ShopifyLogo className="w-4 h-4" />
                      <span className="font-semibold text-white">Shopify Store</span>
                    </div>
                    <div className="col-span-3 text-right text-slate-300 font-semibold">$84,320</div>
                    <div className="col-span-3 text-right font-bold text-cyan-400">3.8x ROAS</div>
                  </div>

                </div>
              </div>

              {/* Bottom Caption */}
              <div className="pt-6 mt-6 border-t border-purple-900/50 text-xs text-slate-300 font-medium relative z-10">
                <span>One governed source of truth, across every channel.</span>
              </div>

            </div>

            {/* CARD 2: Accounts (Right, Light Card in V1, Dark Glass in V2, col-span-6) */}
            <div className={`lg:col-span-6 rounded-2xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 border ${
              isV2 
                ? 'bg-[#0e1126] border-white/10 text-white' 
                : 'bg-[#F8FAFC] border-slate-200/90'
            }`}>
              
              <div className="space-y-6">
                <h3 className={`text-xl font-bold tracking-tight ${isV2 ? 'text-white' : 'text-slate-900'}`}>
                  Accounts
                </h3>

                {/* Inner Account Card */}
                <div className={`rounded-2xl p-5 sm:p-6 space-y-4 border ${
                  isV2 ? 'bg-[#131738] border-white/10' : 'bg-white border-slate-200/80'
                }`}>
                  
                  {/* Account Badge Header */}
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl border flex items-center justify-center font-bold text-sm ${
                      isV2 ? 'bg-orange-950/60 border-orange-500/40 text-orange-400' : 'bg-orange-50 border-orange-200 text-orange-600'
                    }`}>
                      ▲
                    </div>
                    <div>
                      <span className={`text-[10px] uppercase tracking-wider font-semibold block ${isV2 ? 'text-slate-400' : 'text-slate-400'}`}>
                        Account
                      </span>
                      <span className={`text-sm font-extrabold block ${isV2 ? 'text-white' : 'text-slate-900'}`}>
                        Auto Summit
                      </span>
                    </div>
                  </div>

                  {/* Dropzone */}
                  <div className={`relative rounded-2xl border-2 border-dashed p-8 sm:p-10 flex flex-col items-center justify-center overflow-hidden ${
                    isV2 ? 'bg-[#0e1126]/60 border-white/15' : 'bg-slate-50/50 border-slate-200'
                  }`}>
                    
                    <div className={`flex items-center gap-2 text-xs font-medium mb-4 ${isV2 ? 'text-slate-300' : 'text-slate-500'}`}>
                      <UploadCloud className={`w-4 h-4 ${isV2 ? 'text-purple-400' : 'text-purple-600'}`} />
                      <span>Drag and drop context files</span>
                    </div>

                    {/* Example context files */}
                    <div className="flex items-center justify-center gap-4 sm:gap-6 pt-2">
                      
                      {/* Item 1: Google Ads */}
                      <div className="relative">
                        <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${
                          isV2 ? 'bg-[#181d45] border-white/15' : 'bg-white border-slate-200'
                        }`}>
                          <GoogleAdsLogo className="w-6 h-6" />
                        </div>
                      </div>

                      {/* Item 2: Google Sheets */}
                      <div className="relative">
                        <div className={`w-12 h-12 rounded-xl border flex items-center justify-center text-emerald-400 ${
                          isV2 ? 'bg-[#181d45] border-white/15' : 'bg-white border-slate-200 text-emerald-600'
                        }`}>
                          <FileSpreadsheet className="w-6 h-6" />
                        </div>
                      </div>

                      {/* Item 3: PDF Document */}
                      <div className="relative">
                        <div className={`w-12 h-12 rounded-xl border flex items-center justify-center text-rose-400 ${
                          isV2 ? 'bg-[#181d45] border-white/15' : 'bg-white border-slate-200 text-rose-500'
                        }`}>
                          <FileText className="w-6 h-6" />
                        </div>
                      </div>

                    </div>

                  </div>

                </div>
              </div>

              {/* Bottom Caption */}
              <div className={`pt-6 mt-6 border-t text-xs font-medium ${
                isV2 ? 'border-white/10 text-slate-400' : 'border-slate-200/70 text-slate-500'
              }`}>
                <span>The context that tunes every AI agent to each account.</span>
              </div>

            </div>

          </div>

          {/* ROW 2: 3 Cards (AI Agents, Data Apps, Reporting) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            
            {/* CARD 3: AI Agents (Bottom-Left) */}
            <div className={`rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 border ${
              isV2 
                ? 'bg-[#0e1126] border-white/10 text-white' 
                : 'bg-[#F8FAFC] border-slate-200/90'
            }`}>
              
              <div className="space-y-5">
                <h3 className={`text-xl font-bold tracking-tight ${isV2 ? 'text-white' : 'text-slate-900'}`}>
                  AI Agents
                </h3>

                {/* Inner Agent Card */}
                <div className={`rounded-2xl p-5 space-y-4 border ${
                  isV2 ? 'bg-[#131738] border-white/10' : 'bg-white border-slate-200/80'
                }`}>
                  
                  {/* Optimizer Header */}
                  <div className={`flex items-center gap-3 pb-3 border-b ${isV2 ? 'border-white/10' : 'border-slate-100'}`}>
                    <div className={`w-9 h-9 rounded-xl border flex items-center justify-center ${
                      isV2 ? 'bg-purple-950/60 border-purple-500/30 text-purple-300' : 'bg-purple-100 border-purple-200 text-purple-700'
                    }`}>
                      <Bot className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className={`text-xs font-bold leading-tight ${isV2 ? 'text-white' : 'text-slate-900'}`}>
                        Performance Optimizer
                      </h4>
                      <div className="flex items-center gap-1.5 pt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                        <span className={`text-[10px] font-medium ${isV2 ? 'text-cyan-400' : 'text-cyan-700'}`}>
                          Reviewing anomaly...
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Account Queue List */}
                  <div className="space-y-2 text-xs">
                    <div className={`flex items-center justify-between p-2 rounded-xl border font-medium ${
                      isV2 ? 'bg-[#181d45] border-white/10 text-white' : 'bg-slate-50 border-slate-200/60 text-slate-800'
                    }`}>
                      <span>Auto Summit</span>
                      <Loader2 className={`w-3.5 h-3.5 animate-spin ${isV2 ? 'text-purple-400' : 'text-purple-600'}`} />
                    </div>
                    <div className={`flex items-center justify-between p-2 rounded-xl border ${
                      isV2 ? 'bg-[#131738] border-white/5 text-slate-400' : 'bg-white border-slate-100 text-slate-500'
                    }`}>
                      <span>Playback Group</span>
                      <span className={`text-[10px] font-semibold ${isV2 ? 'text-slate-500' : 'text-slate-400'}`}>Queued</span>
                    </div>
                    <div className={`flex items-center justify-between p-2 rounded-xl border ${
                      isV2 ? 'bg-[#131738] border-white/5 text-slate-400' : 'bg-white border-slate-100 text-slate-500'
                    }`}>
                      <span>Polaris</span>
                      <span className={`text-[10px] font-semibold ${isV2 ? 'text-slate-500' : 'text-slate-400'}`}>Queued</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom Caption */}
              <div className={`pt-6 mt-6 border-t text-xs font-medium ${
                isV2 ? 'border-white/10 text-slate-400' : 'border-slate-200/70 text-slate-500'
              }`}>
                <span>Deploy agents across every account, in days not months.</span>
              </div>

            </div>

            {/* CARD 4: Data Apps (Bottom-Center) */}
            <div className={`rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 border ${
              isV2 
                ? 'bg-[#0e1126] border-white/10 text-white' 
                : 'bg-[#F8FAFC] border-slate-200/90'
            }`}>
              
              <div className="space-y-5">
                <h3 className={`text-xl font-bold tracking-tight ${isV2 ? 'text-white' : 'text-slate-900'}`}>
                  Data Apps
                </h3>

                {/* Inner Data Visualizer */}
                <div className={`rounded-2xl p-5 space-y-4 border ${
                  isV2 ? 'bg-[#131738] border-white/10' : 'bg-white border-slate-200/80'
                }`}>
                  
                  {/* Metric Chips Row */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-2 rounded-xl bg-purple-600 text-white text-center">
                      <div className="text-xs font-black">3%</div>
                      <div className="text-[9px] uppercase tracking-wider opacity-80">CTR</div>
                    </div>
                    <div className={`p-2 rounded-xl border text-center ${
                      isV2 ? 'bg-[#181d45] border-white/10' : 'bg-slate-50 border-slate-200'
                    }`}>
                      <div className={`text-xs font-bold ${isV2 ? 'text-white' : 'text-slate-900'}`}>$1.28</div>
                      <div className={`text-[9px] uppercase tracking-wider ${isV2 ? 'text-slate-400' : 'text-slate-400'}`}>CPC</div>
                    </div>
                    <div className={`p-2 rounded-xl border text-center ${
                      isV2 ? 'bg-[#181d45] border-white/10' : 'bg-slate-50 border-slate-200'
                    }`}>
                      <div className={`text-xs font-bold ${isV2 ? 'text-white' : 'text-slate-900'}`}>$10.47</div>
                      <div className={`text-[9px] uppercase tracking-wider ${isV2 ? 'text-slate-400' : 'text-slate-400'}`}>Cost/Conv.</div>
                    </div>
                  </div>

                  {/* Ascending Bar Chart */}
                  <div className="pt-2 flex items-end justify-between gap-2 h-24 px-2">
                    <div className={`w-full rounded-t-lg h-[40%] ${isV2 ? 'bg-purple-900/60' : 'bg-purple-100'}`} />
                    <div className={`w-full rounded-t-lg h-[65%] ${isV2 ? 'bg-purple-800/60' : 'bg-purple-200'}`} />
                    <div className={`w-full rounded-t-lg h-[50%] ${isV2 ? 'bg-purple-600/70' : 'bg-purple-400'}`} />
                    <div className="w-full bg-purple-600 rounded-t-lg h-[85%]" />
                    <div className="w-full bg-purple-600 rounded-t-lg h-[60%]" />
                    <div className="w-full bg-purple-600 rounded-t-lg h-[95%]" />
                  </div>

                </div>
              </div>

              {/* Bottom Caption */}
              <div className={`pt-6 mt-6 border-t text-xs font-medium ${
                isV2 ? 'border-white/10 text-slate-400' : 'border-slate-200/70 text-slate-500'
              }`}>
                <span>Ask your data anything. No SQL, just answers.</span>
              </div>

            </div>

            {/* CARD 5: Reporting */}
            <div className="rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED] text-white p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden">
              

              <div className="space-y-5 relative z-10">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Reporting
                </h3>

                {/* Trend line with pinned value */}
                <div className="rounded-2xl bg-white/[0.08] border border-white/15 p-5 h-36 flex flex-col justify-between relative overflow-hidden">
                  
                  <div className="self-end px-2.5 py-1 rounded-lg bg-slate-950 text-xs font-bold text-white flex items-center gap-1.5">
                    <GoogleAdsLogo className="w-3.5 h-3.5" />
                    <span>$3.53</span>
                  </div>

                                    <svg className="w-full h-16 text-white/40" viewBox="0 0 200 60" fill="none">
                    <path
                      d="M0 45 C40 45, 60 15, 100 25 C140 35, 160 5, 200 15"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M0 55 C40 55, 60 25, 100 35 C140 45, 160 15, 200 25"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                    />
                    <circle cx="160" cy="18" r="4" fill="#FFFFFF" />
                  </svg>

                </div>
              </div>

              {/* Bottom Caption */}
              <div className="pt-6 mt-6 border-t border-white/20 text-xs text-white/90 font-medium relative z-10">
                <span>Client-ready reports, sent on your schedule.</span>
              </div>

            </div>

          </div>

        </div>

        {/* Centered CTA Button */}
        <div className="pt-14 sm:pt-16 text-center">
          <button
            onClick={onOpenContactModal}
            className="px-10 py-4 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-base active:scale-[0.98] transition-all duration-300 cursor-pointer inline-flex items-center gap-2"
          >
            <span>Get a Demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
