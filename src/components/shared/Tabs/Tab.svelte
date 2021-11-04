<script>
  import { getContext } from "svelte";
  import { TABS } from "./Tabs.svelte";

  const tab = {};
  const { registerTab, selectTab, selectedTab } = getContext(TABS);

  registerTab(tab);
</script>

<button class:selected={$selectedTab === tab} on:click={() => selectTab(tab)}>
  <slot />
</button>

<style lang="scss">
  button {
    display: block;
    flex: 1;
    border: none;
    margin: 0;
    padding: 0 25px;
    color: black;

    &:not(.selected) {
      &:hover,
      &:focus,
      &:active {
        background-color: hsl(210deg 70% 90%);
      }
    }
  }

  .selected {
    background-color: hsl(210deg 70% 70%);
  }
</style>
