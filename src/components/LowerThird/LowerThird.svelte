<script lang="ts">
  import HeadlineBlock from "./HeadlineBlock.svelte";
  import LogoBlock from "./LogoBlock.svelte";
  import Ticker from "./Ticker.svelte";
</script>

<section>
  <div>
    <HeadlineBlock />
    <LogoBlock />
  </div>
  <Ticker
    tickerNews={[
      [
        `facebook has seriously screwed the pooch, according to new leaks being dubbed the "facebook papers"`,
        `thousands of pages of documents obtained by the washington post detail a myriad of sordid findings`,
        `human trafficking, drug sales, extremism, and more were allowed to run rampant on the platform for years`,
      ],
    ]}
  />
</section>

<style lang="scss">
  section {
    position: absolute;
    display: flex;
    flex-direction: column;
    bottom: 0;
    left: 0;
    right: 0;
  }

  div {
    display: flex;
    width: 100%;
    margin-bottom: 0.4rem;
  }
</style>
