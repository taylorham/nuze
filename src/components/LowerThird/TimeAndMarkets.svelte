<script lang="ts">
  import { SvelteComponent } from "svelte";
  import {
    isTimeTickerPaused,
    timeTickerIndex,
    showMarkets,
  } from "../../stores/controls";
  import { marketVisibility } from "../../stores/timeAndMarkets";
  import StockDisplay from "./MarketDisplay.svelte";
  import TimeDisplay from "./TimeDisplay.svelte";

  type DataItem = {
    componentType: SvelteComponent;
    value: string;
  };

  type DataCollection = Array<DataItem>;

  const times: DataCollection = [
    { componentType: TimeDisplay, value: "New_York" },
    { componentType: TimeDisplay, value: "Los_Angeles" },
  ];
  const stocks: DataCollection = [
    { componentType: StockDisplay, value: "dow" },
    { componentType: StockDisplay, value: "nas" },
    { componentType: StockDisplay, value: "sap" },
  ];

  $: shouldShowMarkets =
    $showMarkets !== $marketVisibility.showMarket
      ? $showMarkets
      : $marketVisibility.showMarket;
  $: data = shouldShowMarkets ? [...times, ...stocks] : [...times];

  const rotationDuration = 5000;

  let firstItemStatus = "in";
  let nextItemStatus = null;

  function animateData() {
    function rotateData() {
      firstItemStatus = "in";
      nextItemStatus = null;

      const [first, ...rest] = data;
      data = [...rest, first];

      setTimeout(function animateAfterTick() {
        firstItemStatus = "out";
        nextItemStatus = "in";
      }, 17);
    }

    rotateData();

    return setInterval(rotateData, rotationDuration);
  }

  let rotationInterval = null;

  $: if ($isTimeTickerPaused) {
    clearInterval(rotationInterval);
  } else {
    rotationInterval = animateData();
  }

  $: prevIndex = $timeTickerIndex % data.length;
  $: currentIndex = ($timeTickerIndex + 1) % data.length;
</script>

<footer>
  <div id="rotating-container">
    {#each data as { componentType, value }, i (value)}
      {#if i === prevIndex}
        <svelte:component
          this={componentType}
          class={firstItemStatus}
          {value}
        />
      {:else if i === currentIndex}
        <svelte:component this={componentType} class={nextItemStatus} {value} />
      {/if}
    {/each}
  </div>
</footer>

<style lang="scss">
  footer {
    height: 1.2rem;
    font-size: 0.85rem;
    font-weight: 500;
    background: var(--translucent-black);
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
