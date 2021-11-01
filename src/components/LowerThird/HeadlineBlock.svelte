<script lang="ts">
  import { onMount, beforeUpdate, afterUpdate, onDestroy } from "svelte";
  import {
    headline,
    byline,
    isBylineVisible,
    tagline,
    isTaglineVisible,
  } from "../../stores/controls";
  import { debounce, fitText } from "../../utilities/helpers";

  const [name, credentials] = $byline.split("|").map((item) => item.trim());

  function adjustTextWidth() {
    const textElement = document.getElementsByClassName(
      "headline-scaleY"
    )[0] as HTMLDivElement;

    fitText(textElement);
  }

  onMount(() => {
    adjustTextWidth();

    window.addEventListener("resize", debounce(adjustTextWidth));
  });

  afterUpdate(() => {
    adjustTextWidth();
  });

  onDestroy(() => {
    window.removeEventListener("resize", debounce(adjustTextWidth));
  });
</script>

<section class="headline-container">
  <header title="Tagline" class="tagline" class:show={$isTaglineVisible}>
    {$tagline}
  </header>
  <article
    title="Headline"
    class="headline"
    class:show-byline={$isBylineVisible}
  >
    <div class="headline-scaleY">
      <div class="headline-scaleX">{$headline}</div>
    </div>
  </article>
  <footer title="Byline" class="byline-container" class:show={$isBylineVisible}>
    <div class="byline">
      <span class="byline-main">{name}</span>
      {#if credentials.length}
        <span title="Credentials" class="byline-extra">{credentials}</span>
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
    height: 100%;
    padding: 0 0.45rem;
    border-left: var(--border);
    background: var(--translucent-white);
    font-size: 2.4rem;
    font-weight: 600;
    line-height: 1;
    white-space: nowrap;
    text-transform: uppercase;
    transition: height 0.2s linear;

    .headline-scaleY {
      transform: scaleY(1.3);
      transition: transform 0.2s linear;
    }

    &.show-byline {
      height: calc(100% - var(--byline-height));

      & > .headline-scaleY {
        transform: scaleY(1);
      }
    }

    .headline-scaleX {
      transform: scaleX(0.8);
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
