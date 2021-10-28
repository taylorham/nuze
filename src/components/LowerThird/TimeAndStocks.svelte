<script lang="ts">
  import { fade } from "svelte/transition";
  import { formatTime } from "../../utilities/helpers";

  let currentTime = new Date();

  $: eastern = formatTime(currentTime, "New_York");
  $: pacific = formatTime(currentTime, "Los_Angeles");

  setInterval(() => {
    currentTime = new Date();
  }, 1000);

  function rotate(node: HTMLElement) {
    return {
      css: (time: number) => `
        transform: translateX(${time * -100}%);
      `,
    };
  }
</script>

<footer>
  <div>
    {#each [eastern, pacific] as time}
      <span>{time}</span>
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

  div {
    height: 100%;
    white-space: nowrap;
  }

  span {
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 0.3rem;
    width: 100%;
    height: 100%;
    border-right: 0.25rem solid var(--red);
  }
</style>
