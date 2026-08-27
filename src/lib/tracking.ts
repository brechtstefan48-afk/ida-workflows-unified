/**
 * Zentrale Tracking-Schicht.
 *
 * Vorbereitet für Google Analytics 4, Matomo oder ein anderes
 * datenschutzkonformes Analytics-System. Solange kein Anbieter geladen ist,
 * werden Events nur in den dataLayer geschrieben (falls vorhanden) und im
 * Entwicklungsmodus geloggt.
 *
 * Einbindung später:
 *  1. Analytics-Snippet im Root-Route-<head> ergänzen (src/routes/__root.tsx)
 *  2. Hier ggf. window.gtag(...) / _paq.push(...) ergänzen
 */

type TrackingPayload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const CONVERSION_EVENTS = {
  ctaBooking: "cta_beratung_klick",
  calendarView: "kalender_sichtbar",
  calendarClick: "kalender_klick",
  faqOpen: "faq_geoeffnet",
} as const;

export function trackEvent(event: string, payload: TrackingPayload = {}) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...payload });

  // Aktivieren, sobald GA4 eingebunden ist:
  // window.gtag?.("event", event, payload);

  if (import.meta.env.DEV) {
    console.debug("[tracking]", event, payload);
  }
}
