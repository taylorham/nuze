<script lang="ts">
  import LowerThird from './components/LowerThird/LowerThird.svelte';
  import Cam from './components/shared/Cam.svelte';
</script>

<div class="container">
  <main>
    <div class="video-canvas">
      <div class="single">
        <Cam title="taylor" layout="half" />
      </div>
      <div class="single">
        <Cam title="guest" layout="half" />
      </div>
    </div>
    <LowerThird />
  </main>
</div>

<style lang="scss">
  .container {
    position: relative;
    background: var(--background);
    height: calc((9 / 16) * (100rem * (2 / 3)));
  }

  main {
    position: absolute;
    inset: 1rem 3rem;
  }

  .video-canvas {
    display: flex;
    padding-top: 3rem;
    height: 25.1rem;
    overflow: hidden;
  }

  .single {
    border: 0.2rem solid hsl(0deg 0% 75%);
    filter: saturate(1.75) contrast(0.9);
  }

  .single:first-child {
    border-right: 0.1rem solid hsl(0deg 0% 75%);
  }

  .single:nth-child(2) {
    border-left: 0.1rem solid hsl(0deg 0% 75%);
  }

  :global(#taylor) {
    transform: scaleX(-1);
  }

  :global(#guest) {
    filter: hue-rotate(290deg);
  }
</style>
