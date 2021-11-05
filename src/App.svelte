<script lang="ts">
  import Video from "./components/shared/Video.svelte";
  import VideoIdentifier from "./components/shared/VideoIdentifier.svelte";
  import LowerThird from "./components/LowerThird/LowerThird.svelte";
  import Controls from "./components/Controls.svelte";

  import {
    currentVideoLayout,
    showIdentifierLeft,
    showIdentifierRight,
    identifierLeftCredit,
    identifierLeftLocation,
    identifierLeftLocale,
    identifierRightCredit,
    identifierRightLocation,
    identifierRightLocale,
  } from "./stores/controls";
  import AC360 from "./components/Backgrounds/AC360.svelte";
</script>

<div class="container">
  <AC360 />
  <main>
    <VideoIdentifier
      show={showIdentifierLeft}
      align="left"
      credit={identifierLeftCredit}
      location={identifierLeftLocation}
      locale={identifierLeftLocale}
    />
    <VideoIdentifier
      show={showIdentifierRight}
      align="right"
      credit={identifierRightCredit}
      location={identifierRightLocation}
      locale={identifierRightLocale}
    />
    <Video layout={$currentVideoLayout} />
    <LowerThird />
  </main>
</div>
<Controls />

<style lang="scss">
  .container {
    position: relative;
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
