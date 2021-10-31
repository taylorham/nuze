<script lang="ts">
  import { onMount } from "svelte";
  import { isCameraActive } from "../../stores/controls";

  export let title;

  let videoElement = null;
  let videoStream = null;

  function loadVideo() {
    navigator.mediaDevices
      .getUserMedia({ audio: false, video: { width: 1920, height: 1080 } })
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

<video id={title} {title} height="100%" playsinline>
  <!-- Keeps my IDE happy by not allowing Prettier to self-close this tag -->
</video>

<style lang="scss">
  video {
    flex: 1;
    object-fit: cover;

    filter: saturate(1.25);
  }
</style>
