<script lang="ts">
  import { dowChange, nasChange, sapChange } from "../../stores/timeAndMarkets";
  import { onMount } from "svelte";

  let className = "";
  export { className as class };
  export let value: "dow" | "nas" | "sap" = "dow";

  const marketName = value.replace(/sap/gi, "s&p").toUpperCase();

  let change = 0;
  let isUp = false;

  onMount(() => {
    if (value === "dow") {
      change = $dowChange;
    } else if (value === "nas") {
      change = $nasChange;
    } else if (value === "sap") {
      change = $sapChange;
    }
    isUp = change > 0;
  });
</script>

<div
  class="stock-container {className}"
  style="--color: {isUp ? 'var(--green)' : 'var(--red)'}"
  title="Market display for {marketName}"
>
  <div class="market-name">{marketName}</div>
  <div class="arrow" class:down={!isUp}><span>▲</span></div>
  <div class="change">{change}</div>
</div>

<style lang="scss">
  .stock-container.stock-container {
    --center-arrow-vertically: calc(50% - 0.6rem);

    justify-content: space-between !important;
    padding-right: 0.1rem !important;
    padding-left: 0.25rem;
    border-right: 0.25rem solid var(--color) !important;
  }

  .arrow {
    display: inline-block;
    font-size: 1rem;
    color: var(--color);

    > span {
      position: absolute;
      bottom: var(--center-arrow-vertically);
      //animation-duration: 0.13s;
      //animation-timing-function: linear;
      //animation-delay: 0.3s;
      //animation-iteration-count: 3.5;
      //animation-direction: normal;
      //animation-fill-mode: forwards;
      //animation-play-state: running;
      //animation-name: arrowShot;
      animation: 0.18s linear 0.3s 2.5 normal forwards running arrowShot;
    }
  }

  .down {
    transform: scaleY(-1);
  }

  .change {
    display: inline-block;
    text-align: right;
    transform: scaleX(0.8);
    transform-origin: right;
  }

  @keyframes arrowShot {
    0% {
      bottom: -2rem;
    }
    50% {
      bottom: var(--center-arrow-vertically);
    }
    100% {
      bottom: 1.5rem;
    }
  }
</style>
