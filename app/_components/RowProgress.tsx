"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/** Tracks how far a horizontal swipe row has been scrolled: visible share of the row, 0–1. */
export function useRowProgress<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [progress, setProgress] = useState(0.3);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el || el.scrollWidth <= el.clientWidth) return;
    setProgress((el.scrollLeft + el.clientWidth) / el.scrollWidth);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  return { ref, progress, onScroll: update };
}

/** The 2px bar under a mobile swipe row, from the Figma mobile frames. */
export function RowProgressBar({ progress }: { progress: number }) {
  return (
    <div aria-hidden="true" className="relative mt-8 h-0.5 w-[72%] overflow-hidden bg-line md:hidden">
      <i
        className="absolute inset-0 origin-left bg-espresso transition-transform duration-200 ease-out-expo"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
