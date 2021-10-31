<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { marquee } from "../../utilities/marquee";
  import ProgramTitle from "./ProgramTitle.svelte";

  export let tickerNews = [];

  let removeResizeListener = null;

  onMount(() => {
    removeResizeListener = marquee(document.getElementById("marquee"));
  });

  onDestroy(() => {
    removeResizeListener();
  });
</script>

<footer title="News Ticker">
  <section id="marquee-container">
    <span id="marquee">
      {#each tickerNews as article}
        <article>
          {#each article as sentence, i}
            <p>
              {sentence}
              {#if i < article.length - 1}
                <span style="font-size: 1.1rem">►</span>
              {/if}
            </p>
          {/each}
        </article>
      {/each}
    </span>
  </section>
  <ProgramTitle />
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

    #marquee {
      display: inline-block;
      padding-left: 100%;

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
</style>
