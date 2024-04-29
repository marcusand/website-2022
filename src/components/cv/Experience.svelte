<script lang="ts">
  import type { Experience } from '$content/types';

  import { getFormattedDate } from '$lib/getFormattedDate';

  export let data: Experience;

  const { title, subtitle, location, startDate, endDate, description } = data;
  const start = startDate ? getFormattedDate(startDate, 'short') : '';
  const end = endDate ? getFormattedDate(endDate, 'short') : 'today';
</script>

<div class="experience">
  <h3>{title}</h3>
  <div class="info">
    <span>{subtitle}</span> //
    <span>{location}</span> //
    <span>{start} — {end}</span>
  </div>
  <div>{@html description}</div>
</div>

<style>
</style>
