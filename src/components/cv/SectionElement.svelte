<div class="section-element">
  <slot />
</div>

<style>
  .section-element {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  :global(.section-element .body) {
    display: flex;
  }

  :global(.section-element .left) {
    width: var(--left-column-width);
    padding-right: 1rem;
  }

  :global(.section-element .right) {
    width: var(--right-column-width);
  }
</style>
