export type Trade = "lvi" | "remontti" | "sahko";

export type Service = {
  title: string;
  description: string;
  bullets?: string[];
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

export type SiteConfig = {
  trade: Trade;
  company: {
    name: string;
    legalName?: string;
    businessId?: string;
    tagline: string;
    description: string;
    phone: string;
    email: string;
    streetAddress?: string;
    postalCode?: string;
    city: string;
    serviceArea: string[];
    foundedYear?: number;
    logoText?: string;
  };
  seo: {
    siteUrl: string;
    title: string;
    description: string;
    locale: string;
  };
  theme: {
    accent: string;
    accentStrong: string;
    surface: string;
    ink: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    highlights: string[];
  };
  services: Service[];
  projects: Project[];
  testimonials: Testimonial[];
  process: { title: string; description: string }[];
  faqs: FAQ[];
  trust: {
    heading: string;
    items: string[];
  };
  socials?: {
    facebook?: string;
    instagram?: string;
  };
};
