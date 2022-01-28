<div class="equal-width">
  <slot />
</div>

<style>
  .equal-width {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media only screen and (max-width: 900px) {
    .equal-width {
      grid-template-columns: 1fr;
    }
  }
</style>
