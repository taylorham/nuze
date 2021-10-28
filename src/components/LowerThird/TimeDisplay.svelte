<script lang="ts">
  import { formatTime } from "../../utilities/helpers";
  import { currentTime } from "../../utilities/controls";

  export let value: "New_York" | "Los_Angeles";
  let className = "";
  export { className as class };
</script>

<div class={className}>
  {formatTime($currentTime, value)}
</div>

<style lang="scss">
  div {
    padding-right: 0.3rem;
    border-right: 0.25rem solid var(--red);
  }
</style>
