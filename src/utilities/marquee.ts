import { debounce, convertRemToPx } from "./helpers";

function getScrolledAmount(element: HTMLElement): number {
  const currentTransform = element.style.transform;
  const transformAmount = currentTransform.replace(/[^0-9.]/g, "");

  return convertRemToPx(parseFloat(transformAmount));
}

export function marquee(contents: HTMLSpanElement) {
  let contentsWidth = contents.offsetWidth;

  const resizeHandler = debounce(() => {
    contentsWidth = contents.offsetWidth;
  });

  window.addEventListener("resize", resizeHandler);

  let start = 0;
  let pauseStart = 0;
  let pauseDuration = 0;

  contents.parentElement.addEventListener("mouseenter", () => {
    pauseStart = window.performance.now();
  });

  contents.parentElement.addEventListener("mouseleave", () => {
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

  return () => window.removeEventListener("resize", resizeHandler);
}
