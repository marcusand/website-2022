export type Link = {
  title?: string;
  alias: string;
  href: string;
};

export type Person = {
  name: string;
  birthday: Date;
  location: string;
  description: string;
  description_cv: string;
  links: Array<Link>;
};

export type Site = {
  domain: string;
  title: string;
  description: string;
  keywords: Array<string>;
};

export type Experience = {
  title: string;
  subtitle: string;
  startDate: Date;
  endDate?: Date;
  location: string;
  description?: string;
};

export type Skill = {
  title: string;
  keywords?: Array<string>;
  keywordsProfessional?: Array<string>;
  keywordsSemiProfessional?: Array<string>;
};

export type Hobbies = Array<string>;

export type ProjectType = 'web' | 'on-location';
export type ProjectLevel = 'professional' | 'personal';
export type ProjectImage = {
  file: string;
  alt: string;
  copyright?: string;
};

export type Project = {
  type: ProjectType;
  level: ProjectLevel;
  title: string;
  image: ProjectImage;
  company?: string;
  date: Date;
  role: string;
  description: string;
  links: Array<string>;
};
