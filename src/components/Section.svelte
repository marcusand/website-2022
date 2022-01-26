<script lang="ts">
  export let title;
</script>

<section>
  <h2>{title}</h2>
  <slot />
</section>

<style>
  section {
    margin: 3rem 0 0rem 0;
    page-break-inside: avoid;
  }
</style>
