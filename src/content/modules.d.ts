// HOME

declare module '$content/home/projects/*' {
  const data: import('./types').Project;
  export default data;
}

// CV

declare module '*site.yaml' {
  const data: import('./types').Site;
  export default data;
}

declare module '*person.yaml' {
  const data: import('./types').Person;
  export default data;
}

declare module '$content/cv/skills/*' {
  const data: import('./types').Skill;
  export default data;
}

const experience: import('./types').Experience;

declare module '$content/cv/experience/*' {
  export default experience;
}

declare module '$content/cv/education/*' {
  export default experience;
}
