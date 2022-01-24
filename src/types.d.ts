declare module '*.yaml' {
  const data: { [key: string]: any };
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
  phone: string;
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
