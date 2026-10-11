import fs from "node:fs";
import path from "node:path";
import type { SiteConfig, Trade } from "./types";
import { getPreset } from "./presets";
import { siteConfigSchema } from "@/lib/site-schema";

const requestedClient = process.env.NEXT_PUBLIC_CLIENT?.trim();
const requestedPreset = process.env.NEXT_PUBLIC_TRADE_PRESET ?? "lvi";
const allowedPresets: Trade[] = ["lvi", "sahko", "remontti"];

function loadClientSite(slug: string): SiteConfig {
  if (!/^[a-z0-9-]+$/.test(slug)) {
    throw new Error(`Invalid NEXT_PUBLIC_CLIENT value: ${slug}`);
  }

  const filePath = path.join(process.cwd(), "sites", `${slug}.json`);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing site config: sites/${slug}.json`);
  }

  let raw: unknown;
  try {
    raw = JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (error) {
    throw new Error(`Could not parse sites/${slug}.json`, { cause: error });
  }

  const parsed = siteConfigSchema.safeParse(raw);
  if (!parsed.success) {
    throw new Error(`Invalid site config in sites/${slug}.json: ${parsed.error.message}`);
  }

  return parsed.data as SiteConfig;
}

export const activePreset: Trade = allowedPresets.includes(requestedPreset as Trade)
  ? (requestedPreset as Trade)
  : "lvi";

export const activeClient = requestedClient || null;
export const site: SiteConfig = activeClient ? loadClientSite(activeClient) : getPreset(activePreset);
