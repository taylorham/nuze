<script lang="ts">
  import {
    isCameraActive,
    currentVideoLayout,
    // isTickerScrolling,
    isTimeTickerPaused,
    timeTickerIndex,
    headline,
    programTitle,
    isLive,
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

<Field type="checkbox">
  <input type="checkbox" bind:checked={$isCameraActive} />Camera on
</Field>
<button on:click={killCams}>Kill Cams</button>
{#if $currentVideoLayout === "full"}
  <button on:click={() => selectLayout("double")}>Side-by-Side</button>
{:else}
  <button on:click={() => selectLayout("full")}>Fullscreen</button>
{/if}
<!-- <Field type="checkbox">
  <input type="checkbox" disabled bind:checked={$isTickerScrolling} />Pause Ticker
  Scroll
</Field> -->
<Field type="checkbox">
  <input type="checkbox" bind:checked={$isLive} />Live
</Field>
<Field>
  Headline
  <input bind:value={$headline} type="text" />
</Field>
<Field>
  Program Title
  <input bind:value={$programTitle} type="text" />
</Field>
<Field type="checkbox">
  <input type="checkbox" bind:checked={$isTimeTickerPaused} />Pause Time
  Rotation
</Field>
<button on:click={timeTickerIndex.decrement}>Prev Time Item</button>
<button on:click={timeTickerIndex.increment}>Next Time Item</button>

<style lang="scss">
  * {
    font-size: 14px;
  }
</style>
