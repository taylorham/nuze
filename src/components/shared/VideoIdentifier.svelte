<script lang="ts">
  import TimeDisplay from "../LowerThird/TimeDisplay.svelte";

  export let credit: string = null;
  export let location: string = null;
  export let locale: string = null;
  export let align: "left" | "right" = "left";
  export let show = true;
</script>

<aside
  class="video-identifier"
  class:right={align === "right"}
  class:in={$show}
  class:show-credit={$credit}
>
  <div class="identifier-container">
    {#if $credit}
      <div class="identifier credit">
        <span><p>{$credit}</p></span>
      </div>
    {/if}
    {#if $location}
      <div class="identifier location"><span><p>{$location}</p></span></div>
    {/if}
    {#if $locale}
      <div class="identifier locale">
        <TimeDisplay value={$locale} />
      </div>
    {/if}
  </div>
</aside>

<style lang="scss">
  .video-identifier {
    --padding: 0.8rem;
    --border-width: 0.35rem;
    --border: var(--border-width) solid var(--red);
    --child-height: 1.65rem;

    position: absolute;
    top: 1rem;
    height: calc(2 * var(--child-height) - 0.5px);
    font-size: 1.35rem;
    letter-spacing: 0.03rem;
    border-left: var(--border);
    overflow: hidden;
    z-index: 1;
    transition: border-width 0.1s linear;

    p,
    :global(.time-display p) {
      opacity: 1;
      margin: 0;
      padding: 0;
      transition: opacity 0.3s linear 0.2s;
    }

    &.show-credit {
      padding-top: var(--child-height);
      top: calc(-1 * var(--child-height) + 1rem);
      height: calc(3 * var(--child-height) - 0.5px);
    }

    .identifier-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin: 0 -0.5px;
    }

    &:not(.in) {
      border-width: 0 !important;
      transition: border-width 0.1s linear 0.45s;

      .identifier {
        span,
        :global(.time-display) {
          transform: translateX(calc(-100% - 0.35rem));
        }
      }

      &.right .identifier {
        span,
        :global(.time-display) {
          transform: translateX(calc(100% + 0.35rem));
        }
      }

      p,
      :global(.time-display p) {
        opacity: 0;
        transition: opacity 0.3s linear;
      }
    }

    &.right {
      right: 0;
      left: unset;
      border-left: none;
      border-right: var(--border);

      .identifier-container {
        align-items: flex-end;
      }
    }
  }

  .identifier {
    display: inline-block;
    height: calc(var(--child-height) + 0.5px);
    margin: 0 -0.5px;

    span,
    :global(.time-display) {
      display: inline-block;
      width: 100%;
      padding: 0 var(--padding);
      white-space: nowrap;
      overflow: hidden;
      transition: transform 0.5s ease 0.1s;
    }
  }

  .credit span,
  .locale :global(.time-display) {
    color: var(--white);
  }

  .credit span {
    background-color: var(--translucent-black);
  }

  .location span {
    color: var(--black);
    background-color: var(--translucent-white);
  }

  .credit {
    margin-top: calc(-1 * var(--child-height));
  }
</style>
