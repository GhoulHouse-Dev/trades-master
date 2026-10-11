import { site } from "@/content/site";

export function phoneHref(phone: string) {
  return `tel:${phone.replace(/[^+\d]/g, "")}`;
}

export function buildLocalBusinessJsonLd() {
  const { company, seo } = site;

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${seo.siteUrl}/#business`,
    name: company.legalName ?? company.name,
    url: seo.siteUrl,
    telephone: company.phone,
    ...(company.email ? { email: company.email } : {}),
    description: company.description,
    address: company.streetAddress
      ? {
          "@type": "PostalAddress",
          streetAddress: company.streetAddress,
          postalCode: company.postalCode,
          addressLocality: company.city,
          addressCountry: "FI",
        }
      : {
          "@type": "PostalAddress",
          addressLocality: company.city,
          addressCountry: "FI",
        },
    areaServed: company.serviceArea.map((name) => ({ "@type": "City", name })),
  };
}
