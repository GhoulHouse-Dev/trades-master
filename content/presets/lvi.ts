import type { SiteConfig } from "../types";

export const lviPreset: SiteConfig = {
  trade: "lvi",
  company: {
    name: "Uudenmaan LVI-Palvelu",
    legalName: "Uudenmaan LVI-Palvelu Oy",
    businessId: "1234567-8",
    tagline: "LVI-työt ilman turhaa odottelua",
    description: "Paikallinen LVI-kumppani huoltoihin, saneerauksiin ja asennuksiin pääkaupunkiseudulla.",
    phone: "+358 40 123 4567",
    email: "info@esimerkki.fi",
    city: "Vantaa",
    serviceArea: ["Vantaa", "Helsinki", "Espoo", "Kerava", "Tuusula"],
    logoText: "ULVI",
  },
  seo: {
    siteUrl: "https://example.fi",
    title: "LVI-palvelut Vantaa, Helsinki ja Espoo | Uudenmaan LVI-Palvelu",
    description: "LVI-asennukset, huollot ja saneeraukset Vantaalla, Helsingissä ja Espoossa. Pyydä tarjous tai soita suoraan.",
    locale: "fi_FI",
  },
  theme: { accent: "#f2b84b", accentStrong: "#d89417", surface: "#f7f5ef", ink: "#101312" },
  hero: {
    eyebrow: "LVI-palvelut • Vantaa & pääkaupunkiseutu",
    title: "Putki- ja LVI-työt, jotka hoidetaan kerralla kuntoon.",
    lead: "Huollot, asennukset ja saneeraukset koteihin, taloyhtiöille ja pienyrityksille. Selkeä tarjous, sovittu aikataulu ja suora yhteys tekijään.",
    primaryCta: "Pyydä tarjous",
    secondaryCta: "Soita nyt",
    highlights: ["Nopea yhteydenotto", "Selkeä hinnoittelu", "Paikallinen tekijä"],
  },
  services: [
    { title: "LVI-huollot", description: "Vuodot, hanat, WC-istuimet, patterit ja muut arjen LVI-korjaukset.", bullets: ["Pienkorjaukset", "Vianetsintä", "Vaihdot ja asennukset"] },
    { title: "Kylpyhuoneiden LVI-työt", description: "Putkityöt remontin yhteydessä yhdeltä luotettavalta kumppanilta.", bullets: ["Kalusteasennukset", "Vesi- ja viemärityöt", "Yhteistyö muun urakan kanssa"] },
    { title: "Taloyhtiöt & yritykset", description: "Sovitut huolto- ja korjaustyöt ilman raskasta välikäsiketjua.", bullets: ["Huoltokäynnit", "Korjaustyöt", "Dokumentoitu toteutus"] },
  ],
  projects: [
    { title: "Kylpyhuoneremontin LVI-työt", location: "Vantaa", description: "Vesi- ja viemäripisteiden uusinta sekä kalusteiden asennus.", image: "/project-1.svg" },
    { title: "Keittiön putkimuutokset", location: "Helsinki", description: "Putkireitit ja liitännät uuden keittiön tarpeisiin.", image: "/project-2.svg" },
    { title: "Taloyhtiön huoltokorjauksia", location: "Espoo", description: "Useita pieniä LVI-korjauksia yhden sovitun käynnin aikana.", image: "/project-3.svg" },
  ],
  testimonials: [
    { quote: "Yhteydenottoon vastattiin nopeasti ja työ tehtiin sovitusti. Hinta piti paikkansa.", name: "Mikko K.", meta: "Vantaa" },
    { quote: "Helppo asioida suoraan tekijän kanssa. Remontin LVI-osuus hoitui ilman säätöä.", name: "Sanna P.", meta: "Helsinki" },
  ],
  process: [
    { title: "Kerro tarpeesta", description: "Soita tai jätä lyhyt tarjouspyyntö." },
    { title: "Saat arvion", description: "Tarkennamme työn laajuuden ja sovimme hinnasta tai kartoituksesta." },
    { title: "Työ tehdään", description: "Toteutamme työn sovittuna aikana ja pidämme sinut ajan tasalla." },
  ],
  faqs: [
    { question: "Millä alueella työskentelette?", answer: "Pääalueemme ovat Vantaa, Helsinki ja Espoo. Myös lähikunnat onnistuvat työn mukaan." },
    { question: "Saanko hinnan etukäteen?", answer: "Kyllä. Selkeästi rajattuihin töihin annamme arvion tai tarjouksen ennen aloitusta." },
    { question: "Voinko lähettää kuvia ennen yhteydenottoa?", answer: "Kyllä. Kuvista on usein apua työn laajuuden arvioinnissa ennen käyntiä." },
  ],
  trust: { heading: "Paikallinen tekijä. Selkeä tapa toimia.", items: ["Y-tunnuksellinen yritys", "Vastuuvakuutettu", "Sovitut aikataulut", "Kotitalousvähennyskelpoinen työ"] },
};
