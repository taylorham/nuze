export function convertRemToPx(rem: number): number {
  const remSize = window.getComputedStyle(document.documentElement).fontSize;

  return rem * parseFloat(remSize);
}

export function formatTime(time: Date, locale: string, zone = true) {
  const usZones = {
    eastern: "New_York",
    central: "Chicago",
    mountain: "Denver",
    pacific: "Los_Angeles",
  };
  const lowerLocale = locale.toLowerCase();
  const isAmerica = lowerLocale in usZones;

  const options = {
    hour: "numeric",
    minute: "2-digit",
    timeZone: isAmerica ? `America/${usZones[lowerLocale]}` : locale,
    timeZoneName: "short",
  } as Intl.DateTimeFormatOptions;

  if (!zone || !isAmerica) {
    delete options.timeZoneName;
  }

  return new Intl.DateTimeFormat("en-US", options)
    .format(time)
    .replace(/[SD]/g, "");
}

export function formatTime24Hour(time: Date) {
  const formatted = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: false,
    timeZone: "America/New_York",
  })
    .format(time)
    .replace(":", "");

  return parseInt(formatted, 10);
}

export function getMarketVisibility(date: Date) {
  const hour24 = formatTime24Hour(date);

  return {
    isMarketOpen: hour24 > 930 && hour24 < 1601,
    showMarket: hour24 > 930 && hour24 < 1800,
  };
}

export function debounce(callback: Function, delay = 100) {
  let timeout: number;
  return (event: InputEvent) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(callback, delay, event);
  };
}

function getRatioToFit(textElement: HTMLDivElement) {
  const parent = textElement.parentElement;
  const padding = 4 * parseInt(window.getComputedStyle(parent).paddingLeft, 10);
  const parentWidth = parent.clientWidth - padding;
  const textWidth = textElement.scrollWidth;
  const baseRatio = 0.8;
  const needsShrinking = textWidth * baseRatio > parentWidth;
  const ratio = needsShrinking ? parentWidth / textWidth : baseRatio;

  return ratio;
}

export function fitText(textElement: HTMLDivElement) {
  const child = textElement.children[0] as HTMLDivElement;
  const ratio = getRatioToFit(textElement);

  child.style.transform = `scaleX(${ratio})`;
}

// The following are WIP attempts to automatically split text to a second line
export function splitLinesOnPxWidth(textElement: HTMLDivElement) {
  const parentWidth = textElement.parentElement.clientWidth;
  const targetClone = textElement.cloneNode(true) as HTMLDivElement;
  const cloneChild = targetClone.children[0] as HTMLSpanElement;
  const appendTarget = textElement.children[0];
  const wordArray = cloneChild.textContent.split(" ");

  cloneChild.innerText = "";

  wordArray.forEach((word, index) => {
    const wordEl = document.createElement("span");
    wordEl.innerText = word + " ";
    wordEl.id = "temp-word-for-width-" + index;
    cloneChild.appendChild(wordEl);
  });

  cloneChild.style.position = "absolute";
  cloneChild.style.zIndex = "-2";
  cloneChild.style.opacity = "0";
  cloneChild.style.transform = "scaleX(0.8)";
  appendTarget.parentElement.appendChild(cloneChild);

  let totalPx = 0;
  const breakIndices = [];

  wordArray.forEach((_, index) => {
    const wordWidth = document.getElementById(
      `temp-word-for-width-${index}`
    ).offsetWidth;

    totalPx += wordWidth;

    if (totalPx > parentWidth) {
      breakIndices.push(index - 1);
    }

    return wordWidth;
  });

  appendTarget.parentElement.removeChild(cloneChild);

  return [
    wordArray.slice(0, breakIndices[0]).join(" "),
    wordArray.slice(breakIndices[0]).join(" "),
  ];
}

export function fitHeadline(textElement: HTMLDivElement) {
  const child = textElement.children[0] as HTMLDivElement;
  const { textContent } = child;
  const ratio = getRatioToFit(textElement);

  if (ratio < 0.5 && ratio > 0.25) {
    return splitLinesOnPxWidth(textElement);
  } else if (ratio <= 0.25) {
    throw new Error("Text is way too long!");
  }
  return [textContent];
}
