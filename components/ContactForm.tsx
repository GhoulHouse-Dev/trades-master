"use client";

import { FormEvent, useState } from "react";
import { site } from "@/content/site";

type State = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [state, setState] = useState<State>("idle");
  const [message, setMessage] = useState("");
  const copy = site.contact;
  const emailMode = copy?.fields?.email ?? "optional";
  const cityMode = copy?.fields?.city ?? "optional";

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setMessage("");

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(data.message || copy?.error || "Lähetys epäonnistui.");
      setState("sent");
      setMessage(copy?.success || data.message || "Kiitos! Viestisi on lähetetty.");
      form.reset();
    } catch (error) {
      setState("error");
      setMessage(copy?.error || (error instanceof Error ? error.message : "Lähetys epäonnistui."));
    }
  }

  return (
    <form className="contactForm" onSubmit={onSubmit}>
      {copy?.formTitle && <h3>{copy.formTitle}</h3>}
      <div className="fieldGrid">
        <label>Nimi<input name="name" autoComplete="name" required minLength={2} placeholder={copy?.placeholders?.name} /></label>
        <label>Puhelin<input name="phone" autoComplete="tel" inputMode="tel" required placeholder={copy?.placeholders?.phone} /></label>
      </div>
      {copy?.serviceOptions && <label>Työn tyyppi<select name="service" required defaultValue=""><option value="" disabled>Valitse työn tyyppi</option>{copy.serviceOptions.map((option) => <option key={option} value={option}>{option}</option>)}</select></label>}
      <label>Kerro lyhyesti<textarea name="message" required minLength={10} rows={5} placeholder={copy?.placeholders?.message ?? "Esim. keittiön hanan ja tiskikoneen liitännän uusinta..."} /></label>
      {emailMode !== "hidden" && <label>Sähköposti {emailMode === "optional" && <small>(valinnainen)</small>}<input name="email" type="email" autoComplete="email" required={emailMode === "required"} placeholder={copy?.placeholders?.email} /></label>}
      {cityMode !== "hidden" && <label>Kohteen paikkakunta {cityMode === "optional" && <small>(valinnainen)</small>}<input name="city" autoComplete="address-level2" required={cityMode === "required"} placeholder={copy?.placeholders?.city} /></label>}
      <label className="honeypot" aria-hidden="true">Yritys<input name="companyWebsite" tabIndex={-1} autoComplete="off" /></label>
      <button className="button submitButton" disabled={state === "sending"}>
        {state === "sending" ? "Lähetetään…" : (copy?.button ?? "Lähetä tarjouspyyntö")}
      </button>
      <p className="formHint">{copy?.privacyLine ?? <>Lomake lähettää tiedot palvelimelle. Tuotannossa aseta <code>CONTACT_WEBHOOK_URL</code> tai vaihda endpoint omaan CRM-/sähköpostipalveluun.</>}</p>
      {message && <p className={state === "error" ? "formMessage error" : "formMessage"}>{message}</p>}
      <noscript>JavaScript tarvitaan lomakkeen lähettämiseen. Voit myös lähettää sähköpostia osoitteeseen {site.company.email}.</noscript>
    </form>
  );
}
