<script lang="ts">
  import { isTickerScrolling, programTitle } from "../../utilities/stores";

  export let tickerNews = [];
</script>

<footer>
  <section>
    <span class="marquee" style={$isTickerScrolling ? "" : "animation: none;"}>
      {#each tickerNews as article}
        <article>
          {#each article as sentence, i}
            <p>
              {sentence}
              {#if i < article.length - 1}
                <span>➤</span>
              {/if}
            </p>
          {/each}
        </article>
      {/each}</span
    >
  </section>
  <aside>
    <span class="title">{$programTitle}</span>
    <span class="shine-effect">&nbsp;</span>
    <span class="highlight">{$programTitle}</span>
  </aside>
</footer>

<style lang="scss">
  footer {
    display: flex;
    width: 100%;
    height: var(--ticker-height);
  }

  section {
    display: flex;
    align-items: center;
    flex: 1;
    background-color: var(--ticker-background);
    white-space: nowrap;
    overflow: hidden;

    .marquee {
      display: inline-block;
      padding-left: 100%;
      animation: 1000s linear 0s infinite normal forwards running marquee;

      p {
        display: inline;
        font-size: 1.2rem;
        letter-spacing: 0.05rem;
        text-transform: uppercase;
        color: var(--ticker-text-color);

        span {
          padding: 0 1rem;
        }
      }
    }
  }

  aside {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    padding: 0.3rem 0.5rem;
    min-width: 8.5rem;
    font-weight: 500;
    text-transform: uppercase;
    color: var(--ticker-show-text-color);
    background: var(--ticker-show-background);

    .title {
      z-index: 2;
    }

    .shine-effect {
      position: absolute;
      display: inline-block;
      inset: 0;
      width: 300%;
      z-index: 1;
      background-image: linear-gradient(
        112.5deg,
        var(--ticker-show-background) 40%,
        transparent,
        var(--ticker-show-background) 60%
      );
      animation-duration: 3s;
      animation-timing-function: linear;
      animation-delay: 0s;
      animation-iteration-count: infinite;
      animation-direction: normal;
      animation-fill-mode: forwards;
      animation-play-state: running;
      animation-name: shine;
      animation: 3s linear 0s infinite normal forwards running shine;
    }

    .highlight {
      position: absolute;
      color: transparent;
      background-color: var(--ticker-show-background);
      text-shadow: 0 0 0.25rem rgba(255, 250, 225, 0.9);
    }

    @keyframes marquee {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-6666rem);
      }
    }

    @keyframes shine {
      0% {
        transform: translateX(-66.66%);
      }
      20% {
        transform: translateX(-66.66%);
      }
      100% {
        transform: translateX(0%);
      }
    }
  }
</style>
