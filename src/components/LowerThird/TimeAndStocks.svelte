<script lang="ts">
  let currentTime = new Date();

  function formatter(time: Date, locale: "New_York" | "Los_Angeles") {
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      timeZone: `America/${locale}`,
      timeZoneName: "short",
    })
      .format(time)
      .replace(/[SD]/g, "");
  }

  $: eastern = formatter(currentTime, "New_York");
  $: pacific = formatter(currentTime, "Los_Angeles");

  setInterval(() => {
    currentTime = new Date();
  }, 1000);
</script>

<footer>{pacific}</footer>

<style lang="scss">
  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1.2rem;
    font-size: 0.85rem;
    font-weight: 500;
    background: var(--black);
    color: var(--white);
    letter-spacing: 0.05rem;
    border-right: 0.25rem solid var(--red);
  }
</style>
