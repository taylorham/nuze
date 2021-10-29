import { writable } from "svelte/store";

// Auto-updating time (each second)
export const currentTime = writable(new Date());
setInterval(() => {
  currentTime.set(new Date());
}, 1000);

// Stocks
export const dowChange = writable(239.19);
export const nasChange = writable(-92.58);
export const sapChange = writable(8.24);
