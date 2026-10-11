import { site } from "@/content/site";

export default function PrivacyPage() {
  if (!site.privacy) {
    return <main className="section"><div className="container"><h1>Tietosuojaseloste</h1><p>Tietosuojaselostetta ei ole vielä lisätty.</p></div></main>;
  }

  return (
    <main className="section privacyPage">
      <div className="container narrowContainer">
        <p className="eyebrow">{site.company.name}</p>
        <h1>{site.privacy.title}</h1>
        <p><a className="textLink" href="/">← Takaisin etusivulle</a></p>
        <div className="privacySections">
          {site.privacy.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.text}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
