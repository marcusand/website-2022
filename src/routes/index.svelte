<script lang="ts">
  import Section from '../components/Section.svelte';
  import Project from '../components/home/Project.svelte';
  import EqualWidthGrid from '../components/EqualWidthGrid.svelte';
  import type { Project as TProject } from '$content/types';

  import siteData from '$content/site.yaml';
  import personData from '$content/person.yaml';
  import projects from '$content/home/projects/index';

  const professionalProjects: Array<TProject> = projects.filter((p) => p.level === 'professional');
  const personalProjects: Array<TProject> = projects.filter((p) => p.level === 'personal');
  const { description, links } = personData;
</script>

<h1>{siteData.title}</h1>
<p>{description}</p>
<p>
  I am online and reachable on
  {#each links as link, index}
    <span>
      {#if index === links.length - 1}
        and
      {/if}
      <a href={link.href} target="__blank">
        {link.title}
      </a>
    </span>
  {/each}
</p>
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
