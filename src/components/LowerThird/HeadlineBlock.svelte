<script lang="ts">
  export let headline = "";
  export let tagline = "";

  let showTagline = true;

  const [name, credentials] = tagline.split("|").map((item) => item.trim());
</script>

<section>
  <header>Breaking News</header>
  <article>
    <span>{headline}</span>
  </article>
  <footer style="--footer-height: {showTagline ? '2.25rem' : '0'}">
    <span class="tagline-main">{name}</span><span class="">{credentials}</span>
  </footer>
</section>

<style lang="scss">
  section {
    --border: 0.45rem solid var(--red);

    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: calc(100% - 6.8rem);
  }

  header {
    position: absolute;
    display: flex;
    align-items: center;
    bottom: 100%;
    height: 2.25rem;
    padding: 0 1rem;
    color: var(--white);
    background: var(--red);
    font-size: 1.9rem;
    font-weight: 500;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
  }

  article {
    display: flex;
    align-items: center;
    flex: 1;
    padding: 0 0.45rem;
    border-left: var(--border);
    background: var(--white);
    font-size: 2.4rem;
    font-weight: 600;
    white-space: nowrap;
    text-transform: uppercase;

    span {
      transform: scaleX(0.64);
      transform-origin: left;
    }
  }

  footer {
    display: flex;
    align-items: center;
    height: var(--footer-height);
    padding: 0 0.75rem;
    border-left: var(--border);
    background: var(--black);
    color: var(--white);
    font-size: 1.7rem;
    font-weight: 300;
    line-height: 1.3rem;
    letter-spacing: 0.08rem;

    span {
      padding-right: 1rem;
      margin-right: 1rem;
      height: 1.5rem;

      &:first-child {
        border-right: 0.2rem solid var(--red);
      }
    }
  }
</style>
