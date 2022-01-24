<div class="section">
  <slot />
</div>

<style>
  .section {
    margin-top: 2rem;
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
</style>
