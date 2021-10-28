<script lang="ts">
  let className = "";
  export { className as class };
  export let value: "Dow" | "Nasdaq" | "S&P";

  const change = 0.1;
  const isUp = change > 0;
  const arrow = isUp ? "▲" : "▼";
</script>

<div class={className} style="--color: {isUp ? 'var(--green)' : 'var(--red)'}">
  {value.toUpperCase()}
  <div class="arrow"><span>{arrow}</span></div>
  <div class="change">{change}</div>
</div>

<style lang="scss">
  div:not(.arrow):not(.change) {
    padding-right: 0;
    border-right: 0.25rem solid var(--color);
  }

  .arrow {
    position: relative;
    display: inline-block;
    width: 1rem;
    text-align: center;
    color: var(--color);
  }

  .change {
    display: inline-block;
    transform: scaleX(0.8);
  }
</style>
