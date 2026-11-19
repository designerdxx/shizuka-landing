import Image from "next/image";
import type { CSSProperties } from "react";
import { hero } from "../content";
import { RotatingWord } from "./RotatingWord";
import { asset } from "../asset";

const delay = (i: number) => ({ "--i": i }) as CSSProperties;

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="on-dark relative h-[720px] overflow-hidden bg-[#3a2f28] text-white md:h-[820px]">
      <div className="hero-media absolute inset-0">
        <Image
          src={asset("/images/hero.jpg")}
          alt=""
          fill
          preload
          sizes="100vw"
          className="object-cover object-[70%_50%] md:object-[62%_50%]"
        />
      </div>
      {/* Scrim: left-weighted on desktop, top/bottom on phones, plus a soft band behind the nav. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.42)_0,rgba(0,0,0,.35)_45%,rgba(0,0,0,.5)_100%)] md:bg-[linear-gradient(90deg,rgba(0,0,0,.6)_1.6%,rgba(0,0,0,.45)_39.5%,rgba(0,0,0,0)_70.5%),linear-gradient(180deg,rgba(0,0,0,.28)_0,rgba(0,0,0,0)_180px)]"
      />

      <div className="wrap relative flex h-full flex-col pt-[136px] pb-8 md:pt-[270px] md:pb-11">
        <h1 id="hero-heading" className="font-serif text-[clamp(44px,4.7vw,68px)] leading-[1.04] tracking-[-0.01em]">
          <span className="sr-only">{hero.srHeading}</span>
          <span aria-hidden="true">
            <span className="line-mask" style={delay(0)}>
              <span>
                {hero.lead} <RotatingWord words={hero.words} />
              </span>
            </span>
            <span className="line-mask" style={delay(1)}>
              <span>{hero.tail}</span>
            </span>
          </span>
        </h1>

        <p className="rise mt-4 mb-7 max-w-[36em] text-[15px] leading-normal text-white md:mt-5 md:mb-8 md:text-base" style={delay(2)}>
          {hero.sub[0]}
          <br className="hidden md:inline" /> {hero.sub[1]}
        </p>

        <div className="rise" style={delay(3)}>
          <a href="#how" className="btn btn-light">
            {hero.cta}
          </a>
        </div>

        <dl className="rise mt-auto flex gap-8 md:gap-20" style={delay(4)}>
          {hero.stats.map((stat) => (
            <div key={stat.value} className="flex flex-col-reverse">
              <dt className="text-base md:text-lg">{stat.label}</dt>
              <dd className="text-[28px] leading-[1.15] font-semibold tracking-[-0.01em] md:text-[32px]">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
