<script lang="ts">
  import { onMount } from 'svelte';

  export let title = 'anchor';
  export let layout = 'full';

  const baseRatio = 1060 / 435;

  const ratios = {
    full: 16 / 9,
    half: baseRatio / 2,
    third: baseRatio / 3,
    quarter: baseRatio,
    eighth: baseRatio,
  };

  const divisors = {
    full: 1,
    half: 2,
    third: 3,
    quarter: 1,
    eighth: 1,
  };

  function getSize(size = 'full') {
    const height = 1080;

    const dimensions = {
      height,
      width: height * ratios[size],
    };

    console.log({ dimensions });

    return dimensions;
  }

  onMount(() => {
    const videoEl = document.getElementById(title) as HTMLVideoElement;

    navigator.mediaDevices
      .getUserMedia({ audio: false, video: getSize(layout) })
      .then((stream) => (videoEl.srcObject = stream))
      .catch((error) => console.error(error));
  });
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video id="{title}" height="100%" width="auto" playsinline autoplay></video>

<style lang="scss">
  video {
    object-fit: cover;
  }
</style>
