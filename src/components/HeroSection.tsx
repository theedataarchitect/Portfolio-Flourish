import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { ZoomFade } from './ZoomFade';

interface HeroSectionProps {
  onOpenInquiry: (topic?: string) => void;
  onExploreScreens: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenInquiry,
  onExploreScreens
}) => {
  return (
    <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
          {/* Centered CEO Name Heading - focal punch-in zoom */}
          <ZoomFade fadeType="zoom-fade-in" immediate duration={0.85}>
            <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-slate-950 dark:text-white tracking-tight leading-[0.98] mb-6">
              Flourish Effiong
            </h1>
          </ZoomFade>

          {/* Role & Scope Statement - zoom-fade up */}
          <ZoomFade fadeType="zoom-fade-up" immediate delay={0.15} duration={0.8}>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-700 dark:text-slate-300 font-normal leading-relaxed max-w-3xl mb-10">
              Strategic Partner to Enterprise Boards, Private Equity Sponsors, and Global Corporate Leaders navigating pivotal commercial inflections and high-consequence capital decisions.
            </p>
          </ZoomFade>

          {/* Action Buttons - zoom-fade diagonal-left */}
          <ZoomFade fadeType="zoom-fade-diagonal-left" immediate delay={0.25} duration={0.8}>
            <div className="flex flex-wrap items-center justify-center gap-3.5 mb-12">
              <a
                href="#selected-works"
                className="inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 font-sans text-sm font-semibold px-6 py-3.5 rounded-full transition-all shadow-sm group"
              >
                <span>Explore Strategic Mandates</span>
                <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-0.5 text-rose-400 dark:text-rose-600" />
              </a>

              <button
                onClick={onExploreScreens}
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-sans text-sm font-medium px-5 py-3.5 rounded-full transition-colors shadow-2xs cursor-pointer"
              >
                <span>View Executive Screens</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </button>

              <button
                onClick={() => onOpenInquiry('Executive Consultation')}
                className="inline-flex items-center gap-2 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-sans text-sm px-4 py-3.5 rounded-full transition-colors cursor-pointer"
              >
                <span>Initiate Inquiry</span>
              </button>
            </div>
          </ZoomFade>

          {/* Domain Badges - zoom-fade blur */}
          <ZoomFade fadeType="zoom-fade-blur" immediate delay={0.35} duration={0.8}>
            <div className="flex flex-wrap justify-center gap-2 pt-6 border-t border-slate-200 dark:border-slate-800 w-full max-w-3xl">
              <span className="px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono text-[11px] tracking-wider text-slate-600 dark:text-slate-400 uppercase">
                PRIVATE EQUITY DILIGENCE
              </span>
              <span className="px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono text-[11px] tracking-wider text-slate-600 dark:text-slate-400 uppercase">
                BOARDROOM GOVERNANCE
              </span>
              <span className="px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono text-[11px] tracking-wider text-slate-600 dark:text-slate-400 uppercase">
                CAPITAL ALLOCATION
              </span>
              <span className="px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono text-[11px] tracking-wider text-slate-600 dark:text-slate-400 uppercase">
                SOVEREIGN ADVISORY
              </span>
            </div>
          </ZoomFade>
        </div>
      </div>
    </section>
  );
};
