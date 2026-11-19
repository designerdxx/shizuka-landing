"use client";

import { useEffect } from "react";

/**
 * Arms scroll reveals once JS runs: elements with [data-reveal] start visible,
 * and only hide after the observer is ready, so a failed script never hides content.
 * Each element reveals once and is never hidden again.
 */
export function RevealController() {
  useEffect(() => {
    const root = document.documentElement;
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-in", "");
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    const targets = root.querySelectorAll("[data-reveal]");
    // Anything already on screen is marked in before arming, so it never flashes out.
    const vh = window.innerHeight;
    targets.forEach((el) => {
      if (el.getBoundingClientRect().top < vh * 0.92) el.setAttribute("data-in", "");
      else io.observe(el);
    });
    root.setAttribute("data-armed", "");
    return () => io.disconnect();
  }, []);
  return null;
}
