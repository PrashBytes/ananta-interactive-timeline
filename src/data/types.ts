export type ArtifactCategory =
  | 'ANCIENT'
  | 'MEDIEVAL'
  | 'MUGHAL'
  | 'REGIONAL'
  | 'MODERN';

export interface Period {
  id: string;
  number: number;
  code: string;
  title: string;
  subtitle: string;
  date: string;
  themeColor: string;
  bgClass: string;
  heroArtifactId: string;
  artifactIds: string[];
  bodyText: string;
  secondaryText: string;
}

export interface Artifact {
  id: string;
  name: string;
  periodId: string;
  periodLabel: string;
  periodShort: string;
  category: ArtifactCategory;
  region: string;
  material: string;
  technique: string;
  year: string;
  imagePrompt: string;
  imageUrl?: string;
  about: string;
  historicalContext: string;
  artisticSignificance: string;
}

export interface RegionalTradition {
  id: string;
  name: string;
  origin: string;
  period: string;
  palette: string[];
  imagePrompt: string;
  imageUrl?: string;
  about: string;
  themes: string[];
}

export interface Source {
  label: string;
  url?: string;
}

export type FilterKey = 'ALL' | ArtifactCategory;
