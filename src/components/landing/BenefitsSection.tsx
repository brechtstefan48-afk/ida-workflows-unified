const benefits = [
  {
    title: "Mehr Transparenz",
    text: "Aufträge, Fertigungsstand und Bestände sind an einer Stelle sichtbar.",
  },
  {
    title: "Weniger manuelle Verwaltung",
    text: "Wiederkehrende Erfassungs- und Übertragungsschritte entfallen oder werden kürzer.",
  },
  {
    title: "Zentrale Informationen",
    text: "Eine gemeinsame Datenbasis statt verteilter Listen und Einzellösungen.",
  },
  {
    title: "Bessere Planbarkeit",
    text: "Termine, Kapazitäten und Materialbedarf lassen sich früher erkennen.",
  },
  {
    title: "Nachvollziehbare Prozesse",
    text: "Vorgänge sind dokumentiert und im Nachhinein rekonstruierbar.",
  },
  {
    title: "Weniger doppelte Dateneingabe",
    text: "Daten werden einmal erfasst und in den weiteren Prozessen verwendet.",
  },
];

export function BenefitsSection() {
  return (
    <section id="vorteile" className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
        <h2 className="max-w-2xl font-display text-2xl leading-tight font-semibold sm:text-3xl lg:text-[2.35rem]">
          Was Sie mit IDA erreichen können
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Welche dieser Effekte in Ihrer Werkstatt am stärksten wirken, hängt von Ihrer heutigen
          Arbeitsweise ab. Genau das lässt sich im Gespräch gut einordnen.
        </p>

        <dl className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div key={benefit.title} className="border-t border-border pt-5">
              <span className="font-display text-sm text-primary tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <dt className="mt-2 font-display text-lg font-semibold">{benefit.title}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{benefit.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
