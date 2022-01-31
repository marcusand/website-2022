<script lang="ts">
  export let title: string;
</script>

<section>
  <h2>{title}</h2>
  <slot />
</section>

<style>
  section {
    margin: 3rem 0 0 0;
    page-break-inside: avoid;
  }
</style>
