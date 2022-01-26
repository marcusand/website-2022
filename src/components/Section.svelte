<div class="section">
  <slot />
</div>

<style>
  .section {
    margin: 2rem 0;
  }

  :global(.section .body) {
    display: flex;
  }

  :global(.section .left) {
    width: var(--left-column-width);
    padding-right: 1rem;
  }

  :global(.section .right) {
    width: var(--right-column-width);
  }

  @media only screen and (max-width: 900px) {
    .section {
      margin: 2rem 0 3rem 0;
    }

    :global(.section .body) {
      display: block;
    }

    :global(.section .left),
    :global(.section .right) {
      width: 100%;
      padding: 0;
    }

    :global(.section .right) {
      margin-top: 0.5rem;
    }
  }
</style>
