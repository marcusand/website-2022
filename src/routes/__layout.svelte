<script lang="ts">
  import siteData from '../content/site.yaml';

  const { title, description, keywords } = siteData;
  const keywordList = keywords.join(', ');
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="keywords" content={keywordList} />
</svelte:head>

<main>
  <slot />
</main>

<style>
  @font-face {
    font-family: 'Objectivity';
    src: url('/fonts/objectivity.regular.otf') format('opentype');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Objectivity';
    src: url('/fonts/objectivity.medium.otf') format('opentype');
    font-weight: 500;
  }

  :global(html),
  :global(body) {
    background: #f6f5f0;
    font-family: Objectivity, sans-serif;
    line-height: 1.25;
    margin: 0;
    padding: 0;
    overflow-x: hidden !important;
  }

  :global(body) {
    display: flex;
    justify-content: center;
  }

  :global(*) {
    box-sizing: border-box;

    --accent-color: #272b91;
    --left-column-width: 30%;
    --right-column-width: 70%;
  }

  :global(a) {
    color: var(--accent-color);
  }

  :global(ul),
  :global(p) {
    margin: 0;
    padding-left: 0;
  }

  :global(li) {
    list-style-position: inside;
    list-style-type: '// ';
  }

  :global(h1) {
    text-transform: uppercase;
    text-decoration: underline;
    font-size: 1rem;
    font-weight: 500;
    margin: 0 0 2rem 0;
  }

  :global(h2) {
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 500;
    margin: 0 0 1.5rem 0;
  }

  :global(h3) {
    margin: 0 0 1rem 0;
    font-size: 1rem;
    font-weight: 500;
  }

  main {
    padding: 2rem 2rem;
    max-width: 1200px;
  }

  @media only screen and (max-width: 900px) {
    :global(body) {
      display: block;
    }

    main {
      padding: 2rem 1rem;
    }
  }

  @media print {
    @page {
      size: A4;
      margin: 20mm 5mm;
    }

    :global(body),
    :global(main) {
      background: white;
      font-family: Objectivity, sans-serif;
      font-size: 8pt;
      padding: 0;
    }
  }
</style>
