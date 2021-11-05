<script lang="ts">
  import Background from "./Background.svelte";
</script>

<Background>
  <div class="bg-ac360">
    <!--    -->
  </div>
</Background>

<style lang="scss">
  .bg-ac360 {
    --bg-light: hsl(202deg 77% 40%);
    --bg-mid: hsl(214deg 78% 35%);
    --bg-dark: hsl(232deg 63% 21%);

    height: 100%;
    width: 100%;
    background-image: linear-gradient(
      180deg,
      var(--bg-mid) 3%,
      var(--bg-dark) 28%,
      var(--bg-dark) 50%,
      var(--bg-mid) 62%,
      var(--bg-dark) 70%,
      var(--bg-mid) 80%
    );

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background-image: linear-gradient(
        180deg,
        hsl(0deg 0% 100% / 0%),
        var(--bg-light) 2%,
        var(--bg-light) 6%,
        var(--bg-mid) 10%,
        var(--bg-mid) 33%,
        var(--bg-light) 38%,
        var(--bg-mid) 50%,
        var(--bg-light) 56%,
        var(--bg-mid) 68%
      );
      -webkit-mask-image: linear-gradient(
        -90deg,
        hsl(0deg 0% 100%),
        hsl(0deg 0% 100% / 0%)
      );
    }
  }
</style>
