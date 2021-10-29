<script lang="ts">
  import { formatTime } from "../../utilities/helpers";
  import { currentTime } from "../../stores/timeAndMarkets";

  export let value: "New_York" | "Los_Angeles";
  let className = "";
  export { className as class };
</script>

<div class={className}>
  {formatTime($currentTime, value)}
</div>

<style lang="scss">
  div {
    background-color: var(--black);
  }
</style>
