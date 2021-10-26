<script lang="ts">
  import HeadlineBlock from './HeadlineBlock.svelte';

  import LogoBlock from './LogoBlock.svelte';

  import Ticker from './Ticker.svelte';
</script>

<section>
  <div>
    <HeadlineBlock
      headline="{`"I didn't know it was wrong": Jon Hamm eats Hawaiian pizza`}"
      subtitle="{`Doug H. Tosser | Professor of Pizza at Paisano's Pies`}"
    />
    <LogoBlock />
  </div>
  <Ticker
    tickerNews="{[
      [
        `facebook has seriously screwed the pooch, according to new leaks being dubbed the "facebook papers"`,
        `we really don't deserve any better, turns out`,
        `why are we still surprised?`,
      ],
    ]}"
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
