<script lang="ts">
  import Section from '../../components/Section.svelte';
  import projects from '$content/home/projects';
</script>

<Section>
  <ul>
    {#each projects as project}
      <li><a href="/projects/{project.slug}">{project.title}</a></li>
    {/each}
  </ul>
</Section>
