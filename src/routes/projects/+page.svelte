<script lang="ts">
  import projects from '$content/projects';
  import ProjectListItem from './components/ProjectListItem.svelte';
</script>

<h1>Projects</h1>

<ul>
  {#each projects as project}
    <ProjectListItem {project} />
  {/each}
</ul>
