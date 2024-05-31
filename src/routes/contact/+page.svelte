<script lang="ts">
  import personData from '$content/person.yaml';

  const { link_linkedin, link_github } = personData;
</script>

<h1>Contact</h1>
<p>
  You can contact me at <a href="mailto:mail@marcusand.de">mail@marcusand.de</a><br />
  or find me on <a href={link_linkedin}>linkedin</a> and <a href={link_github}>github</a>
</p>
