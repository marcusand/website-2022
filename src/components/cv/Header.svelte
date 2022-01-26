<script lang="ts">
  import { getFormattedDate } from '$lib/getFormattedDate';
  import type { Person } from 'src/types';

  export let data: Person;

  const { name, location, email, links } = data;
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
      contact me at <a href="mailto:{email}">{email}</a>
    </li>
    {#each links as link}
      <li>
        {link.title} <a href={link.href} target="__blank">@{link.username}</a>
      </li>
    {/each}
  </ul>
</header>

<style>
  header {
    margin: 2rem 0 0 0;
  }
</style>
