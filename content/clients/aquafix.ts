import type { SiteConfig } from "../types";
import aquafixJson from "../../sites/aquafix.json";
import { siteConfigSchema } from "../../lib/site-schema";

export const aquafix: SiteConfig = siteConfigSchema.parse(aquafixJson);
