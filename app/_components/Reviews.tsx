"use client";

import { useState } from "react";
import { reviews } from "../content";

export function Reviews() {
  const [active, setActive] = useState(0);
  const last = reviews.items.length - 1;

  return (
    <section aria-labelledby="reviews-heading" className="bg-cream py-[72px] md:py-28">
      <div className="wrap">
        <div data-reveal className="md:mx-auto md:max-w-[1200px] md:text-center">
          <h2 id="reviews-heading" className="font-serif text-[clamp(38px,4.7vw,68px)] leading-[1.05]">
            {reviews.heading}
          </h2>
          <p className="mt-4 text-[15px] leading-[1.6]">{reviews.sub}</p>
        </div>

        <div className="mt-10 md:mt-16 md:grid md:grid-cols-3 md:gap-10" aria-live="polite">
          {reviews.items.map((review, i) => (
            <figure
              key={i}
              data-reveal
              className={`${i === active ? "block" : "hidden"} motion-safe:animate-[fade-in_240ms_var(--ease-out-expo)] md:block md:animate-none`}
            >
              <span aria-hidden="true" className="block h-[30px] font-serif text-[64px] leading-[0.6] text-espresso">
                “
              </span>
              <blockquote className="mt-3 mb-5 text-[15px] leading-[1.6] text-muted italic">{review.quote}</blockquote>
              <figcaption className="text-sm leading-normal text-muted">
                <b className="block font-bold text-black">{review.name}</b>
                {review.item}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between text-[15px] md:hidden">
          <span>
            {active + 1} / {reviews.items.length}
          </span>
          <div className="-mr-2.5 flex gap-2">
            <button
              type="button"
              aria-label="Previous review"
              disabled={active === 0}
              onClick={() => setActive((i) => Math.max(0, i - 1))}
              className="inline-flex size-11 cursor-pointer items-center justify-center transition-[opacity,transform] duration-200 ease-std active:scale-95 disabled:cursor-default disabled:opacity-30"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M20 12H4M10 6l-6 6 6 6" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next review"
              disabled={active === last}
              onClick={() => setActive((i) => Math.min(last, i + 1))}
              className="inline-flex size-11 cursor-pointer items-center justify-center transition-[opacity,transform] duration-200 ease-std active:scale-95 disabled:cursor-default disabled:opacity-30"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M4 12h16M14 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
