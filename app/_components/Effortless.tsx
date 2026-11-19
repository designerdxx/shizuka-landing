import Image from "next/image";
import type { CSSProperties } from "react";
import { effortless, messageHref } from "../content";
import { asset } from "../asset";

export function Effortless() {
  return (
    <section aria-labelledby="effortless-heading" className="grid md:min-h-[640px] md:grid-cols-2 md:items-center">
      <div className="px-(--gutter) pt-10 pb-[72px] md:max-w-[620px] md:py-24">
        <h2 id="effortless-heading" data-reveal className="font-serif text-[clamp(38px,4.7vw,68px)] leading-[1.05]">
          {effortless.heading.lead}
          <br />
          <em className="italic">{effortless.heading.emphasis}</em>
        </h2>
        <div data-reveal style={{ "--d": "40ms" } as CSSProperties}>
          <p className="mt-6 max-w-[52ch] text-[15px] leading-[1.6]">{effortless.body}</p>
          <p className="mt-6 mb-8 text-[15px] leading-[1.6]">{effortless.closer}</p>
          <a href={messageHref} className="btn btn-dark">
            {effortless.cta}
          </a>
        </div>
      </div>
      <div className="relative -order-1 h-[380px] overflow-hidden md:order-none md:h-full md:min-h-[640px]">
        <Image
          src={asset("/images/chauffeur-crop.jpg")}
          alt={effortless.imageAlt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover object-[50%_30%]"
        />
      </div>
    </section>
  );
}
