<script lang="ts">
  import siteData from '$content/site.yaml';

  const { domain } = siteData;
  const cvURL = `https://${domain}/cv`;
</script>

<footer>
  <ul>
    <li>looking at this on screen? this cv is printer-friendly</li>
    <li>
      looking at this on paper? this cv is also available online <a href={cvURL} target="__blank"
        >{cvURL}</a
      >
    </li>
  </ul>
</footer>

<style>
  footer {
    margin-bottom: 2rem;
    padding-top: 1rem;
    border-top: 2px solid black;
  }
</style>
