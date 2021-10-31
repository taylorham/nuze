const formattingOptions = {
  hour: "numeric",
  minute: "2-digit",
  timeZoneName: "short",
} as DateTimeFormatOptions;

export function convertRemToPx(rem: number): number {
  const remSize = window.getComputedStyle(document.documentElement).fontSize;

  return rem * parseFloat(remSize);
}

export function formatTime(time: Date, locale: "New_York" | "Los_Angeles") {
  return new Intl.DateTimeFormat("en-US", {
    ...formattingOptions,
    timeZone: `America/${locale}`,
  })
    .format(time)
    .replace(/[SD]/g, "");
}

export function formatTime24Hour(time: Date) {
  const { hour, minute } = formattingOptions;
  const formatted = new Intl.DateTimeFormat("en-US", {
    hour,
    minute,
    hour12: false,
    timeZone: "America/New_York",
  })
    .format(time)
    .replace(":", "");

  return parseInt(formatted, 10);
}

export function getMarketVisibility(date) {
  const hour24 = formatTime24Hour(date);

  return {
    isMarketOpen: hour24 > 930 && hour24 < 1601,
    showMarket: hour24 > 930 && hour24 < 1800,
  };
}

export function debounce(callback, delay = 100) {
  let timeout;
  return (event) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(callback, delay, event);
  };
}

export function fitText(textElement: HTMLDivElement) {
  const parent = textElement.parentElement;
  const child = textElement.children[0] as HTMLDivElement;
  const padding = 2 * parseInt(window.getComputedStyle(parent).paddingLeft, 10);
  const parentWidth = parent.clientWidth - padding;
  const textWidth = textElement.scrollWidth;
  const baseRatio = 0.8;
  const needsShrinking = textWidth * baseRatio > parentWidth;
  const ratio = needsShrinking ? parentWidth / textWidth : baseRatio;

  // if (ratio < 0.5 && ratio > 0.25) {
  //   const text = textElement.textContent;
  //   const halfTextLength = Math.ceil(text.length / 2);
  //   const [first, last] = [
  //     [...text].slice(0, halfTextLength),
  //     [...text].slice(halfTextLength),
  //   ];
  //   const firstSpace = [...first].reverse().indexOf(" ");
  //   const lastSpace = last.indexOf(" ");
  //
  //   const hyphenateThreshold = 6;
  //
  //   if (firstSpace > hyphenateThreshold && lastSpace > hyphenateThreshold) {
  //     child.innerHTML = `${first.join("")}-<br/>${last.join("")}`;
  //     textElement.style.transform = "scaleY(1)";
  //     return true;
  //   }
  //
  //   const indexToSplit =
  //     firstSpace > lastSpace
  //       ? halfTextLength + lastSpace
  //       : halfTextLength - firstSpace;
  //
  //   child.innerHTML = `${[...text].slice(0, indexToSplit).join("")}<br/>${[
  //     ...text,
  //   ]
  //     .slice(indexToSplit)
  //     .join("")}`;
  //   textElement.style.transform = "scaleY(1)";
  //   return true;
  // } else if (ratio <= 0.25) {
  //   console.error("Text is way too long!");
  // }

  child.style.transform = `scaleX(${ratio})`;
}
