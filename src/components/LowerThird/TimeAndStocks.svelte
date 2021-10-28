<script lang="ts">
  import { onMount, SvelteComponent } from "svelte";
  import StockDisplay from "./StockDisplay.svelte";
  import TimeDisplay from "./TimeDisplay.svelte";

  type DataItem = {
    Component: SvelteComponent;
    value: string;
  };

  type DataCollection = Array<DataItem>;

  const times: DataCollection = [
    { Component: TimeDisplay, value: "New_York" },
    { Component: TimeDisplay, value: "Los_Angeles" },
  ];
  const stocks: DataCollection = [
    { Component: StockDisplay, value: "dow" },
    { Component: StockDisplay, value: "nas" },
    { Component: StockDisplay, value: "sap" },
  ];
  $: items = [...times, ...stocks];

  const rotationDuration = 5000;

  let firstItemStatus = null;
  let nextItemStatus = null;

  function rotateItems() {
    setInterval(function rotateDisplay() {
      firstItemStatus = "out";
      nextItemStatus = "in";

      setTimeout(function rotateItemsInArray() {
        const [first, ...rest] = items;
        items = [...rest, first];

        firstItemStatus = "in";
        nextItemStatus = null;
      }, 1000);
    }, rotationDuration);
  }

  rotateItems();

  onMount(() => {
    firstItemStatus = "in";
  });
</script>

<footer>
  <div id="rotating-container">
    {#each items as { Component, value }, i (value)}
      {#if i === 0}
        <Component class={firstItemStatus} {value} />
      {:else if i === 1}
        <Component class={nextItemStatus} {value} />
      {/if}
    {/each}
  </div>
</footer>

<style lang="scss">
  footer {
    height: 1.2rem;
    font-size: 0.85rem;
    font-weight: 500;
    background: var(--black);
    color: var(--white);
    letter-spacing: 0.05rem;
    overflow: hidden;
  }

  #rotating-container {
    position: relative;
    height: 100%;
    white-space: nowrap;

    & > :global(div) {
      position: absolute;
      left: 100%;
      display: inline-flex;
      padding-right: 0.3rem;
      border-right: 0.25rem solid var(--red);
      align-items: center;
      justify-content: flex-end;
      width: 100%;
      height: 100%;
      opacity: 1;
      transition: opacity 0.3s linear, left 0.5s ease;
    }

    :global(div.in) {
      left: 0;
      opacity: 1;
    }

    :global(div.out) {
      left: -100%;
      opacity: 0;
    }
  }
</style>
