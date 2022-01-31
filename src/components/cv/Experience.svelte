<script lang="ts">
  import type { Experience } from '$content/types';

  import { getFormattedDate } from '$lib/getFormattedDate';
  import SectionElement from '../SectionElement.svelte';

  export let data: Experience;

  const { title, subtitle, location, startDate, endDate, description } = data;
  const start = startDate ? getFormattedDate(startDate, 'short') : '';
  const end = endDate ? getFormattedDate(endDate, 'short') : 'today';
</script>

<SectionElement {title}>
  <ul slot="left">
    <li>{subtitle}</li>
    <li>{location}</li>
    <li>
      {start}
      —
      {end}
    </li>
  </ul>
  <svelte:fragment slot="right">{@html description}</svelte:fragment>
</SectionElement>

<style>
  li {
    list-style-type: none;
  }
</style>
