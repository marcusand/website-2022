<script lang="ts">
  import projects from '$content/home/projects';

  const projectsSorted = [...projects].sort((projectA, projectB) => {
    return projectB.date.valueOf() - projectA.date.valueOf();
  });
</script>

<h1>Projects</h1>

<ul>
  {#each projectsSorted as project}
    <li>
      <a href="/projects/{project.slug}">
        {project.title}
      </a>
      {#if project.company !== undefined}
        <span>at {project.company}</span>
      {/if}
    </li>
  {/each}
</ul>
