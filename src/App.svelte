<script lang="ts">
  import Controls from "./components/Controls.svelte";
  import LowerThird from "./components/LowerThird/LowerThird.svelte";
  import Video from "./components/shared/Video.svelte";

  import { currentVideoLayout } from "./stores/controls";
</script>

<div class="container">
  <main>
    <Video layout={$currentVideoLayout} />
    <LowerThird />
  </main>
</div>
<Controls />

<style lang="scss">
  .container {
    position: relative;
    background: var(--background);
    height: var(--app-height);
    overflow: hidden;
  }

  main {
    position: absolute;
    inset: 3rem 3rem 1rem;
  }

  :global(#anchor) {
    transform: scaleX(-1);
  }

  :global(#guest) {
    filter: hue-rotate(290deg);
  }
</style>
