import React, { useState } from 'react';
import { ThemeMode } from '../types';
import { Moon, Sun, ArrowRight, Menu, X } from 'lucide-react';

interface HeaderProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
  onOpenInquiry: (topic?: string) => void;
  onExploreScreens: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  theme,
  onToggleTheme,
  onOpenInquiry,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { num: '01', label: 'ADVISORY PRACTICE', href: '#core-practice' },
    { num: '02', label: 'SELECTED WORKS', href: '#selected-works' },
    { num: '03', label: 'SUMMITS', href: '#keynotes' },
    { num: '04', label: 'MONOGRAPHS', href: '#monographs' },
    { num: '05', label: 'TELEMETRY', href: '#telemetry' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[#ebe8e2]/80 dark:bg-slate-950/60 border-b border-[#dad6cd]/90 dark:border-slate-800/70 text-slate-900 dark:text-slate-100 transition-all duration-300 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Monogram & Brand Identity: Strictly DataArtisan with NO subscript */}
        <a
          href="#"
          className="flex items-center gap-2.5 group text-left"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className="w-8 h-8 rounded-full border border-rose-500/40 bg-rose-500/10 flex items-center justify-center font-display text-xs font-bold text-rose-600 group-hover:scale-105 transition-transform shadow-2xs">
            DA
          </div>
          <span className="font-display font-extrabold text-base tracking-tight text-slate-950 dark:text-white">
            DataArtisan
          </span>
        </a>

        {/* Desktop Nav Items numbered 01 to 05 */}
        <nav className="hidden lg:flex items-center gap-6 font-mono text-[11px] tracking-wider text-slate-700 dark:text-slate-300">
          {navLinks.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors py-1 cursor-pointer flex items-center gap-1.5"
            >
              <span className="text-rose-600 dark:text-rose-400 font-semibold">{item.num}</span>
              <span className="font-sans text-xs font-semibold tracking-normal">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Right Actions: Theme Toggle & Inquire Mandate Button */}
        <div className="flex items-center gap-3">
          {/* Theme Switcher Toggle */}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-full border border-[#dad6cd] dark:border-slate-800 bg-[#dedbd4]/80 dark:bg-slate-900/60 hover:bg-[#d5d1ca] dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 transition-all cursor-pointer"
            title={theme === 'light-slate' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            aria-label="Toggle Theme"
          >
            {theme === 'light-slate' ? (
              <Moon className="w-4 h-4" />
            ) : (
              <Sun className="w-4 h-4 text-amber-500" />
            )}
          </button>

          {/* Inquire Mandate Call-to-Action Button */}
          <button
            onClick={() => onOpenInquiry('General Mandate Inquiry')}
            className="inline-flex items-center gap-1.5 bg-rose-600 hover:bg-rose-700 text-white font-mono text-xs font-semibold px-4 py-2.5 rounded-full transition-all shadow-sm cursor-pointer group"
          >
            <span>DataArtisan</span>
            <ArrowRight className="w-3.5 h-3.5 transform transition-transform group-hover:translate-x-0.5" />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg border border-[#dad6cd] dark:border-slate-800 bg-[#dedbd4]/80 dark:bg-slate-900/60 text-slate-800 dark:text-slate-200 transition-all"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#dad6cd] dark:border-slate-800 bg-[#ebe8e2]/90 dark:bg-slate-950/80 backdrop-blur-md px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="w-full text-left py-2 font-mono text-xs text-slate-700 dark:text-slate-200 hover:text-rose-600 dark:hover:text-rose-400 flex items-center gap-2"
            >
              <span className="text-rose-600 dark:text-rose-400 font-bold">{item.num}</span>
              <span className="font-sans text-sm font-semibold">{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
