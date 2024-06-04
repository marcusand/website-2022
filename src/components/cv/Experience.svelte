<script lang="ts">
  import type { Experience } from '$content/types';

  import { getFormattedDate } from '$lib/getFormattedDate';

  export let data: Experience;

  const { title, company, companyUrl, location, startDate, endDate, description } = data;
  const start = startDate ? getFormattedDate(startDate, 'short') : '';
  const end = endDate ? getFormattedDate(endDate, 'short') : 'today';
</script>

<div class="experience">
  <h3>{title}</h3>
  <p class="info">
    <span>
      {#if companyUrl !== undefined}
        <a href={companyUrl} target="_blank">{company}</a>
      {:else}
        {company}
      {/if}
    </span>

    <span class="separator">//</span>
    <span>{location}</span>
    <span class="separator">//</span>
    <span>{start} — {end}</span>
  </p>
  <p>{@html description}</p>
</div>

<style>
  .info {
    display: flex;
    gap: 0.25rem;
  }

  @media only screen and (max-width: 900px) {
    .info {
      flex-direction: column;
      gap: 0;
    }

    .separator {
      display: none;
    }
  }
</style>
