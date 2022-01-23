<script>
  import { getFormattedDate } from '$lib/getFormattedDate';

  import data from '../../content/cv/person.yaml';

  const { name, location, email, links } = data;
  const birthday = getFormattedDate(new Date(data.birthday), 'long');
</script>

<header>
  <ul>
    <li>
      name is {name}
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
