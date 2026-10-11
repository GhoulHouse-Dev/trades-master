import type { SiteConfig } from "../types";

export const remonttiPreset: SiteConfig = {
  trade: "remontti",
  company: {
    name: "Yrityksen nimi",
    tagline: "Remonttipalvelut paikallisesti",
    description: "Huoneisto-, keittiö- ja muut remonttipalvelut paikallisille asiakkaille.",
    phone: "+358 40 000 0000",
    email: "info@esimerkki.fi",
    city: "Paikkakunta",
    serviceArea: ["Paikkakunta"],
    logoText: "REM",
  },
  seo: {
    siteUrl: "https://example.fi",
    title: "Remonttipalvelut | Yrityksen nimi",
    description: "Huoneisto-, keittiö- ja remonttipalvelut. Pyydä tarjous tai soita suoraan.",
    locale: "fi_FI",
  },
  theme: { accent: "#e08a52", accentStrong: "#bd6330", surface: "#f7f3ef", ink: "#151311" },
  hero: {
    eyebrow: "Remonttipalvelut • Paikkakunta",
    title: "Remontti selkeästi alusta loppuun.",
    lead: "Kerro kohteesta ja työn laajuudesta, niin seuraava vaihe voidaan sopia selkeästi.",
    primaryCta: "Pyydä tarjous",
    secondaryCta: "Soita",
    highlights: ["Selkeä yhteydenotto", "Palvelut näkyvissä", "Paikallinen palvelu"],
  },
  servicesHeading: {
    title: "Remonttipalvelut",
    intro: "Muokkaa palvelut vastaamaan yrityksen todellista tarjontaa.",
  },
  services: [
    { title: "Huoneistoremontit", description: "Asunnon pintojen ja tilojen uudistukset.", bullets: ["Maalaus ja tasoitus", "Lattiat", "Listoitukset ja viimeistely"] },
    { title: "Keittiöremontit", description: "Keittiön purku-, asennus- ja viimeistelytyöt.", bullets: ["Purku", "Kalusteasennukset", "Pintatyöt"] },
    { title: "Muut remonttityöt", description: "Muut yrityksen tarjoamat remontti- ja korjaustyöt.", bullets: ["Korjaukset", "Muutostyöt", "Viimeistely"] },
  ],
  projects: [],
  testimonials: [],
  processHeading: "Näin työ etenee",
  process: [
    { title: "Kerro kohteesta", description: "Soita tai jätä tarjouspyyntö." },
    { title: "Sovitaan työ", description: "Tarkennetaan työn sisältö, aikataulu ja hinta." },
    { title: "Työ toteutetaan", description: "Remontti tehdään sovitun mukaisesti." },
  ],
  faqs: [
    { question: "Millä alueella toimitte?", answer: "Täydennä tähän yrityksen vahvistettu palvelualue." },
    { question: "Miten remontin hinta määräytyy?", answer: "Täydennä tähän yrityksen todellinen hinnoittelumalli tai tarjouskäytäntö." },
    { question: "Miten saan tarjouksen?", answer: "Täytä lomake tai soita yrityksen numeroon." },
  ],
  trust: {
    heading: "Selkeä tapa ottaa yhteyttä",
    items: ["Palvelut näkyvissä", "Puhelin näkyvissä", "Tarjouspyyntö verkossa", "Palvelualue näkyvissä"],
  },
  needsConfirmation: ["company", "seo", "services", "process", "faqs", "trust"],
};
