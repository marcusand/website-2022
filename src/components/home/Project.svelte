<script lang="ts">
  import { getFormattedDate } from '$lib/getFormattedDate';

  import type { Project } from '$content/types';
  import SectionElement from '../SectionElement.svelte';

  export let data: Project;

  let unfolded = false;

  const imageBaseUrl = '/images/projects';
  const { type, title, company, date, role, description, links, image } = data;
  const imageSrc = `${imageBaseUrl}/${image.file}`;
  const dateFormatted = getFormattedDate(date, 'year');
</script>

<SectionElement>
  <div class="left">
    <img src={imageSrc} alt={image.alt} />
  </div>
  <div class="right">
    <h3>
      {#if type === 'web'}
        <a href="https://{title}" target="__blank">{title}</a>
      {:else}
        {title}
      {/if}
    </h3>
    <ul>
      {#if company}
        <li>at {company}</li>
      {/if}
      <li>{dateFormatted}</li>
      <li>role: {role}</li>
    </ul>
    {#if description || links}
      <button on:click={() => (unfolded = !unfolded)}>
        {#if unfolded}
          less
        {:else}
          more
        {/if}
      </button>
      <div class="more-content" class:unfolded>
        {#if links}
          {#each links as link}
            <a href={link} target="__blank">{link}</a>
          {/each}
        {/if}
        {#if description}
          <div class="description">{description}</div>
        {/if}
      </div>
    {/if}
  </div>
</SectionElement>

<style>
  .right {
    font-size: 1.6rem;
  }

  img {
    width: 100%;
    height: 15rem;
    object-fit: cover;
  }

  h3 {
    margin-bottom: 0.5rem;
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

  button {
    border: 0;
    padding: 0;
    font-size: inherit;
    font: inherit;
    background: transparent;
    text-decoration: underline;
    color: var(--accent-color);
    cursor: pointer;
    margin-top: 0.5rem;
  }

  .more-content {
    display: none;
  }

  .unfolded {
    display: block;
  }
</style>
