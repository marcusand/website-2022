<script lang="ts">
  import { getFormattedDate } from '$lib/getFormattedDate';
  import type { Experience } from 'src/types';
  import SectionElement from './SectionElement.svelte';

  export let data: Experience;

  const { title, subtitle, location, startDate, endDate, description } = data;
  const start = startDate ? getFormattedDate(startDate, 'short') : '';
  const end = endDate ? getFormattedDate(endDate, 'short') : 'today';
</script>

<SectionElement>
  <h3>{title}</h3>
  <div class="body">
    <ul class="left">
      <li>{subtitle}</li>
      <li>{location}</li>
      <li>
        {start}
        -
        {end}
      </li>
    </ul>
    <div class="right">{@html description}</div>
  </div>
</SectionElement>
