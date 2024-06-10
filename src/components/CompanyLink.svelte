<script lang="ts">
  import type { Company } from '$content/types';

  export let company: Company | undefined;
</script>

{#if company !== undefined}
  <span>
    {#if company?.url !== undefined}
      <a href={company.url} target="_blank">{company.name}</a>
    {:else}
      {company.name}
    {/if}
  </span>
{/if}
