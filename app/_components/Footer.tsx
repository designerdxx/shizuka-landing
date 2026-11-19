import Image from "next/image";
import { footer } from "../content";
import { asset } from "../asset";

function LinkedInIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}

function Socials({ size }: { size?: number }) {
  return (
    <div className="-m-3 flex">
      <a href={footer.socials.linkedin} aria-label="Shizuka on LinkedIn" className="inline-flex size-11 items-center justify-center">
        <LinkedInIcon size={size} />
      </a>
      <a href={footer.socials.instagram} aria-label="Shizuka on Instagram" className="inline-flex size-11 items-center justify-center">
        <InstagramIcon size={size} />
      </a>
    </div>
  );
}

const heading = "text-xs font-semibold tracking-[0.05em] uppercase";
const linkClass = "hover:underline hover:underline-offset-[3px]";

function Chevron() {
  return (
    <svg className="acc-chevron" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="m4 7 6 6 6-6" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="pt-2 pb-8 md:pt-16 md:pb-10">
      <div className="wrap">
        {/* Desktop columns */}
        <div className="hidden grid-cols-[1.2fr_repeat(3,minmax(0,1fr))_1.2fr] gap-10 md:grid">
          <Image src={asset("/images/logo-dark.svg")} alt="Shizuka Luxury" width={101} height={34} />
          {footer.columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className={`${heading} mb-6`}>{col.title}</h2>
              <ul className="grid gap-3.5 text-sm">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className={linkClass}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          <div>
            <h2 className={`${heading} mb-6`}>Stay connected</h2>
            <div className="mb-10">
              <Socials />
            </div>
            <h2 className={`${heading} mb-6`}>Find &amp; contact us</h2>
            <address className="text-sm leading-[1.6] not-italic">
              {footer.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>
        </div>

        {/* Mobile accordion */}
        <div className="md:hidden">
          {footer.columns.map((col) => (
            <details key={col.title} className="acc border-b border-line">
              <summary className={`${heading} flex min-h-[52px] cursor-pointer list-none items-center justify-between`}>
                {col.title}
                <Chevron />
              </summary>
              <ul className="grid gap-3.5 pb-5 text-sm">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </details>
          ))}
          <details className="acc border-b border-line">
            <summary className={`${heading} flex min-h-[52px] cursor-pointer list-none items-center justify-between`}>
              Find &amp; contact us
              <Chevron />
            </summary>
            <address className="pb-5 text-sm leading-[1.6] not-italic">
              {footer.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </details>
          <div className={`${heading} flex min-h-14 items-center justify-between border-b border-line`}>
            Stay connected
            <Socials size={22} />
          </div>
          <Image src={asset("/images/logo-dark.svg")} alt="Shizuka Luxury" width={101} height={34} className="mt-8" />
        </div>

        <p className="mt-4 text-[13px] text-muted md:mt-14 md:border-t md:border-line md:pt-6">{footer.copyright}</p>
      </div>
    </footer>
  );
}
