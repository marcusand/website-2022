<script lang="ts">
  import { getFormattedDate } from '$lib/getFormattedDate';

  import type { Project } from '$content/types';

  export let data: Project;

  let show = false;

  const imageBaseUrl = '/images/projects';
  const { type, title, company, date, role, description, links, image } = data;
  const imageSrc = `${imageBaseUrl}/${image.file}`;
  const dateFormatted = getFormattedDate(date, 'year');
</script>

<div
  class="project"
  on:mouseleave={() => (show = false)}
  on:mouseenter={() => (show = true)}
  on:pointerdown={() => (show = !show)}
>
  <div class="tile">
    <img class="project-image" src={imageSrc} alt={image.alt} class:passiv={show} />
    <div class="project-content" class:show>
      <ul>
        {#if company}
          <li>at {company}</li>
        {/if}
        <li>{dateFormatted}</li>
        <li>role: {role}</li>
      </ul>
      <div class="more-content">
        {#if links}
          {#each links as link}
            <a href={link} target="__blank">{link}</a>
          {/each}
        {/if}
        {#if description}
          <div class="description">{description}</div>
        {/if}
      </div>
    </div>
  </div>
  <h3>
    {#if type === 'web'}
      <a href="https://{title}" target="__blank">https://{title}</a>
    {:else}
      {title}
    {/if}
  </h3>
</div>

<style>
  .tile {
    position: relative;
    width: 100%;
    height: 20rem;
  }

  .project-content {
    position: absolute;
    display: none;
    height: 100%;
    top: 0;
    left: 0;
    word-break: break-all;
    padding: 1rem;
  }

  .project-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(0px);
    transition: all 0.2s;
    transition-property: filter opacity;
  }

  h3 {
    margin: 0.5rem 0;
  }

  h3 a {
    color: black;
  }

  ul {
    text-transform: lowercase;
  }

  .more-content {
    margin-top: 1rem;
  }

  .description {
    margin-top: 1rem;
  }

  .show {
    display: block;
  }

  .passiv {
    opacity: 0.25;
  }
</style>
