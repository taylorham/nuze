function convertRemToPx(rem: number): number {
  const remSize = getComputedStyle(document.documentElement).fontSize;

  return rem * parseFloat(remSize);
}

function getOffset(element: HTMLElement): number {
  const currentTransform = element.style.transform;
  const transformAmount = currentTransform.replace(/[^0-9.]/g, "");

  return convertRemToPx(parseFloat(transformAmount));
}

export function marquee(contents: HTMLSpanElement) {
  const contentsWidth = contents.offsetWidth;

  let start = 0;
  let previousTimestamp = 0;

  function step(timestamp: number) {
    const contentsOffset = getOffset(contents);

    if (start === 0 || contentsWidth < Math.abs(contentsOffset)) {
      start = timestamp;
    }

    const elapsed = timestamp - start;

    if (previousTimestamp !== timestamp) {
      const count = -0.007 * elapsed;
      contents.style.transform = `translateX(${count}rem)`;
    }

    previousTimestamp = timestamp;
    window.requestAnimationFrame(step);
  }

  window.requestAnimationFrame(step);
}
