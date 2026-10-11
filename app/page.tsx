import { ContactForm } from "@/components/ContactForm";
import { site } from "@/content/site";
import { buildLocalBusinessJsonLd, phoneHref } from "@/lib/site";

export default function HomePage() {
  const jsonLd = buildLocalBusinessJsonLd();
  const callHref = site.company.phoneHref ?? phoneHref(site.company.phone);
  const nav = site.nav ?? [
    { label: "Palvelut", href: "#palvelut" },
    { label: "Työt", href: "#referenssit" },
    { label: "Näin toimimme", href: "#prosessi" },
    { label: "Yhteys", href: "#yhteys" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="siteHeader">
        <div className="container navWrap">
          <a className="brand" href="#top" aria-label={`${site.company.name} etusivu`}>
            <span className="brandMark">{site.company.logoText ?? site.company.name.slice(0, 2)}</span>
            <span>{site.company.name}</span>
          </a>
          <nav className="desktopNav" aria-label="Päänavigaatio">
            {nav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
          <a className="button buttonSmall" href={callHref}>{site.company.phone}</a>
        </div>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="container heroGrid">
            <div className="heroCopy">
              <p className="eyebrow">{site.hero.badge ?? site.hero.eyebrow}</p>
              <h1>{site.hero.title}</h1>
              <p className="heroLead">{site.hero.lead}</p>
              <div className="buttonRow">
                <a className="button" href="#yhteys">{site.hero.primaryCta}</a>
                <a className="button buttonGhost" href={callHref}>{site.hero.secondaryCta}</a>
              </div>
              <ul className="heroHighlights">{site.hero.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <aside className="heroPanel">
              <div className="heroPanelTop"><span className="statusDot" />{site.hero.eyebrow}</div>
              <div className="heroVisual">
                <span>{site.trade.toUpperCase()}</span>
                <strong>{site.company.tagline}</strong>
                <p>{site.company.description}</p>
                {site.hero.facts && <div className="factGrid">{site.hero.facts.map((fact) => <div key={fact.label}><strong>{fact.value}</strong><small>{fact.label}</small></div>)}</div>}
              </div>
              {site.hero.priceCard ? (
                <a className="panelContact" href={site.hero.priceCard.linkHref}><span>{site.hero.priceCard.title}<br/><small>{site.hero.priceCard.note}</small></span><strong>{site.hero.priceCard.value}</strong></a>
              ) : (
                <a className="panelContact" href={callHref}><span>Soita suoraan tekijälle</span><strong>{site.company.phone}</strong></a>
              )}
            </aside>
          </div>
        </section>

        <section className="trustStrip"><div className="container trustGrid">{site.trust.items.map((item) => <span key={item}>✓ {item}</span>)}</div></section>

        <section className="section" id="palvelut"><div className="container">
          <div className="sectionHead"><p className="eyebrow">Palvelut</p><h2>{site.servicesHeading?.title ?? "Apua tavallisiin töihin ja isompiin kokonaisuuksiin."}</h2><p>{site.servicesHeading?.intro ?? "Kerro mitä tarvitset. Jos työ ei kuulu meille, sanomme sen suoraan."}</p></div>
          <div className="cards3">{site.services.map((service, i) => <article className="serviceCard" key={service.title}><span className="cardNumber">0{i + 1}</span><h3>{service.title}</h3><p>{service.description}</p>{service.bullets && <ul>{service.bullets.map((b) => <li key={b}>{b}</li>)}</ul>}{service.cta && <a className="textLink" href="#yhteys">{service.cta} →</a>}</article>)}</div>
        </div></section>

        {site.whyUs && <section className="section"><div className="container"><div className="sectionHead"><p className="eyebrow">Miksi {site.company.name}</p><h2>Selkeä tapa tilata LVI-työ.</h2></div><div className="cards3">{site.whyUs.map((item) => <article className="serviceCard compactCard" key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section>}

        {site.pricing && <section className="section pricingSection" id="hinnasto"><div className="container splitGrid"><div className="sectionHead stickyHead"><p className="eyebrow">Hinnasto</p><h2>{site.pricing.title}</h2><p>{site.pricing.intro}</p><a className="button" href="#yhteys">{site.pricing.cta ?? site.ctaLabel ?? "Pyydä tarjous"}</a></div><div className="pricingTable">{site.pricing.rows.map((row) => <div className="pricingRow" key={row.label}><span>{row.label}</span><strong>{row.price}</strong></div>)}{site.pricing.footnote && <p>{site.pricing.footnote}</p>}</div></div></section>}

        {site.projects.length > 0 && <section className="section sectionDark" id="referenssit"><div className="container"><div className="sectionHead"><p className="eyebrow">Tehtyjä töitä</p><h2>Näytä mieluummin työ kuin lupaus.</h2></div><div className="projectGrid">{site.projects.map((project) => <article className="projectCard" key={project.title}><img src={project.image} alt="" width="800" height="560" /><div className="projectBody"><span>{project.location}</span><h3>{project.title}</h3><p>{project.description}</p></div></article>)}</div></div></section>}

        <section className="section" id="prosessi"><div className="container splitGrid"><div className="sectionHead stickyHead"><p className="eyebrow">Prosessi</p><h2>{site.processHeading ?? "Yhteydenotosta valmiiseen työhön ilman turhaa kierrosta."}</h2></div><ol className="processList">{site.process.map((step, i) => <li key={step.title}><span>{i + 1}</span><div><h3>{step.title}</h3><p>{step.description}</p></div></li>)}</ol></div></section>

        {site.testimonials.length > 0 && <section className="section testimonials"><div className="container"><div className="sectionHead"><p className="eyebrow">Asiakaspalautteet</p><h2>Luottamus syntyy siitä, että sovittu pitää.</h2></div><div className="cards2">{site.testimonials.map((item) => <figure className="quoteCard" key={item.quote}><blockquote>“{item.quote}”</blockquote><figcaption>{item.name}{item.meta ? ` · ${item.meta}` : ""}</figcaption></figure>)}</div></div></section>}

        <section className="serviceArea"><div className="container areaGrid"><div><p className="eyebrow">Palvelualue</p><h2>{site.company.serviceArea.join(" • ")}</h2></div><p>{site.company.serviceAreaNote ?? site.company.address ?? `Toimimme ensisijaisesti ${site.company.city}sta käsin.`}</p></div></section>

        <section className="section" id="ukk"><div className="container splitGrid"><div className="sectionHead stickyHead"><p className="eyebrow">Usein kysyttyä</p><h2>Ennen kuin otat yhteyttä.</h2></div><div className="faqList">{site.faqs.map((faq, index) => <details key={faq.question} open={index === 0}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></div></section>

        <section className="section contactSection" id="yhteys"><div className="container contactGrid"><div className="contactCopy"><p className="eyebrow">{site.contact?.sideTitle ?? "Pyydä tarjous"}</p><h2>{site.contact?.title ?? "Kerro lyhyesti työstä. Palaamme asiaan mahdollisimman pian."}</h2><p>{site.contact?.intro}</p><p>Voit myös soittaa suoraan: <a href={callHref}>{site.company.phone}</a>.</p><div className="contactMeta">{site.contact?.personLine && <span>{site.contact.personLine}</span>}<span>{site.company.email}</span>{site.company.businessId && <span>Y-tunnus {site.company.businessId}</span>}</div></div><ContactForm /></div></section>
      </main>

      <footer className="footer"><div className="container footerGrid"><div><strong>{site.company.name}</strong><p>{site.company.description}</p>{site.footer?.copyright && <p>{site.footer.copyright}</p>}</div><div>{site.footer?.links ? <><strong>Linkit</strong><p className="footerLinks">{site.footer.links.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</p></> : <><strong>Palvelualue</strong><p>{site.company.serviceArea.join(", ")}</p></>}</div><div><strong>Yhteys</strong><p><a href={callHref}>{site.company.phone}</a><br/><a href={`mailto:${site.company.email}`}>{site.company.email}</a></p></div></div></footer>
      <div className="mobileBar"><a href={callHref}>Soita</a><a href="#yhteys">{site.ctaLabel ?? "Pyydä tarjous"}</a></div>
    </>
  );
}
