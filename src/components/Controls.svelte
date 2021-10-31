<script lang="ts">
  import {
    isCameraActive,
    currentVideoLayout,
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
    <Field type="checkbox" label="Camera on" value={isCameraActive} />
    <button on:click={killCams}>Disable Webcams</button>
    {#if $currentVideoLayout === "full"}
      <button on:click={() => selectLayout("double")}>Side-by-Side</button>
    {:else}
      <button on:click={() => selectLayout("full")}>Fullscreen</button>
    {/if}
  </div>
  <div class="control-group">
    <h3>Headline Block</h3>
    <Field type="text" label="Headline" value={headline} />
    <Field type="checkbox" label="Show Byline" value={isBylineVisible} />
    <Field type="text" label="Byline" value={byline} />
    <Field type="checkbox" label="Show Tagline" value={isTaglineVisible} />
    <Field type="text" label="Tagline" value={tagline} />
  </div>
  <div class="control-group">
    <h3>Logo Block</h3>
    <Field type="checkbox" label="Live" value={isLive} />
    <Field type="text" label="Program Title" value={programTitle} />
    <Field type="checkbox" label="Show Markets" value={showMarkets} />
    <Field
      type="checkbox"
      label="Pause Time Rotation"
      value={isTimeTickerPaused}
    />
    <div>
      <button on:click={$timeTickerIndex.decrement}>Prev Time Item</button>
      <button on:click={$timeTickerIndex.increment}>Next Time Item</button>
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
