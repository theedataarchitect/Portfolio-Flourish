export interface PortfolioWork {
  id: string;
  category: string;
  badgeType: 'sovereign' | 'growth' | 'advisory' | 'mna';
  timeline: string;
  title: string;
  narrative: string;
  imageUrl: string;
  metrics: {
    primary: { value: string; label: string; color?: string };
    secondary: { value: string; label: string; color?: string };
    tertiary?: { value: string; label: string; color?: string };
  };
  locationsOrTags: string[];
  ctaText: string;
  dossierDetails: {
    mandateContext: string;
    strategicApproach: string[];
    riskMitigation: string;
    fiduciaryOutcome: string;
    frameworkSummary: string;
    governanceSignOff: string;
  };
}

export interface PracticePillar {
  id: string;
  number: string;
  targetAudience: string;
  title: string;
  description: string;
  tags: string;
  iconName: string;
  details: string[];
}

export interface KeynoteAddress {
  id: string;
  location: string;
  badge: string;
  summit: string;
  theme: string;
  synopsis: string;
  audience: string;
  year: string;
  imageUrl: string;
  keyPoints: string[];
}

export interface PublicationItem {
  id: string;
  series: string;
  date: string;
  title: string;
  abstract: string;
  actionText: string;
  imageUrl: string;
  keyFindings: string[];
}

export type ExecutiveScreenId = 'overview' | 'mandates' | 'practice' | 'keynotes' | 'publications';

export type ThemeMode = 'light-slate' | 'dark-obsidian';
