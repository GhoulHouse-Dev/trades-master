import type { SiteConfig } from "../types";

export const remonttiPreset: SiteConfig = {
  trade: "remontti",
  company: {
    name: "Uudenmaan Remonttipalvelu",
    legalName: "Uudenmaan Remonttipalvelu Oy",
    businessId: "1234567-8",
    tagline: "Remontit selkeästi alusta loppuun",
    description: "Paikallinen remonttiyritys huoneisto-, keittiö- ja kylpyhuoneremontteihin pääkaupunkiseudulla.",
    phone: "+358 40 123 4567",
    email: "info@esimerkki.fi",
    city: "Vantaa",
    serviceArea: ["Vantaa", "Helsinki", "Espoo", "Kerava", "Tuusula"],
    logoText: "URP",
  },
  seo: {
    siteUrl: "https://example.fi",
    title: "Remonttipalvelut Vantaa, Helsinki ja Espoo | Uudenmaan Remonttipalvelu",
    description: "Huoneisto-, keittiö- ja kylpyhuoneremontit pääkaupunkiseudulla. Pyydä tarjous tai soita suoraan.",
    locale: "fi_FI",
  },
  theme: { accent: "#e08a52", accentStrong: "#bd6330", surface: "#f7f3ef", ink: "#151311" },
  hero: {
    eyebrow: "Remontit • Vantaa & pääkaupunkiseutu",
    title: "Remontti, jossa tiedät mitä tehdään ja milloin valmistuu.",
    lead: "Huoneisto-, keittiö- ja kylpyhuoneremontit koteihin ja sijoitusasuntoihin. Selkeä tarjous, sovittu eteneminen ja yksi yhteyshenkilö.",
    primaryCta: "Pyydä tarjous",
    secondaryCta: "Soita nyt",
    highlights: ["Selkeä työn sisältö", "Sovitut aikataulut", "Yksi yhteyshenkilö"],
  },
  services: [
    { title: "Huoneistoremontit", description: "Pintojen, lattioiden ja tilojen uudistukset yhdellä suunnitelmalla.", bullets: ["Maalaus ja tasoitus", "Lattiat", "Listoitukset ja viimeistely"] },
    { title: "Keittiöremontit", description: "Vanhan keittiön purusta uuden kokonaisuuden viimeistelyyn.", bullets: ["Purku", "Kalusteasennukset", "Pintojen viimeistely"] },
    { title: "Kylpyhuone- ja märkätilatyöt", description: "Märkätilaremontit suunnitellusti yhdessä tarvittavien LVI- ja sähköammattilaisten kanssa.", bullets: ["Purku ja pohjatyöt", "Vedeneristys", "Laatoitus ja viimeistely"] },
  ],
  projects: [
    { title: "Kaksion huoneistoremontti", location: "Helsinki", description: "Pintojen, lattioiden ja listojen uusinta ennen asunnon myyntiä.", image: "/project-1.svg" },
    { title: "Keittiön kokonaisuudistus", location: "Vantaa", description: "Vanhan keittiön purku, pohjatyöt ja uuden keittiön viimeistely.", image: "/project-2.svg" },
    { title: "Kylpyhuoneremontti", location: "Espoo", description: "Märkätilan uusinta purusta valmiiseen pintaan yhteistyökumppanien kanssa.", image: "/project-3.svg" },
  ],
  testimonials: [
    { quote: "Aikataulu piti ja tiesimme koko ajan missä vaiheessa remontti menee.", name: "Laura T.", meta: "Helsinki" },
    { quote: "Tarjous oli selkeä eikä loppuun tullut yllätyksiä.", name: "Petri S.", meta: "Vantaa" },
  ],
  process: [
    { title: "Kerro kohteesta", description: "Lähetä tarjouspyyntö tai soita. Kuvista ja pohjakuvasta on hyötyä." },
    { title: "Kartoitus & tarjous", description: "Käymme työn laajuuden läpi ja teemme selkeän tarjouksen sekä aikataulun." },
    { title: "Remontti toteutetaan", description: "Työ etenee sovitussa järjestyksessä ja pidämme sinut ajan tasalla." },
  ],
  faqs: [
    { question: "Teettekö pieniäkin remontteja?", answer: "Kyllä. Työn ei tarvitse olla koko asunnon remontti, vaan myös rajatut pintaremontit onnistuvat." },
    { question: "Voitteko hoitaa myös LVI- ja sähkötyöt?", answer: "Tarvittaessa kokonaisuus voidaan sovittaa yhteen yhteistyökumppaneiden kanssa. Asiakaskohtaiset pätevyydet ja vastuut varmistetaan ennen sopimusta." },
    { question: "Kuinka remontin hinta määritellään?", answer: "Hinta perustuu työn laajuuteen, materiaaleihin ja kohteen lähtötilanteeseen. Rajattu sisältö sovitaan ennen aloitusta." },
  ],
  trust: { heading: "Selkeä remontti. Sovittu eteneminen.", items: ["Y-tunnuksellinen yritys", "Vastuuvakuutettu", "Sovitut aikataulut", "Kotitalousvähennyskelpoinen työ"] },
};
