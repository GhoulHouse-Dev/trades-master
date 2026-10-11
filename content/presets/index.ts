import type { Trade } from "../types";
import { lviPreset } from "./lvi";
import { sahkoPreset } from "./sahko";
import { remonttiPreset } from "./remontti";

export const presets = {
  lvi: lviPreset,
  sahko: sahkoPreset,
  remontti: remonttiPreset,
} as const;

export function getPreset(trade: Trade) {
  return presets[trade];
}
