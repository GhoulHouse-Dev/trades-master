# GhoulHouse Trades Master v1

Reusable, content-driven Next.js master template for Finnish local trades companies: LVI, remontti and electrical contractors.

**Status:** v1 master. Client variants should be created by changing content and assets, not by forking the component architecture.

## Presets

The component architecture is shared by every trade. Content lives in three separate presets:

- `content/presets/lvi.ts`
- `content/presets/sahko.ts`
- `content/presets/remontti.ts`

`content/site.ts` is only the preset selector. Choose the active preset with:

```bash
NEXT_PUBLIC_TRADE_PRESET=lvi npm run dev
NEXT_PUBLIC_TRADE_PRESET=sahko npm run dev
NEXT_PUBLIC_TRADE_PRESET=remontti npm run dev
```

In Vercel, set `NEXT_PUBLIC_TRADE_PRESET` to `lvi`, `sahko` or `remontti`. Invalid or missing values fall back to `lvi`.

Do not create trade-specific page components. New trades should implement the existing `SiteConfig` type and be added to `content/presets/index.ts`.

## Why this structure

The page is intentionally driven from `content/site.ts`. Most client demos should require preset/content changes, not component rewrites.

## Quick start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Create a new client version

1. Choose the nearest trade preset in `content/presets/`.
2. Replace company details, SEO title/description and service areas inside that preset.
3. Replace services, project cards, testimonials, process and FAQs.
4. Replace `/public/project-*.svg` with real client images and update the image paths.
5. Set `seo.siteUrl` to the production domain.
6. Set `NEXT_PUBLIC_TRADE_PRESET` in Vercel.
7. Set `CONTACT_WEBHOOK_URL` in Vercel or replace `app/api/contact/route.ts` with your preferred CRM/email integration.
8. Verify all claims (years, reviews, guarantees, licenses, insurance, response times) before launch.

## Content model

Every preset implements `SiteConfig` from `content/types.ts` and contains:

- company identity and contact details
- SEO and canonical base URL
- theme tokens
- hero copy and CTAs
- services
- projects
- testimonials
- process
- FAQs
- service areas and trust claims

## SEO included

- Next.js Metadata API
- canonical URL
- Open Graph / Twitter metadata
- `robots.ts`
- `sitemap.ts`
- JSON-LD `HomeAndConstructionBusiness`
- semantic H1/H2/H3 structure
- service-area copy

Before production, add a real Open Graph image and favicon.

## Contact form

`POST /api/contact` validates a minimal payload, uses a honeypot, and either:

- POSTs the submission as JSON to `CONTACT_WEBHOOK_URL`, or
- logs the submission in demo mode when no webhook is configured.

Do not treat demo logging as a production lead-delivery mechanism.

Expected webhook payload:

```json
{
  "name": "Example",
  "phone": "+358...",
  "email": "...",
  "city": "Vantaa",
  "message": "...",
  "receivedAt": "ISO timestamp"
}
```

## Production checklist

- [ ] Correct trade preset selected
- [ ] Real logo / wordmark
- [ ] Real work images
- [ ] Verified contact info
- [ ] Verified legal/business claims
- [ ] Privacy notice for form processing
- [ ] Analytics/consent if analytics is enabled
- [ ] Contact webhook or CRM integration
- [ ] Domain + canonical URL
- [ ] OG image + favicon
- [ ] Mobile QA at 320 / 390 / 430 px
- [ ] Lighthouse / Core Web Vitals check
- [ ] Test form end-to-end

## Design principles

- one primary CTA: request a quote
- phone remains directly available
- proof before generic brand copy
- no invented review counts or credentials
- no US-style emergency/financing/membership baggage by default
- mobile sticky CTA for high-intent traffic
