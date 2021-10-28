<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { isCameraActive } from "../../utilities/controls";

  export let title;
  export let videoDimensions;

  let videoElement = null;
  let videoStream = null;

  function loadVideo() {
    navigator.mediaDevices
      .getUserMedia({ audio: false, video: videoDimensions })
      .then((stream) => {
        videoStream = stream;
        videoElement.srcObject = stream;
        videoElement.play();
      })
      .catch((error) => console.error(error));
  }

  function destroyVideo() {
    if (videoStream) {
      videoStream.getTracks().forEach((track: MediaStreamTrack) => {
        track.enabled = false;
        track.stop();
      });
      videoElement.srcObject = null;
      videoStream = null;
    }
  }

  $: if ($isCameraActive) {
    loadVideo();
  } else {
    destroyVideo();
  }

  onMount(() => {
    videoElement = document.getElementById(title) as HTMLVideoElement;
  });
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video id={title} height="100%" width="auto" playsinline />

<style lang="scss">
  video {
    flex: 1;
    object-fit: cover;
    filter: saturate(1.25);
  }
</style>
