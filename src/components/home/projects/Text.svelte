<script lang="ts">
  import { getFormattedDate } from '$lib/getFormattedDate';

  export let show: boolean;
  export let company: string | undefined = undefined;
  export let date: Date;
  export let role: string;
  export let links: Array<string>;
  export let description: string;

  const dateFormatted = getFormattedDate(date, 'year');
</script>

<div class="project-text" class:show>
  <ul>
    {#if company}
      <li>at {company}</li>
    {/if}
    <li>{dateFormatted}</li>
    <li>role: {role}</li>
  </ul>
  <div class="more">
    {#if links}
      {#each links as link}
        <a href={link} target="_blank">{link}</a>
      {/each}
    {/if}
    {#if description}
      <div class="description">{description}</div>
    {/if}
  </div>
</div>

<style>
  .project-text {
    position: absolute;
    display: none;
    height: 100%;
    top: 0;
    left: 0;
    word-break: break-all;
    padding: 1rem;
  }

  ul {
    text-transform: lowercase;
  }

  .more {
    margin-top: 1rem;
  }

  .description {
    margin-top: 1rem;
  }

  .show {
    display: block;
  }
</style>
