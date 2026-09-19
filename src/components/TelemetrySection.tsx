import React, { useState } from 'react';
import { Activity, ShieldCheck, Database, Radio } from 'lucide-react';
import { ZoomFade } from './ZoomFade';

interface TelemetrySectionProps {
  onOpenInquiry: (topic?: string) => void;
}

export const TelemetrySection: React.FC<TelemetrySectionProps> = ({ onOpenInquiry }) => {
  return (
    <section
      id="telemetry"
      className="py-20 lg:py-28 bg-white/20 dark:bg-slate-950/30 backdrop-blur-2xs border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Sizable portion for section header & numbering */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <ZoomFade fadeType="zoom-fade-in" duration={0.8}>
              <div className="font-display font-extrabold text-7xl lg:text-8xl text-slate-300 dark:text-slate-700 leading-none select-none mb-3">
                05
              </div>
            </ZoomFade>

            <ZoomFade fadeType="zoom-fade-right" delay={0.1} duration={0.75}>
              <div className="font-mono text-xs uppercase tracking-widest text-rose-600 dark:text-rose-400 font-semibold mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-pulse"></span>
                <span>// SYSTEMIC TELEMETRY</span>
              </div>
            </ZoomFade>

            <ZoomFade fadeType="zoom-fade-left" delay={0.15} duration={0.75}>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-tight mb-4">
                Quantitative Analytics &amp; Decision Telemetry
              </h2>
            </ZoomFade>

            <ZoomFade fadeType="zoom-fade-diagonal-left" delay={0.2} duration={0.75}>
              <p className="font-mono text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider leading-relaxed mb-6">
                CONTINUOUS EMPIRICAL BENCHMARKS ACROSS SOVEREIGN PIPELINES, PRIVATE CAPITAL PORTFOLIOS, AND HIGH-CONSEQUENCE CORPORATE APPARATUSES.
              </p>

              <button
                onClick={() => onOpenInquiry('Telemetry Architecture Audit')}
                className="inline-flex items-center gap-2 border border-slate-300 dark:border-slate-700 hover:border-rose-500 hover:text-rose-600 bg-white/80 dark:bg-slate-900/80 text-slate-900 dark:text-slate-100 font-mono text-xs font-semibold px-4 py-2.5 rounded-full transition-colors cursor-pointer shadow-2xs"
              >
                <span>REQUEST TELEMETRY AUDIT</span>
              </button>
            </ZoomFade>
          </div>

          {/* Right Column: 3 Telemetry Stream Cards Constrained to the Right */}
          <div className="lg:col-span-8 space-y-6">
            {/* Stream I: Decision Architecture & Telemetry */}
            <ZoomFade fadeType="zoom-fade-up" delay={0.1} duration={0.8}>
              <div className="rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 shadow-xs">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 font-bold">STREAM I</span>
                  <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                    BALANCED
                  </span>
                </div>

                <h3 className="font-display text-lg font-extrabold text-slate-950 dark:text-white mb-1">
                  Decision Architecture &amp; Telemetry
                </h3>
                <div className="font-mono text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-5">
                  PRODUCTION INGESTION &amp; COMPUTE LATENCY
                </div>

                {/* 4 Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80">
                    <div className="text-xl font-extrabold text-rose-600 dark:text-rose-400 tracking-tight font-display">
                      4.82B+
                    </div>
                    <div className="font-mono text-[9px] text-slate-500 dark:text-slate-400 uppercase mt-0.5 leading-tight">
                      EVENTS / DAY INGESTION PIPELINE
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80">
                    <div className="text-xl font-extrabold text-slate-950 dark:text-white tracking-tight font-display">
                      310ns
                    </div>
                    <div className="font-mono text-[9px] text-slate-500 dark:text-slate-400 uppercase mt-0.5 leading-tight">
                      P99 LATENCY EXECUTION SLA
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80">
                    <div className="text-xl font-extrabold text-emerald-600 dark:text-emerald-400 tracking-tight font-display">
                      -68.4%
                    </div>
                    <div className="font-mono text-[9px] text-slate-500 dark:text-slate-400 uppercase mt-0.5 leading-tight">
                      VARIANCE OVER SPURIOUS FACTOR
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80">
                    <div className="text-xl font-extrabold text-slate-950 dark:text-white tracking-tight font-display">
                      99.998%
                    </div>
                    <div className="font-mono text-[9px] text-slate-500 dark:text-slate-400 uppercase mt-0.5 leading-tight">
                      DEFENSIBILITY DETERMINISTIC
                    </div>
                  </div>
                </div>

                <p className="font-sans text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                  Decoupling high-frequency data ingestion from boardroom decision surfaces ensures zero telemetry lag and sub-second deterministic portfolio synchronization.
                </p>

                {/* Benchmarks Table */}
                <div className="border border-slate-200 dark:border-slate-800 rounded-xl p-3 font-mono text-[11px] space-y-2 bg-slate-50/50 dark:bg-slate-800/30">
                  <div className="flex justify-between text-slate-500 dark:text-slate-400 pb-1 border-b border-slate-200 dark:border-slate-700 text-[10px] uppercase">
                    <span>LATENCY BENCHMARK</span>
                    <span>ACTUAL // T1</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-700 dark:text-slate-300">
                    <span>Raw Ingestion</span>
                    <span className="font-semibold text-rose-600 dark:text-rose-400">48ms <span className="text-slate-400">(120ms)</span></span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-rose-600 h-full rounded-full w-[40%]"></div>
                  </div>
                  <div className="flex justify-between items-center text-slate-700 dark:text-slate-300 pt-1">
                    <span>Causal Node Traversal</span>
                    <span className="font-semibold text-slate-900 dark:text-slate-100">124ms <span className="text-slate-400">(400ms)</span></span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-slate-900 dark:bg-slate-100 h-full rounded-full w-[31%]"></div>
                  </div>
                  <div className="flex justify-between items-center text-slate-700 dark:text-slate-300 pt-1">
                    <span>Cockpit Sync</span>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">140ms <span className="text-slate-400">(470ms)</span></span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full rounded-full w-[30%]"></div>
                  </div>
                </div>
              </div>
            </ZoomFade>

            {/* Stream II & III in a 2-Column Grid on the right side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Stream II: Predictive Capital & Risk Diagnostics */}
              <ZoomFade fadeType="zoom-fade-diagonal-left" delay={0.2} duration={0.8} className="h-full">
                <div className="h-full rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between shadow-xs">
                  <div>
                    <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
                      <span className="text-slate-500 dark:text-slate-400 font-bold">STREAM II</span>
                      <span className="text-amber-500 dark:text-amber-400 flex items-center gap-1 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                        BAYESIAN PRECISION
                      </span>
                    </div>

                    <h3 className="font-display text-base font-extrabold text-slate-950 dark:text-white mb-1">
                      Predictive Capital &amp; Risk Diagnostics
                    </h3>
                    <div className="font-mono text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
                      FIDUCIARY FORECASTING &amp; RISK SURFACES
                    </div>

                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80">
                        <div className="text-lg font-extrabold text-rose-600 dark:text-rose-400 tracking-tight font-display">
                          99.4%
                        </div>
                        <div className="font-mono text-[8px] text-slate-500 dark:text-slate-400 uppercase mt-0.5 leading-tight">
                          FORECAST AUC HORIZON
                        </div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80">
                        <div className="text-lg font-extrabold text-slate-950 dark:text-white tracking-tight font-display">
                          $1.24B
                        </div>
                        <div className="font-mono text-[8px] text-slate-500 dark:text-slate-400 uppercase mt-0.5 leading-tight">
                          PORTFOLIO UNDER GUARD
                        </div>
                      </div>
                    </div>

                    <p className="font-sans text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      High-dimensional Bayesian states allow investment committees to benchmark cross-asset flow speed across regime shifts simultaneously.
                    </p>

                    <div className="border border-slate-200 dark:border-slate-800 rounded-xl p-2.5 font-mono text-[10px] space-y-2 bg-slate-50/50 dark:bg-slate-800/30">
                      <div className="flex justify-between items-center text-slate-700 dark:text-slate-300">
                        <span>Concentration Shock</span>
                        <span className="font-semibold text-emerald-600 dark:text-emerald-400">Low [0.14 σ]</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-700 dark:text-slate-300">
                        <span>Debt Renewal Drag</span>
                        <span className="font-semibold text-slate-900 dark:text-slate-100">Neutral [0.41 σ]</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-700 dark:text-slate-300">
                        <span>Margin Sensitivity</span>
                        <span className="font-semibold text-rose-600 dark:text-rose-400">Calibrated</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ZoomFade>

              {/* Stream III: Algorithmic Governance & Audit */}
              <ZoomFade fadeType="zoom-fade-diagonal-right" delay={0.25} duration={0.8} className="h-full">
                <div className="h-full rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between shadow-xs">
                  <div>
                    <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
                      <span className="text-slate-500 dark:text-slate-400 font-bold">STREAM III</span>
                      <span className="text-blue-600 dark:text-blue-400 flex items-center gap-1 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                        AUDIT GUARANTEE
                      </span>
                    </div>

                    <h3 className="font-display text-base font-extrabold text-slate-950 dark:text-white mb-1">
                      Algorithmic Governance &amp; Audit
                    </h3>
                    <div className="font-mono text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
                      DETERMINISTIC LINEAGE &amp; COMPLIANCE
                    </div>

                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80">
                        <div className="text-lg font-extrabold text-slate-950 dark:text-white tracking-tight font-display">
                          100%
                        </div>
                        <div className="font-mono text-[8px] text-slate-500 dark:text-slate-400 uppercase mt-0.5 leading-tight">
                          DETERMINISTIC LINEAGE
                        </div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80">
                        <div className="text-lg font-extrabold text-emerald-600 dark:text-emerald-400 tracking-tight font-display">
                          &lt;0.001%
                        </div>
                        <div className="font-mono text-[8px] text-slate-500 dark:text-slate-400 uppercase mt-0.5 leading-tight">
                          PARAMETRIC DRIFT AUDIT
                        </div>
                      </div>
                    </div>

                    <p className="font-sans text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      Continuous cryptographic audit streams ensure automated decision pipelines conform to institutional fiduciary policy benchmarks.
                    </p>

                    <div className="border border-slate-200 dark:border-slate-800 rounded-xl p-2.5 font-mono text-[10px] space-y-2 bg-slate-50/50 dark:bg-slate-800/30">
                      <div className="flex justify-between items-center text-slate-700 dark:text-slate-300">
                        <span>Cryptographic Trace</span>
                        <span className="font-semibold text-emerald-600 dark:text-emerald-400">100% Proven</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-700 dark:text-slate-300">
                        <span>Model Drift Tolerances</span>
                        <span className="font-semibold text-slate-900 dark:text-slate-100">Zero Variance</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-700 dark:text-slate-300">
                        <span>Audit Failsafe Tier-0FP</span>
                        <span className="font-semibold text-rose-600 dark:text-rose-400">DETERMINISTIC</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ZoomFade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
