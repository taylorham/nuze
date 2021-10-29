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
    margin: 0 1em;
    font-size: 14px;

    &[class^="checkbox"] {
      flex-direction: row;
      align-items: center;
    }
  }
</style>
