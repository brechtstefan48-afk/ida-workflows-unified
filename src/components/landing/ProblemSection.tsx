const challenges = [
  {
    title: "Uneinheitliche Auftragsdokumentation",
    text: "Aufträge werden je nach Bereich unterschiedlich erfasst und abgelegt.",
  },
  {
    title: "Material und Lagerbestände",
    text: "Bestände lassen sich nur mit erheblichem Aufwand aktuell halten.",
  },
  {
    title: "Manuelle Zeiterfassung",
    text: "Produktions- und Arbeitszeiten werden häufig auf Papier oder in Listen erfasst.",
  },
  {
    title: "Verteilte Informationen",
    text: "Daten liegen in Excel, Papierunterlagen oder verschiedenen Einzellösungen.",
  },
  {
    title: "Fehlender Gesamtüberblick",
    text: "Geschäftsführung und Bereichsleitung sehen den Stand nicht an einer Stelle.",
  },
  {
    title: "Doppelte Erfassung",
    text: "Dieselben Daten werden mehrfach zwischen Systemen übertragen.",
  },
];

export function ProblemSection() {
  return (
    <section id="herausforderungen" className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-medium tracking-wide text-primary uppercase">
            Typische Ausgangslage
          </p>
          <h2 className="mt-3 font-display text-2xl leading-tight font-semibold sm:text-3xl lg:text-[2.35rem]">
            Wenn Informationen auf mehrere Systeme, Listen und Prozesse verteilt sind.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Nicht jede Werkstatt erlebt alle Punkte gleichermaßen. In Gesprächen mit Werkstätten und
            Produktionsbetrieben begegnen uns jedoch immer wieder ähnliche Herausforderungen.
          </p>
        </div>

        <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {challenges.map((item) => (
            <li key={item.title} className="bg-card p-6 lg:p-7">
              <h3 className="text-[0.95rem] font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
