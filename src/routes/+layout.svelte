<script lang="ts">
  import siteData from '$content/site.yaml';
  import Header from '../components/Header.svelte';
  import '../style/index.css';

  const { title, description, keywords } = siteData;
  const keywordList = keywords.join(', ');
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="keywords" content={keywordList} />
</svelte:head>

<div class="main-container">
  <Header />
  <main>
    <slot />
  </main>
</div>

<style>
  .main-container {
    margin: 30px 30px 60px 30px;
    width: 100%;
    max-width: 1200px;
  }

  main {
    width: 100%;
  }

  @media only screen and (max-width: 900px) {
    :global(body) {
      display: block;
    }

    .main-container {
      margin: 15px 15px 30px 15px;
      width: 100%;
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
