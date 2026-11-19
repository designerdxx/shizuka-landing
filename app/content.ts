import { asset } from "./asset";
// All page copy lives here so it can be edited without touching layout code.
// Bracketed values are placeholders the client still needs to supply.

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");
const whatsappText = "Hello Shizuka, I'd like a valuation for my ";

/** WhatsApp deep link for every "Message us" action; falls back to the contact section until a number is set. */
export const messageHref = whatsappNumber
  ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`
  : "#contact";

export const routes = {
  howItWorks: "/how-it-works",
  about: "/about",
  faqs: "/faqs",
  contact: "/contact",
  privacy: "/privacy",
  terms: "/terms",
  jewellery: "/categories/jewellery",
  watches: "/categories/watches",
  handbags: "/categories/handbags",
} as const;

export const nav = [
  { label: "How it works", href: "#how" },
  { label: "What we buy", href: "#buy" },
  { label: "About us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// Mobile menu footer (Figma 445:1523). "Whastapp" in the Figma file is a typo.
export const menu = {
  note: "Message for a fast and free valuation on your item.",
  cta: "WhatsApp us",
};

export const hero = {
  lead: "Sell your",
  words: ["handbags", "watches", "jewellery"],
  tail: "Fast.",
  srHeading: "Sell your handbags, watches and jewellery. Fast.",
  sub: [
    "Get cash for your luxury pieces within 72 hours.",
    "Shizuka collects, authenticates, and gathers private offers on your behalf.",
  ],
  cta: "How it works",
  stats: [
    { value: "72 hours", label: "turnaround" },
    { value: "40+ years", label: "experience" },
  ],
};

export const howItWorks = {
  heading: "How it works",
  cta: "See the full process",
  steps: [
    {
      n: "01",
      title: "Request a valuation",
      body: "Send photos and details of your item on WhatsApp or through our online form. We’ll reply with a valuation range, subject to authentication.",
    },
    {
      n: "02",
      title: "Collect & authenticate",
      body: "We’ll arrange white-glove collection of your items and authenticate them in‑house.",
    },
    {
      n: "03",
      title: "Offers from our buyer network",
      body: "Once your item is authenticated, we invite offers from our network of professional buyers to get you a competitive price in today’s market.",
    },
    {
      n: "04",
      title: "Accept the proposal",
      body: "If you’re happy with the best offer, accept it and the funds reach your account within 48 hours.",
    },
  ],
};

export const categories = {
  heading: "We buy your:",
  items: [
    { label: "Jewellery", href: routes.jewellery, src: asset("/images/cat-jewellery-sq.jpg") },
    { label: "Watches", href: routes.watches, src: asset("/images/cat-watches-sq.jpg") },
    { label: "Handbags", href: routes.handbags, src: asset("/images/cat-bags-sq.jpg") },
  ],
};

export const founder = {
  quote: "“Shizuka was created because I saw the need for a quick, discreet trading platform…",
  continuation:
    "…perfect for my clients who wish to maintain their privacy and release funds at the moment they’re needed.”",
  attribution: "Shivam Agarwal, Founder & CEO",
  cta: "About us",
  imageAlt: "Shivam Agarwal, founder and CEO of Shizuka Luxury",
};

export const effortless = {
  heading: { lead: "Selling can be", emphasis: "effortless" },
  body: "No long wait for a sale. No post-sale complaints. No need to carry your items from one place to another. Your luxury pieces are collected by a chauffeur in white gloves and safely stored while your account manager gathers bids from our competitive buying network.",
  closer: "It couldn’t be simpler.",
  cta: "Get a free valuation",
  imageAlt: "A Shizuka chauffeur in a dark suit waiting beside a black car",
};

// PLACEHOLDERS: replace with real, approved client reviews before launch.
// The heading below should stay only once real reviews exist.
export const reviews = {
  heading: "Glowing reviews from happy clients.",
  sub: "Try Shizuka for your next luxury resale and discover why clients trust us.",
  items: [
    { quote: "[Client testimonial: two to three sentences, awaiting an approved review.]", name: "[First name, initial]", item: "[Item sold, e.g. watch]" },
    { quote: "[Client testimonial: two to three sentences, awaiting an approved review.]", name: "[First name, initial]", item: "[Item sold, e.g. handbag]" },
    { quote: "[Client testimonial: two to three sentences, awaiting an approved review.]", name: "[First name, initial]", item: "[Item sold, e.g. jewellery]" },
  ],
};

export const transparency = {
  heading: "Our process is transparent.",
  body: "Find out what we accept, what you’ll need to supply, and when you can change your mind.",
  cta: "Read the FAQs",
};

export const footer = {
  columns: [
    {
      title: "Categories",
      links: [
        { label: "Jewellery", href: routes.jewellery },
        { label: "Watches", href: routes.watches },
        { label: "Handbags", href: routes.handbags },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "How it works", href: routes.howItWorks },
        { label: "About us", href: routes.about },
        { label: "FAQs", href: routes.faqs },
        { label: "Contact", href: routes.contact },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy", href: routes.privacy },
        { label: "Terms & Conditions", href: routes.terms },
      ],
    },
  ],
  // PLACEHOLDERS: address, phone and social URLs come from the client.
  address: ["[Street address], DIFC", "Dubai, UAE", "+971 [phone number]"],
  socials: {
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "#",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "#",
  },
  copyright: `© ${new Date().getFullYear()} Shizuka Luxury. All rights reserved.`,
};
