<script lang="ts">
  import { onMount } from "svelte";

  import { isTickerScrolling } from "../../utilities/stores";
  import { marquee } from "../../utilities/marquee";
  import ProgramTitle from "./ProgramTitle.svelte";

  export let tickerNews = [];

  onMount(() => {
    const contents = document.getElementById("marquee");

    marquee(contents);
  });
</script>

<footer>
  <section id="marquee-container">
    <span id="marquee" style={$isTickerScrolling ? "" : "animation: none;"}>
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
