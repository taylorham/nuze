import { writable, derived } from "svelte/store";
import { getMarketVisibility } from "../utilities/helpers";

// Auto-updating time (each second)
export const currentTime = writable(new Date());
setInterval(() => {
  currentTime.set(new Date());
}, 1000);

// Stocks
export const marketVisibility = derived(currentTime, ($time) =>
  getMarketVisibility($time)
);
export const dowChange = writable(239.19);
export const nasChange = writable(-92.58);
export const sapChange = writable(8.24);
