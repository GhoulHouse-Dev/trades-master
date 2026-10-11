import { ContactForm } from "@/components/ContactForm";
import { site } from "@/content/site";
import { buildLocalBusinessJsonLd, phoneHref } from "@/lib/site";

export default function HomePage() {
  const jsonLd = buildLocalBusinessJsonLd();

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
            <a href="#palvelut">Palvelut</a><a href="#referenssit">Työt</a><a href="#prosessi">Näin toimimme</a><a href="#yhteys">Yhteys</a>
          </nav>
          <a className="button buttonSmall" href={phoneHref(site.company.phone)}>{site.company.phone}</a>
        </div>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="container heroGrid">
            <div className="heroCopy">
              <p className="eyebrow">{site.hero.eyebrow}</p>
              <h1>{site.hero.title}</h1>
              <p className="heroLead">{site.hero.lead}</p>
              <div className="buttonRow">
                <a className="button" href="#yhteys">{site.hero.primaryCta}</a>
                <a className="button buttonGhost" href={phoneHref(site.company.phone)}>{site.hero.secondaryCta}</a>
              </div>
              <ul className="heroHighlights">{site.hero.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <aside className="heroPanel">
              <div className="heroPanelTop"><span className="statusDot" />Palvelemme {site.company.serviceArea.slice(0, 3).join(", ")}</div>
              <div className="heroVisual"><span>{site.trade.toUpperCase()}</span><strong>{site.company.tagline}</strong><p>{site.company.description}</p></div>
              <a className="panelContact" href={phoneHref(site.company.phone)}><span>Soita suoraan tekijälle</span><strong>{site.company.phone}</strong></a>
            </aside>
          </div>
        </section>

        <section className="trustStrip"><div className="container trustGrid">{site.trust.items.map((item) => <span key={item}>✓ {item}</span>)}</div></section>

        <section className="section" id="palvelut"><div className="container">
          <div className="sectionHead"><p className="eyebrow">Palvelut</p><h2>Apua tavallisiin töihin ja isompiin kokonaisuuksiin.</h2><p>Kerro mitä tarvitset. Jos työ ei kuulu meille, sanomme sen suoraan.</p></div>
          <div className="cards3">{site.services.map((service, i) => <article className="serviceCard" key={service.title}><span className="cardNumber">0{i + 1}</span><h3>{service.title}</h3><p>{service.description}</p>{service.bullets && <ul>{service.bullets.map((b) => <li key={b}>{b}</li>)}</ul>}</article>)}</div>
        </div></section>

        <section className="section sectionDark" id="referenssit"><div className="container">
          <div className="sectionHead"><p className="eyebrow">Tehtyjä töitä</p><h2>Näytä mieluummin työ kuin lupaus.</h2><p>Korvaa demokuvat asiakkaan oikeilla työmaakuvilla ennen julkaisua.</p></div>
          <div className="projectGrid">{site.projects.map((project) => <article className="projectCard" key={project.title}><img src={project.image} alt="" width="800" height="560" /><div className="projectBody"><span>{project.location}</span><h3>{project.title}</h3><p>{project.description}</p></div></article>)}</div>
        </div></section>

        <section className="section" id="prosessi"><div className="container splitGrid">
          <div className="sectionHead stickyHead"><p className="eyebrow">Näin homma etenee</p><h2>Yhteydenotosta valmiiseen työhön ilman turhaa kierrosta.</h2></div>
          <ol className="processList">{site.process.map((step, i) => <li key={step.title}><span>{i + 1}</span><div><h3>{step.title}</h3><p>{step.description}</p></div></li>)}</ol>
        </div></section>

        <section className="section testimonials"><div className="container"><div className="sectionHead"><p className="eyebrow">Asiakaspalautteet</p><h2>Luottamus syntyy siitä, että sovittu pitää.</h2></div><div className="cards2">{site.testimonials.map((item) => <figure className="quoteCard" key={item.quote}><blockquote>“{item.quote}”</blockquote><figcaption>{item.name}{item.meta ? ` · ${item.meta}` : ""}</figcaption></figure>)}</div></div></section>

        <section className="serviceArea"><div className="container areaGrid"><div><p className="eyebrow">Palvelualue</p><h2>{site.company.serviceArea.join(" • ")}</h2></div><p>Toimimme ensisijaisesti {site.company.city}lta käsin. Kysy myös lähialueiden töistä.</p></div></section>

        <section className="section"><div className="container splitGrid"><div className="sectionHead stickyHead"><p className="eyebrow">Usein kysyttyä</p><h2>Ennen kuin otat yhteyttä.</h2></div><div className="faqList">{site.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></div></section>

        <section className="section contactSection" id="yhteys"><div className="container contactGrid"><div className="contactCopy"><p className="eyebrow">Pyydä tarjous</p><h2>Kerro lyhyesti työstä. Palaamme asiaan mahdollisimman pian.</h2><p>Voit myös soittaa suoraan: <a href={phoneHref(site.company.phone)}>{site.company.phone}</a>.</p><div className="contactMeta"><span>{site.company.email}</span><span>{site.company.city}</span>{site.company.businessId && <span>Y-tunnus {site.company.businessId}</span>}</div></div><ContactForm /></div></section>
      </main>

      <footer className="footer"><div className="container footerGrid"><div><strong>{site.company.name}</strong><p>{site.company.description}</p></div><div><strong>Palvelualue</strong><p>{site.company.serviceArea.join(", ")}</p></div><div><strong>Yhteys</strong><p><a href={phoneHref(site.company.phone)}>{site.company.phone}</a><br/><a href={`mailto:${site.company.email}`}>{site.company.email}</a></p></div></div></footer>
      <div className="mobileBar"><a href={phoneHref(site.company.phone)}>Soita</a><a href="#yhteys">Pyydä tarjous</a></div>
    </>
  );
}
