// ============================================================
// VECUBE — central content source.
// Edit copy here; components read from these exports.
// ============================================================

export const site = {
  name: "Vecube",
  email: "hello@vecube.club",
  location: "LDN",
  tagline: "Smarter paid media for global ecommerce.",
};

export const nav: { label: string; href: string }[] = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/#work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const hero = {
  kicker: "Paid media studio · Global ecommerce",
  issue: "Issue 01",
  // headline is rendered in parts so we can colour the middle line
  lineOne: "Smarter",
  lineAccent: "paid media",
  lineTwo: "for global ecommerce.",
  blurb:
    "We build, run and scale performance campaigns for ambitious ecommerce brands — creative, media and data under one roof.",
  sticker: "We're a small team!",
};

export const clients: string[] = [
  "PANGAIA",
  "HUEL",
  "ALPECIN",
  "OSLO SKIN",
  "PRAI",
  "TIDE",
  "MAKE WAVES",
  "WHO GIVES A CRAP",
];

export type ServiceGroup = {
  num: string;
  name: string;
  blurb: string;
  items: string[];
};

export const services: ServiceGroup[] = [
  {
    num: "01",
    name: "Brand",
    blurb:
      "Identity, story and assets that make ambitious brands impossible to ignore.",
    items: [
      "Branding & rebranding",
      "Packaging & print",
      "Social media management",
      "Copywriting & content strategy",
      "Production & post-production",
      "Campaign planning & rollout",
      "Design & creative assets",
    ],
  },
  {
    num: "02",
    name: "Media",
    blurb:
      "Full-funnel performance and lifecycle marketing that turns spend into predictable growth.",
    items: [
      "Performance marketing",
      "Ecommerce & marketplace growth",
      "Influencer partnerships",
      "Media planning & buying",
      "CRM & lifecycle marketing",
      "Martech, automation & first-party data",
      "Analytics, attribution & reporting",
    ],
  },
  {
    num: "03",
    name: "Dev",
    blurb:
      "The engineering behind the growth — sites, apps, platforms and the tools that run them.",
    items: [
      "Full-stack development & automation",
      "Web & app design / development",
      "UI/UX design",
      "Ecommerce platforms",
      "Internal tools, portals & dashboards",
      "CRM & workflow systems",
    ],
  },
  {
    num: "04",
    name: "Venture",
    blurb:
      "Strategy for founders and operators — from GTM and product-market fit to pricing and P&L.",
    items: [
      "GTM strategy & launch",
      "New product development support",
      "Product-market fit testing",
      "New market & category entry",
      "Pricing & portfolio architecture",
      "Unit economics & P&L modelling",
      "Channel strategy (BTL, D2C, marketplace, retail, quick commerce)",
    ],
  },
];

export type CaseStudy = {
  stat: string;
  statLabel: string;
  name: string;
  desc: string;
  tags: string[];
  // optional media, drop files into /public/images
  image?: string;
};

export const work: CaseStudy[] = [
  {
    stat: "400%",
    statLabel: "YoY new customer revenue",
    name: "Free Soul",
    desc: "Keeping Free Soul ahead.",
    tags: ["Performance", "Data", "Creative"],
  },
  {
    stat: "29%",
    statLabel: "Efficiency growth",
    name: "Chilly's",
    desc: "Revival of a sustainable icon.",
    tags: ["Creative", "Performance", "Data"],
  },
  {
    stat: "144",
    statLabel: "Assets · 1 shoot day",
    name: "Gorillas",
    desc: "High-performing ad creative at scale.",
    tags: ["Creative"],
  },
];

export const leadMagnet = {
  sticker: "Free growth teardown",
  title: "Your paid media spend isn't growing your business.",
  titleAccent: "Here's how to fix it.",
  blurb:
    "Grab the deck from our recent teardown on how leading ecommerce brands optimise paid media for real growth.",
  cta: "Download the deck",
};

export const founder = {
  name: "Mahdi Shafiei",
  role: "Founder, Vecube",
  message: "Let's talk about your growth.",
  cta: "Book a call",
};
