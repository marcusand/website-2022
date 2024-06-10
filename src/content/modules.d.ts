// HOME

declare module '$content/projects/*' {
  const data: import('./types').Project;
  export default data;
}

// VITA

declare module '*site.yaml' {
  const data: import('./types').Site;
  export default data;
}

declare module '*person.yaml' {
  const data: import('./types').Person;
  export default data;
}

declare module '$content/vita/skills/*' {
  const data: import('./types').Skill;
  export default data;
}

declare module '$content/vita/hobbies.yaml' {
  const data: import('./types').Hobbies;
  export default data;
}

const experience: import('./types').Experience;

declare module '$content/vita/experience/*' {
  export default experience;
}

declare module '$content/vita/education/*' {
  export default experience;
}
