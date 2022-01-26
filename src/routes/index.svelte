<script lang="ts">
  import Section from '../components/Section.svelte';
  import Project from '../components/home/Project.svelte';
  import type { Project as TProject } from '$content/types';

  import siteData from '../content/site.yaml';
  import projects from '../content/home/projects/index';

  const professionalProjects: Array<TProject> = projects.filter((p) => p.level === 'professional');
  const personalProjects: Array<TProject> = projects.filter((p) => p.level === 'personal');
</script>

<h1>{siteData.title}</h1>
<Section title="Professional Projects">
  {#each professionalProjects as project}
    <Project data={project} />
  {/each}
</Section>
<Section title="Personal Projects">
  {#each personalProjects as project}
    <Project data={project} />
  {/each}
</Section>
