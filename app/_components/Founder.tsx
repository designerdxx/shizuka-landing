import Image from "next/image";
import { founder, routes } from "../content";
import { asset } from "../asset";

export function Founder() {
  return (
    <section id="about" aria-label="From our founder" className="on-dark relative h-[640px] overflow-hidden bg-[#2f2a26] text-white md:h-[560px]">
      <Image
        src={asset("/images/founder-portrait.jpg")}
        alt={founder.imageAlt}
        fill
        sizes="100vw"
        className="object-cover object-[50%_0%] md:hidden"
      />
      <Image
        src={asset("/images/founder-band.jpg")}
        alt={founder.imageAlt}
        fill
        sizes="100vw"
        className="hidden object-cover object-[30%_30%] md:block"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_30%,rgba(0,0,0,.55)_58%,rgba(0,0,0,.8)_100%)] md:bg-[linear-gradient(270deg,rgba(0,0,0,.8)_1.7%,rgba(0,0,0,.34)_38.6%,rgba(0,0,0,0)_60.3%)]"
      />
      <div className="wrap relative flex h-full items-end justify-center pb-10 md:items-center md:justify-end md:pb-0">
        <figure data-reveal className="flex w-full flex-col items-center gap-4 text-center md:w-[min(651px,52%)]">
          <blockquote className="flex flex-col items-center gap-4">
            <p className="font-serif text-[32px] leading-[1.15] italic md:text-[clamp(28px,2.8vw,42px)]">{founder.quote}</p>
            <p className="max-w-[44ch] text-sm leading-[1.55] text-white/90">{founder.continuation}</p>
          </blockquote>
          <figcaption className="text-xs font-semibold tracking-[0.05em] uppercase">{founder.attribution}</figcaption>
          <a href={routes.about} className="btn btn-light mt-2">
            {founder.cta}
          </a>
        </figure>
      </div>
    </section>
  );
}
