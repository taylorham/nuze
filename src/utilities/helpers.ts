export function formatTime(time: Date, locale: "New_York" | "Los_Angeles") {
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
