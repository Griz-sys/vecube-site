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
  kicker: "Get in touch",
  heading: "What's standing between here and next?",
  line1: "Building from zero, entering a new market or planning the next chapter.",
  line2: "Start with the problem. We'll build around it.",
  formName: "Name",
  formEmail: "Work email",
  formMessage: "What's stuck? The messy version is fine.",
  cta: "Talk to Vecube",
};

export const footer = {
  brandLine: "Fix the cause. Not the symptom.",
  newsletterHeading: "Stay connected",
  emailLabel: "Email",
  phone: "+91 99995 03168",
  emails: [
    "shubhankar@vecube.club",
    "vedanshi@vecube.club",
    "saksham@vecube.club",
  ],
  about:
    "Vecube is a partnership studio designed to be the operational backbone for early-stage startups.",
  // TODO: replace [City / cities] with your real location(s)
  cities: "[City / cities]",
  links: [
    { label: "About", href: "/about" },
    { label: "Work", href: "/#work" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
};

/* ============================================================
   SERVICES PAGE
   ============================================================ */

export const servicesHero = {
  tag: "What we do",
  headlineMain: "Brand. Media. Tech. Strategy.",
  headlineAccent: "One team.",
  sticker: "Free 30-min audit",
  linePre: "Start with one service or bring in all four.",
  lineBold: "Either way, one team owns the plan, the work and the results.",
  cta: "Book a free 30-min audit",
};

export type SvcItem = { name: string; desc: string };
export type SvcGroup = { title?: string; items: SvcItem[] };

export type ServiceSection = {
  num: string;
  name: string; // BRAND, MEDIA, DEV, VENTURE
  label: string; // Branding, Ads & growth, ...
  anchor: string; // brand, media, dev, venture
  dark: boolean; // section theme
  headlinePre: string;
  headlineAccent: string; // coloured tail of the headline
  when: string[];
  cta: { label: string; href: string; style: "button" | "link" | "bar"; reply?: string };
  groups: SvcGroup[];
  proof: {
    label: string;
    client: string; // short name shown in the proof tile
    line: string;
    result: string;
    image?: string;
    color: string;
    light?: boolean; // proof tile has a light background (dark text)
  };
  worksWith: { links: { label: string; href: string }[]; line: string };
};

export const serviceSections: ServiceSection[] = [
  {
    num: "01",
    name: "Brand",
    label: "Branding",
    anchor: "brand",
    dark: false,
    headlinePre: "Be the brand people remember.",
    headlineAccent: "And the one they choose.",
    when: ["Launching a new brand", "Rebranding", "Entering a new market"],
    cta: { label: "Get a free brand audit", href: "/contact?service=Brand", style: "button" },
    groups: [
      {
        items: [
          { name: "Brand strategy", desc: "What you stand for, and why customers should choose you over the rest." },
          { name: "Logo & identity", desc: "A logo, look and voice that stay consistent everywhere you show up." },
          { name: "Campaigns", desc: "Big ideas that work across ads, social and the real world." },
          { name: "Social media & content", desc: "Content that keeps you visible and grows your audience, week after week." },
          { name: "Packaging", desc: "Packs that win attention on the shelf and on screen." },
          { name: "Photo & video", desc: "Shoots and films produced in-house, from concept to final cut." },
        ],
      },
    ],
    proof: {
      label: "Proof · Amara Desserts",
      client: "Amara",
      line: "Taking a heritage dessert brand into its next chapter.",
      result: "[Verified result]",
      image: "/images/work/amara.avif",
      color: "#7a1f3d",
    },
    worksWith: {
      links: [
        { label: "Media", href: "#media" },
        { label: "Dev", href: "#dev" },
      ],
      line: "Pair with Media to get seen, and Dev to bring it to life online.",
    },
  },
  {
    num: "02",
    name: "Media",
    label: "Ads & growth",
    anchor: "media",
    dark: true,
    headlinePre: "Ad spend that",
    headlineAccent: "earns its keep.",
    when: ["Ad costs going up", "Not sure what's working", "Customers not coming back"],
    cta: { label: "Get a free ad account audit", href: "/contact?service=Media", style: "link" },
    groups: [
      {
        items: [
          { name: "Media planning", desc: "A clear plan for where every rupee, pound or dollar goes, and why." },
          { name: "Google & Meta ads", desc: "Search and social campaigns built to convert, and optimised every week." },
          { name: "Ecommerce & marketplaces", desc: "More sales across your website, Amazon and other marketplaces." },
          { name: "Email, SMS & CRM", desc: "Turn first-time buyers into repeat customers." },
          { name: "Tracking & reporting", desc: "Clear numbers on what's making money, and what isn't." },
        ],
      },
    ],
    proof: {
      label: "Proof · [Client]",
      client: "[client]",
      line: "[What moved, in one line]",
      result: "[Verified result, e.g. ROAS or CAC change]",
      color: "#1f43ff",
    },
    worksWith: {
      links: [
        { label: "Brand", href: "#brand" },
        { label: "Dev", href: "#dev" },
      ],
      line: "Pair with Brand for ads worth watching, and Dev for a site that converts.",
    },
  },
  {
    num: "03",
    name: "Dev",
    label: "Web & apps",
    anchor: "dev",
    dark: false,
    headlinePre: "Websites and systems",
    headlineAccent: "built to sell, and to scale.",
    when: ["Website isn't bringing in sales", "Too much manual work", "Need a custom build"],
    cta: { label: "Get a project quote", href: "/contact?service=Dev", style: "bar", reply: "Reply in [48 hours]" },
    groups: [
      {
        title: "For your customers",
        items: [
          { name: "Websites", desc: "Fast, search-friendly sites that turn visitors into leads and sales." },
          { name: "Online stores", desc: "Ecommerce stores that make buying effortless." },
          { name: "Apps & UI/UX", desc: "Web and mobile apps people understand from the first tap." },
        ],
      },
      {
        title: "For your team",
        items: [
          { name: "CRM", desc: "Every lead and customer in one place, with nothing slipping through." },
          { name: "Business tools", desc: "HR, finance, inventory and project tools, built around how your team works." },
          { name: "Custom platforms", desc: "Built from the ground up when off-the-shelf won't do." },
        ],
      },
    ],
    proof: {
      label: "Proof · Leverage Edu",
      client: "leverage edu",
      line: "[What moved, in one line]",
      result: "[Verified result]",
      image: "/images/work/leverage-edu.avif",
      color: "#eef2fb",
      light: true,
    },
    worksWith: {
      links: [
        { label: "Media", href: "#media" },
        { label: "Brand", href: "#brand" },
      ],
      line: "Pair with Media to drive traffic, and Brand to make every page feel like you.",
    },
  },
  {
    num: "04",
    name: "Venture",
    label: "Strategy",
    anchor: "venture",
    dark: true,
    headlinePre: "Know your next move",
    headlineAccent: "before you fund it.",
    when: ["Entering a new market", "Launching a product", "Sales have plateaued"],
    cta: { label: "Book a free strategy call", href: "/contact?service=Venture", style: "bar" },
    groups: [
      {
        items: [
          { name: "Go-to-market strategy", desc: "Who to sell to, what to say and which channels to use first." },
          { name: "Market entry", desc: "A clear, tested plan for launching in a new country or category." },
          { name: "Product-market fit", desc: "Proof that people will buy, before you scale." },
          { name: "Customer research", desc: "What your customers actually want, straight from them." },
          { name: "Growth audit", desc: "What's holding growth back, and what to fix first." },
        ],
      },
    ],
    proof: {
      label: "Proof · [Expatria / GMS]",
      client: "Expatria",
      line: "[What moved, in one line]",
      result: "[Verified result]",
      color: "#2b2f45",
    },
    worksWith: {
      links: [{ label: "All three", href: "#brand" }],
      line: "Strategy sets the plan. Brand, Media and Dev deliver it.",
    },
  },
];

export const auditBand = {
  tag: "Free · 30 minutes · Online",
  headline: "30 minutes. A clear plan. Free.",
  line: "A focused session with our senior team on what's holding your business back, and what to fix first. No pitch. No commitment.",
  steps: [
    "Tell us about your business. It takes two minutes.",
    "We review your brand, ads and website before we meet.",
    "You leave with a one-page action plan. Yours to keep.",
  ],
  cta: "Book my free audit",
};

export const together = {
  tag: "Why one team",
  headline: "How the four work together.",
  line: "Here's what that looks like when you launch in a new market.",
  steps: [
    { label: "Strategy", text: "We define the audience and plan the launch." },
    { label: "Brand", text: "We build the brand and the message." },
    { label: "Dev", text: "We build the website or store." },
    { label: "Media", text: "We run the campaigns that bring customers in." },
  ],
  closing: "One team. One plan. One point of contact.",
};

export const faq = {
  tag: "Good questions",
  headline: "Quick answers.",
  items: [
    { q: "Can we hire you for just one service?", a: "Yes. Many clients start with one and add more later." },
    { q: "Where are you based?", a: "We're based in Noida, India and [city], US." },
    { q: "How do we get started?", a: "With a free 30-minute audit. We review your business beforehand and tell you what to fix first." },
    { q: "How much does it cost?", a: "[Pricing approach, e.g. fixed project fee or monthly retainer]" },
    { q: "Who will we work with?", a: "[Who leads the account and who is on the team]" },
  ],
};

export const servicesClosing = {
  sticker: "Sometimes it's all four.",
  headline: "Not sure which service you need?",
  line: "Book a free 30-minute audit and we'll show you where to start. Even if the answer isn't us.",
  buttons: [
    { label: "Book a free 30-min audit", href: "/contact" },
    { label: "See our work", href: "/#work" },
  ],
  signoff: "Fix the cause. Not the symptom.",
};
