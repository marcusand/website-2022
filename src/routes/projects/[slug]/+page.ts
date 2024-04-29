import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

import projects from '$content/home/projects';

export const load: PageLoad = ({ params: { slug } }) => {
  const project = projects.find((project) => project.slug === slug);

  console.log(project);

  if (project !== undefined) {
    return project;
  }

  error(404, 'Not found');
};