<script lang="ts">
  export let type = "text" as "text" | "checkbox";
</script>

<label class="{type}-input-label">
  <slot />
</label>

<style lang="scss">
  label {
    display: inline-flex;
    flex-direction: column;
    margin: 0 1rem;
    font-size: 0.75rem;

    &[class^="checkbox"] {
      flex-direction: row;
      align-items: center;
    }
  }
</style>
