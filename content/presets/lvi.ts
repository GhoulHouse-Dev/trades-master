import type { SiteConfig } from "../types";

export const lviPreset: SiteConfig = {
  trade: "lvi",
  company: {
    name: "Yrityksen nimi",
    tagline: "LVI-palvelut paikallisesti",
    description: "LVI-asennukset, huollot ja korjaukset paikallisille asiakkaille.",
    phone: "+358 40 000 0000",
    email: "info@esimerkki.fi",
    city: "Paikkakunta",
    serviceArea: ["Paikkakunta"],
    logoText: "LVI",
  },
  seo: {
    siteUrl: "https://example.fi",
    title: "LVI-palvelut | Yrityksen nimi",
    description: "LVI-asennukset, huollot ja korjaukset. Pyydä tarjous tai soita suoraan.",
    locale: "fi_FI",
  },
  theme: { accent: "#f2b84b", accentStrong: "#d89417", surface: "#f7f5ef", ink: "#101312" },
  hero: {
    eyebrow: "LVI-palvelut • Paikkakunta",
    title: "LVI-työt selkeästi ja suoraan.",
    lead: "Kerro mitä tarvitset, niin työn sisältö ja seuraava vaihe voidaan sopia ilman turhaa kierrosta.",
    primaryCta: "Pyydä tarjous",
    secondaryCta: "Soita",
    highlights: ["Selkeä yhteydenotto", "Palvelut näkyvissä", "Paikallinen palvelu"],
  },
  servicesHeading: {
    title: "LVI-palvelut",
    intro: "Muokkaa palvelut vastaamaan yrityksen todellista tarjontaa.",
  },
  services: [
    { title: "Huollot ja korjaukset", description: "Tavalliset LVI-huollot ja korjaustyöt.", bullets: ["Vuodot ja viat", "Hanat ja kalusteet", "Pienkorjaukset"] },
    { title: "Asennukset", description: "LVI-asennukset uudis- ja korjauskohteisiin.", bullets: ["Vesi- ja viemärityöt", "Kalusteasennukset", "Muut asennukset"] },
    { title: "Remonttien LVI-työt", description: "LVI-työt osana remonttia.", bullets: ["Kylpyhuone", "Keittiö", "Muutostyöt"] },
  ],
  projects: [],
  testimonials: [],
  processHeading: "Näin työ etenee",
  process: [
    { title: "Kerro tarpeesta", description: "Soita tai jätä tarjouspyyntö." },
    { title: "Sovitaan työ", description: "Tarkennetaan työn sisältö, aikataulu ja hinta." },
    { title: "Työ toteutetaan", description: "Työ tehdään sovitun mukaisesti." },
  ],
  faqs: [
    { question: "Millä alueella toimitte?", answer: "Täydennä tähän yrityksen vahvistettu palvelualue." },
    { question: "Miten hinta määräytyy?", answer: "Täydennä tähän yrityksen todellinen hinnoittelumalli tai tarjouskäytäntö." },
    { question: "Miten saan tarjouksen?", answer: "Täytä lomake tai soita yrityksen numeroon." },
  ],
  trust: {
    heading: "Selkeä tapa ottaa yhteyttä",
    items: ["Palvelut näkyvissä", "Puhelin näkyvissä", "Tarjouspyyntö verkossa", "Palvelualue näkyvissä"],
  },
  needsConfirmation: ["company", "seo", "services", "process", "faqs", "trust"],
};
