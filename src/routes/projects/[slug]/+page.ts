import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

import projects from '$content/projects';

export const load: PageLoad = ({ params: { slug } }) => {
  const project = projects.find((project) => project.slug === slug);

  if (project !== undefined) {
    return project;
  }

  error(404, 'Not found');
};
