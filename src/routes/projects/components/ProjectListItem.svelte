<script lang="ts">
  import type { Project } from '$content/types';
  import companies from '$content/companies';

  export let project: Project;

  const company = companies.find(({ id }) => id === project.companyId);
</script>

<li>
  <a href="/projects/{project.slug}">
    {project.title}
  </a>
  {#if company !== undefined}
    <span>at {company.nameShort}</span>
  {/if}
</li>
