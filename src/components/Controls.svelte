<script lang="ts">
  import {
    isCameraActive,
    currentVideoLayout,
    isTickerScrolling,
    programTitle,
    isLive,
  } from "../utilities/controls";
  import Field from "./shared/Field.svelte";

  function selectLayout(layout: string) {
    currentVideoLayout.set(layout);
  }

  function killCams() {
    const videoElements = Array.from(document.getElementsByTagName("video"));
    videoElements.forEach((video) => {
      (video.srcObject as MediaStream).getTracks().forEach((track) => {
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
<Field type="checkbox">
  <input type="checkbox" disabled bind:checked={$isTickerScrolling} />Ticker
  Scroll
</Field>
<Field type="checkbox">
  <input type="checkbox" bind:checked={$isLive} />Live
</Field>
<Field>
  Program Title
  <input bind:value={$programTitle} type="text" />
</Field>
