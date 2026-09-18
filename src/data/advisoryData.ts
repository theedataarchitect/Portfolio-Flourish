import { PortfolioWork, PracticePillar, KeynoteAddress, PublicationItem } from '../types';

export const EXECUTIVE_PROFILE = {
  name: 'Flourish Effiong',
  role: 'Founder & Chief Executive Officer',
  firm: 'DataArtisan Advisory',
  titleSnippet: 'Strategic Partner to Investment Committees, Boardrooms, and Sovereign Institutions',
  bio: 'Flourish Effiong is the Founder and CEO of DataArtisan Advisory, advising Fortune 500 boards, private equity general partners, and sovereign wealth institutions on capital allocation, algorithmic decision governance, and enterprise value creation. With over fifteen years orchestrating transformative mandates across North America, Europe, and Asia-Pacific, Flourish bridges high-stakes fiduciary strategy with quantitative certainty.',
  portraitUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=85',
  headquarters: 'Global Advisory Practice',
  keyMetrics: [
    { value: '$1.6B+', label: 'Enterprise Value Unlocked' },
    { value: '34+', label: 'Boardrooms & Sovereign Desks Advised' },
    { value: '100%', label: 'Fiduciary Independence & Discretion' },
    { value: '14', label: 'Global Plenary Keynote Addresses' }
  ]
};

