import React, { useState, useEffect } from 'react';
import { PortfolioWork, ThemeMode } from './types';
import { AmbientBackground } from './components/AmbientBackground';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PortfolioSection } from './components/PortfolioSection';
import { PracticeSection } from './components/PracticeSection';
import { KeynotesSection } from './components/KeynotesSection';
import { MonographsSection } from './components/MonographsSection';
import { TelemetrySection } from './components/TelemetrySection';
import { ExecutiveScreensSection } from './components/ExecutiveScreensSection';
import { Footer } from './components/Footer';
import { DossierModal } from './components/DossierModal';
import { InquiryModal } from './components/InquiryModal';
import { FocusSection } from './components/FocusSection';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>('dark-obsidian');
  const [selectedDossier, setSelectedDossier] = useState<PortfolioWork | null>(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryTopic, setInquiryTopic] = useState('');

  // Synchronize dark mode class on document element
  useEffect(() => {
    if (theme === 'dark-obsidian') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Handle escape key to close modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedDossier(null);
        setIsInquiryOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light-slate' ? 'dark-obsidian' : 'light-slate'));
  };

  const handleOpenInquiry = (topic?: string) => {
    setInquiryTopic(topic || 'General Mandate Inquiry');
    setIsInquiryOpen(true);
  };

  const handleScrollToScreens = () => {
    const el = document.getElementById('executive-screens');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200 relative selection:bg-rose-500/20 selection:text-rose-700">
      {/* High-Performance WebGL Shader Interactive Particle Canvas Background */}
      <AmbientBackground theme={theme} />

      {/* Top Sticky Header */}
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenInquiry={handleOpenInquiry}
        onExploreScreens={handleScrollToScreens}
      />

      {/* Main Sections wrapped with smooth scroll focus transitions */}
      <main className="relative z-10">
        {/* Hero Section - focal punch-in zoom */}
        <FocusSection id="hero" immediate fadeType="zoom-fade-in">
          <HeroSection
            onOpenInquiry={handleOpenInquiry}
            onExploreScreens={handleScrollToScreens}
          />
        </FocusSection>

        {/* 01 Core Advisory Practice & Pillars - lateral left zoom */}
        <FocusSection id="core-practice" fadeType="zoom-fade-left">
          <PracticeSection
            onOpenInquiryForPillar={(title) => handleOpenInquiry(`Practice Pillar: ${title}`)}
          />
        </FocusSection>

        {/* 02 Selected Works & Strategic Mandates Portfolio - ascending zoom */}
        <FocusSection id="selected-works" fadeType="zoom-fade-up">
          <PortfolioSection
            onSelectWork={(work) => setSelectedDossier(work)}
          />
        </FocusSection>

        {/* 03 Global Keynotes & Plenary Addresses - diagonal zoom */}
        <FocusSection id="keynotes" fadeType="zoom-fade-diagonal-left">
          <KeynotesSection
            onOpenInquiry={(topic) => handleOpenInquiry(topic || 'Speaker Bureau Booking')}
          />
        </FocusSection>

        {/* 04 Executive Monographs & Research Briefings - optical blur focus zoom */}
        <FocusSection id="monographs" fadeType="zoom-fade-blur">
          <MonographsSection
            onOpenInquiry={(topic) => handleOpenInquiry(topic || 'Monograph Access Request')}
          />
        </FocusSection>

        {/* 05 Systemic Telemetry & Continuous Empirical Benchmarks - telemetric expansion zoom */}
        <FocusSection id="telemetry" fadeType="zoom-fade-out">
          <TelemetrySection
            onOpenInquiry={handleOpenInquiry}
          />
        </FocusSection>

        {/* Executive Screens Interactive Dossier - descending perspective zoom */}
        <FocusSection id="executive-screens" fadeType="zoom-fade-down">
          <ExecutiveScreensSection
            onSelectWork={(work) => setSelectedDossier(work)}
            onOpenInquiry={handleOpenInquiry}
          />
        </FocusSection>

        {/* Footer */}
        <Footer
          onOpenInquiry={() => handleOpenInquiry('Direct Dispatch Inquiry')}
          onScrollToTop={handleScrollToTop}
          onExploreScreens={handleScrollToScreens}
        />
      </main>

      {/* Strategic Dossier Brief Modal */}
      <DossierModal
        work={selectedDossier}
        onClose={() => setSelectedDossier(null)}
        onOpenInquiry={(topic) => handleOpenInquiry(topic)}
      />

      {/* Confidential Direct Inquiry Modal */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        defaultTopic={inquiryTopic}
      />
    </div>
  );
}
