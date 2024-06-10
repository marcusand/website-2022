<script lang="ts">
  import projects from '$content/projects';

  export let slug: string;

  $: currentProjectIndex = projects.findIndex((project) => project.slug === slug);
  $: nextProjectIndex = (currentProjectIndex + 1) % projects.length;
  $: previousProjectIndex =
    currentProjectIndex === 0 ? projects.length - 1 : currentProjectIndex - 1;

  $: nextProjectSlug = projects[nextProjectIndex].slug;
  $: previousProjectSlug = projects[previousProjectIndex].slug;
</script>

<div class="navigation">
  <a class="all" href="/projects">← all </a>
  <div class="next-prev">
    <a href="/projects/{previousProjectSlug}">{'<'} prev</a>
    <a href="/projects/{nextProjectSlug}">next {'>'}</a>
  </div>
</div>

<style>
  .navigation {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
  }

  .next-prev {
    grid-column: 2;
    justify-self: center;
  }
</style>
