import type { SiteConfig } from "../types";

export const sahkoPreset: SiteConfig = {
  trade: "sahko",
  company: {
    name: "Uudenmaan Sähköpalvelu",
    legalName: "Uudenmaan Sähköpalvelu Oy",
    businessId: "1234567-8",
    tagline: "Sähkötyöt turvallisesti ja sovitusti",
    description: "Paikallinen sähköurakoitsija asennuksiin, korjauksiin ja remonttien sähkötöihin pääkaupunkiseudulla.",
    phone: "+358 40 123 4567",
    email: "info@esimerkki.fi",
    city: "Vantaa",
    serviceArea: ["Vantaa", "Helsinki", "Espoo", "Kerava", "Tuusula"],
    logoText: "USÄ",
  },
  seo: {
    siteUrl: "https://example.fi",
    title: "Sähköasennukset Vantaa, Helsinki ja Espoo | Uudenmaan Sähköpalvelu",
    description: "Sähköasennukset, vikakorjaukset ja remonttien sähkötyöt pääkaupunkiseudulla. Pyydä tarjous tai soita suoraan.",
    locale: "fi_FI",
  },
  theme: { accent: "#f3cf46", accentStrong: "#d8a900", surface: "#f7f6f0", ink: "#101214" },
  hero: {
    eyebrow: "Sähkötyöt • Vantaa & pääkaupunkiseutu",
    title: "Sähkötyöt, joissa turvallisuus ja aikataulu pitävät.",
    lead: "Asennukset, vikakorjaukset ja remonttien sähkötyöt koteihin, taloyhtiöille ja pienyrityksille. Selkeä tarjous ja suora yhteys tekijään.",
    primaryCta: "Pyydä tarjous",
    secondaryCta: "Soita nyt",
    highlights: ["Selkeä tarjous", "Sovitut aikataulut", "Paikallinen sähköasentaja"],
  },
  services: [
    { title: "Sähköasennukset", description: "Pistorasiat, valaisimet, kytkimet ja muut kodin tavalliset sähköasennukset.", bullets: ["Pistorasiat ja kytkimet", "Valaisinasennukset", "Uudet sähköpisteet"] },
    { title: "Remonttien sähkötyöt", description: "Keittiöiden, kylpyhuoneiden ja muiden remonttien sähkötyöt suunnitellusti muun urakan mukana.", bullets: ["Keittiöremontit", "Kylpyhuoneremontit", "Sähköjen muutostyöt"] },
    { title: "Viat & korjaukset", description: "Sähkövikojen selvitys ja korjaus ilman tarpeetonta osien vaihtamista.", bullets: ["Vianetsintä", "Korjaukset", "Keskusten tarkistukset"] },
  ],
  projects: [
    { title: "Keittiöremontin sähkötyöt", location: "Vantaa", description: "Uudet sähköpisteet, valaistus ja kodinkoneliitännät uuden keittiön tarpeisiin.", image: "/project-1.svg" },
    { title: "Omakotitalon valaistuspäivitys", location: "Espoo", description: "Sisä- ja ulkovalaistuksen uusinta sekä ohjauksen päivitys.", image: "/project-2.svg" },
    { title: "Liiketilan sähkömuutokset", location: "Helsinki", description: "Työpisteiden, valaistuksen ja uusien sähkölähtöjen toteutus.", image: "/project-3.svg" },
  ],
  testimonials: [
    { quote: "Asentaja tuli sovittuna aikana ja kaikki tarvittavat muutokset saatiin tehtyä yhdellä käynnillä.", name: "Anna R.", meta: "Vantaa" },
    { quote: "Selkeä tarjous ja hyvä yhteydenpito koko remontin ajan.", name: "Jari M.", meta: "Espoo" },
  ],
  process: [
    { title: "Kerro työstä", description: "Soita tai jätä tarjouspyyntö ja kerro lyhyesti kohteesta." },
    { title: "Sovitaan toteutus", description: "Tarkennamme työn laajuuden, tarvittavat materiaalit ja aikataulun." },
    { title: "Sähkötyö tehdään", description: "Työ toteutetaan turvallisesti ja sovitun mukaisesti." },
  ],
  faqs: [
    { question: "Teettekö myös pieniä sähkötöitä?", answer: "Kyllä. Myös yksittäiset pistorasia-, valaisin- ja vikakorjaustyöt ovat tervetulleita." },
    { question: "Voiko sähkötyöt tehdä remontin yhteydessä?", answer: "Kyllä. Sovitamme sähkötyöt muun remontin aikatauluun ja tarpeisiin." },
    { question: "Saanko hinnan etukäteen?", answer: "Selkeästi rajattuihin töihin annamme arvion tai tarjouksen ennen työn aloitusta." },
  ],
  trust: { heading: "Turvallinen toteutus. Selkeä tapa toimia.", items: ["Y-tunnuksellinen yritys", "Vastuuvakuutettu", "Sovitut aikataulut", "Kotitalousvähennyskelpoinen työ"] },
};
