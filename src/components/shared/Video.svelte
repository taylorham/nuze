<script lang="ts">
  import Cam from "./Cam.svelte";

  export let layout = "full";

  const baseRatio = 1165 / 440;

  const ratios = {
    full: 16 / 9,
    half: baseRatio / 2,
    third: baseRatio / 3,
    quarter: baseRatio,
    eighth: baseRatio,
  };
</script>

<div class="video-container {layout}">
  <Cam title="anchor" />
  {#if layout === "double"}
    <Cam title="guest" />
  {/if}
</div>

<style lang="scss">
  .video-container {
    --border-width: 1px;
    --border: var(--border-width) solid var(--light-gray);

    display: flex;
    margin: -4rem -3rem -1rem;
    overflow: hidden;
    height: 25.1rem;
    padding: 0 2rem;
  }

  .double {
    margin: 1rem -2rem;

    :global(video) {
      width: 50%;
      margin-left: -1px;
      box-sizing: content-box;
    }
  }

  :global(video) {
    border: var(--border);
  }

  .full {
    height: var(--app-height);
    margin: -3rem -3rem 0;
    padding: 0;

    :global(#anchor) {
      width: var(--app-width);
      margin: 0;
      border: none;
    }
  }
</style>
