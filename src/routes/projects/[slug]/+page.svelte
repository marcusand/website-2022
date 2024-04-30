<script lang="ts">
  import type { Project } from '$content/types';
  import { getFormattedDate } from '$lib/getFormattedDate';

  export let data: Project;

  const imageBaseUrl = '/images/projects';

  const { title, date, description, image, level, links, role, slug, type, company } = data;
  const imageSrc = `${imageBaseUrl}/${image.file}`;
  const year = getFormattedDate(date, 'year');
</script>

<h1>{title}</h1>

<p>{year}</p>

<p class="description">{@html description}</p>

<div class="image">
  <img src={imageSrc} alt={image.alt} />
</div>

<div class="info">
  {#if company !== undefined}
    <div>
      <span class="label">company: </span>
      <span>{company}</span>
    </div>
  {/if}

  <div>
    <span class="label">role: </span>
    <span>{role}</span>
  </div>

  <div>
    <span class="label">links: </span>
    <span>
      <ul>
        {#each links as link}
          <li><a href={link} target="_blank">{link}</a></li>
        {/each}
      </ul>
    </span>
  </div>
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

  .label {
    font-weight: bold;
  }

  ul {
    padding-left: 0.5rem;
  }

  a {
    word-break: break-all;
  }
</style>
