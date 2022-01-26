<script lang="ts">
  import { getFormattedDate } from '$lib/getFormattedDate';
  import type { Person } from '$content/types';

  export let data: Person;

  const { name, location, links } = data;
  const birthday = getFormattedDate(data.birthday, 'long');
</script>

<header>
  <ul>
    <li>
      {name}
    </li>
    <li>
      born {birthday}
    </li>
    <li>
      currently living in {location}
    </li>
    {#each links as link}
      <li>
        {link.title ?? ''} <a href={link.href} target="__blank">{link.alias}</a>
      </li>
    {/each}
  </ul>
</header>

<style>
  header {
    margin: 2rem 0 0 0;
  }
</style>
