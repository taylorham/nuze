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

// ===== TICKER ====
export const isTickerScrolling = writable(true);
export const programTitle = writable("TidBytes");

// ====== TIME =====
export const currentTime = writable(new Date());
setInterval(() => {
  currentTime.set(new Date());
}, 1000);

// ===== STOCK =====
export const dowChange = writable(0.0);
export const nasdaqChange = writable(0.0);
export const sandpChange = writable(0.0);
