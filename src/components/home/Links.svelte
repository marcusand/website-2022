<script lang="ts">
  import type { Link } from '$content/types';

  export let links: Array<Link>;
</script>

<p>
  You can reach me via
  {#each links as link, index}
    <span>
      {#if index === links.length - 1}
        or
      {/if}
      <a href={link.href} target="__blank">
        {link.title}
      </a>
    </span>
  {/each}
</p>
