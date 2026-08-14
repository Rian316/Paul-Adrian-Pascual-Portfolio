/** Career timeline + certification shapes for the About page. */

export interface TimelineEntry {
  role: string;
  org: string;
  period: string;
  description: string;
  current?: boolean;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface Education {
  degree: string;
  honor: string;
  gwa: string;
  school: string;
  years: string;
  highSchool?: {
    strand: string;
    school: string;
    years: string;
  };
}
