<script lang="ts">
  import { getFormattedDate } from '$lib/getFormattedDate';

  import type { Project } from 'src/types';
  import Section from '../Section.svelte';

  export let data: Project;

  let unfolded = false;

  const imageBaseUrl = '/images/projects';
  const { type, title, company, date, role, description, links, image } = data;
  const imageSrc = `${imageBaseUrl}/${image.file}`;
  const dateFormatted = getFormattedDate(date, 'year');
</script>

<Section>
  <div class="body">
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
        <div class="more" on:click={() => (unfolded = !unfolded)}>
          {#if unfolded}
            less
          {:else}
            more
          {/if}
        </div>
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
  </div>
</Section>

<style>
  .body {
    font-size: 1.6rem;
  }

  img {
    width: 100%;
    height: 15rem;
    object-fit: cover;
  }

  h3 {
    margin-bottom: 0;
  }

  ul {
    text-transform: lowercase;
  }

  .more-content {
    padding-top: 2rem;
  }

  .description {
    margin: 1rem 0rem;
  }

  .more {
    text-decoration: underline;
    color: blue;
    cursor: pointer;
  }

  .more-content {
    display: none;
  }

  .unfolded {
    display: block;
  }
</style>
