<script lang="ts">
  import projects from '$content/home/projects';
</script>

<h1>Projects</h1>

<ul>
  {#each projects as project}
    <li><a href="/projects/{project.slug}">{project.title}</a></li>
  {/each}
</ul>
