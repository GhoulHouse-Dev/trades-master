# GhoulHouse Trades Master v1

Reusable, content-driven Next.js master template for Finnish local trades companies: LVI, remontti and electrical contractors.

**Status:** v1 master. Client variants should be created by changing content and assets, not by forking the component architecture.

## Why this structure

The page is intentionally driven from `content/site.ts`. Most client demos should require content changes, not component rewrites.

## Quick start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Create a new client version

1. Edit `content/site.ts`.
2. Change `trade` to `lvi`, `remontti` or `sahko`.
3. Replace company details, SEO title/description and service areas.
4. Replace services, project cards, testimonials, process and FAQs.
5. Replace `/public/project-*.svg` with real client images and update the image paths.
6. Set `seo.siteUrl` to the production domain.
7. Set `CONTACT_WEBHOOK_URL` in Vercel or replace `app/api/contact/route.ts` with your preferred CRM/email integration.
8. Verify all claims (years, reviews, guarantees, licenses, insurance, response times) before launch.

## Content model

`content/site.ts` contains:

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

Types live in `content/types.ts`.

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
