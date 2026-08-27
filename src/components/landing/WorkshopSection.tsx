import { Check } from "lucide-react";
import { BookingButton } from "./BookingButton";

const points = [
  "Mehrere Arbeitsbereiche zentral verwalten – etwa Metall, Holz, Montage, Verpackung, Gartenbau oder Wäscherei.",
  "Aufträge und Produktionsprozesse über Bereichsgrenzen hinweg transparent verfolgen.",
  "Materialverbrauch und Lagerbestände kontrollieren und Aufträgen zuordnen.",
  "Arbeitszeiten und erbrachte Leistungen digital erfassen.",
  "Informationen für Geschäftsführung, Bereichs- und Produktionsleitung zentral verfügbar machen.",
  "Weniger manuelle Übertragung zwischen verschiedenen Systemen und Listen.",
];

export function WorkshopSection() {
  return (
    <section id="werkstatt" className="border-b border-border bg-background scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <p className="text-xs font-medium tracking-wide text-primary uppercase">
              Relevanz für Werkstätten
            </p>
            <h2 className="mt-3 font-display text-2xl leading-tight font-semibold sm:text-3xl lg:text-[2.35rem]">
              Für komplexe Werkstattstrukturen gemacht.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Werkstätten für Menschen mit Behinderung arbeiten häufig wie mehrere Betriebe unter
              einem Dach: unterschiedliche Produktions- und Dienstleistungsbereiche, gewerbliche
              Kunden, eigene Materialwirtschaft und eine übergreifende Verwaltung. Genau diese
              Vielschichtigkeit macht ein ERP-System interessant, das Aufträge, Fertigung, Material
              und kaufmännische Prozesse in einer gemeinsamen Datenbasis führt.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              IDA ist eine allgemeine ERP-Lösung für produzierende und auftragsbezogen arbeitende
              Betriebe. Ob und wie sich Ihre konkreten Abläufe damit abbilden lassen, klären wir am
              besten anhand Ihrer tatsächlichen Prozesse.
            </p>
            <div className="mt-8">
              <BookingButton location="werkstatt" label="Passung im Gespräch klären" variant="quiet" />
            </div>
          </div>

          <ul className="space-y-3">
            {points.map((point) => (
              <li
                key={point}
                className="flex gap-4 rounded-lg border border-border bg-card p-5 shadow-card"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-signal/20 text-signal-foreground"
                >
                  <Check className="h-3.5 w-3.5" />
                </span>
                <p className="text-sm leading-relaxed">{point}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
