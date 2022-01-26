<script lang="ts">
  import Project from '../components/home/Project.svelte';
  import type { Project as TProject } from 'src/types';

  import projects from '../content/home/projects/index';

  const professionalProjects: Array<TProject> = projects.filter((p) => p.level === 'professional');
  const personalProjects: Array<TProject> = projects.filter((p) => p.level === 'personal');
</script>

<h1>marcus &&</h1>
<section>
  <h2>professional projects</h2>
  {#each professionalProjects as project}
    <Project data={project} />
  {/each}
</section>

<section>
  <h2>personal projects</h2>
  {#each personalProjects as project}
    <Project data={project} />
  {/each}
</section>
