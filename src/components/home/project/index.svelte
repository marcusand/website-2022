<script lang="ts">
  import type { Project } from '$content/types';
  import Title from './Title.svelte';
  import Text from './Text.svelte';

  export let data: Project;

  let show = false;
  const imageBaseUrl = '/images/projects';
  const { type, title, company, date, role, description, links, image } = data;
  const imageSrc = `${imageBaseUrl}/${image.file}`;
</script>

<div
  class="project"
  on:mouseleave={() => (show = false)}
  on:mouseenter={() => (show = true)}
  on:click={() => (show = !show)}
>
  <div class="tile">
    <img class="project-image" src={imageSrc} alt={image.alt} class:passiv={show} />
    <Text {company} {role} {links} {description} {date} {show} />
  </div>
  <div class="bottom">
    <Title {title} {type} />
    {#if image.copyright}
      <div class="copyright">{image.copyright}</div>
    {/if}
  </div>
</div>

<style>
  .project {
    width: 100%;
  }

  .tile {
    position: relative;
    width: 100%;
    height: 20rem;
  }

  .bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .copyright {
    flex-shrink: 0;
    margin: 0.25rem 0 0 0.5rem;
    font-size: 0.7rem;
    color: var(--gray);
  }

  .project-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.2s;
    transition-property: filter opacity;
  }

  .passiv {
    opacity: 0.4;
    filter: blur(10px);
  }
</style>
