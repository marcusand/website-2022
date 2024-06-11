<script lang="ts">
  import type { Experience } from '$content/types';

  import CompanyLink from '$components/CompanyLink.svelte';
  import { getFormattedDate } from '$lib/getFormattedDate';

  import companies from '$content/companies';
  import projects from '$content/projects';
  import LabelValue from '$components/LabelValue.svelte';

  export let data: Experience;

  const { title, companyId, location, startDate, endDate, description } = data;
  const start = startDate ? getFormattedDate(startDate, 'short') : '';
  const end = endDate ? getFormattedDate(endDate, 'short') : 'today';
  const company = companies.find(({ id }) => id === companyId);
  const relatedProjects = projects.filter((project) => {
    if (project.companyId !== companyId) return false;

    const isPastStartDate = project.date.valueOf() >= startDate.valueOf();
    const isBeforeEndDate = endDate ? project.date.valueOf() <= endDate.valueOf() : true;

    return isPastStartDate && isBeforeEndDate;
  });
</script>

<div class="experience">
  <h3>{title}</h3>
  <p class="info">
    <CompanyLink {company} />

    <span class="separator">//</span>
    <span>{location}</span>
    <span class="separator">//</span>
    <span>{start} — {end}</span>
  </p>
  <p>{@html description}</p>

  {#if relatedProjects.length > 0}
    <p>
      <LabelValue label="Related projects">
        <div class="related-projects">
          {#each relatedProjects as project}
            <a href="/projects/{project.slug}" class="project">{project.title}</a>
          {/each}
        </div>
      </LabelValue>
    </p>
  {/if}
</div>

<style>
  .info {
    display: flex;
    gap: 0.25rem;
  }

  .related-projects {
    white-space: pre-wrap;
    word-break: normal;
    overflow-wrap: break-word;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5px;
  }

  .project {
    white-space: nowrap;
    border: 1.5px solid black;
    border-radius: 10px;
    font-size: 0.9em;
    padding: 2px 5px 0px 5px;
  }

  .project:hover {
    text-decoration: none;
    background: var(--accent-color);
    color: white;
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
