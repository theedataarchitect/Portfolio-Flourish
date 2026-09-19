import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PUBLICATIONS } from '../data/advisoryData';
import { ZoomFade, FadeType } from './ZoomFade';

interface MonographsSectionProps {
  onOpenInquiry: (topic?: string) => void;
}

const monographFadeTypes: FadeType[] = [
  'zoom-fade-diagonal-left',
  'zoom-fade-blur',
  'zoom-fade-diagonal-right',
];

export const MonographsSection: React.FC<MonographsSectionProps> = ({ onOpenInquiry }) => {
  return (
    <section
      id="monographs"
      className="py-20 lg:py-28 bg-slate-50/20 dark:bg-slate-950/30 backdrop-blur-2xs border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Bold text numbering 04 on the left */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <ZoomFade fadeType="zoom-fade-in" duration={0.8}>
              <div className="font-display font-extrabold text-7xl lg:text-8xl text-slate-300 dark:text-slate-700 leading-none select-none mb-3">
                04
              </div>
            </ZoomFade>

            <ZoomFade fadeType="zoom-fade-right" delay={0.1} duration={0.75}>
              <div className="font-mono text-xs uppercase tracking-widest text-rose-600 dark:text-rose-400 font-semibold mb-2 flex items-center gap-2">
                <span>// TREATISES &amp; RESEARCH</span>
              </div>
            </ZoomFade>

            <ZoomFade fadeType="zoom-fade-down" delay={0.15} duration={0.75}>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-tight mb-4">
                Publications on Decision Architecture
              </h2>
            </ZoomFade>

            <ZoomFade fadeType="zoom-fade-up" delay={0.2} duration={0.75}>
              <p className="font-mono text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider leading-relaxed mb-6">
                PEER-COMMISSIONED WHITE PAPERS AND POST-MONOGRAPHS EXPLORING INFORMATIONAL ENTROPY, BAYESIAN INFERENCE, AND CORPORATE COMPUTATIONAL SYSTEMS.
              </p>

              <div className="w-8 h-0.5 bg-rose-600"></div>
            </ZoomFade>
          </div>

          {/* Right Column: 3 Publication Cards Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            {PUBLICATIONS.map((pub, idx) => {
              const fadeVariant = monographFadeTypes[idx % monographFadeTypes.length];
              return (
                <ZoomFade
                  key={pub.id}
                  fadeType={fadeVariant}
                  delay={0.1 + idx * 0.1}
                  duration={0.75}
                  className="h-full"
                >
                  <div
                    className="h-full rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between hover:border-rose-500/50 dark:hover:border-rose-500/50 transition-all duration-200 shadow-xs group"
                  >
                    <div>
                      {/* Category & Date Header */}
                      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
                        <span className="text-rose-600 dark:text-rose-400 font-bold truncate max-w-[130px]">
                          {pub.series}
                        </span>
                        <span className="text-slate-500 dark:text-slate-400 shrink-0">
                          {pub.date}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-base font-extrabold text-slate-950 dark:text-white mb-3 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors leading-snug">
                        {pub.title}
                      </h3>

                      {/* Abstract Narrative */}
                      <p className="font-sans text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                        {pub.abstract}
                      </p>
                    </div>

                    {/* Card Action Link */}
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between font-mono text-[11px]">
                      <button
                        onClick={() => onOpenInquiry(`Monograph Access: ${pub.title}`)}
                        className="text-rose-600 dark:text-rose-400 hover:text-rose-700 font-bold flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        <span>{pub.actionText || 'READ TREATISE'}</span>
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                      </button>
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
