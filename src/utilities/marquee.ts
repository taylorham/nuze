function convertRemToPx(rem: number): number {
  const remSize = getComputedStyle(document.documentElement).fontSize;

  return rem * parseFloat(remSize);
}

function getScrolledAmount(element: HTMLElement): number {
  const currentTransform = element.style.transform;
  const transformAmount = currentTransform.replace(/[^0-9.]/g, "");

  return convertRemToPx(parseFloat(transformAmount));
}

export function marquee(contents: HTMLSpanElement) {
  const contentsWidth = contents.offsetWidth;

  let start = 0;

  let pauseStart = 0;
  let pauseDuration = 0;

  contents.addEventListener("mouseenter", () => {
    pauseStart = window.performance.now();
  });

  contents.addEventListener("mouseleave", () => {
    pauseDuration = window.performance.now() - pauseStart;
  });

  function step(timestamp: number) {
    const contentsScrolledAmount = getScrolledAmount(contents);
    const isFullyScrolled = contentsWidth < Math.abs(contentsScrolledAmount);
    const isRunning = !pauseStart;
    const shouldResume = Boolean(pauseDuration);

    if (start === 0 || isFullyScrolled) {
      start = timestamp;
    } else if (shouldResume) {
      start = start + pauseDuration;
      pauseStart = 0;
      pauseDuration = 0;
    }

    const elapsed = timestamp - start;

    if (isRunning) {
      const count = -0.007 * elapsed;
      contents.style.transform = `translateX(${count}rem)`;
    }

    window.requestAnimationFrame(step);
  }

  window.requestAnimationFrame(step);
}