import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import { site } from "@/content/site";
import "./globals.css";
import "./client.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.seo.siteUrl),
  title: site.seo.title,
  description: site.seo.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.seo.locale,
    url: site.seo.siteUrl,
    siteName: site.company.name,
    title: site.seo.ogTitle ?? site.seo.title,
    description: site.seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.ogTitle ?? site.seo.title,
    description: site.seo.description,
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang={site.locale ?? "fi"}>
      <body
        style={
          {
            "--primary": site.theme.primary ?? site.theme.ink,
            "--accent": site.theme.accent,
            "--accent-strong": site.theme.accentStrong,
            "--surface": site.theme.surface,
            "--ink": site.theme.ink,
          } as CSSProperties
        }
      >
        {children}
      </body>
    </html>
  );
}
