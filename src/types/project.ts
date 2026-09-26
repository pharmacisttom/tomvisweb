export type DemoStatus = 'Available' | 'Maintenance' | 'Coming Soon' | 'Private Demo';

export type SolutionCategory = 
  | 'Operations'
  | 'Healthcare'
  | 'Finance & Cooperative'
  | 'Commerce & Retail'
  | 'Analytics & Intelligence';

export interface ProjectFeature {
  title: string;
  description: string;
  iconName?: string;
  badge?: string;
}

export interface DemoCredential {
  role: string;
  username: string;
  password: string;
  notes?: string;
}

export interface ProjectScreenshot {
  id: string;
  title: string;
  device: 'desktop' | 'tablet' | 'mobile';
  caption: string;
  previewColor?: string;
  mockDataSummary: string;
  featuresShown: string[];
}

export interface ProjectArchitecture {
  layers: {
    name: string;
    description: string;
    components: string[];
  }[];
  dataFlow: string[];
}

export interface ProjectSecurityInfo {
  dataSegregation: string;
  accessControl: string;
  encryption: string;
  auditTrail: string;
  complianceNotes: string;
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  category: SolutionCategory;
  categorySlug: string;
  status: DemoStatus;
  version: string;
  lastUpdated: string;
  description: string;
  overview: string;
  problem: {
    summary: string;
    points: string[];
  };
  solution: {
    summary: string;
    points: string[];
  };
  features: string[]; // listed features from prompt
  detailedFeatures: ProjectFeature[];
  technologies: string[];
  architecture: ProjectArchitecture;
  security: ProjectSecurityInfo;
  deviceSupport: {
    desktop: boolean;
    tablet: boolean;
    mobile: boolean;
    ruggedHardware?: boolean;
    posHardware?: boolean;
    offlineMode?: boolean;
    details: string;
  };
  screenshots: ProjectScreenshot[];
  demoUrl: string;
  demoCredentials?: DemoCredential[];
  demoSafetyNotes: string;
  noIndex?: boolean;
  highlightStats?: {
    label: string;
    value: string;
  }[];
}
