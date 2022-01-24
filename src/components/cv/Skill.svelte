<script lang="ts">
  import type { Skill } from 'src/types';
  import SectionElement from './SectionElement.svelte';

  export let data: Skill;

  const { title, keywords, keywordsProfessional, keywordsSemiProfessional } = data;
</script>

<SectionElement>
  <div class="body">
    <div class="left">
      <h3>{title}</h3>
    </div>
    <div class="right">
      {#if keywords}
        <ul>
          {#each keywords as keyword}
            <li>{keyword}</li>
          {/each}
        </ul>
      {:else}
        <div class="two-col">
          <div class="col">
            <div class="level">professional level</div>
            <ul>
              {#each keywordsProfessional as keyword}
                <li>{keyword}</li>
              {/each}
            </ul>
          </div>
          <div class="col">
            <div class="level">semi-professional level / not on daily basis</div>
            <ul>
              {#each keywordsSemiProfessional as keyword}
                <li>{keyword}</li>
              {/each}
            </ul>
          </div>
        </div>
      {/if}
    </div>
  </div>
</SectionElement>

<style>
  .two-col {
    display: flex;
    justify-content: space-between;
  }

  .col {
    width: 49%;
  }

  .level {
    font-style: italic;
    margin-bottom: 0.5rem;
  }
</style>