export const PORTFOLIO_WORKS: PortfolioWork[] = [
  {
    id: 'sovereign-logistics',
    category: 'SOVEREIGN INFRASTRUCTURE & VALUE',
    badgeType: 'sovereign',
    timeline: '14-MONTH MANDATE',
    title: 'Sovereign Intermodal Logistics: Capital Efficiency & Network Balancing',
    narrative:
      'Retained by the supervisory board of an international maritime logistics consortium spanning 14 transshipment hubs. Engineered an executive optimization framework that restored capital turn rates and synchronized multi-modal rail-port dwell schedules.',
    imageUrl: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1200&q=80',
    metrics: {
      primary: { value: '$410M+', label: 'Documented Capital Savings', color: 'text-rose-600' },
      secondary: { value: '-34%', label: 'Vessel Dwell Variance', color: 'text-rose-600' },
      tertiary: { value: 'Tier-1', label: 'Operational Rating', color: 'text-slate-900 dark:text-white' }
    },
    locationsOrTags: ['INTERMODAL', 'LOGISTICS', 'PORTFOLIO OPTIMIZATION'],
    ctaText: 'EXAMINE STRATEGIC DOSSIER',
    dossierDetails: {
      mandateContext:
        'Sovereign port authority and supervisory board required a unified executive coordination framework across 14 transshipment hubs handling 28M TEU annually to safeguard terminal asset utilization against geopolitical supply chain shocks.',
      strategicApproach: [
        'Conducted end-to-end capital flow diagnosis across multi-modal rail, maritime berths, and hinterland logistics',
        'Implemented deterministic decision governance protocols for port directors and commercial carrier alliances',
        'Established forward-looking 36-hour predictive variance alerts to mitigate berthing congestion cascades'
      ],
      riskMitigation:
        'Eliminated compounding congestion cascades during peak seasonal tides, preventing multi-million dollar carrier demurrage penalties.',
      fiduciaryOutcome:
        '$410.8M in audited capital savings achieved through dwell reduction, fuel burn efficiency, and turnaround optimization within the initial 12-month operational window.',
      frameworkSummary: 'Comprehensive Sovereign Asset Governance Framework',
      governanceSignOff: 'Consortium Maritime Supervisory Board & International Port Authority'
    }
  },
  {
    id: 'predictive-capital',
    category: 'GROWTH EQUITY & PRIVATE CAPITAL',
    badgeType: 'growth',
    timeline: 'SERIES C SPONSOR ADVISORY',
    title: 'Enterprise Capital Preservation & High-Value Account Retention',
    narrative:
      'Commissioned by private equity leadership to overhaul retention mechanics and client value dynamics across a premier European enterprise fintech. Formulated predictive churn interventions that preserved critical institutional recurring revenue.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    metrics: {
      primary: { value: '$38M ARR', label: 'Retained Enterprise Capital', color: 'text-rose-600' },
      secondary: { value: '92%', label: 'Intervention Precision', color: 'text-rose-600' },
      tertiary: { value: '+1.8x', label: 'Valuation Multiple Uplift', color: 'text-slate-900 dark:text-white' }
    },
    locationsOrTags: ['ENTERPRISE', 'FINTECH', 'CAPITAL PRESERVATION'],
    ctaText: 'EXAMINE STRATEGIC DOSSIER',
    dossierDetails: {
      mandateContext:
        'Private equity buyout syndicate identified significant enterprise account attrition in a high-growth tier-1 neobank. Traditional backward-looking reporting identified client churn only after contract terminations occurred.',
      strategicApproach: [
        'Engineered a 90-day forward risk diagnostic mapping account transaction velocity changes and stakeholder engagement decay',
        'Restructured executive relationship tiers and instituted strategic concierge interventions for top 100 enterprise accounts',
        'Aligned executive compensation incentives directly with net dollar retention and customer lifetime equity'
      ],
      riskMitigation:
        'Protected enterprise customer base during macroeconomic interest rate transitions, shutting down competitor displacement efforts.',
      fiduciaryOutcome:
        '$38.4M in annualized recurring revenue retained, lifting valuation multiple ahead of a $450M institutional secondary financing round.',
      frameworkSummary: 'Enterprise Client Retention & Fiduciary Value Architecture',
      governanceSignOff: 'Tier-1 Private Equity Lead Partner & Operational Steering Committee'
    }
  },
  {
    id: 'boardroom-decision-systems',
    category: 'SOVEREIGN FUND GOVERNANCE',
    badgeType: 'advisory',
    timeline: 'BOARDROOM ADVISORY MANDATE',
    title: 'Executive Decision Systems for Sovereign Reserve Funds',
    narrative:
      'Advised the investment committee and chief risk officers of a national sovereign reserve pool managing multi-asset allocations. Synthesized disparate portfolio exposures into a unified decision surface for boardroom velocity and crisis preparedness.',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
    metrics: {
      primary: { value: '< 15 min', label: 'Consensus Velocity', color: 'text-rose-600' },
      secondary: { value: '$120B+', label: 'AUM Under Framework', color: 'text-rose-600' },
      tertiary: { value: '100%', label: 'Audit Trail Clarity', color: 'text-slate-900 dark:text-white' }
    },
    locationsOrTags: ['SOVEREIGN RESERVES', 'GOVERNANCE', 'TREASURY DECISIONING'],
    ctaText: 'EXAMINE STRATEGIC DOSSIER',
    dossierDetails: {
      mandateContext:
        'Supervisory board required deterministic consensus velocity across illiquid infrastructure, private equity co-investments, and foreign sovereign bonds without data latency or siloed department bias.',
      strategicApproach: [
        'Consolidated cross-asset valuation models into a single executive dashboard reviewed weekly by committee chairs',
        'Standardized qualitative risk memos into concise, verifiable scenario options with explicit fiduciary tradeoffs',
        'Implemented clear delegation thresholds freeing senior leadership to focus exclusively on systemic allocations'
      ],
      riskMitigation:
        'Shielded reserve pool against sudden liquidity dislocations during currency volatility episodes by establishing pre-approved defensive allocations.',
      fiduciaryOutcome:
        'Reduced supervisory sign-off turnaround from 4 business days to under 15 minutes, ensuring strategic agility during global market adjustments.',
      frameworkSummary: 'Sovereign Board Decision Protocol & Risk Allocation Framework',
      governanceSignOff: 'Supreme Board of Audit & State Reserve Fiduciary Commission'
    }
  },
  {
    id: 'buyout-technical-audit',
    category: 'M&A STRATEGIC DUE DILIGENCE',
    badgeType: 'mna',
    timeline: '$1.2B BUYOUT TRANSACTION',
    title: 'Technology & Operational Moat Diligence for Enterprise Software Buyout',
    narrative:
      'Conducted rigorous commercial and operational diligence for a mega-fund private equity buyout syndicate. Uncovered $45M in unmodeled infrastructure and operational drag, empowering the deal team to reprice the transaction favorably.',
    imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
    metrics: {
      primary: { value: '$1.2B', label: 'Transaction Value', color: 'text-rose-600' },
      secondary: { value: '$45M', label: 'Purchase Price Adjustment', color: 'text-rose-600' },
      tertiary: { value: '100-Day', label: 'Value Creation Blueprint', color: 'text-slate-900 dark:text-white' }
    },
    locationsOrTags: ['M&A DILIGENCE', 'TAKEOVER', 'VALUATION ASSURANCE'],
    ctaText: 'EXAMINE STRATEGIC DOSSIER',
    dossierDetails: {
      mandateContext:
        'Mega-cap private equity sponsor pursuing a $1.2B take-private acquisition needed independent validation of proprietary technology assets, customer retention dynamics, and operational cost scalability.',
      strategicApproach: [
        'Audited core platform infrastructure, licensing agreements, and third-party dependencies',
        'Benchmarked proprietary software moats against emerging open-source and market innovations',
        'Reconstructed actual run-rate infrastructure costs, identifying unmodeled scaling overhead'
      ],
      riskMitigation:
        'Equipped deal team with quantitative leverage to renegotiate acquisition terms and establish adequate indemnification escrows.',
      fiduciaryOutcome:
        'Secured a $45M purchase price reduction while delivering a comprehensive 100-day post-acquisition operational roadmap for incoming management.',
      frameworkSummary: 'Comprehensive Private Equity Pre-Acquisition Value Blueprint',
      governanceSignOff: 'Sponsor Investment Committee & Senior Lead Partners'
    }
  }
];

