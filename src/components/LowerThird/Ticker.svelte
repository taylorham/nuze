<script lang="ts">
  export let tickerNews = [];
  export let newsTitle = 'TidBytes';
</script>

<footer>
  <section>
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
    {/each}
  </section>
  <aside>
    <span>{newsTitle}</span>
    <span class="main">{newsTitle}</span>
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

    p {
      display: inline;
      font-size: 1.2rem;
      padding: 0 1.2rem;
      letter-spacing: 0.05rem;
      text-transform: uppercase;
      color: var(--ticker-text-color);
    }
  }

  aside {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 8.5rem;
    padding: 0 0.5rem;
    font-weight: 500;
    text-transform: uppercase;
    color: var(--ticker-show-text-color);
    background: var(--ticker-show-background);

    .main {
      background-color: var(--ticker-show-background);
      // background-image: linear-gradient(
      //   90deg,
      //   var(--ticker-show-background) 40%,
      //   transparent,
      //   var(--ticker-show-background) 60%
      // );
    }

    span:not(.main) {
      position: absolute;
      color: transparent;
      text-shadow: 0 0 0.6rem rgba(255, 255, 255, 0.9);
    }
  }
</style>
