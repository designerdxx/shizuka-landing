"use client";

import { useEffect } from "react";
import { INTRO_SEEN_KEY } from "./intro-script";
import { asset } from "../asset";

/** Earliest the curtain may lift, so the wordmark is seen rather than flashed (ms since navigation). */
const MIN_HOLD = 900;
/** Latest the curtain waits for the hero photo before lifting anyway. */
const MAX_WAIT = 1600;
/** When the hero's own entrance starts, measured from the lift: lets the curtain clear the photo first. */
const HERO_AFTER_LIFT = 380;
/** Curtain delay (120ms) + lift (650ms), plus a margin, before it is removed. */
const CURTAIN_DONE = 950;

export function Intro() {
  useEffect(() => {
    const root = document.documentElement;
    if (root.classList.contains("intro-skip") || root.classList.contains("intro-go")) return;

    let cancelled = false;
    const timers: number[] = [];
    const wait = (ms: number) => new Promise<void>((resolve) => timers.push(window.setTimeout(resolve, ms)));

    const hero = document.querySelector<HTMLImageElement>("#top img");
    const heroReady = hero && !hero.complete ? hero.decode().catch(() => undefined) : Promise.resolve();

    Promise.race([heroReady, wait(MAX_WAIT)])
      .then(() => wait(Math.max(0, MIN_HOLD - performance.now())))
      .then(() => {
        if (cancelled) return;
        root.classList.add("intro-go");
        timers.push(window.setTimeout(() => root.classList.add("intro-done"), HERO_AFTER_LIFT));
        timers.push(
          window.setTimeout(() => {
            root.classList.add("intro-gone");
            try {
              sessionStorage.setItem(INTRO_SEEN_KEY, "1");
            } catch {}
          }, CURTAIN_DONE),
        );
      });

    return () => {
      cancelled = true;
      timers.forEach(window.clearTimeout);
    };
  }, []);

  return (
    <div className="intro" aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element -- tiny SVG wordmark, no optimisation needed */}
      <img className="intro-mark" src={asset("/images/logo-light.svg")} alt="" width={150} height={50} />
    </div>
  );
}
