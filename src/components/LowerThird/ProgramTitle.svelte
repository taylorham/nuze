<script lang="ts">
  import { programTitle } from "../../utilities/controls";
</script>

<aside>
  <span class="title">{$programTitle}</span>
  <span class="shine">&nbsp;</span>
  <span class="glow">{$programTitle}</span>
</aside>

<style lang="scss">
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

    .shine {
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
      //animation-duration: 3s;
      //animation-timing-function: linear;
      //animation-delay: 0s;
      //animation-iteration-count: infinite;
      //animation-direction: normal;
      //animation-fill-mode: forwards;
      //animation-play-state: running;
      //animation-name: shine;
      animation: 3s linear 0s infinite normal forwards running shine;
    }
  }

  .glow {
    position: absolute;
    color: transparent;
    background-color: var(--ticker-show-background);
    text-shadow: 0 0 0.2rem rgba(255, 250, 225, 0.9);
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
</style>
