<script lang="ts">
  import Cam from "./Cam.svelte";

  export let layout = "full";
</script>

<div class="video-container {layout}">
  <Cam title="anchor" />
  {#if layout !== "full"}
    <Cam title="guest" />
  {/if}
</div>

<style lang="scss">
  .video-container {
    --border-width: 1px;
    --border: var(--border-width) solid var(--light-gray);

    display: flex;
    margin: -4rem -3rem -1rem;
    height: 25.1rem;
    padding: 0 2rem;
  }

  .double {
    margin: 1rem -2rem;

    :global(.cam-container) {
      width: 50%;
      margin-left: -1px;
      box-sizing: content-box;
    }
  }

  :global(.cam-container) {
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
