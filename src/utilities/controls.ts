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

/**
 * === LOGO BLOCK ==
 */
// ===== STOCK =====
export const dowChange = writable(239.19);
export const nasChange = writable(-92.58);
export const sapChange = writable(8.24);
// ====== TIME =====
export const currentTime = writable(new Date());
setInterval(() => {
  currentTime.set(new Date());
}, 1000);
