const formattingOptions = {
  hour: "numeric",
  minute: "2-digit",
  timeZoneName: "short",
} as DateTimeFormatOptions;

export function formatTime(time: Date, locale: "New_York" | "Los_Angeles") {
  return new Intl.DateTimeFormat("en-US", {
    ...formattingOptions,
    timeZone: `America/${locale}`,
  })
    .format(time)
    .replace(/[SD]/g, "");
}

export function formatTime24Hour(time: Date) {
  const { hour, minute } = formattingOptions;
  const formatted = new Intl.DateTimeFormat("en-US", {
    hour,
    minute,
    hour12: false,
    timeZone: "America/New_York",
  })
    .format(time)
    .replace(":", "");

  return parseInt(formatted, 10);
}

export function getMarketVisibility(date) {
  const hour24 = formatTime24Hour(date);

  return {
    isMarketOpen: hour24 > 930 && hour24 < 1601,
    showMarket: hour24 > 930 && hour24 < 1800,
  };
}
