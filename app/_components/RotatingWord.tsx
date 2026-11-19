"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EASE_IN: [number, number, number, number] = [0.4, 0, 1, 1];

/**
 * The italic category in the hero. Words share one grid cell (sized by the widest word)
 * so the headline never reflows. Pauses when the tab is hidden or the hero is off-screen.
 */
export function RotatingWord({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const visible = useRef(true);

  useEffect(() => {
    const el = ref.current;
    const io = el
      ? new IntersectionObserver(([entry]) => {
          visible.current = entry.isIntersecting;
        })
      : null;
    if (el && io) io.observe(el);

    // The first swap counts from when the hero starts playing, not from page load (the intro may still be up).
    let id: number | undefined;
    const start = () => {
      id = window.setInterval(
        () => {
          if (document.hidden || !visible.current) return;
          setIndex((i) => (i + 1) % words.length);
        },
        reduce ? 4200 : 3200,
      );
    };
    const root = document.documentElement;
    const heroPlaying = () => !root.classList.contains("js") || root.classList.contains("intro-done") || root.classList.contains("intro-skip");
    let mo: MutationObserver | undefined;
    if (heroPlaying()) start();
    else {
      mo = new MutationObserver(() => {
        if (!heroPlaying()) return;
        mo?.disconnect();
        start();
      });
      mo.observe(root, { attributes: true, attributeFilter: ["class"] });
    }

    return () => {
      window.clearInterval(id);
      mo?.disconnect();
      io?.disconnect();
    };
  }, [reduce, words.length]);

  const word = words[index];

  return (
    <span ref={ref} className="whitespace-nowrap">
      <span className="inline-grid align-baseline">
        {/* Sizer: reserves the width of the longest word. */}
        {words.map((w) => (
          <span key={w} className="invisible col-start-1 row-start-1 italic">
            {w}
          </span>
        ))}
        <AnimatePresence initial={false}>
          <motion.span
            key={word}
            className="col-start-1 row-start-1 italic"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: "0.32em", filter: "blur(6px)" }}
            animate={
              reduce
                ? { opacity: 1, transition: { duration: 0.3 } }
                : { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: EASE_OUT, delay: 0.12 } }
            }
            exit={
              reduce
                ? { opacity: 0, transition: { duration: 0.3 } }
                : { opacity: 0, y: "-0.24em", filter: "blur(6px)", transition: { duration: 0.24, ease: EASE_IN } }
            }
          >
            {word}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}
