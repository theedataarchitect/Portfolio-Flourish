import React, { useState } from 'react';
import {
  EXECUTIVE_PROFILE,
  EXECUTIVE_SCREENS,
  PORTFOLIO_WORKS,
  PRACTICE_PILLARS,
  KEYNOTE_ADDRESSES,
  PUBLICATIONS
} from '../data/advisoryData';
import { PortfolioWork, ExecutiveScreenId } from '../types';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  TrendingUp,
  Shield,
  Compass,
  Award,
  BookOpen,
  Building2,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

interface ExecutiveScreensSectionProps {
  onSelectWork: (work: PortfolioWork) => void;
  onOpenInquiry: (topic?: string) => void;
}

export const ExecutiveScreensSection: React.FC<ExecutiveScreensSectionProps> = ({
  onSelectWork,
  onOpenInquiry
}) => {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);

  const currentScreen = EXECUTIVE_SCREENS[activeScreenIndex];

  const handlePrev = () => {
    setActiveScreenIndex((prev) => (prev > 0 ? prev - 1 : EXECUTIVE_SCREENS.length - 1));
  };

  const handleNext = () => {
    setActiveScreenIndex((prev) => (prev < EXECUTIVE_SCREENS.length - 1 ? prev + 1 : 0));
  };

  const handleSelectScreen = (idx: number) => {
    setActiveScreenIndex(idx);
  };

  return (
    <section id="executive-screens" className="py-20 lg:py-24 bg-slate-50/70 dark:bg-slate-950/70 backdrop-blur-xs border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Sizable portion dedicated to section header & controls */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="font-mono text-xs uppercase tracking-widest text-rose-600 dark:text-rose-400 font-semibold mb-2 flex items-center gap-2">
              <span>// EXECUTIVE SCREENS</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-tight mb-4">
              Interactive Executive Briefing
            </h2>

            <p className="font-mono text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider leading-relaxed mb-6">
              SELECTIVE CLIENT-REPRESENTATIVE TELEMETRY, DILIGENCE ARTIFACTS, AND INTERACTIVE DOSSIER SURFACES.
            </p>

            {/* Pagination controls in Left Column */}
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-2xs mb-6">
              <span className="font-mono text-xs text-slate-600 dark:text-slate-300 font-medium">
                Screen {activeScreenIndex + 1} of {EXECUTIVE_SCREENS.length}
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handlePrev}
                  aria-label="Previous screen"
                  className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-xs cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next screen"
                  className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-xs cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Vertical Screen Selector Pills */}
            <div className="space-y-1.5">
              {EXECUTIVE_SCREENS.map((screen, idx) => {
                const isActive = idx === activeScreenIndex;
                return (
                  <button
                    key={screen.id}
                    onClick={() => handleSelectScreen(idx)}
                    className={`w-full text-left px-3.5 py-2 rounded-xl font-mono text-xs uppercase tracking-wider transition-all flex items-center justify-between border cursor-pointer ${
                      isActive
                        ? 'bg-slate-950 dark:bg-white text-white dark:text-slate-950 border-transparent shadow-xs font-semibold'
                        : 'bg-white/80 dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <span className="truncate">{screen.label}</span>
                    <span className={`text-[10px] ${isActive ? 'text-rose-400 dark:text-rose-600' : 'text-slate-400'}`}>
                      0{idx + 1}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Screen Frame Constrained to the Right */}
          <div className="lg:col-span-8">
            <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md overflow-hidden transition-all duration-300">
              {/* Top Screen System Bar */}
              <div className="px-6 py-3.5 bg-slate-100/90 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-rose-600 dark:text-rose-400">
                    {currentScreen.badge}
                  </span>
                  <span className="text-slate-400">//</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold tracking-wide">
                    {currentScreen.label}
                  </span>
                </div>
                <span className="hidden sm:inline text-slate-500 dark:text-slate-400 text-[11px]">
                  {currentScreen.description}
                </span>
              </div>

          {/* Screen Content Body */}
          <div className="p-6 sm:p-8 lg:p-10 min-h-[480px]">
            {/* Screen 1: Executive Overview */}
            {activeScreenIndex === 0 && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-5">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 aspect-[4/5] bg-slate-100">
                    <img
                      src={EXECUTIVE_PROFILE.portraitUrl}
                      alt={EXECUTIVE_PROFILE.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <div className="font-display font-bold text-xl">{EXECUTIVE_PROFILE.name}</div>
                      <div className="font-mono text-xs text-slate-300 mt-0.5">
                        {EXECUTIVE_PROFILE.role} // {EXECUTIVE_PROFILE.firm}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-rose-600 dark:text-rose-400 font-semibold mb-2 block">
                      CHIEF EXECUTIVE PERSPECTIVE
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 dark:text-white leading-tight mb-4">
                      Strategic partner to boardrooms and capital leaders in pivotal moments.
                    </h3>
                    <p className="font-sans text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                      {EXECUTIVE_PROFILE.bio}
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-200 dark:border-slate-800">
                    {EXECUTIVE_PROFILE.keyMetrics.map((item, idx) => (
                      <div key={idx}>
                        <div className="font-display text-2xl sm:text-3xl font-extrabold text-rose-600 dark:text-rose-400 tracking-tight">
                          {item.value}
                        </div>
                        <div className="font-sans text-xs text-slate-600 dark:text-slate-400 mt-1">
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      onClick={() => handleSelectScreen(1)}
                      className="inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 font-sans text-xs font-semibold px-5 py-3 rounded-full transition-colors"
                    >
                      <span>Examine Strategic Mandates</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onOpenInquiry('Executive Consultation')}
                      className="inline-flex items-center gap-2 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-sans text-xs font-medium px-4 py-3 rounded-full transition-colors"
                    >
                      <span>Request Senior Advisory Consultation</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Screen 2: Strategic Mandates */}
            {activeScreenIndex === 1 && (
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-4 border-b border-slate-200 dark:border-slate-800 gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-slate-950 dark:text-white">
                      Selected Strategic Engagements
                    </h3>
                    <p className="font-sans text-xs text-slate-600 dark:text-slate-400 mt-1">
                      Audited case studies in sovereign infrastructure, enterprise value creation, and M&amp;A due diligence.
                    </p>
                  </div>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                    4 Documented Case Studies
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {PORTFOLIO_WORKS.map((work) => (
                    <div
                      key={work.id}
                      className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-slate-50/50 dark:bg-slate-800/40 hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="h-44 w-full relative overflow-hidden bg-slate-200">
                          <img
                            src={work.imageUrl}
                            alt={work.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-xs text-white px-2.5 py-1 rounded font-mono text-[10px] font-semibold uppercase tracking-wider">
                            {work.category}
                          </div>
                        </div>

                        <div className="p-5">
                          <div className="font-mono text-[11px] text-slate-500 dark:text-slate-400 mb-2">
                            {work.timeline}
                          </div>
                          <h4 className="font-sans font-bold text-base text-slate-950 dark:text-white mb-2 leading-snug">
                            {work.title}
                          </h4>
                          <p className="font-sans text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed mb-4">
                            {work.narrative}
                          </p>

                          <div className="grid grid-cols-2 gap-3 p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-sans">
                            <div>
                              <div className="font-bold text-lg text-rose-600 dark:text-rose-400">
                                {work.metrics.primary.value}
                              </div>
                              <div className="text-[10px] text-slate-500 uppercase">
                                {work.metrics.primary.label}
                              </div>
                            </div>
                            <div>
                              <div className="font-bold text-lg text-slate-900 dark:text-slate-100">
                                {work.metrics.secondary.value}
                              </div>
                              <div className="text-[10px] text-slate-500 uppercase">
                                {work.metrics.secondary.label}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-5 pt-0">
                        <button
                          onClick={() => onSelectWork(work)}
                          className="w-full py-2.5 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-sans text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                        >
                          <span>{work.ctaText}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-rose-600" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Screen 3: Practice Pillars */}
            {activeScreenIndex === 2 && (
              <div>
                <div className="mb-8 pb-4 border-b border-slate-200 dark:border-slate-800">
                  <h3 className="font-display text-2xl font-bold text-slate-950 dark:text-white">
                    Core Advisory Pillars &amp; Governance
                  </h3>
                  <p className="font-sans text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Structured strategic engagements designed for boardroom clarity, investment diligence, and corporate agility.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {PRACTICE_PILLARS.map((pillar) => (
                    <div
                      key={pillar.id}
                      className="rounded-xl border border-slate-200 dark:border-slate-800 p-6 bg-slate-50/50 dark:bg-slate-800/40 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-mono text-xs font-bold text-rose-600 dark:text-rose-400">
                            PILLAR {pillar.number}
                          </span>
                          <span className="font-mono text-[10px] text-slate-500 uppercase">
                            {pillar.targetAudience}
                          </span>
                        </div>
                        <h4 className="font-sans font-bold text-lg text-slate-950 dark:text-white mb-3">
                          {pillar.title}
                        </h4>
                        <p className="font-sans text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                          {pillar.description}
                        </p>
                        <div className="space-y-2.5 pt-4 border-t border-slate-200 dark:border-slate-800">
                          {pillar.details.map((point, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                              <span className="leading-snug">{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800">
                        <button
                          onClick={() => onOpenInquiry(`Practice Pillar: ${pillar.title}`)}
                          className="w-full py-2 rounded-lg bg-slate-950 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 font-sans text-xs font-semibold transition-colors"
                        >
                          Inquire for Mandate
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Screen 4: Global Keynotes */}
            {activeScreenIndex === 3 && (
              <div>
                <div className="mb-8 pb-4 border-b border-slate-200 dark:border-slate-800">
                  <h3 className="font-display text-2xl font-bold text-slate-950 dark:text-white">
                    International Keynotes &amp; Plenary Addresses
                  </h3>
                  <p className="font-sans text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Featured speaker at premier global economic forums, executive summits, and institutional symposiums.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {KEYNOTE_ADDRESSES.map((keynote) => (
                    <div
                      key={keynote.id}
                      className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-slate-50/50 dark:bg-slate-800/40 flex flex-col justify-between"
                    >
                      <div>
                        <div className="h-44 w-full relative overflow-hidden bg-slate-200">
                          <img
                            src={keynote.imageUrl}
                            alt={keynote.summit}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-3 left-3 bg-rose-600 text-white px-2 py-0.5 rounded font-mono text-[10px] font-semibold uppercase">
                            {keynote.badge}
                          </div>
                        </div>

                        <div className="p-5">
                          <div className="flex items-center justify-between font-mono text-[11px] text-slate-500 dark:text-slate-400 mb-2">
                            <span>{keynote.location}</span>
                            <span>{keynote.year}</span>
                          </div>
                          <div className="font-sans text-xs font-bold text-rose-600 dark:text-rose-400 mb-1">
                            {keynote.summit}
                          </div>
                          <h4 className="font-sans font-bold text-sm text-slate-950 dark:text-white mb-3 leading-snug">
                            {keynote.theme}
                          </h4>
                          <p className="font-sans text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                            {keynote.synopsis}
                          </p>

                          <div className="p-2.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-mono text-[10px] text-slate-600 dark:text-slate-400">
                            AUDIENCE: {keynote.audience}
                          </div>
                        </div>
                      </div>

                      <div className="p-5 pt-0">
                        <button
                          onClick={() => onOpenInquiry(`Speaker Request: ${keynote.summit}`)}
                          className="w-full py-2 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-sans text-xs font-semibold transition-colors"
                        >
                          Request Keynote Booking
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Screen 5: Publications & Monographs */}
            {activeScreenIndex === 4 && (
              <div>
                <div className="mb-8 pb-4 border-b border-slate-200 dark:border-slate-800">
                  <h3 className="font-display text-2xl font-bold text-slate-950 dark:text-white">
                    Executive Monographs &amp; Published Thought Leadership
                  </h3>
                  <p className="font-sans text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Published treatises and briefings on corporate governance, capital preservation, and decisive board strategy.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {PUBLICATIONS.map((pub) => (
                    <div
                      key={pub.id}
                      className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-slate-50/50 dark:bg-slate-800/40 flex flex-col justify-between"
                    >
                      <div>
                        <div className="h-44 w-full relative overflow-hidden bg-slate-200">
                          <img
                            src={pub.imageUrl}
                            alt={pub.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-xs text-white px-2 py-0.5 rounded font-mono text-[10px] font-semibold">
                            {pub.series}
                          </div>
                        </div>

                        <div className="p-5">
                          <div className="font-mono text-[11px] text-slate-500 dark:text-slate-400 mb-2">
                            {pub.date}
                          </div>
                          <h4 className="font-sans font-bold text-sm text-slate-950 dark:text-white mb-2 leading-snug">
                            {pub.title}
                          </h4>
                          <p className="font-sans text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                            {pub.abstract}
                          </p>

                          <div className="space-y-1.5 pt-3 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400">
                            {pub.keyFindings.map((finding, i) => (
                              <div key={i} className="flex items-start gap-1.5">
                                <span className="text-rose-600 font-bold">•</span>
                                <span className="leading-snug">{finding}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="p-5 pt-0">
                        <button
                          onClick={() => onOpenInquiry(`Monograph Access: ${pub.title}`)}
                          className="w-full py-2 rounded-lg bg-slate-950 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 font-sans text-xs font-semibold transition-colors"
                        >
                          {pub.actionText}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Bottom Screen Navigation Bar */}
          <div className="px-6 py-4 bg-slate-100/90 dark:bg-slate-800/80 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="text-slate-500">NAVIGATION:</span>
              <button
                onClick={handlePrev}
                className="text-slate-700 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors font-semibold"
              >
                ← PREVIOUS SCREEN
              </button>
              <span className="text-slate-400">|</span>
              <button
                onClick={handleNext}
                className="text-slate-700 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors font-semibold"
              >
                NEXT SCREEN →
              </button>
            </div>

            <button
              onClick={() => onOpenInquiry('Executive Engagement')}
              className="text-rose-600 dark:text-rose-400 font-semibold hover:underline cursor-pointer"
            >
              TRANSMIT MANDATE INQUIRY →
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};
