<script lang="ts">
  export let type: "text" | "checkbox" = "text";
  export let label: string;
  export let value: string;

  const list = $$slots ? `${label}-list` : undefined;
</script>

<label class="{type}-input-label" for={label}>
  {#if type === "text"}
    {label}
    <input id={label} type="text" {list} bind:value={$value} />
  {:else if type === "checkbox"}
    <input id={label} type="checkbox" bind:checked={$value} />{label}
  {:else if type === "textarea"}{label}
    <textarea id={label} bind:value={$value} />
  {/if}
  {#if $$slots}
    <datalist id="{label}-list">
      <slot />
    </datalist>
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

    textarea {
      font-family: inherit;
    }
  }
</style>
