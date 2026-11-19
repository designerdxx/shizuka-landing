import type { CSSProperties } from "react";
import { routes, transparency } from "../content";

export function Transparency() {
  return (
    <section aria-labelledby="transparency-heading" className="bg-sand text-ink">
      <div className="wrap flex flex-col items-start gap-7 py-16 md:flex-row md:items-center md:justify-between md:gap-10 md:py-[72px]">
        <div data-reveal>
          <h2 id="transparency-heading" className="font-serif text-[clamp(38px,4.7vw,68px)] leading-[1.05]">
            {transparency.heading}
          </h2>
          <p className="mt-3 text-[15px] leading-[1.6]">{transparency.body}</p>
        </div>
        <a href={routes.faqs} data-reveal className="btn btn-ink shrink-0" style={{ "--d": "40ms" } as CSSProperties}>
          {transparency.cta}
        </a>
      </div>
    </section>
  );
}
