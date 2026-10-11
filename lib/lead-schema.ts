import { z } from "zod";

const optionalText = (max: number) => z.string().trim().max(max).optional().default("");

export const leadSchema = z.object({
  name: z.string().trim().min(2, "Nimi on liian lyhyt.").max(120),
  phone: z.string().trim().min(5, "Puhelinnumero puuttuu.").max(60),
  email: z.union([z.literal(""), z.string().trim().email("Tarkista sähköpostiosoite.").max(160)]).optional().default(""),
  city: optionalText(120),
  service: optionalText(160),
  message: z.string().trim().min(10, "Kuvaa työ hieman tarkemmin.").max(3000),
  companyWebsite: optionalText(200),
});

export type LeadInput = z.infer<typeof leadSchema>;
