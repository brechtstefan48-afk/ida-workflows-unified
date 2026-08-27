import { Info } from "lucide-react";

export function ParticipationSection() {
  return (
    <section id="teilhabe" className="border-b border-border bg-surface">
      <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8 lg:py-24">
        <p className="text-xs font-medium tracking-wide text-primary uppercase">
          Teilhabe und Arbeitsplatzgestaltung
        </p>
        <h2 className="mt-3 font-display text-2xl leading-tight font-semibold sm:text-3xl">
          Digitale Prozesse können mehr als Verwaltung vereinfachen.
        </h2>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            Wenn Arbeitsschritte, Aufträge und Materialflüsse klar strukturiert und digital
            hinterlegt sind, entsteht Transparenz nicht nur in der Verwaltung, sondern auch am
            Arbeitsplatz. Je nach konkreter Ausgestaltung können übersichtlich aufbereitete
            Informationen dazu beitragen, Abläufe verständlicher, wiederholbarer und zugänglicher zu
            gestalten.
          </p>
          <p>
            Wie weit das im Einzelfall trägt, hängt von den Arbeitsbereichen, den Endgeräten vor Ort
            und der pädagogischen wie organisatorischen Umsetzung ab. Wir stellen das nicht als
            Automatismus dar, sondern besprechen es gerne konkret an Ihren Abläufen.
          </p>
        </div>

        <aside className="mt-8 flex gap-4 rounded-xl border border-border bg-card p-6 shadow-card">
          <Info aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <p className="text-sm leading-relaxed text-muted-foreground">
            Je nach individueller Situation können für digitale beziehungsweise technische
            Arbeitshilfen unterschiedliche Fördermöglichkeiten bestehen. Ob und in welchem Umfang
            eine Förderung möglich ist, sollte im konkreten Fall mit dem zuständigen Leistungsträger
            geprüft werden.
          </p>
        </aside>
      </div>
    </section>
  );
}
