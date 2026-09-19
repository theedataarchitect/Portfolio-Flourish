import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenInquiry: () => void;
  onScrollToTop: () => void;
  onExploreScreens: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenInquiry,
  onScrollToTop,
}) => {
  return (
    <footer className="bg-[#ebe8e2]/85 dark:bg-slate-950/65 backdrop-blur-md py-10 text-xs text-slate-700 dark:text-slate-300 border-t border-[#dad6cd]/90 dark:border-slate-800/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand Identity: Strictly DataArtisan Inc with NO subscript */}
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full border border-rose-500/40 bg-rose-500/10 flex items-center justify-center font-display text-[11px] font-bold text-rose-600 shadow-2xs">
            DA
          </div>
          <span className="text-slate-950 dark:text-white font-extrabold tracking-tight text-sm">
            DataArtisan Inc
          </span>
        </div>

        {/* Footer Quick Nav Anchors matching source design */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 font-mono text-[11px] uppercase tracking-wider text-slate-700 dark:text-slate-300">
          <button
            onClick={onScrollToTop}
            className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors cursor-pointer flex items-center gap-1"
          >
            <span>Top of Page</span>
            <ArrowUp className="w-3 h-3" />
          </button>
          <span className="text-slate-400 dark:text-slate-600">•</span>
          <a
            href="#core-practice"
            className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
          >
            Practice
          </a>
          <span className="text-slate-400 dark:text-slate-600">•</span>
          <a
            href="#selected-works"
            className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
          >
            Portfolio
          </a>
          <span className="text-slate-400 dark:text-slate-600">•</span>
          <a
            href="#telemetry"
            className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
          >
            Telemetry
          </a>
          <span className="text-slate-400 dark:text-slate-600">•</span>
          <button
            onClick={onOpenInquiry}
            className="text-rose-600 dark:text-rose-400 font-bold hover:underline flex items-center gap-1.5 cursor-pointer"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-pulse"></span>
            <span>Direct Dispatch</span>
          </button>
        </div>

        {/* Legal Notice */}
        <div className="text-[11px] text-slate-600 dark:text-slate-400 text-center md:text-right font-mono">
          &copy; {new Date().getFullYear()} DataArtisan Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
