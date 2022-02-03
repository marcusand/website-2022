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

<h1>{siteData.title}</h1>
<p>{@html description}</p>
<Links {links} />
<div>
  <Section title="Professional Projects">
    <EqualWidthGrid>
      {#each professionalProjects as project}
        <Project data={project} />
      {/each}
    </EqualWidthGrid>
  </Section>
  <Section title="Personal Projects">
    <EqualWidthGrid>
      {#each personalProjects as project}
        <Project data={project} />
      {/each}
    </EqualWidthGrid>
  </Section>
</div>
