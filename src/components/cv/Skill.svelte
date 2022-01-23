<script lang="ts">
  import type { Skill } from 'src/types';

  export let data: Skill;

  const { title, keywords } = data;
</script>

<div class="section-element">
  <div class="body">
    <div class="left">{title}</div>
    <ul class="right">
      {#each keywords as keyword}
        <li>{keyword}</li>
      {/each}
    </ul>
  </div>
</div>
