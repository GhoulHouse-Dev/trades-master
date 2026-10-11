"use client";

import { FormEvent, useState } from "react";
import { site } from "@/content/site";

type State = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [state, setState] = useState<State>("idle");
  const [message, setMessage] = useState("");

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
      if (!response.ok) throw new Error(data.message || "Lähetys epäonnistui.");
      setState("sent");
      setMessage(data.message || "Kiitos! Viestisi on lähetetty.");
      form.reset();
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Lähetys epäonnistui.");
    }
  }

  return (
    <form className="contactForm" onSubmit={onSubmit}>
      <div className="fieldGrid">
        <label>Nimi<input name="name" autoComplete="name" required minLength={2} /></label>
        <label>Puhelin<input name="phone" autoComplete="tel" inputMode="tel" required /></label>
      </div>
      <label>Sähköposti<input name="email" type="email" autoComplete="email" /></label>
      <label>Paikkakunta<input name="city" autoComplete="address-level2" /></label>
      <label>Mitä pitäisi tehdä?<textarea name="message" required minLength={10} rows={5} placeholder="Esim. keittiön hanan ja tiskikoneen liitännän uusinta Vantaalla..." /></label>
      <label className="honeypot" aria-hidden="true">Yritys<input name="companyWebsite" tabIndex={-1} autoComplete="off" /></label>
      <button className="button submitButton" disabled={state === "sending"}>
        {state === "sending" ? "Lähetetään…" : `Lähetä tarjouspyyntö`}
      </button>
      <p className="formHint">Lomake lähettää tiedot palvelimelle. Tuotannossa aseta <code>CONTACT_WEBHOOK_URL</code> tai vaihda endpoint omaan CRM-/sähköpostipalveluun.</p>
      {message && <p className={state === "error" ? "formMessage error" : "formMessage"}>{message}</p>}
      <noscript>JavaScript tarvitaan lomakkeen lähettämiseen. Voit myös lähettää sähköpostia osoitteeseen {site.company.email}.</noscript>
    </form>
  );
}
