<script lang="ts">
  export let headline = '';
  export let subtitle = '';

  let showFooter = true;

  const [name, credentials] = subtitle.split('|').map((item) => item.trim());
</script>

<section>
  <header>Breaking News</header>
  <article>
    <span>{headline}</span>
  </article>
  <footer style="--footer-height: {showFooter ? '2.25rem' : '0'}">
    <span>{name}</span><span>{credentials}</span>
  </footer>
</section>

<style lang="scss">
  section {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: calc(100% - 7.3rem);
    position: relative;
    margin-top: 1.65rem;
    border-left: 0.45rem solid var(--red);
  }

  header {
    position: absolute;
    display: flex;
    align-items: center;
    bottom: 100%;
    left: -0.45rem;
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
    margin-left: -0.1rem;
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
    margin-left: -0.1rem;
    padding: 0 0.75rem;
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
