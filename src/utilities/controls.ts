import { writable } from "svelte/store";

/**
 * ===== VIDEO =====
 */
export const isCameraActive = writable(true);
export const currentVideoLayout = writable("full");

/**
 * == LOWER THIRD ==
 */

// ===== TICKER ====
export const isTickerScrolling = writable(true);
export const programTitle = writable("TidBytes");
