<div class="tab-list">
  <slot />
</div>

<style lang="scss">
  .tab-list {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-right: 2px solid hsl(210deg 70% 70%);
  }
</style>
