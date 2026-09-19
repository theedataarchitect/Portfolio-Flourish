import React, { useState } from 'react';
import { Plus, Check, ChevronUp } from 'lucide-react';
import { ZoomFade, FadeType } from './ZoomFade';

interface PracticeSectionProps {
  onOpenInquiryForPillar?: (title: string) => void;
}

export const PracticeSection: React.FC<PracticeSectionProps> = ({ onOpenInquiryForPillar }) => {
  const [activePillarModal, setActivePillarModal] = useState<number | null>(null);

  const pillars = [
    {
      number: 'I',
      id: 1,
      badge: 'PE & VC SPONSORS',
      title: 'Investment Due Diligence & Quantitative Value Creation',
      summary:
        'Rigorous data diligence for buyouts and venture sponsors. Modern algorithmic infrastructure, systems proprietary data defensibility against clone model attacks, and design 100-day post-acquisition transformation blueprints.',
      footerTag: 'M&A DILIGENCE • PORTFOLIO ROE',
      fadeType: 'zoom-fade-diagonal-left' as FadeType,
      details: [
        'Pre-acquisition algorithmic moat and code entropy evaluation',
        'Customer retention & churn predictive hazard modeling',
        'Cloud infrastructure sprawl & technical debt forensic audit',
        '100-day quantitative transformation and value capture sprints',
      ],
    },
    {
      number: 'II',
      id: 2,
      badge: 'BOARDROOM SYSTEMS',
      title: 'Boardroom Decision Systems & Sovereign Telemetry',
      summary:
        'Replacing passive BI dashboards with deterministic intelligence. We construct sovereign scenario architecture that provides boards and committees with unfiltered real-time board telemetry on reserve exposure and operational risk.',
      footerTag: 'SUPERVISORY • BOARD COCKPITS',
      fadeType: 'zoom-fade-in' as FadeType,
      details: [
        'Real-time sovereign balance sheet risk aggregation',
        'Bayesian scenario simulation for capital expenditure decisions',
        'Algorithmic governance frameworks for audit committees',
        'Tier-0 executive cockpits with deterministic fail-safes',
      ],
    },
    {
      number: 'III',
      id: 3,
      badge: 'C-SUITE VELOCITY',
      title: 'Executive Decision Architecture & Cockpits',
      summary:
        'Bespoke algorithmic engines and streaming analytics built directly for executive velocity. We synthesize billions of contextual data points into memory-accelerated decision options maximizing shift-resilient forecast precision.',
      footerTag: 'VELOCITY • ASYMMETRY',
      fadeType: 'zoom-fade-diagonal-right' as FadeType,
      details: [
        'High-frequency corporate telemetry streaming interfaces',
        'Causal inference modeling over spurious correlations',
        'Sub-second scenario permutation computing',
        'Deterministic executive briefing surfaces',
      ],
    },
  ];

  return (
    <section
      id="core-practice"
      className="py-20 lg:py-28 bg-slate-50/20 dark:bg-slate-950/30 backdrop-blur-2xs border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Sizable portion dedicated to section header */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <ZoomFade fadeType="zoom-fade-in" duration={0.8}>
              <div className="font-display font-extrabold text-7xl lg:text-8xl text-slate-300 dark:text-slate-700 leading-none select-none mb-3">
                01
              </div>
            </ZoomFade>

            <ZoomFade fadeType="zoom-fade-left" delay={0.1} duration={0.75}>
              <div className="font-mono text-xs uppercase tracking-widest text-rose-600 dark:text-rose-400 font-semibold mb-2 flex items-center gap-2">
                <span>// ADVISORY PRACTICE</span>
              </div>
            </ZoomFade>

            <ZoomFade fadeType="zoom-fade-up" delay={0.15} duration={0.75}>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-tight mb-6">
                DataArtisan Foundation
              </h2>
            </ZoomFade>

            {/* Sub-card with red bar */}
            <ZoomFade fadeType="zoom-fade-diagonal-left" delay={0.2} duration={0.75}>
              <div className="p-4 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-2xs max-w-xs mb-6">
                <div className="font-mono text-[11px] font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider">
                  PILLARS I – III
                </div>
                <div className="font-mono text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-0.5">
                  EXECUTIVE DECISION APPARATUSES
                </div>
                <div className="w-8 h-0.5 bg-rose-600 mt-3"></div>
              </div>
            </ZoomFade>

            <ZoomFade fadeType="zoom-fade-blur" delay={0.25} duration={0.75}>
              <p className="font-mono text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider leading-relaxed">
                ELITE ANALYTICS AND DECISION INTELLIGENCE ADVISORY ENGINEERED FOR HIGH-CONSEQUENCE COMMERCIAL INFLECTIONS.
              </p>
            </ZoomFade>
          </div>

          {/* Right Column: All text and content constrained to the right */}
          <div className="lg:col-span-8 space-y-10">
            {/* Editorial Manifesto Narrative */}
            <div>
              <ZoomFade fadeType="zoom-fade-right" delay={0.1} duration={0.8}>
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-snug mb-5">
                  Translating quantitative telemetry into sovereign capital advantage.
                </h3>
              </ZoomFade>

              <ZoomFade fadeType="zoom-fade-up" delay={0.2} duration={0.8}>
                <div className="space-y-4 font-sans text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  <p>
                    <strong className="text-slate-900 dark:text-white font-semibold">DataArtisan</strong> is Flourish Effiong's elite analytics and decision intelligence advisory, engineered for high-consequence enterprise environments.
                  </p>
                  <p>
                    We translate deep quantitative architecture, telemetric modeling, and probabilistic forecasting into strategic sovereign advantage and decisive executive outcomes. Where standard BI delivers backwards-looking retrospectives, DataArtisan constructs forward-looking computational apparatuses.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    As Managing Director and trusted advisor, Flourish partners directly with buyout sponsors, venture capital partners, sovereign wealth funds, and enterprise C-suites on portfolio value creation, data governance, and deterministic decision infrastructure.
                  </p>
                </div>
              </ZoomFade>
            </div>

            {/* 3 Pillar Cards in a 3-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
              {pillars.map((pillar, idx) => {
                const isExpanded = activePillarModal === pillar.id;

                return (
                  <ZoomFade
                    key={pillar.id}
                    fadeType={pillar.fadeType}
                    delay={0.15 + idx * 0.1}
                    duration={0.75}
                    className="h-full"
                  >
                    <div
                      className="h-full rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-5 sm:p-6 flex flex-col justify-between hover:border-rose-500/50 dark:hover:border-rose-500/50 transition-all duration-200 shadow-xs"
                    >
                      <div>
                        {/* Top Badges */}
                        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider mb-3 pb-2.5 border-b border-slate-100 dark:border-slate-800">
                          <span className="font-bold text-rose-600 dark:text-rose-400">
                            PILLAR {pillar.number}
                          </span>
                          <span className="text-slate-500 dark:text-slate-400">
                            {pillar.badge}
                          </span>
                        </div>

                        {/* Title */}
                        <h4 className="font-display text-base font-bold text-slate-950 dark:text-white mb-2.5 leading-snug">
                          {pillar.title}
                        </h4>

                        {/* Narrative summary */}
                        <p className="font-sans text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                          {pillar.summary}
                        </p>

                        {/* Collapsible details toggle */}
                        {isExpanded && (
                          <div className="pt-3 pb-2 border-t border-slate-100 dark:border-slate-800 space-y-2 animate-fadeIn">
                            <div className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                              ENGAGEMENT CAPABILITIES
                            </div>
                            {pillar.details.map((d, i) => (
                              <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                                <Check className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                                <span>{d}</span>
                              </div>
                            ))}
                            <div className="pt-2">
                              <button
                                onClick={() => onOpenInquiryForPillar && onOpenInquiryForPillar(pillar.title)}
                                className="w-full py-1.5 px-3 rounded-lg bg-slate-950 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 font-mono text-[11px] font-semibold transition-colors cursor-pointer"
                              >
                                RETAIN PILLAR MANDATE
                              </button>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Footer bar */}
                      <div className="pt-3 mt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between font-mono text-[10px] text-slate-500 dark:text-slate-400">
                        <span className="truncate">{pillar.footerTag}</span>
                        <button
                          onClick={() => setActivePillarModal(isExpanded ? null : pillar.id)}
                          className="w-5 h-5 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center hover:border-rose-500 hover:text-rose-600 transition-colors cursor-pointer shrink-0 ml-2"
                          aria-label="Toggle pillar details"
                        >
                          {isExpanded ? <ChevronUp className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                        </button>
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
