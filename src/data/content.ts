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
  { label: "How we work", href: "/#how-we-work" },
  { label: "Contact", href: "/contact" },
];

export const hero = {
  // hidden H1 for SEO/accessibility (banner art carries the visible brand name)
  h1: "Vecube: strategy, brand, media and technology, built around the problem",
  // small tag, top-left (blue dot)
  kicker: "One team for strategy, brand, media & tech",
  // lime sticker, top-right — the one spot on the banner meant to be read
  sticker: "Fix the cause. Not the symptom.",
  // primary action, bottom-right (lower commitment than "start a project")
  ctaPrimary: "Tell us what's stuck",
  ctaSecondary: "See our work",
  imageAlt:
    "The Vecube team surrounded by the tools of brand, media and technology work",
};

export const clients: string[] = [
  "Amara",
  "Leverage Edu",
  "FitPaisa",
  "The Wedding Company",
  "GMS",
  "Expatria",
  "MK's",
  "EMS",
];

export type ServiceGroup = {
  num: string;
  name: string;
  blurb: string;
  items: string[]; // full list, used on the detailed /services page
  tags?: string[]; // short set, used on the homepage tabs
  href?: string; // "Explore …" link target
  image?: string;
};

export const services: ServiceGroup[] = [
  {
    num: "01",
    name: "Brand",
    image: "/images/services/brand.avif",
    href: "/services#brand",
    blurb:
      "Positioning, identity and campaigns that give people a reason to choose you.",
    tags: ["Brand strategy", "Identity", "Campaigns", "Social & content", "Packaging"],
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
    image: "/images/services/media.avif",
    href: "/services#media",
    blurb: "Media judged on what it earns, not what it reaches.",
    tags: ["Performance", "Paid search & social", "Marketplaces", "CRM & lifecycle", "Analytics"],
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
    image: "/images/services/dev.avif",
    href: "/services#dev",
    blurb: "The websites, apps and systems the next stage needs.",
    tags: ["Websites", "Ecommerce", "Apps", "CRM", "Custom platforms"],
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
    image: "/images/services/venture.avif",
    href: "/services#venture",
    blurb:
      "For the decisions before the brief: new markets, launches and what comes next.",
    tags: ["GTM", "Market entry", "Product-market fit", "Research", "Launch strategy"],
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
  name: string;
  role?: string; // short "what we did" line
  desc: string;
  tags: string[];
  // drop the logo/case image into /public/images/work/ with this path
  image?: string;
  // brand colour used for the placeholder tile until the image is added
  color?: string;
  // set false when the placeholder colour is light (dark text)
  light?: boolean;
  soon?: boolean;
};

export const work: CaseStudy[] = [
  {
    name: "Amara",
    role: "Brand, Assets & Socials",
    desc: "Boosting customer engagement through social media.",
    tags: ["Performance Marketing", "Branding"],
    image: "/images/work/amara.avif",
    color: "#7a1f3d",
  },
  {
    name: "TrackEdu",
    role: "Service & Lead Operations Platform",
    desc: "An operations portal: role-based lead management, built for clarity at scale.",
    tags: ["Development"],
    image: "/images/work/trackedu.avif",
    color: "#0b1b3a",
  },
  {
    name: "FitPaisa",
    role: "Design & Ads",
    desc: "Launching FitPaisa's MVP from the ground up — branding, website, onboarding and referral tools.",
    tags: ["Branding", "Performance Marketing", "Web design", "Development"],
    image: "/images/work/fitpaisa.avif",
    color: "#16305c",
  },
  {
    name: "The Wedding Company",
    role: "Design",
    desc: "Rebranding TWC as weddings experts and designing their hero products.",
    tags: ["Branding", "Web design"],
    image: "/images/work/the-wedding-company.avif",
    color: "#c39a4f",
  },
  {
    name: "Global Mobility Services",
    desc: "Coming soon.",
    tags: ["Web design", "Branding", "Development"],
    image: "/images/work/gms.avif",
    color: "#4a9e46",
    soon: true,
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
  hook: "Can't quite name the problem yet? That's the best time to talk.",
  // TODO: replace with a real Vecube co-founder's name (strong trust signal)
  name: "[Founder name]",
  intro: "co-founder of Vecube. Bring us the messy version.",
  cta: "Book a call",
};

export const problemsMeta = {
  tag: "Where it hurts",
  headline: "What's not moving?",
  intro: "Pick the one that sounds familiar. We'll show you where we'd start.",
  // TODO: confirm Vecube actually offers this before launch
  sticker: "Free 30-min diagnosis",
  label1: "What's usually behind it",
  label2: "Where we'd start",
  ctaPrimary: "Talk to us about this",
  ctaSecondary: "Something else? Tell us.",
};

export const vecubeWay = {
  tag: "The Vecube way",
  headlinePre: "No prescription before",
  headlineAccent: "diagnosis.",
  sub: "Most agencies sell the service they have. We start with the one you need.",
  rxHeader: "The usual quick fixes",
  rxItems: ["More ad spend", "A new website", "Another rebrand", "More content"],
  rxFooter: "Diagnose first.",
  rxBrand: "Vecube",
  startHere: "Start here",
  loop: "Learn. Repeat.",
};

export type WayStep = { num: string; step: string; line: string };

export const waySteps: WayStep[] = [
  { num: "01", step: "Diagnose", line: "Find what's really stuck." },
  { num: "02", step: "Prioritise", line: "Agree what matters first." },
  { num: "03", step: "Build", line: "Put the right people on it." },
  { num: "04", step: "Test", line: "Get it live. Read the signal." },
  { num: "05", step: "Scale", line: "Back what works." },
];

export type Problem = {
  tile: string;
  behind: string;
  start: string[];
};

export const problems: Problem[] = [
  {
    tile: "Growth has stalled",
    behind:
      "What got you here has stopped working. The next jump usually needs something new: an audience, a market, a product or a price point.",
    start: ["Growth audit", "New audiences", "Pricing & range"],
  },
  {
    tile: "Customers cost too much",
    behind:
      "Rising acquisition costs rarely sit in media alone. Tired creative, a blurry proposition or a leaky website often do more damage.",
    start: ["Proposition", "Creative", "Funnel"],
  },
  {
    tile: "Entering a new market",
    behind:
      "New market, new rules. Who buys, why they buy and what they will pay all need checking before the budget goes in.",
    start: ["Market entry", "Local positioning", "GTM plan"],
  },
  {
    tile: "Launching something new",
    behind:
      "A launch can't outspend weak fit. Pressure-test who it's for and why they'd switch, then go loud.",
    start: ["Audience", "Proposition", "Launch plan"],
  },
  {
    tile: "Brand isn't cutting through",
    behind:
      "People remember brands that stay consistent long enough to stick. Clarity usually beats volume.",
    start: ["Positioning", "Identity", "Content system"],
  },
  {
    tile: "Tech & data are holding us back",
    behind:
      "A slow site, a CRM nobody trusts, data in five places. The plumbing decides how far the marketing can go.",
    start: ["Website", "CRM", "Data setup"],
  },
];

export const contactCta = {
  kicker: "Contact us",
  heading: "Let's bring your vision to life",
  blurb: "Have an idea or a question? Reach out anytime. We're excited to collaborate.",
};

export const footer = {
  newsletterHeading: "Stay connected",
  phone: "+91 99995 03168",
  emails: [
    "shubhankar@vecube.club",
    "vedanshi@vecube.club",
    "saksham@vecube.club",
  ],
  about:
    "Vecube is a partnership studio designed to be the operational backbone for early-stage startups.",
  links: [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/#work" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
};