export const PRACTICE_PILLARS: PracticePillar[] = [
  {
    id: 'pillar-1',
    number: '01',
    targetAudience: 'PRIVATE EQUITY & VC SPONSORS',
    title: 'Strategic Due Diligence & Portfolio Value Creation',
    description:
      'Rigorous commercial, operational, and data diligence for buyout sponsors and growth funds. We assess proprietary competitive moats, uncover hidden operational costs, and design actionable 100-day value creation roadmaps for incoming management.',
    tags: 'M&A DILIGENCE • VALUE CREATION • OPERATIONAL AUDIT',
    iconName: 'TrendingUp',
    details: [
      'Pre-acquisition competitive defensibility and proprietary asset evaluation',
      'Operational cost reconstruction and infrastructure run-rate optimization',
      'Customer cohort retention diagnostics and unit economic verification',
      'Post-acquisition 100-day transformation roadmaps for operating partners'
    ]
  },
  {
    id: 'pillar-2',
    number: '02',
    targetAudience: 'BOARDS & SUPERVISORY COMMITTEES',
    title: 'Boardroom Governance & Decision Systems',
    description:
      'Empowering corporate boards and investment committees with crisp, forward-looking decision frameworks. We replace passive retrospectives with scenario-tested decision models that illuminate systemic risks and capital tradeoffs.',
    tags: 'GOVERNANCE • FIDUCIARY STEWARDSHIP • SCENARIO PLANNING',
    iconName: 'Shield',
    details: [
      'Real-time portfolio exposure modeling and treasury scenario planning',
      'Streamlined board reporting eliminating information overload and cognitive lag',
      'Confidential governance audits and committee decision protocols',
      'Crisis mitigation playbooks for black-swan macroeconomic regimes'
    ]
  },
  {
    id: 'pillar-3',
    number: '03',
    targetAudience: 'C-SUITE & ENTERPRISE LEADERSHIP',
    title: 'Executive Advisory & Strategic Leadership',
    description:
      'Trusted strategic counsel to Chief Executives and Managing Directors navigating pivotal corporate inflection points, strategic repositioning, and high-consequence mergers.',
    tags: 'EXECUTIVE COUNSEL • STRATEGIC AGILITY • CAPITAL STRATEGY',
    iconName: 'Compass',
    details: [
      'Confidential 1-on-1 strategic sounding board for Chief Executives',
      'Strategic market repositioning and high-consequence enterprise pivots',
      'Executive alignment workshops bridging commercial vision with capital realities',
      'Asymmetric strategic intelligence for enterprise market expansion'
    ]
  }
];

export const KEYNOTE_ADDRESSES: KeynoteAddress[] = [
  {
    id: 'wef-geneva',
    location: 'GLOBAL PLENARY SUMMIT',
    badge: 'PLENARY ADDRESS',
    summit: 'World Economic Forum Dialogue',
    theme: '"Sovereign Capital Strategy: Building Resilience in an Era of Multilateral Realignment"',
    synopsis:
      'Delivered plenary address to 800+ global delegates on establishing sovereign capital autonomy, supply chain redundancy, and sustainable enterprise governance.',
    audience: 'MINISTERS, CHAIRMEN & MANAGING DIRECTORS',
    year: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80',
    keyPoints: [
      'Geopolitical exposure in hyperscaler cloud concentration and centralized supply lines',
      'Core principles for institutional-scale sovereign resilience and capital shielding',
      'Designing dual-stack infrastructure immune to cross-border policy shocks'
    ]
  },
  {
    id: 'gartner-london',
    location: 'EXECUTIVE SYMPOSIUM',
    badge: 'KEYNOTE SPEAKER',
    summit: 'Global Enterprise Leadership Summit',
    theme: '"Beyond Retrospectives: Re-architecting Executive Decision Velocity"',
    synopsis:
      'Challenged orthodox corporate reporting and presented forward-looking decision models that empower boards to act decisively before market shifts solidify.',
    audience: '2,400+ GLOBAL ENTERPRISE LEADERS & CEOS',
    year: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80',
    keyPoints: [
      'Why 85% of corporate executive dashboards fail to guide pivotal capital decisions',
      'Transitioning from backward-looking metrics to forward-looking scenario testing',
      'Techniques for eliminating committee indecision and cognitive latency'
    ]
  },
  {
    id: 'mit-emtech',
    location: 'GOVERNANCE FORUM',
    badge: 'INVITED LECTURE',
    summit: 'Symposium on Corporate Governance',
    theme: '"Fiduciary Stewardship in the Age of Automated Decision Systems"',
    synopsis:
      'Addressed supervisory directors on maintaining legal and fiduciary oversight when algorithmic systems inform core capital allocation.',
    audience: 'NON-EXECUTIVE DIRECTORS & AUDIT CHAIRS',
    year: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1000&q=80',
    keyPoints: [
      'Legal and fiduciary responsibilities of non-technical corporate directors',
      'Establishing verifiable supervisory guardrails and audit transparency',
      'Quantifying tail risk and confidence intervals in high-stakes capital proposals'
    ]
  }
];

