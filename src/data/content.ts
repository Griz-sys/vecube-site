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

export const workMeta = {
  tag: "Selected work",
  headline: "Our work.",
  line: "Less what we made. More what we moved.",
  cta: "View all case studies",
};

export type CaseStudy = {
  name: string;
  desc: string; // "what moved", in one line — lead with the client's change
  result?: string; // verified result, shown in blue (numbers only)
  tags: string[];
  // drop the logo/case image into /public/images/work/ with this path
  image?: string;
  // brand colour used for the placeholder tile until the image is added
  color?: string;
  // set true when the placeholder colour is light (dark text)
  light?: boolean;
};

// ordered by proof strength
export const work: CaseStudy[] = [
  {
    name: "Amara",
    tags: ["Brand", "Ecommerce", "Media"],
    desc: "Taking a heritage dessert brand into its next chapter.",
    result: "[Verified result]",
    image: "/images/work/amara.avif",
    color: "#7a1f3d",
  },
  {
    name: "Leverage Edu",
    tags: ["Dev", "Platform"],
    desc: "[One line — what moved]",
    result: "[Verified result]",
    image: "/images/work/leverage-edu.avif",
    color: "#eef2fb",
    light: true,
  },
  {
    name: "FitPaisa",
    tags: ["Brand", "Dev", "Media"],
    desc: "[One line — what moved]",
    result: "[Verified result]",
    image: "/images/work/fitpaisa.avif",
    color: "#16305c",
  },
  {
    name: "The Wedding Company",
    tags: ["Brand", "Content"],
    desc: "[One line — what moved]",
    result: "[Verified result]",
    image: "/images/work/the-wedding-company.avif",
    color: "#c39a4f",
  },
  {
    name: "Global Mobility Services",
    tags: ["Brand", "Dev"],
    desc: "[One line — what moved]",
    result: "[Verified result]",
    image: "/images/work/gms.avif",
    color: "#4a9e46",
  },
  {
    name: "Expatria",
    tags: ["Brand", "Media"],
    desc: "[One line — what moved]",
    result: "[Verified result]",
    color: "#2b2f45",
  },
];

export const midCta = {
  headline: "You don't need another agency deck.",
  line: "You need the right people in the room. We'll tell you honestly if we can help.",
  cta: "Start a conversation",
};

export const leadMagnet = {
  sticker: "Free teardown",
  tag: "The Vecube Teardown",
  headline1: "Before you spend more,",
  headline2: "find out where it's leaking.",
  line: "A practical self-audit across brand, acquisition, retention and tech. Find the real bottleneck in one sitting.",
  cta: "Get the teardown",
  micro: "We only write when it's worth reading.",
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

export const goodFit = {
  tag: "Good fit",
  headline: "You'll probably enjoy working with us if…",
  bigLabel: "The big one",
  closing: "Sound like you? We'd love to hear what you're working on.",
  cta: "Start a conversation",
};

export const fitItems: { num: string; text: string }[] = [
  { num: "01", text: "You'd rather have one team than five vendors." },
  { num: "02", text: "You appreciate honest advice, even when it challenges the brief." },
  { num: "03", text: "You value a long-term partner over a quick deliverable." },
  { num: "04", text: "You believe the right team matters more than the cheapest quote." },
  { num: "05", text: "You care more about what moves than how much gets made." },
  { num: "06", text: "You don't need your team down the road, just on the same page." },
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
