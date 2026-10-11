import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/lead-schema";
import { site } from "@/content/site";

export async function POST(request: Request) {
  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json({ message: "Virheellinen pyyntö." }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json(
      { message: parsed.error.issues[0]?.message ?? "Tarkista lomakkeen tiedot." },
      { status: 422 },
    );
  }

  if (parsed.data.companyWebsite) {
    return NextResponse.json({ message: "Kiitos! Viestisi on vastaanotettu." });
  }

  const lead = {
    site: site.slug ?? site.company.name,
    company: site.company.legalName ?? site.company.name,
    name: parsed.data.name,
    phone: parsed.data.phone,
    email: parsed.data.email,
    city: parsed.data.city,
    service: parsed.data.service,
    message: parsed.data.message,
    receivedAt: new Date().toISOString(),
  };

  const webhook = process.env.LEAD_WEBHOOK_URL ?? process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) {
    console.info("Lead submission", lead);
    return NextResponse.json({ message: "Kiitos! Pyyntö vastaanotettiin (demo-tila)." });
  }

  try {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) throw new Error(`Webhook returned ${response.status}`);
  } catch (error) {
    console.error("Lead webhook failed", error);
    return NextResponse.json(
      { message: `Lähetys epäonnistui. Soita numeroon ${site.company.phone}.` },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: "Kiitos! Pyyntösi on lähetetty." });
}
