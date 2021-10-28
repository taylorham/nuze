<script lang="ts">
  import { formatTime } from "../../utilities/helpers";
  import { currentTime } from "../../utilities/controls";

  export let timezone: "New_York" | "Los_Angeles";
  let className = "";
  export { className as class };
</script>

<span class={className}>
  {formatTime($currentTime, timezone)}
</span>
