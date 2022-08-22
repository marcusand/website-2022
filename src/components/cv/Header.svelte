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
  <p>
    I am an experienced and dedicated software engineer with a degree in computer science and almost
    four years of professional experience. I am a proactive, well-organised and communicative
    coworker who is always eager to learn new things and solve unique challenges. I love working on
    human-centered software and I'm always dedicated to create the best user experience possible. I
    highly value best practices in software development and project management and I am convinced,
    that great teamwork is the key to success.
  </p>
</header>
