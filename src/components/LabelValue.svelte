<script lang="ts">
  export let label: string;

  const hasSlotValue = $$slots.default === true;
</script>

{#if hasSlotValue}
  <div>
    <span class="label">{label}: </span>
    <span>
      <slot />
    </span>
  </div>
{/if}

<style>
  .label {
    font-weight: bold;
  }
</style>
