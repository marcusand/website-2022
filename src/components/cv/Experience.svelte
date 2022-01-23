<script lang="ts">
  import { getFormattedDate } from '$lib/getFormattedDate';
  import type { Experience } from 'src/types';

  export let data: Experience;

  const { title, subtitle, location, startDate, endDate, description } = data;
  const start = startDate ? getFormattedDate(startDate, 'short') : '';
  const end = endDate ? getFormattedDate(endDate, 'short') : '';
</script>

<div>
  <h3>{title}</h3>
  <div>
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
</div>
