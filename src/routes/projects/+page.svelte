<script lang="ts">
  import projects from '$content/projects';
  import ProjectListItem from './components/ProjectListItem.svelte';
</script>

<h1>Projects</h1>

<p>
  Here listed is a selection of projects I have worked on in the past and which I'm proud of. It
  features both professional and personal projects.
</p>

<ul>
  {#each projects as project}
    <ProjectListItem {project} />
  {/each}
</ul>
