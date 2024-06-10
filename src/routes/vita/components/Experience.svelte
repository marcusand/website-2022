<script lang="ts">
  import type { Experience } from '$content/types';

  import { getFormattedDate } from '$lib/getFormattedDate';

  import companies from '$content/companies';

  export let data: Experience;

  const { title, companyId, location, startDate, endDate, description } = data;
  const start = startDate ? getFormattedDate(startDate, 'short') : '';
  const end = endDate ? getFormattedDate(endDate, 'short') : 'today';
  const company = companies.find(({ id }) => id === companyId);
</script>

<div class="experience">
  <h3>{title}</h3>
  <p class="info">
    {#if company !== undefined}
      <span>
        {#if company?.url !== undefined}
          <a href={company.url} target="_blank">{company.name}</a>
        {:else}
          {company.name}
        {/if}
      </span>

      <span class="separator">//</span>
    {/if}

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
