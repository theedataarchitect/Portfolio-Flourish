import React, { useState } from 'react';
import { X, Send, CheckCircle2, Shield, Lock, Copy, Check } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  defaultTopic = '',
}) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [firm, setFirm] = useState('');
  const [tier, setTier] = useState('$1B - $10B');
  const [jurisdiction, setJurisdiction] = useState('London');
  const [domain, setDomain] = useState(defaultTopic || 'Strategic Board Advisory & Governance');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dispatchReceipt, setDispatchReceipt] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const token = `FE-ADVISORY-${Math.random().toString(36).substring(2, 8).toUpperCase()}-${Date.now().toString().slice(-4)}`;
      setDispatchReceipt(token);
    }, 500);
  };

  const handleCopy = () => {
    if (dispatchReceipt) {
      navigator.clipboard.writeText(dispatchReceipt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleReset = () => {
    setDispatchReceipt(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl space-y-6 my-auto">
        {/* Header - No blinking lights */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-600"></span>
            <span className="text-rose-600 dark:text-rose-400 font-mono text-xs font-bold uppercase tracking-wider">
              CONFIDENTIAL EXECUTIVE INQUIRY
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {dispatchReceipt ? (
          /* Confirmation State */
          <div className="py-6 space-y-6 text-center">
            <div className="w-14 h-14 rounded-full bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900/50 flex items-center justify-center mx-auto text-rose-600 dark:text-rose-400">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-slate-950 dark:text-white mb-2">
                Mandate Inquiry Transmitted
              </h3>
              <p className="font-sans text-xs text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
                Your confidential brief has been routed directly to Flourish Effiong’s executive desk. Direct fiduciary response is provided within 24 hours.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 max-w-md mx-auto space-y-2">
              <div className="text-[11px] font-mono text-slate-500 uppercase">
                DISPATCH REFERENCE TOKEN
              </div>
              <div className="flex items-center justify-center gap-2 font-mono text-sm font-bold text-rose-600 dark:text-rose-400">
                <span>{dispatchReceipt}</span>
                <button
                  onClick={handleCopy}
                  className="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors"
                  title="Copy reference token"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="py-2.5 px-6 rounded-full bg-slate-950 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 font-sans text-xs font-semibold transition-colors"
            >
              Close Inquiry Window
            </button>
          </div>
        ) : (
          /* Form State */
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="font-sans">
              <h3 className="text-xl font-bold text-slate-950 dark:text-white mb-1">
                Initiate Confidential Dialogue
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Direct advisory channel for managing directors, supervisory boards, and investment committees.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono text-slate-600 dark:text-slate-400 uppercase mb-1">
                  Full Name &amp; Title
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Marcus Vance, Managing Director"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-rose-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-600 dark:text-slate-400 uppercase mb-1">
                  Institution / Fund / Firm
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Meridian Private Capital"
                  value={firm}
                  onChange={(e) => setFirm(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-rose-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono text-slate-600 dark:text-slate-400 uppercase mb-1">
                  Fund AUM / Enterprise Value Tier
                </label>
                <select
                  value={tier}
                  onChange={(e) => setTier(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-rose-500"
                >
                  <option value="<$500M">&lt; $500M Enterprise Scale</option>
                  <option value="$500M - $1B">$500M - $1B Mid-Market</option>
                  <option value="$1B - $10B">$1B - $10B Institutional</option>
                  <option value=">$10B">&gt; $10B Sovereign / Mega-Fund</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-600 dark:text-slate-400 uppercase mb-1">
                  Executive Advisory Committee Desk
                </label>
                <select
                  value={jurisdiction}
                  onChange={(e) => setJurisdiction(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-rose-500"
                >
                  <option value="Enterprise & Supervisory Board">Enterprise &amp; Supervisory Board Desk</option>
                  <option value="Private Equity & Buyout Sponsor">Private Equity &amp; Buyout Sponsor Desk</option>
                  <option value="Sovereign Fund & Reserve Management">Sovereign Fund &amp; Reserve Desk</option>
                  <option value="Growth Capital & Strategic M&A">Growth Capital &amp; Strategic M&amp;A Desk</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-slate-600 dark:text-slate-400 uppercase mb-1">
                Mandate Domain / Focus
              </label>
              <input
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder="e.g. M&A Diligence, Board Decision Systems, Sovereign Reserve Advisory"
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-rose-500"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-slate-600 dark:text-slate-400 uppercase mb-1">
                Brief Context / Objectives
              </label>
              <textarea
                rows={3}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Outline the strategic inflection, transaction timeline, or supervisory committee objectives..."
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-rose-500"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2 text-[11px] text-slate-500 font-mono">
                <Lock className="w-3.5 h-3.5 text-rose-600" />
                <span>Encrypted &amp; Discretion Guaranteed</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 font-sans text-xs font-semibold px-5 py-2.5 rounded-full transition-colors disabled:opacity-50 cursor-pointer shadow-xs"
              >
                <span>{isSubmitting ? 'Transmitting...' : 'Transmit Inquiry'}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
