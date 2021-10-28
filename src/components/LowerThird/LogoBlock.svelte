<script lang="ts">
  import CnnLogo from "../shared/CnnLogo.svelte";
  import TimeAndStocks from "./TimeAndStocks.svelte";
  import { isLive } from "../../utilities/controls";
</script>

<aside>
  <div id="live" style="--bottom: {$isLive ? '100%' : 'calc(100% - 1.65rem)'};">
    {#each "live" as letter}
      <span>{letter}</span>
    {/each}
  </div>
  <CnnLogo />
  <TimeAndStocks />
</aside>

<style lang="scss">
  aside {
    --width: 6.4rem;

    position: relative;
    margin-left: 0.45rem;
    height: 5.2rem;
    width: var(--width);
    z-index: 1;

    :global(svg) {
      background-color: var(--white);
      height: 4rem;
      object-fit: cover;
    }
  }

  #live {
    position: absolute;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: var(--width);
    bottom: var(--bottom);
    z-index: -1;
    height: 1.65rem;
    padding: 0 0.5rem;
    background: var(--red);
    color: var(--white);
    font-size: 1.4rem;
    text-transform: uppercase;
    transition: bottom 0.3s ease;
  }
</style>
