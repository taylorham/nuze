<script lang="ts">
  import {
    headline,
    byline,
    isBylineVisible,
    tagline,
    isTaglineVisible,
  } from "../../stores/controls";

  const [name, credentials] = $byline.split("|").map((item) => item.trim());
</script>

<section class="headline-container">
  <header class="tagline" class:show={$isTaglineVisible}>{$tagline}</header>
  <article class="headline" class:show-byline={$isBylineVisible}>
    <div class="headline-scaleY">
      <div class="headline-scaleX">{$headline}</div>
    </div>
  </article>
  <footer class="byline-container" class:show={$isBylineVisible}>
    <div class="byline">
      <span class="byline-main">{name}</span>
      {#if credentials.length}
        <span class="byline-extra">{credentials}</span>
      {/if}
    </div>
  </footer>
</section>

<style lang="scss">
  .headline-container {
    --border: 0.45rem solid var(--red);
    --byline-height: 2.25rem;

    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: calc(100% - 6.8rem);
    z-index: 1;
  }

  .tagline {
    position: absolute;
    display: flex;
    align-items: center;
    bottom: calc(100% - 2.25rem);
    height: 2.25rem;
    padding: 0 1rem;
    z-index: -1;
    color: var(--white);
    background: var(--red);
    font-size: 1.9rem;
    font-weight: 500;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    transition: bottom 0.3s ease;

    &.show {
      bottom: 100%;
    }
  }

  .headline {
    display: flex;
    align-items: center;
    flex: 1;
    padding: 0 0.45rem;
    border-left: var(--border);
    background: var(--translucent-white);
    font-size: 2.4rem;
    font-weight: 600;
    white-space: nowrap;
    text-transform: uppercase;

    .headline-scaleY {
      transform: scaleY(1.3);
      transition: transform 0.2s linear;
    }

    &.show-byline > .headline-scaleY {
      transform: scaleY(1);
    }

    .headline-scaleX {
      transform: scaleX(0.64);
      transform-origin: left;
    }
  }

  .byline-container {
    display: flex;
    align-items: center;
    height: 0;
    padding: 0 0.75rem;
    border-left: var(--border);
    overflow: hidden;
    background: var(--translucent-black);
    color: var(--white);
    font-size: 1.7rem;
    font-weight: 300;
    line-height: 1.3rem;
    letter-spacing: 0.08rem;
    transition: height 0.2s linear;

    &.show {
      height: var(--byline-height);
    }

    .byline {
      opacity: 0;
      transform: translateX(-10rem);
      transition: opacity 0.3s linear, transform 0.2s linear 0.1s;
    }

    &.show .byline {
      opacity: 1;
      transform: translateX(0);
    }

    span {
      padding-right: 1rem;
      height: 1.5rem;
    }

    .byline-extra {
      --shrink-to: 90%;

      font-size: var(--shrink-to);
      line-height: var(--shrink-to);
      padding-left: 1rem;
      border-left: 0.2rem solid var(--red);
    }
  }
</style>
