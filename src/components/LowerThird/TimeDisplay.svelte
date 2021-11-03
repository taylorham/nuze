<script lang="ts">
  import { formatTime } from "../../utilities/helpers";
  import { currentTime } from "../../stores/timeAndMarkets";

  let locale: string;
  export { locale as value };
  let className = "";
  export { className as class };
  export let showTimeZone = true;
</script>

<div class="time-display {className}" title="{locale.replace(/_/g, ' ')} Time">
  <p>{formatTime($currentTime, locale, showTimeZone)}</p>
</div>

<style lang="scss">
  .time-display {
    background-color: var(--black);
  }

  p {
    margin: 0;
    padding: 0;
  }
</style>
