<script lang="ts">
  import { getFormattedDate } from '$lib/getFormattedDate';
  import type { Experience } from 'src/types';
  import SectionElement from './SectionElement.svelte';

  export let data: Experience;

  const { title, subtitle, location, startDate, endDate, description } = data;
  const start = startDate ? getFormattedDate(startDate, 'short') : '';
  const end = endDate ? getFormattedDate(endDate, 'short') : '';
</script>

<SectionElement>
  <h3>{title}</h3>
  <div class="body">
    <ul class="left">
      <li>{subtitle}</li>
      <li>
        {start}
        -
        {end}
      </li>
      <li>{location}</li>
    </ul>
    <div class="right">{description}</div>
  </div>
</SectionElement>

<style>
  h3 {
    margin-bottom: 1rem;
  }

  .body {
    display: flex;
  }

  .left {
    width: var(--left-column-width);
  }

  .right {
    width: var(--right-column-width);
  }
</style>
