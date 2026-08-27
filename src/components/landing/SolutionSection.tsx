import {
  ClipboardList,
  Factory,
  Boxes,
  Users,
  ShoppingCart,
  LineChart,
  type LucideIcon,
} from "lucide-react";

interface Module {
  icon: LucideIcon;
  title: string;
  text: string;
}

const modules: Module[] = [
  {
    icon: ClipboardList,
    title: "Aufträge & Projekte",
    text: "Kundenaufträge zentral anlegen, strukturieren und über alle Bearbeitungsschritte verfolgen. Der aktuelle Stand ist für alle Beteiligten einsehbar.",
  },
  {
    icon: Factory,
    title: "Produktion & Planung",
    text: "Arbeitsschritte, Termine und Kapazitäten digital planen. Der Fortschritt in der Fertigung bleibt nachvollziehbar dokumentiert.",
  },
  {
    icon: Boxes,
    title: "Material & Lager",
    text: "Materialbedarf, Verbrauch und Bestände an einer Stelle führen. Bewegungen werden im Zusammenhang mit dem jeweiligen Auftrag erfasst.",
  },
  {
    icon: Users,
    title: "Personal & Zeiten",
    text: "Arbeitszeiten und erbrachte Leistungen digital erfassen statt auf Papier. Die Zuordnung zu Aufträgen und Bereichen erfolgt direkt im System.",
  },
  {
    icon: ShoppingCart,
    title: "Einkauf",
    text: "Bestellungen, Lieferanten und Wareneingänge strukturiert abbilden. Beschaffung und Materialbedarf hängen im System zusammen.",
  },
  {
    icon: LineChart,
    title: "Finanzen & Controlling",
    text: "Kaufmännische Vorgänge und Auswertungen auf Basis der erfassten Daten. Kennzahlen entstehen aus dem laufenden Betrieb statt aus Nacharbeit.",
  },
];

export function SolutionSection() {
  return (
    <section
      id="loesung"
      className="border-b border-border bg-[image:var(--gradient-soft)] scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-medium tracking-wide text-primary uppercase">Die Lösung</p>
          <h2 className="mt-3 font-display text-2xl leading-tight font-semibold sm:text-3xl lg:text-[2.35rem]">
            IDA bringt Ihre betrieblichen Prozesse zusammen.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Produktion, Aufträge, Mitarbeiter, Material und Verwaltung zentral steuern – mit einer
            ERP-Lösung, die Ihre betrieblichen Prozesse digital zusammenführt.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="group rounded-xl border border-border bg-card p-6 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/35"
            >
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon aria-hidden="true" className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
