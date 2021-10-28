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
