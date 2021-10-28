<script lang="ts">
  import { onMount } from "svelte";
  import TimeDisplay from "./TimeDisplay.svelte";
  import { currentTime } from "../../utilities/controls";

  const times = ["New_York", "Los_Angeles"];
  const stocks = [];
  let items = [...times, ...stocks];

  const rotationDuration = 5000;

  let firstItemStatus = null;
  let nextItemStatus = null;

  setInterval(function rotateDisplay() {
    firstItemStatus = "out";
    nextItemStatus = "in";

    setTimeout(function rotateItemsInArray() {
      const [first, ...rest] = items;
      items = [...rest, first];

      firstItemStatus = "in";
      nextItemStatus = null;
    }, 500);
  }, rotationDuration);

  onMount(() => {
    firstItemStatus = "in";
  });
</script>

<footer>
  <div id="rotating-container">
    {#each items as item, i (item)}
      {#if i === 0}
        <TimeDisplay class={firstItemStatus} timezone={item} />
      {:else if i === 1}
        <TimeDisplay class={nextItemStatus} timezone={item} />
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

    & :global(span) {
      position: absolute;
      left: 100%;
      display: inline-flex;
      align-items: center;
      justify-content: flex-end;
      padding-right: 0.3rem;
      width: 100%;
      height: 100%;
      border-right: 0.25rem solid var(--red);
      opacity: 1;
      transition: opacity 0.3s linear, left 0.5s ease;
    }

    :global(span.in) {
      left: 0;
      opacity: 1;
    }

    :global(span.out) {
      left: -100%;
      opacity: 0;
    }
  }
</style>
