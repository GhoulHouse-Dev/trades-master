import type { Trade } from "./types";
import { getPreset } from "./presets";
import { aquafix } from "./clients/aquafix";
import { a1 } from "./clients/a1";
import { acope } from "./clients/acope";

const clients = { aquafix, a1, acope } as const;
type ClientKey = keyof typeof clients;

const requestedClient = process.env.NEXT_PUBLIC_CLIENT as ClientKey | undefined;
const requestedPreset = process.env.NEXT_PUBLIC_TRADE_PRESET ?? "lvi";
const allowedPresets: Trade[] = ["lvi", "sahko", "remontti"];

export const activePreset: Trade = allowedPresets.includes(requestedPreset as Trade)
  ? (requestedPreset as Trade)
  : "lvi";

export const activeClient = requestedClient && requestedClient in clients ? requestedClient : null;
export const site = activeClient ? clients[activeClient] : getPreset(activePreset);
