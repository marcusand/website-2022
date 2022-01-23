<script lang="ts">
  import type { Skill } from 'src/types';
  import SectionElement from './SectionElement.svelte';

  export let data: Skill;

  const { title, keywords } = data;
</script>

<SectionElement>
  <div class="body">
    <div class="left">{title}</div>
    <ul class="right">
      {#each keywords as keyword}
        <li>{keyword}</li>
      {/each}
    </ul>
  </div>
</SectionElement>

<style>
  .body {
    display: flex;
  }

  .left {
    width: var(--left-column-width);
  }

  .right {
    width: var(--right-colum-width);
  }
</style>
