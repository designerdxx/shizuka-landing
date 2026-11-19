# Shizuka Luxury: landing page

The public landing page for Shizuka Luxury, built from the client's Figma file (`ioQoXcHKzJYQPAtra9altf`, homepage node `392:8842`) and the approved design canvas.

Stack: Next.js 16 (App Router), Tailwind CSS v4, Motion, `next/font` (Newsreader + DM Sans), `next/image`.

## Live preview

https://designerdxx.github.io/shizuka-landing/ (add `?intro` to replay the intro)

Every push to `main` rebuilds and redeploys it through GitHub Actions (`.github/workflows/deploy.yml`). The workflow sets `NEXT_PUBLIC_BASE_PATH` to the repository name, because Pages serves the site from `/<repo>/`.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000. Production: `npm run build && npm start`.

## Environment

Copy `env.example` to `.env.local` and fill in:

| Variable | What it does |
| --- | --- |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Every "Message us" button opens WhatsApp with a pre-filled message. Digits only, international format. Until it is set, the buttons scroll to the contact details in the footer. |
| `NEXT_PUBLIC_SITE_URL` | Absolute site URL, used for the Open Graph image. |
| `NEXT_PUBLIC_LINKEDIN_URL`, `NEXT_PUBLIC_INSTAGRAM_URL` | Footer social links. |

## Editing copy

All text lives in `app/content.ts`. Sections are in `app/_components/`, one file each. Motion and stateful styles (buttons, header, menu, reveals) are in `app/globals.css`.

## Motion: "the hush"

Only one thing moves prominently at a time and nothing bounces.

- **Intro (once per session):** an espresso curtain with the wordmark covers the page, then slides up once the hero photo is ready (between 0.9s and 1.6s). It's skipped on repeat visits in the same tab, for reduced motion, and without JavaScript. To see it again in the same tab, open the page with `?intro` (e.g. http://localhost:3000/?intro). The timings are at the top of `app/_components/Intro.tsx`.
- **Load:** the hero photo settles from 1.06 to 1 over 1.8s while the headline lines slide up from a mask, then the subline, button and stats fade in.
- **Rotating word:** handbags → watches → jewellery every 3.2s. It pauses when the tab is hidden or the hero is off-screen.
- **Header:** hides on scroll down and comes back solid white on scroll up.
- **Sections:** reveal once as you scroll. Lists stagger 40ms, category photos unmask from the bottom, and the process line draws across.
- **Hover and press:** buttons get a borderless fill wipe (280ms in, 200ms out) and press to 0.98.
- **Reduced motion:** honoured everywhere. Fades only, with no movement or blur.

The motion was audited against the 12 principles of animation: clicks and hovers respond within 300ms, entrances ease out, exits ease in, staggers are 50ms or less, and the mobile menu dims the page behind it.

## Still needed from the client before launch

- WhatsApp number and the exact pre-filled message.
- **Real testimonials.** The three review cards are labelled placeholders and there are no star ratings. Don't ship invented reviews. Keep the "Glowing reviews from happy clients." heading only once real reviews exist.
- Office address, phone number, LinkedIn and Instagram URLs (the footer shows placeholders).
- What the "72 hours" claim is subject to (the Figma has an asterisk with no footnote).
- Confirmation that the chauffeur photo can be used. Its Figma layer is named `Gemini_Generated_Image`, which suggests it is AI-generated.

## Pages linked from here that don't exist yet

These routes are linked but not built: `/how-it-works`, `/about`, `/faqs`, `/contact`, `/privacy`, `/terms`, `/categories/jewellery`, `/categories/watches`, `/categories/handbags`.

What's missing in the Figma file itself:
- The Contact page frame is a copy of FAQ.
- The FAQ questions are placeholders.
- There are no mobile designs for the Watches, Jewellery or Contact pages.
- The form flow (thank-you page, review/edit step, errors) exists only as sticky notes.
- There are no designs for Privacy, Terms, a 404 page or the Authentication page.
