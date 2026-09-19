import React from 'react';
import { ArrowRight } from 'lucide-react';
import { KEYNOTE_ADDRESSES } from '../data/advisoryData';
import { ZoomFade, FadeType } from './ZoomFade';

interface KeynotesSectionProps {
  onOpenInquiry: (topic?: string) => void;
}

const keynoteFadeTypes: FadeType[] = [
  'zoom-fade-up',
  'zoom-fade-blur',
  'zoom-fade-diagonal-right',
];

export const KeynotesSection: React.FC<KeynotesSectionProps> = ({ onOpenInquiry }) => {
  return (
    <section
      id="keynotes"
      className="py-20 lg:py-28 bg-white/20 dark:bg-slate-950/30 backdrop-blur-2xs border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Bold text numbering 03 on the left */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <ZoomFade fadeType="zoom-fade-in" duration={0.8}>
              <div className="font-display font-extrabold text-7xl lg:text-8xl text-slate-300 dark:text-slate-700 leading-none select-none mb-3">
                03
              </div>
            </ZoomFade>

            <ZoomFade fadeType="zoom-fade-down" delay={0.1} duration={0.75}>
              <div className="font-mono text-xs uppercase tracking-widest text-rose-600 dark:text-rose-400 font-semibold mb-2 flex items-center gap-2">
                <span>// GLOBAL ADDRESSES</span>
              </div>
            </ZoomFade>

            <ZoomFade fadeType="zoom-fade-left" delay={0.15} duration={0.75}>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-tight mb-8">
                Keynotes &amp; Global Summits
              </h2>
            </ZoomFade>

            <ZoomFade fadeType="zoom-fade-diagonal-left" delay={0.2} duration={0.75}>
              <button
                onClick={() => onOpenInquiry('Keynote Speaker Bureau Booking')}
                className="inline-flex items-center gap-2 border border-slate-300 dark:border-slate-700 hover:border-rose-500 hover:text-rose-600 bg-white/80 dark:bg-slate-900/80 text-slate-900 dark:text-slate-100 font-mono text-xs font-semibold px-4 py-2.5 rounded-full transition-colors cursor-pointer group shadow-2xs"
              >
                <span>INQUIRE FOR SPEAKER BUREAU</span>
                <ArrowRight className="w-3.5 h-3.5 text-rose-600 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </ZoomFade>
          </div>

          {/* Right Column: 3 Keynote Cards Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            {KEYNOTE_ADDRESSES.map((keynote, idx) => {
              const fadeVariant = keynoteFadeTypes[idx % keynoteFadeTypes.length];
              return (
                <ZoomFade
                  key={keynote.id}
                  fadeType={fadeVariant}
                  delay={0.1 + idx * 0.1}
                  duration={0.75}
                  className="h-full"
                >
                  <div
                    className="h-full rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between hover:border-rose-500/50 dark:hover:border-rose-500/50 transition-all duration-200 shadow-xs"
                  >
                    <div>
                      {/* Location & Role Header */}
                      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
                        <span className="text-slate-500 dark:text-slate-400 font-medium truncate max-w-[120px]">
                          {keynote.location}
                        </span>
                        <span className="text-rose-600 dark:text-rose-400 font-semibold shrink-0">
                          {keynote.badge}
                        </span>
                      </div>

                      {/* Forum / Conference */}
                      <h3 className="font-display text-base font-extrabold text-slate-950 dark:text-white mb-2 leading-snug">
                        {keynote.summit}
                      </h3>

                      {/* Talk Title / Monograph Theme */}
                      <p className="font-sans text-xs text-rose-600 dark:text-rose-400 font-medium mb-3 italic">
                        {keynote.theme}
                      </p>

                      {/* Description */}
                      <p className="font-sans text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                        {keynote.synopsis}
                      </p>
                    </div>

                    {/* Card Footer */}
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between font-mono text-[10px] text-slate-500 dark:text-slate-400">
                      <span className="uppercase truncate max-w-[140px]">{keynote.audience}</span>
                      <span className="font-semibold shrink-0">{keynote.year}</span>
                    </div>
                  </div>
                </ZoomFade>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
