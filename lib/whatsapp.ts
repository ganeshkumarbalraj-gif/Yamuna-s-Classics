import { site } from "@/data/site";
import { formatPhone } from "./formatPhone";

/**
 * General helper
 */
export function createWhatsAppUrl(
  phone: string,
  message: string
) {
  return `https://wa.me/${formatPhone(
    phone
  )}?text=${encodeURIComponent(message)}`;
}

/**
 * Backward-compatible helper.
 * Uses the business WhatsApp number automatically.
 */
export function getWhatsAppLink(
  message: string
) {
  return createWhatsAppUrl(
    site.whatsapp,
    message
  );
}