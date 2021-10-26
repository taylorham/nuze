<script lang="ts">
  import CnnLogo from '../shared/CnnLogo.svelte';

  const isLive = true;
</script>

<aside>
  {#if isLive}
    <div>
      {#each 'live' as letter}
        <span>{letter}</span>
      {/each}
    </div>
  {/if}
  <CnnLogo />
  <footer>9:33 AM ET</footer>
</aside>

<style lang="scss">
  aside {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 0.45rem;
    width: 6.4rem;

    & :global(svg) {
      background-color: var;
      width: inherit;
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

  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1.2rem;
    font-size: 0.85rem;
    font-weight: 500;
    background: var(--black);
    color: var(--white);
    letter-spacing: 0.05rem;
    padding-left: 0.45rem;
    border-right: 0.25rem solid var(--red);
  }
</style>