export const PUBLICATIONS: PublicationItem[] = [
  {
    id: 'hbr-algorithmic-boardroom',
    series: 'EXECUTIVE STRATEGY REVIEW',
    date: 'AUTUMN 2024',
    title: 'The Decisive Boardroom: Moving From Committee Inertia to High-Conviction Strategy',
    abstract:
      'An analytical examination of how top-performing boards synthesize quantitative evidence to resolve complex merger dilemmas and accelerate strategic consensus.',
    actionText: 'READ EXECUTIVE TREATISE',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80',
    keyFindings: [
      'Consensus-seeking committee structures often dilute high-conviction strategic initiatives.',
      'Scenario models reveal hidden executive assumptions and retrospective rationalizations.',
      'Sovereign frameworks enable boards to test merger synergies with verified empirical rigor.'
    ]
  },
  {
    id: 'entropy-data-lakes',
    series: 'MANAGEMENT BRIEFING',
    date: 'JUNE 2024',
    title: 'Capital Leaks in Enterprise Transformation: The $40M Hidden Drag',
    abstract:
      'A forensic audit of sprawling corporate tech programs, runaway consultancy overhead, and practical methodologies for recovering capital velocity within 90 days.',
    actionText: 'DOWNLOAD MANAGEMENT BRIEFING',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    keyFindings: [
      'Over 60% of large enterprise digital transformations produce zero measurable ROI for the board.',
      'Silent organizational sprawl and unmonitored vendor dependencies drain tens of millions annually.',
      'Disciplined executive governance restores milestone accountability and recovers capital within 90 days.'
    ]
  },
  {
    id: 'synthetic-inference',
    series: 'BOARD BRIEFING',
    date: 'Q1 2025',
    title: "The Chief Executive's Guide to Causal Economics & Strategic Decision Quality",
    abstract:
      'Demystifying speculative technology trends to focus executive attention on structural economic fundamentals, risk-adjusted returns, and enduring moats.',
    actionText: 'READ BOARD BRIEFING',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
    keyFindings: [
      'Differentiating superficial technology hype from structural competitive advantages.',
      'High-consequence capital commitments require rigorous causal analysis, not speculative forecasts.',
      'How tier-1 institutions deploy strategic technology with strict downside safety guarantees.'
    ]
  }
];

export const EXECUTIVE_SCREENS = [
  {
    id: 'overview',
    label: 'EXECUTIVE OVERVIEW',
    badge: 'SCREEN 01',
    description: 'CEO Leadership, Track Record & Global Advisory Scope'
  },
  {
    id: 'mandates',
    label: 'STRATEGIC MANDATES',
    badge: 'SCREEN 02',
    description: 'Case Studies: Sovereign Infrastructure, Private Capital & Diligence'
  },
  {
    id: 'practice',
    label: 'ADVISORY PRACTICE',
    badge: 'SCREEN 03',
    description: 'Core Practice Pillars, Board Governance & Executive Counsel'
  },
  {
    id: 'keynotes',
    label: 'GLOBAL KEYNOTES',
    badge: 'SCREEN 04',
    description: 'World Economic Forum, Global Summits & Invited Plenaries'
  },
  {
    id: 'publications',
    label: 'PUBLICATIONS',
    badge: 'SCREEN 05',
    description: 'Executive Treatises, Management Briefings & Thought Leadership'
  }
];
