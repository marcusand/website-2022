<script lang="ts">
  import Section from '../components/Section.svelte';
  import Project from '../components/home/project/index.svelte';
  import EqualWidthGrid from '../components/EqualWidthGrid.svelte';
  import Links from '../components/home/Links.svelte';
  import type { Project as TProject } from '$content/types';

  import siteData from '$content/site.yaml';
  import personData from '$content/person.yaml';
  import projects from '$content/home/projects/index';

  const professionalProjects: Array<TProject> = projects.filter((p) => p.level === 'professional');
  const personalProjects: Array<TProject> = projects.filter((p) => p.level === 'personal');
  const { description, links } = personData;
</script>

<Section>
  <h1>{siteData.title}</h1>
  <p>{@html description}</p>
  <Links {links} />
</Section>
<Section>
  <h2>Professional Projects</h2>
  <EqualWidthGrid>
    {#each professionalProjects as project}
      <Project data={project} />
    {/each}
  </EqualWidthGrid>
</Section>
<Section>
  <h2>Personal Projects</h2>
  <EqualWidthGrid>
    {#each personalProjects as project}
      <Project data={project} />
    {/each}
  </EqualWidthGrid>
</Section>
