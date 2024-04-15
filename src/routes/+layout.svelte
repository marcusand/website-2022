<script lang="ts">
  import siteData from '$content/site.yaml';
  import '../style/index.css';

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
  main {
    padding: 0rem 2rem;
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
