import { Button } from "@/components/ui/button";
import dashboardImage from "@/assets/ida-dashboard.jpg";
import { BookingButton } from "./BookingButton";

const quickFacts = [
  "Aufträge & Produktion",
  "Material & Lager",
  "Personal & Zeiten",
  "Einkauf & Controlling",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden surface-ink">
      <div aria-hidden="true" className="absolute inset-0 grid-lines opacity-60" />
      <div className="relative mx-auto max-w-6xl px-5 pt-16 pb-20 sm:px-8 sm:pt-20 lg:pt-24 lg:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div className="reveal">
            <p className="mb-5 inline-flex items-center rounded-full border border-ink-foreground/20 px-3 py-1 text-xs font-medium tracking-wide text-ink-muted uppercase">
              ERP für Werkstätten und Produktionsbetriebe
            </p>
            <h1 className="font-display text-3xl leading-[1.12] font-semibold text-ink-foreground sm:text-4xl lg:text-[3.1rem]">
              Mehr Überblick über Ihre Werkstatt.
              <br className="hidden sm:block" /> Weniger Verwaltungsaufwand.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
              IDA verbindet Aufträge, Produktion, Material, Personal und kaufmännische Prozesse in
              einer zentralen digitalen Lösung – speziell interessant für Werkstätten mit
              vielfältigen Produktions- und Dienstleistungsbereichen.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <BookingButton location="hero" label="Persönliche Beratung vereinbaren" />
              <Button variant="onInk" size="xl" asChild>
                <a href="#loesung">IDA kennenlernen</a>
              </Button>
            </div>

            <p className="mt-5 text-sm text-ink-muted">
              Unverbindlich. Persönlich. Auf Ihre Prozesse zugeschnitten.
            </p>

            <ul className="mt-9 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-ink-foreground/15 pt-6 text-sm text-ink-muted sm:max-w-lg">
              {quickFacts.map((fact) => (
                <li key={fact} className="flex items-center gap-2">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-signal" />
                  {fact}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal">
            <div className="overflow-hidden rounded-xl border border-ink-foreground/12 shadow-elevated">
              <img
                src={dashboardImage}
                alt="Schematische Darstellung einer zentralen ERP-Oberfläche mit Auftrags-, Produktions- und Lagerübersicht"
                width={1408}
                height={1008}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
