<script lang="ts">
  import type { ProjectType } from '$content/types';

  export let type: ProjectType;
  export let title: string;
</script>

<h3>
  {#if type === 'web'}
    <a href="https://{title}" target="__blank">https://{title}</a>
  {:else}
    {title}
  {/if}
</h3>

<style>
  h3 {
    margin: 0.5rem 0;
  }

  h3 a {
    color: black;
  }
</style>
