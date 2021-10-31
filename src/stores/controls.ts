import { writable, get } from "svelte/store";
import { marketVisibility } from "./timeAndMarkets";

/**
 * ===== VIDEO =====
 */
export const isCameraActive = writable(true);
export const currentVideoLayout = writable("full");

/**
 * == LOWER THIRD ==
 */
export const isLive = writable(true);

// ==== HEADLINE ===
export const headline = writable(
  `"I didn't know it was wrong": Jon Hamm eats Hawaiian Pizza`
);
export const byline = writable(
  `Doug H. Tosser | Professor of Pizza at Paisano's Pies`
);
export const isBylineVisible = writable(false);
export const tagline = writable("Breaking News");
export const isTaglineVisible = writable(true);

// ===== TICKER ====
export const isTickerPaused = writable(false);
export const programTitle = writable("TidBytes");

/**
 * === LOGO BLOCK ==
 */
export const isTimeTickerPaused = writable(false);
function createTimeTickerIndex() {
  const { subscribe, update } = writable(0);

  return {
    subscribe,
    increment: () => update((n) => n + 1),
    decrement: () => update((n) => n - 1),
  };
}
export const timeTickerIndex = createTimeTickerIndex();
const shouldShowMarkets = get(marketVisibility).showMarket;
export const showMarkets = writable(shouldShowMarkets);
