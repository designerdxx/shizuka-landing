"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { categories, menu, messageHref, nav } from "../content";
import { asset } from "../asset";

type HeaderState = "top" | "solid" | "hidden";

export function Header() {
  const [state, setState] = useState<HeaderState>("top");
  const [menuOpen, setMenuOpen] = useState(false);
  const [buyOpen, setBuyOpen] = useState(false);
  const lastY = useRef(0);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const { scrollY } = useScroll();

  // Transparent at the top, hides on scroll down, returns solid on scroll up (6px hysteresis).
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = lastY.current;
    lastY.current = y;
    if (y < 40) return setState("top");
    if (y > prev + 6 && y > 240) return setState("hidden");
    if (y < prev - 6) setState("solid");
  });

  // A reload mid-page starts with the solid header rather than a transparent one over content.
  useEffect(() => {
    lastY.current = scrollY.get();
    if (lastY.current >= 40) setState("solid");
  }, [scrollY]);

  useEffect(() => {
    if (!menuOpen) return;
    firstLinkRef.current?.focus({ preventScroll: true });
    // The menu covers the screen, so the page behind it must not scroll.
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setMenuOpen(false);
      burgerRef.current?.focus({ preventScroll: true });
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      root.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  const close = () => {
    setMenuOpen(false);
    setBuyOpen(false);
  };

  return (
    <header className="site-header" data-state={state} data-menu={menuOpen ? "open" : "closed"}>
      <div className="wrap relative flex h-full items-center justify-between gap-6">
        <a href="#top" className="relative block h-[34px] w-[101px] shrink-0" aria-label="Shizuka Luxury, home">
          <Image src={asset("/images/logo-light.svg")} alt="" width={101} height={34} className="logo-light absolute inset-0 transition-opacity duration-200" preload />
          <Image src={asset("/images/logo-dark.svg")} alt="" width={101} height={34} className="logo-dark absolute inset-0 transition-opacity duration-200" />
        </a>

        <nav aria-label="Primary" className="absolute left-1/2 hidden -translate-x-1/2 gap-10 md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="nav-link text-xs font-semibold uppercase tracking-[0.05em]">
              {item.label}
            </a>
          ))}
        </nav>

        <a href={messageHref} className="btn btn-light cta-top hidden md:inline-flex">
          Message us
        </a>

        <button
          ref={burgerRef}
          type="button"
          className="-mr-2.5 inline-flex size-11 cursor-pointer items-center justify-center transition-transform duration-[120ms] ease-std active:scale-95 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          onClick={() => (menuOpen ? close() : setMenuOpen(true))}
        >
          <span className="burger-lines" aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
      </div>

      <div id="site-menu" className="menu-panel md:hidden" inert={!menuOpen}>
        <nav aria-label="Menu" className="flex flex-col gap-4">
          {nav.map((item, i) =>
            item.href === "#buy" ? (
              <div key={item.href}>
                <button
                  type="button"
                  aria-expanded={buyOpen}
                  aria-controls="menu-buy"
                  onClick={() => setBuyOpen((open) => !open)}
                  className="menu-link flex min-h-12 w-full cursor-pointer items-center justify-between text-left font-serif text-[32px] leading-[1.25]"
                  style={{ "--i": i } as CSSProperties}
                >
                  {item.label}
                  <svg className="submenu-chevron shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="m2.5 5.5 5.5 5.5 5.5-5.5" />
                  </svg>
                </button>
                <div id="menu-buy" className="submenu" data-open={buyOpen}>
                  <ul className="pl-4" inert={!buyOpen}>
                    {categories.items.map((cat) => (
                      <li key={cat.href}>
                        <a href={cat.href} onClick={close} className="flex min-h-11 items-center text-base">
                          {cat.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <a
                key={item.href}
                ref={i === 0 ? firstLinkRef : undefined}
                href={item.href}
                onClick={close}
                className="menu-link flex min-h-12 items-center font-serif text-[32px] leading-[1.25]"
                style={{ "--i": i } as CSSProperties}
              >
                {item.label}
              </a>
            ),
          )}
        </nav>

        <div className="menu-link mt-auto pt-10" style={{ "--i": nav.length } as CSSProperties}>
          <p className="max-w-[30ch] text-base text-espresso">{menu.note}</p>
          <a href={messageHref} onClick={close} className="btn btn-dark mt-4">
            {menu.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
