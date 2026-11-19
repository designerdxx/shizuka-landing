"use client";

import type { CSSProperties } from "react";
import { howItWorks, routes } from "../content";
import { RowProgressBar, useRowProgress } from "./RowProgress";

export function Process() {
  const { ref: rowRef, progress, onScroll } = useRowProgress<HTMLOListElement>();

  return (
    <section id="how" aria-labelledby="how-heading" className="py-[72px] md:py-28">
      <div className="wrap">
        <h2 id="how-heading" data-reveal className="font-serif text-[clamp(34px,3.6vw,52px)] leading-[1.08] text-espresso">
          {howItWorks.heading}
        </h2>

        <div data-reveal aria-hidden="true" className="reveal-track relative mt-12 mb-10 hidden h-px bg-line md:block">
          <i />
        </div>

        <ol
          ref={rowRef}
          onScroll={onScroll}
          className="snap-row mx-[calc(var(--gutter)*-1)] mt-8 grid auto-cols-[78%] grid-flow-col gap-6 overflow-x-auto px-(--gutter) text-espresso md:mx-0 md:mt-0 md:grid-flow-row md:grid-cols-4 md:gap-x-[60px] md:gap-y-0 md:overflow-visible md:px-0"
        >
          {howItWorks.steps.map((step, i) => (
            <li
              key={step.n}
              data-reveal
              style={{ "--d": `${i * 40}ms` } as CSSProperties}
              className="snap-start md:row-span-3 md:grid md:grid-rows-subgrid"
            >
              <span className="mb-4 block font-serif text-2xl">{step.n}</span>
              <h3 className="mb-3 font-serif text-[30px] leading-[1.08] md:text-[32px]">{step.title}</h3>
              <p className="max-w-[30ch] text-[15px] leading-[1.6]">{step.body}</p>
            </li>
          ))}
        </ol>

        <RowProgressBar progress={progress} />

        <div className="mt-8 md:mt-14">
          <a href={routes.howItWorks} className="btn btn-dark">
            {howItWorks.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
