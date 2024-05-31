<script lang="ts">
  import type { Project } from '$content/types';
  import { getFormattedDate } from '$lib/getFormattedDate';
  import LabelValue from '../../../components/LabelValue.svelte';

  export let data: Project;

  const imageBaseUrl = '/images/projects';

  const { title, date, description, image, level, links, role, slug, type, company, technologies } =
    data;
  const imageSrc = `${imageBaseUrl}/${image.file}`;
  const year = getFormattedDate(date, 'year');
  const technologiesList = technologies?.join(', ');
</script>

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

<a href="/projects">← all projects</a>

<style>
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
