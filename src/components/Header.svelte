<script lang="ts">
  import siteData from '$content/site.yaml';

  const { title } = siteData;
</script>

<header>
  <a href="/" class="site-title">{title}</a>
  <nav>
    <ul>
      <li><a href="http://">projects</a></li>
      <li><a href="http://">vita</a></li>
      <li><a href="http://">contact</a></li>
    </ul>
  </nav>
</header>

<style>
  header {
    width: 100%;
    border-bottom: 2px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 0.25rem;
  }

  .site-title {
    color: var(--accent-color);
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 600;
  }

  ul {
    display: flex;
    gap: 20px;
  }

  li {
    list-style-type: none;
    list-style-type: none;
    margin: 0;
  }

  @media only screen and (max-width: 900px) {
    nav {
      margin-bottom: 0.5rem;
    }

    ul {
      display: block;
    }

    li {
      list-style-position: outside;
      list-style-type: '> ';
      margin-left: 1.5rem;
    }
  }
</style>
