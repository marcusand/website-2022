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
      <div class="description">{@html description}</div>
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
    padding: 1rem;
    overflow-y: scroll;
  }

  a {
    word-break: break-all;
  }

  ul {
    text-transform: lowercase;
  }

  .more {
    margin-top: 1rem;
  }

  .description {
    margin-top: 1rem;
    word-break: normal;
  }

  .show {
    display: block;
  }
</style>
