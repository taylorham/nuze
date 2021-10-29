import { writable } from "svelte/store";

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
