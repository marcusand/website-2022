<svelte:head>
  <title>marcus &&</title>
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

    --accent-color: #5c9270;
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
    margin-top: 0;
    margin-bottom: 2rem;
  }

  :global(h2) {
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 1.5rem;
  }

  :global(h3) {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  :global(section) {
    margin: 2rem 0;
    page-break-inside: avoid;
  }

  @media print {
    @page {
      size: A4;
      margin: 10mm 5mm;
    }

    :global(body),
    :global(main) {
      font-size: 0.9rem;
    }
  }

  main {
    padding: 1rem 2rem;
    max-width: 1300px;
  }
</style>
