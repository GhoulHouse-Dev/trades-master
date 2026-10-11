import { NextResponse } from "next/server";

type ContactPayload = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  city?: unknown;
  service?: unknown;
  message?: unknown;
  companyWebsite?: unknown;
};

function text(value: unknown, max = 1000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ message: "Virheellinen pyyntö." }, { status: 400 });
  }

  if (text(body.companyWebsite, 200)) {
    return NextResponse.json({ message: "Kiitos! Viestisi on vastaanotettu." });
  }

  const submission = {
    name: text(body.name, 120),
    phone: text(body.phone, 60),
    email: text(body.email, 160),
    city: text(body.city, 120),
    service: text(body.service, 160),
    message: text(body.message, 3000),
    receivedAt: new Date().toISOString(),
  };

  if (submission.name.length < 2 || submission.phone.length < 5 || submission.message.length < 10) {
    return NextResponse.json({ message: "Täytä nimi, puhelin ja työn kuvaus." }, { status: 422 });
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) {
    console.info("Contact form submission", submission);
    return NextResponse.json({ message: "Kiitos! Tarjouspyyntö vastaanotettiin (demo-tila)." });
  }

  try {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submission),
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) throw new Error(`Webhook returned ${response.status}`);
  } catch (error) {
    console.error("Contact webhook failed", error);
    return NextResponse.json({ message: "Lähetys epäonnistui. Soita meille suoraan." }, { status: 502 });
  }

  return NextResponse.json({ message: "Kiitos! Tarjouspyyntösi on lähetetty." });
}
