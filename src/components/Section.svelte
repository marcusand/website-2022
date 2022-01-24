<div class="section">
  <slot />
</div>

<style>
  .section {
    margin-bottom: 4rem;
  }

  @media only screen and (min-width: 900px) {
    .section {
      margin-bottom: 2rem;
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
  }
</style>
