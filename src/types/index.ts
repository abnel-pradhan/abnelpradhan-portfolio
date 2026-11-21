export interface SoftwareProject {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  year: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  liveUrl?: string;
  githubUrl?: string;
  featuredImage: string;
  architectureDetails: string[];
}

export interface CreativeProject {
  id: string;
  title: string;
  role: string;
  genre: string;
  year: string;
  duration: string;
  bpm: number;
  cutRate: string;
  tools: string[];
  description: string;
  videoPreviewUrl: string; // Dynamic video loop or procedural animated canvas
  thumbnail: string;
  highlightCuts: string[];
  colorPalette: string[];
}

export interface TechSkill {
  name: string;
  category: 'frontend' | 'backend' | 'vision-ai' | 'creative-motion' | 'infra';
  proficiency: number;
  iconName?: string;
  highlight?: boolean;
}
