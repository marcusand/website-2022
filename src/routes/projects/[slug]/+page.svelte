<script lang="ts">
  import type { Project } from '$content/types';
  import { getFormattedDate } from '$lib/getFormattedDate';
  import LabelValue from '../../../components/LabelValue.svelte';
  import Navigation from './components/Navigation.svelte';

  export let data: Project;

  const imageBaseUrl = '/images/projects';

  $: ({ title, date, description, image, links, role, slug, company, technologies } = data);

  $: imageSrc = `${imageBaseUrl}/${image.file}`;
  $: year = getFormattedDate(date, 'year');
  $: technologiesList = technologies?.join(', ');
</script>

<div class="project">
  <h1>{title}</h1>

  <p>{year}</p>

  <p class="description">{@html description}</p>

  <div class="image">
    <img src={imageSrc} alt={image.alt} />
  </div>

  <div class="info">
    {#if company !== undefined}
      <LabelValue label="company">{company}</LabelValue>
    {/if}

    <LabelValue label="role">{role}</LabelValue>

    {#if technologiesList && technologiesList.length > 0}
      <LabelValue label="technologies">{technologiesList}</LabelValue>
    {/if}

    {#if links && links.length > 0}
      <LabelValue label="links">
        <ul>
          {#each links as link}
            <li><a href={link} target="_blank">{link}</a></li>
          {/each}
        </ul>
      </LabelValue>
    {/if}
  </div>
</div>

<Navigation {slug} />

<style>
  .project {
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    object-fit: contain;
  }

  .image,
  .info {
    margin: 1rem 0;
  }

  ul {
    padding-left: 0.5rem;
  }

  a {
    word-break: break-all;
  }
</style>
