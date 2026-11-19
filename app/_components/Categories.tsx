"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { categories } from "../content";
import { RowProgressBar, useRowProgress } from "./RowProgress";

export function Categories() {
  const { ref: rowRef, progress, onScroll } = useRowProgress<HTMLUListElement>();
  return (
    <section id="buy" aria-labelledby="buy-heading" className="pb-[72px] md:pb-28">
      <div className="wrap">
        <h2 id="buy-heading" data-reveal className="font-serif text-[clamp(34px,3.6vw,52px)] leading-[1.08]">
          {categories.heading}
        </h2>
        <ul ref={rowRef} onScroll={onScroll} className="snap-row mx-[calc(var(--gutter)*-1)] mt-6 grid auto-cols-[68%] grid-flow-col gap-3 overflow-x-auto px-(--gutter) md:mx-0 md:mt-10 md:grid-flow-row md:grid-cols-3 md:gap-2 md:overflow-visible md:px-0">
          {categories.items.map((item, i) => (
            <li key={item.label} className="snap-start">
              <a
                href={item.href}
                data-reveal
                className="cat block"
                style={{ "--d": `${i * 40}ms` } as CSSProperties}
              >
                <div className="cat-media relative aspect-square overflow-hidden bg-[#e9e2d8]" style={{ "--d": `${i * 40}ms` } as CSSProperties}>
                  <Image src={item.src} alt="" fill sizes="(min-width: 768px) 33vw, 68vw" className="object-cover" />
                </div>
                <span className="mt-4 flex items-center gap-2.5 text-lg">
                  {item.label}
                  <svg className="cat-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true">
                    <path d="M2 8h12M9.5 3.5 14 8l-4.5 4.5" />
                  </svg>
                </span>
              </a>
            </li>
          ))}
        </ul>
        <RowProgressBar progress={progress} />
      </div>
    </section>
  );
}
