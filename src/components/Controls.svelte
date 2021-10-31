<script lang="ts">
  import {
    isCameraActive,
    currentVideoLayout,
    // isTickerScrolling,
    isTimeTickerPaused,
    timeTickerIndex,
    headline,
    byline,
    isBylineVisible,
    tagline,
    isTaglineVisible,
    programTitle,
    isLive,
    showMarkets,
  } from "../stores/controls";
  import Field from "./shared/Field.svelte";

  function selectLayout(layout: string) {
    currentVideoLayout.set(layout);
  }

  function killCams() {
    const videoElements = Array.from(document.getElementsByTagName("video"));
    videoElements.forEach((video) => {
      (video.srcObject as MediaStream)?.getTracks().forEach((track) => {
        track.enabled = false;
        track.stop();
      });
      video.srcObject = null;
    });

    isCameraActive.set(false);
  }
</script>

<div class="controls">
  <div class="control-group">
    <h3>Cameras</h3>
    <Field type="checkbox">
      <input type="checkbox" bind:checked={$isCameraActive} />Camera on
    </Field>
    <button on:click={killCams}>Disable Webcams</button>
    {#if $currentVideoLayout === "full"}
      <button on:click={() => selectLayout("double")}>Side-by-Side</button>
    {:else}
      <button on:click={() => selectLayout("full")}>Fullscreen</button>
    {/if}
    <!-- <Field type="checkbox">
  <input type="checkbox" disabled bind:checked={$isTickerScrolling} />Pause Ticker
  Scroll
</Field> -->
  </div>
  <div class="control-group">
    <h3>Headline Block</h3>
    <Field>
      Headline
      <input bind:value={$headline} type="text" />
    </Field>
    <Field type="checkbox">
      <input type="checkbox" bind:checked={$isBylineVisible} />Show Byline
    </Field>
    <Field>
      Byline
      <input bind:value={$byline} type="text" />
    </Field>
    <Field type="checkbox">
      <input type="checkbox" bind:checked={$isTaglineVisible} />Show Tagline
    </Field>
    <Field>
      Tagline
      <input bind:value={$tagline} type="text" />
    </Field>
  </div>
  <div class="control-group">
    <h3>Logo Block</h3>
    <Field type="checkbox">
      <input type="checkbox" bind:checked={$isLive} />Live
    </Field>
    <Field>
      Program Title
      <input bind:value={$programTitle} type="text" />
    </Field>
    <Field type="checkbox">
      <input type="checkbox" bind:checked={$showMarkets} />Show Markets
    </Field>
    <Field type="checkbox">
      <input type="checkbox" bind:checked={$isTimeTickerPaused} />Pause Time
      Rotation
    </Field>
    <div>
      <button on:click={timeTickerIndex.decrement}>Prev Time Item</button>
      <button on:click={timeTickerIndex.increment}>Next Time Item</button>
    </div>
  </div>
</div>

<style lang="scss">
  .controls {
    font-size: 14px;
    display: flex;
    flex-wrap: wrap;

    & :global(label) {
      margin-bottom: 15px;
    }

    & :global(button) {
      max-width: 190px;
      margin: 5px 8px;
    }
  }

  .control-group {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 0 20px;
    min-width: 400px;
  }
</style>
