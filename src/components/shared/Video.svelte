<script lang="ts">
  import { fade } from "svelte/transition";
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

<div class="video-container" class:full={layout === "full"}>
  <Cam title="anchor" />
  <Cam title="guest" />
</div>

<style lang="scss">
  .video-container {
    --border-width: 0.1rem;
    --border: var(--border-width) solid var(--light-gray);

    display: flex;
    margin: -3rem -3rem -1rem;
    overflow: hidden;
    height: 25.1rem;
    margin-top: 4rem;
    padding: 0 2rem;
  }

  .full {
    height: var(--app-height);
    margin: -4rem -2rem 0;
    padding: 0;

    :global(#anchor) {
      position: absolute;
      width: 100%;
      margin: 0;
      border: none;
    }

    :global(:not(#anchor)) {
      width: 0;
      opacity: 0;
    }

    :global(video) {
      margin-right: calc(var(--border-width) * -4);
      width: calc(50% + (var(--border-width)));
      border: var(--border);
    }
  }
</style>
