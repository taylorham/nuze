<script lang="ts">
  import CnnLogo from "../shared/CnnLogo.svelte";
  import TimeAndStocks from "./TimeAndStocks.svelte";

  const isLive = true;
</script>

<aside>
  {#if isLive}
    <div>
      {#each "live" as letter}
        <span>{letter}</span>
      {/each}
    </div>
  {/if}
  <CnnLogo />
  <TimeAndStocks />
</aside>

<style lang="scss">
  aside {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 0.45rem;
    width: 6.4rem;

    & :global(svg) {
      background-color: var(--white);
      height: 4rem;
      object-fit: cover;
    }
  }

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 1.65rem;
    padding: 0 0.5rem;
    background: var(--red);
    color: var(--white);
    font-size: 1.4rem;
    text-transform: uppercase;
  }
</style>
