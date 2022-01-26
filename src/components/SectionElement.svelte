<script lang="ts">
  export let title: string | undefined = undefined;
</script>

<div class="section-element">
  {#if title}
    <h3>{title}</h3>
  {/if}
  <div class="body">
    <slot />
  </div>
</div>

<style>
  .section-element {
    margin: 1.5rem 0 0 0;
  }

  .body {
    display: flex;
  }

  :global(.section-element .left) {
    width: var(--left-column-width);
    padding-right: 1rem;
  }

  :global(.section-element .right) {
    width: var(--right-column-width);
  }

  @media only screen and (max-width: 900px) {
    .section-element {
      margin: 2rem 0 3rem 0;
    }

    .body {
      display: block;
    }

    :global(.section-element .left),
    :global(.section-element .right) {
      width: 100%;
      padding: 0;
    }

    :global(.section-element .right) {
      margin-top: 0.5rem;
    }
  }
</style>
