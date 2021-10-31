<script lang="ts">
  export let type = "text" as "text" | "checkbox";
  export let label;
  export let value;
</script>

<label class="{type}-input-label" for={label}>
  {#if type === "text"}
    {label}
    <input id={label} type="text" bind:value={$value} />
  {:else if type === "checkbox"}
    <input id={label} type="checkbox" bind:checked={$value} />{label}
  {/if}
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
