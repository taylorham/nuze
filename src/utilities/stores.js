import { writable } from 'svelte/store';

export const isCameraActive = writable(true);
export const currentVideoLayout = writable('full');
export const isTickerScrolling = writable(true);
export const programTitle = writable('TidBytes');