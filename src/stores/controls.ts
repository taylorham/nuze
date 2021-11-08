import { writable, get } from "svelte/store";
import { marketVisibility } from "./timeAndMarkets";

/**
 * ===== VIDEO =====
 */
export const isCameraActive = writable(true);
export const currentVideoLayout = writable("double");

export const showIdentifierLeft = writable(true);
export const showIdentifierRight = writable(true);

export const identifierLeftCredit = writable(null);
export const identifierLeftLocation = writable("Los Angeles, CA");
export const identifierLeftLocale = writable("pacific");

export const identifierRightCredit = writable("Via | webex by cisco");
export const identifierRightLocation = writable("Washington, DC");
export const identifierRightLocale = writable("eastern");

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
export const isBylineVisible = writable(true);
export const tagline = writable("Breaking News");
export const isTaglineVisible = writable(true);

// ===== TICKER ====
export const programTitle = writable("TidBytes");

/**
 * === LOGO BLOCK ==
 */
function scrubbable(value) {
  const { subscribe, update, set } = writable(value);

  return {
    set,
    subscribe,
    increment: () => update((n) => n + 1),
    decrement: () => update((n) => n - 1),
  };
}

export const isTimeTickerPaused = writable(false);
export const timeTickerIndex = scrubbable(0);
const shouldShowMarkets = get(marketVisibility).showMarket;
export const showMarkets = writable(shouldShowMarkets);

/**
 * = ORCHESTRATION =
 */
export const savedStates = writable([]);

export type Locale = "eastern" | "central" | "mountain" | "pacific" | string;

export interface StateObject {
  isCameraActive?: boolean;
  currentVideoLayout?: "full" | "double";
  showIdentifierLeft?: boolean;
  showIdentifierRight?: boolean;
  identifierLeftCredit?: string | null;
  identifierLeftLocation?: string | null;
  identifierLeftLocale?: Locale | null;
  identifierRightCredit?: string | null;
  identifierRightLocation?: string | null;
  identifierRightLocale?: Locale | null;

  isLive?: boolean;
  isBylineVisible?: boolean;
  isTaglineVisible?: boolean;
  headline?: string;
  byline?: string | null;
  tagline?: string | null;
  programTitle?: string;

  isTimeTickerPaused?: boolean;
  timeTickerIndex?: number;
  showMarkets?: boolean;
}

const valueMap = {
  isCameraActive: isCameraActive,
  currentVideoLayout: currentVideoLayout,
  showIdentifierLeft: showIdentifierLeft,
  showIdentifierRight: showIdentifierRight,
  identifierLeftCredit: identifierLeftCredit,
  identifierLeftLocation: identifierLeftLocation,
  identifierLeftLocale: identifierLeftLocale,
  identifierRightCredit: identifierRightCredit,
  identifierRightLocation: identifierRightLocation,
  identifierRightLocale: identifierRightLocale,
  isLive: isLive,
  isBylineVisible: isBylineVisible,
  isTaglineVisible: isTaglineVisible,
  headline: headline,
  byline: byline,
  tagline: tagline,
  programTitle: programTitle,
  isTimeTickerPaused: isTimeTickerPaused,
  timeTickerIndex: timeTickerIndex,
  showMarkets: showMarkets,
};

function setState(newState: StateObject) {
  for (let property in newState) {
    const newValue = newState[property];
    valueMap[property].set(newValue);
  }
}

function getState() {
  const stateObject = {};

  for (let property in valueMap) {
    stateObject[property] = get(valueMap[property]);
  }

  return stateObject;
}

export function saveState() {
  const stateToSave = getState();

  savedStates.update((existing) => [...existing, stateToSave]);
}

export function recallState(index) {
  const stateToRecall = get(savedStates)[index];

  setState(stateToRecall);
}

export function removeState(index) {
  savedStates.update((existing) => [
    ...existing.slice(0, index),
    ...existing.slice(index + 1),
  ]);
}
