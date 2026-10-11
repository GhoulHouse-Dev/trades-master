import type { Trade } from "./types";
import { getPreset } from "./presets";

const requestedPreset = process.env.NEXT_PUBLIC_TRADE_PRESET ?? "lvi";
const allowedPresets: Trade[] = ["lvi", "sahko", "remontti"];

export const activePreset: Trade = allowedPresets.includes(requestedPreset as Trade)
  ? (requestedPreset as Trade)
  : "lvi";

export const site = getPreset(activePreset);
