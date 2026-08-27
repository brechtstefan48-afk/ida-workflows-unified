import { useEffect, useRef } from "react";
import { CalendarDays } from "lucide-react";
import { BookingButton } from "./BookingButton";
import { CALENDAR_EMBED_URL, CALENDAR_URL } from "@/lib/site";
import { CONVERSION_EVENTS, trackEvent } from "@/lib/tracking";

export function ConversionSection() {
  const calendarRef = useRef<HTMLDivElement>(null);
  const tracked = useRef(false);

  // Sichtbarkeit des Kalenderbereichs für die spätere Funnel-Auswertung
  useEffect(() => {
    const node = calendarRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !tracked.current) {
            tracked.current = true;
            trackEvent(CONVERSION_EVENTS.calendarView);
          }
        });
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="termin" className="relative overflow-hidden surface-ink scroll-mt-20">
      <div aria-hidden="true" className="absolute inset-0 grid-lines opacity-50" />
      <div className="relative mx-auto max-w-5xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl leading-tight font-semibold text-ink-foreground sm:text-3xl lg:text-[2.4rem]">
            Sehen Sie selbst, wie IDA zu Ihrer Werkstatt passen kann.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-muted">
            In einem unverbindlichen Gespräch zeigen wir Ihnen, wie sich Ihre aktuellen Prozesse mit
            IDA digital abbilden lassen und wo sich Potenzial zur Vereinfachung ergibt.
          </p>
          <div className="mt-8">
            <BookingButton location="conversion" label="Beratungstermin vereinbaren" />
            <p className="mt-4 text-sm text-ink-muted">Kostenlos und unverbindlich.</p>
          </div>
        </div>

        {/* ------------------------------------------------------------------
            KALENDER
            CALENDAR LINK HERE
            Kalenderlink bzw. Embed-URL in src/lib/site.ts eintragen
            (CALENDAR_URL für einen Button-Link, CALENDAR_EMBED_URL für einen
            Calendly-Inline-Embed). Der Platzhalter entfällt dann automatisch.
        ------------------------------------------------------------------- */}
        <div
          ref={calendarRef}
          id="kalender"
          className="mt-14 rounded-2xl border border-ink-foreground/15 bg-ink-foreground/5 p-4 backdrop-blur-sm sm:p-6"
        >
          {CALENDAR_EMBED_URL ? (
            <iframe
              src={CALENDAR_EMBED_URL}
              title="Terminkalender – Beratungstermin auswählen"
              className="h-[680px] w-full rounded-xl border-0 bg-card"
              loading="lazy"
            />
          ) : (
            <div className="grid min-h-[320px] place-items-center rounded-xl border border-dashed border-ink-foreground/25 px-6 py-14 text-center">
              <div>
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-ink-foreground/10 text-ink-foreground">
                  <CalendarDays aria-hidden="true" className="h-6 w-6" />
                </span>
                <p className="mt-5 font-display text-xl font-semibold text-ink-foreground">
                  Hier Termin auswählen
                </p>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-muted">
                  An dieser Stelle wird der Terminkalender eingebunden. Bis dahin erreichen Sie uns
                  über den Beratungs-Button oder direkt per Rückmeldung auf unsere E-Mail.
                </p>
                <div className="mt-6">
                  <BookingButton
                    location="kalender_platzhalter"
                    label={CALENDAR_URL ? "Termin auswählen" : "Beratung anfragen"}
                    variant="onInk"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
