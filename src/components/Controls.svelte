<script lang="ts">
  import {
    isCameraActive,
    currentVideoLayout,
    isTickerScrolling,
    programTitle,
  } from '../utilities/stores';

  function toggleCamera() {
    isCameraActive.update((value) => !value);
  }

  function selectLayout(layout: string) {
    currentVideoLayout.set(layout);
  }

  function toggleTickerScroll() {
    isTickerScrolling.update((value) => !value);
  }

  function killCams() {
    const videoElements = Array.from(document.getElementsByTagName('video'));
    videoElements.forEach((video) => {
      (video.srcObject as MediaStream).getTracks().forEach((track) => {
        track.enabled = false;
        track.stop();
      });
      video.srcObject = null;
    });
  }

  function setProgramTitle(event: Event) {
    const title = (event.target as HTMLInputElement).value;
    programTitle.set(title);
  }
</script>

<button on:click="{toggleCamera}">Toggle Camera</button>
<button on:click="{killCams}">Kill Cams</button>
{#if $currentVideoLayout === 'full'}
  <button on:click="{() => selectLayout('double')}">Double</button>
{:else}
  <button on:click="{() => selectLayout('full')}">Single</button>
{/if}
<button on:click="{toggleTickerScroll}">Ticker Scroll</button>
<label>Program Title<input on:input="{setProgramTitle}" type="text" /></label>
