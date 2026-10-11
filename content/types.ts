export type Trade = "lvi" | "remontti" | "sahko";

export type Service = {
  title: string;
  description: string;
  bullets?: string[];
  cta?: string;
};

export type Project = {
  title: string;
  location: string;
  description: string;
  image: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  meta?: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type NavItem = { label: string; href: string };
export type PricingRow = { label: string; price: string };
export type PrivacySection = { heading: string; text: string };

export type SiteConfig = {
  slug?: string;
  locale?: string;
  trade: Trade;
  company: {
    name: string;
    legalName?: string;
    businessId?: string;
    tagline: string;
    description: string;
    phone: string;
    phoneHref?: string;
    email: string;
    contactPerson?: string;
    contactRole?: string;
    streetAddress?: string;
    postalCode?: string;
    city: string;
    address?: string;
    serviceArea: string[];
    serviceAreaNote?: string;
    foundedYear?: number;
    logoText?: string;
  };
  seo: {
    siteUrl: string;
    title: string;
    description: string;
    locale: string;
    ogTitle?: string;
    noindex?: boolean;
  };
  theme: {
    primary?: string;
    accent: string;
    accentStrong: string;
    surface: string;
    ink: string;
  };
  nav?: NavItem[];
  ctaLabel?: string;
  hero: {
    eyebrow: string;
    badge?: string;
    title: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    highlights: string[];
    facts?: { value: string; label: string }[];
    priceCard?: {
      title: string;
      value: string;
      note: string;
      linkLabel: string;
      linkHref: string;
    };
  };
  services: Service[];
  servicesHeading?: { title: string; intro?: string };
  whyUs?: { title: string; text: string }[];
  whyUsHeading?: string;
  pricing?: {
    title: string;
    intro?: string;
    rows: PricingRow[];
    footnote?: string;
    cta?: string;
  };
  projects: Project[];
  testimonials: Testimonial[];
  process: { title: string; description: string }[];
  processHeading?: string;
  faqs: FAQ[];
  faqHeading?: string;
  trust: {
    heading: string;
    items: string[];
  };
  contact?: {
    title?: string;
    intro?: string;
    sideTitle?: string;
    personLine?: string;
    formTitle?: string;
    button?: string;
    success?: string;
    error?: string;
    privacyLine?: string;
    serviceOptions?: string[];
    fields?: {
      email?: "hidden" | "optional" | "required";
      city?: "hidden" | "optional" | "required";
    };
    placeholders?: {
      name?: string;
      phone?: string;
      email?: string;
      city?: string;
      message?: string;
    };
  };
  footer?: {
    links?: NavItem[];
    copyright?: string;
  };
  privacy?: {
    title: string;
    sections: PrivacySection[];
  };
  needsConfirmation?: string[];
  socials?: {
    facebook?: string;
    instagram?: string;
  };
};
