import React, { useState } from 'react';
import { PORTFOLIO_WORKS } from '../data/advisoryData';
import { PortfolioWork } from '../types';
import { ArrowRight } from 'lucide-react';
import { ZoomFade, FadeType } from './ZoomFade';

interface PortfolioSectionProps {
  onSelectWork: (work: PortfolioWork) => void;
}

const cardFadeTypes: FadeType[] = [
  'zoom-fade-up',
  'zoom-fade-diagonal-right',
  'zoom-fade-left',
  'zoom-fade-blur',
  'zoom-fade-diagonal-left',
  'zoom-fade-in',
];

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectWork }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');

  const filters = [
    { label: 'ALL ENGAGEMENTS', value: 'ALL' },
    { label: 'SOVEREIGN INFRASTRUCTURE', value: 'SOVEREIGN' },
    { label: 'GROWTH CAPITAL', value: 'GROWTH' },
    { label: 'M&A DILIGENCE', value: 'M&A' },
  ];

  const filteredWorks = PORTFOLIO_WORKS.filter((work) => {
    if (selectedFilter === 'ALL') return true;
    if (selectedFilter === 'SOVEREIGN') return work.badgeType === 'sovereign' || work.badgeType === 'advisory';
    if (selectedFilter === 'GROWTH') return work.badgeType === 'growth';
    if (selectedFilter === 'M&A') return work.badgeType === 'mna';
    return true;
  });

  return (
    <section
      id="selected-works"
      className="py-20 lg:py-28 bg-white/25 dark:bg-slate-950/35 backdrop-blur-2xs border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Sizable portion for Section Header & Numbering */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <ZoomFade fadeType="zoom-fade-out" duration={0.8}>
              <div className="font-display font-extrabold text-7xl lg:text-8xl text-slate-300 dark:text-slate-700 leading-none select-none mb-3">
                02
              </div>
            </ZoomFade>

            <ZoomFade fadeType="zoom-fade-left" delay={0.1} duration={0.75}>
              <div className="font-mono text-xs uppercase tracking-widest text-rose-600 dark:text-rose-400 font-semibold mb-2 flex items-center gap-2">
                <span>// SELECTED WORKS</span>
              </div>
            </ZoomFade>

            <ZoomFade fadeType="zoom-fade-down" delay={0.15} duration={0.75}>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-tight mb-4">
                Empirical Architecture Portfolio
              </h2>
            </ZoomFade>

            <ZoomFade fadeType="zoom-fade-up" delay={0.2} duration={0.75}>
              <p className="font-mono text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider leading-relaxed mb-6">
                ADVISORY-CURATED ENGAGEMENTS SPANNING SOVEREIGN INFRASTRUCTURE, PRIVATE GROWTH EQUITY, AND ALGORITHMIC PORTFOLIO GOVERNANCE.
              </p>
            </ZoomFade>

            {/* Filter Pills in Left Column */}
            <ZoomFade fadeType="zoom-fade-diagonal-left" delay={0.25} duration={0.75}>
              <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200 dark:border-slate-800">
                {filters.map((f) => (
                  <button
                    key={f.value}
                    onClick={() => setSelectedFilter(f.value)}
                    className={`px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-wider transition-all border cursor-pointer ${
                      selectedFilter === f.value
                        ? 'bg-slate-950 dark:bg-white text-white dark:text-slate-950 border-transparent font-semibold shadow-2xs'
                        : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </ZoomFade>
          </div>

          {/* Right Column: Cards Constrained to the Right */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredWorks.map((work, idx) => {
                const fadeVariant = cardFadeTypes[idx % cardFadeTypes.length];
                return (
                  <ZoomFade
                    key={work.id}
                    fadeType={fadeVariant}
                    delay={0.1 + (idx % 2) * 0.1}
                    duration={0.75}
                    className="h-full"
                  >
                    <div
                      onClick={() => onSelectWork(work)}
                      className="h-full rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 hover:border-rose-500/50 dark:hover:border-rose-500/50 transition-all duration-200 flex flex-col justify-between shadow-xs hover:shadow-md cursor-pointer group"
                    >
                      <div>
                        {/* Top Tags */}
                        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider mb-3">
                          <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-rose-600 dark:text-rose-400 font-semibold border border-slate-200 dark:border-slate-700">
                            {work.category}
                          </span>
                          <span className="text-slate-500 dark:text-slate-400 font-medium">
                            {work.timeline}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-display text-lg sm:text-xl font-extrabold text-slate-950 dark:text-white mb-2.5 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors leading-snug">
                          {work.title}
                        </h3>

                        {/* Narrative */}
                        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-5 font-normal">
                          {work.narrative}
                        </p>

                        {/* Metrics Row */}
                        <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-200 dark:border-slate-800 font-sans mb-5">
                          <div>
                            <div className={`text-lg sm:text-xl font-extrabold tracking-tight ${work.metrics.primary.color || 'text-rose-600'}`}>
                              {work.metrics.primary.value}
                            </div>
                            <div className="text-[9px] text-slate-500 dark:text-slate-400 font-mono uppercase mt-0.5 leading-tight">
                              {work.metrics.primary.label}
                            </div>
                          </div>
                          <div>
                            <div className={`text-lg sm:text-xl font-extrabold tracking-tight ${work.metrics.secondary.color || 'text-rose-600'}`}>
                              {work.metrics.secondary.value}
                            </div>
                            <div className="text-[9px] text-slate-500 dark:text-slate-400 font-mono uppercase mt-0.5 leading-tight">
                              {work.metrics.secondary.label}
                            </div>
                          </div>
                          <div>
                            <div className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
                              {work.metrics.tertiary?.value || 'Tier 0'}
                            </div>
                            <div className="text-[9px] text-slate-500 dark:text-slate-400 font-mono uppercase mt-0.5 leading-tight">
                              {work.metrics.tertiary?.label || 'RESILIENCY'}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Card Footer */}
                      <div className="pt-2 flex items-center justify-between text-xs font-mono">
                        <div className="text-slate-500 dark:text-slate-400 text-[10px] uppercase tracking-wider truncate max-w-[140px]">
                          <span>{work.locationsOrTags.join(' • ')}</span>
                        </div>

                        <div className="text-slate-950 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 font-mono text-[11px] font-semibold flex items-center gap-1 transition-colors shrink-0">
                          <span>BRIEF DOSSIER</span>
                          <ArrowRight className="w-3.5 h-3.5 text-rose-600 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </ZoomFade>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
