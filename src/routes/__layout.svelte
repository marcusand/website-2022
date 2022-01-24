<svelte:head>
  <title>marcusand</title>
  <meta name="description" content="personal website of marcusand" />
  <meta
    name="keywords"
    content="marcusand, marcus, software, web, development, personal, website"
  />
</svelte:head>

<main>
  <slot />
</main>

<style>
  @font-face {
    font-family: 'Objectivity';
    src: url('/fonts/objectivity.medium.otf') format('opentype');
  }

  :global(html),
  :global(body),
  :global(#svelte) {
    font-family: Objectivity, sans-serif;
    line-height: 1.25;
    margin: 0;
    padding: 0;
  }

  :global(*) {
    box-sizing: border-box;
  }

  :global(ul),
  :global(p) {
    margin: 0;
    list-style-type: none;
    padding-left: 0;
  }

  :global(h1) {
    text-transform: uppercase;
  }

  :global(h2) {
    text-transform: uppercase;
  }

  @media print {
    @page {
      size: A4;
      margin: 10mm 5mm;
    }

    :global(body),
    :global(main) {
      margin: 0;
      padding: 0;
      font-size: 0.9rem;
    }
  }

  main {
    margin: 0rem 0rem;
    padding: 1rem 2rem;
  }

  @media only screen and (min-width: 1300px) {
    main {
      margin: 0rem 15rem;
    }
  }
</style>
