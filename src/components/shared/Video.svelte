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

  function getSize(size = "full") {
    const height = 1080;

    return {
      height,
      width: 1920, // height * ratios[size],
    };
  }
</script>

<div class="video-container">
  {#if layout === "full"}
    <Cam title="anchor" videoDimensions={getSize("full")} />
  {:else if layout === "double"}
    <div class="double-container">
      <Cam title="anchor" videoDimensions={getSize("half")} />
      <Cam title="guest" videoDimensions={getSize("half")} />
    </div>
  {/if}
</div>

<style lang="scss">
  .video-container {
    --border-width: 0.1rem;
    --border: var(--border-width) solid var(--light-gray);

    display: flex;
    height: var(--app-height);
    margin: -3rem -3rem -1rem;
  }

  .double-container {
    height: 25.1rem;
    margin-top: 4rem;
    padding: 0 2rem;

    & :global(video) {
      margin-right: calc(var(--border-width) * -4);
      width: calc(50% + (var(--border-width)));
      border: var(--border);
    }
  }
</style>
