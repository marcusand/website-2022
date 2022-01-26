declare module '*.yml' {
  const data: { [key: string]: any };
  export default data;
}

declare module 'site.yaml' {
  const data: {
    domain: string;
    title: string;
    description: string;
    keywords: Array<string>;
  };
  export default data;
}

type Link = {
  title: string;
  username: string;
  href: string;
};

export type Person = {
  name: string;
  email: string;
  birthday: Date;
  location: string;
  links: Array<Link>;
};

export type Experience = {
  title: string;
  subtitle: string;
  startDate?: Date;
  endDate?: Date;
  location: string;
  description: string;
};

export type Skill = {
  title: string;
  keywords?: Array<string>;
  keywordsProfessional?: Array<string>;
  keywordsSemiProfessional?: Array<string>;
};

type ProjectType = 'web' | 'on-location';
type ProjectLevel = 'professional' | 'personal';
type ProjectImage = {
  file: string;
  alt: string;
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
