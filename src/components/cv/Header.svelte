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
    <li>
      portfolio <a href="https://marcusand.de" target="__blank">marcusand.de</a>
    </li>
    {#each links as link}
      <li>
        {link.title ?? ''} <a href={link.href} target="__blank">{link.alias}</a>
      </li>
    {/each}
  </ul>
</header>
