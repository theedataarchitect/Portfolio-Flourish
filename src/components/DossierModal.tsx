import React from 'react';
import { PortfolioWork } from '../types';
import { X, Shield, Award, CheckCircle2, ArrowRight } from 'lucide-react';

interface DossierModalProps {
  work: PortfolioWork | null;
  onClose: () => void;
  onOpenInquiry: (topic: string) => void;
}

export const DossierModal: React.FC<DossierModalProps> = ({
  work,
  onClose,
  onOpenInquiry,
}) => {
  if (!work) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl space-y-6 my-auto">
        {/* Header bar */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-rose-600 dark:text-rose-400 font-bold border border-slate-200 dark:border-slate-700">
              {work.category}
            </span>
            <span className="text-slate-500">// {work.timeline}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Title and Scope */}
        <div>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white mb-3">
            {work.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            {work.dossierDetails.mandateContext}
          </p>
        </div>

        {/* Metrics Pill Grid */}
        <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 font-sans">
          <div>
            <div className={`text-xl sm:text-2xl font-bold ${work.metrics.primary.color || 'text-rose-600'}`}>
              {work.metrics.primary.value}
            </div>
            <div className="text-[11px] text-slate-500 uppercase">{work.metrics.primary.label}</div>
          </div>
          <div>
            <div className={`text-xl sm:text-2xl font-bold ${work.metrics.secondary.color || 'text-rose-600'}`}>
              {work.metrics.secondary.value}
            </div>
            <div className="text-[11px] text-slate-500 uppercase">{work.metrics.secondary.label}</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {work.metrics.tertiary?.value || 'VERIFIED'}
            </div>
            <div className="text-[11px] text-slate-500 uppercase">
              {work.metrics.tertiary?.label || 'Supervisory Audit'}
            </div>
          </div>
        </div>

        {/* Strategic Approach & Deliverables */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs text-rose-600 dark:text-rose-400 font-bold uppercase tracking-wider font-mono">
            <CheckCircle2 className="w-4 h-4" />
            <span>STRATEGIC APPROACH &amp; EXECUTION FRAMEWORK</span>
          </div>
          <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
            {work.dossierDetails.strategicApproach.map((step, i) => (
              <div
                key={i}
                className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 flex items-start gap-2.5"
              >
                <span className="text-rose-600 dark:text-rose-400 font-bold shrink-0">0{i + 1}.</span>
                <span className="leading-relaxed font-medium">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Risk Mitigation & Fiduciary Outcome */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-1.5">
            <div className="text-[11px] text-slate-500 uppercase font-semibold flex items-center gap-1.5 font-mono">
              <Shield className="w-3.5 h-3.5 text-amber-600" />
              RISK MITIGATION &amp; RESILIENCE
            </div>
            <p className="text-slate-700 dark:text-slate-300 font-sans text-xs leading-relaxed">
              {work.dossierDetails.riskMitigation}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-1.5">
            <div className="text-[11px] text-rose-600 dark:text-rose-400 uppercase font-semibold flex items-center gap-1.5 font-mono">
              <Award className="w-3.5 h-3.5" />
              AUDITED FIDUCIARY OUTCOME
            </div>
            <p className="text-slate-700 dark:text-slate-300 font-sans text-xs leading-relaxed font-medium">
              {work.dossierDetails.fiduciaryOutcome}
            </p>
          </div>
        </div>

        {/* Governance Sign-Off Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-slate-200 dark:border-slate-800 font-mono text-xs">
          <div className="text-slate-500 text-[11px] text-center sm:text-left">
            <span>GOVERNANCE: </span>
            <span className="text-slate-800 dark:text-slate-200 font-semibold">{work.dossierDetails.governanceSignOff}</span>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenInquiry(`Dossier Inquiry: ${work.title}`);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-950 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 font-sans text-xs font-semibold px-5 py-2.5 rounded-full transition-colors cursor-pointer"
          >
            <span>Retain Similar Mandate</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
