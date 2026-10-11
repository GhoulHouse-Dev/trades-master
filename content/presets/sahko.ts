import type { SiteConfig } from "../types";

export const sahkoPreset: SiteConfig = {
  trade: "sahko",
  company: {
    name: "Yrityksen nimi",
    tagline: "Sähköpalvelut paikallisesti",
    description: "Sähköasennukset, korjaukset ja muutostyöt paikallisille asiakkaille.",
    phone: "+358 40 000 0000",
    email: "info@esimerkki.fi",
    city: "Paikkakunta",
    serviceArea: ["Paikkakunta"],
    logoText: "SÄH",
  },
  seo: {
    siteUrl: "https://example.fi",
    title: "Sähköpalvelut | Yrityksen nimi",
    description: "Sähköasennukset, vikakorjaukset ja muutostyöt. Pyydä tarjous tai soita suoraan.",
    locale: "fi_FI",
  },
  theme: { accent: "#f3cf46", accentStrong: "#d8a900", surface: "#f7f6f0", ink: "#101214" },
  hero: {
    eyebrow: "Sähköpalvelut • Paikkakunta",
    title: "Sähkötyöt selkeästi ja suoraan.",
    lead: "Kerro mitä tarvitset, niin työn sisältö ja seuraava vaihe voidaan sopia ilman turhaa kierrosta.",
    primaryCta: "Pyydä tarjous",
    secondaryCta: "Soita",
    highlights: ["Selkeä yhteydenotto", "Palvelut näkyvissä", "Paikallinen palvelu"],
  },
  servicesHeading: {
    title: "Sähköpalvelut",
    intro: "Muokkaa palvelut vastaamaan yrityksen todellista tarjontaa.",
  },
  services: [
    { title: "Sähköasennukset", description: "Tavalliset sähköasennukset koteihin ja muihin kohteisiin.", bullets: ["Pistorasiat ja kytkimet", "Valaisimet", "Uudet sähköpisteet"] },
    { title: "Remonttien sähkötyöt", description: "Sähkötyöt osana remonttia.", bullets: ["Keittiö", "Kylpyhuone", "Muutostyöt"] },
    { title: "Viat ja korjaukset", description: "Sähkövikojen selvitys ja korjaus.", bullets: ["Vianetsintä", "Korjaukset", "Tarkistukset"] },
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
