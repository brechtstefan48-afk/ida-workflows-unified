import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CONVERSION_EVENTS, trackEvent } from "@/lib/tracking";

export const faqItems = [
  {
    question: "Für welche Werkstätten eignet sich IDA?",
    answer:
      "IDA ist eine ERP-Lösung für Betriebe, die auftragsbezogen produzieren oder Dienstleistungen erbringen. Interessant ist sie vor allem dort, wo mehrere Arbeitsbereiche, gewerbliche Kunden und eine eigene Materialwirtschaft zusammenkommen – wie es in vielen Werkstätten für Menschen mit Behinderung der Fall ist. Ob IDA zu Ihrer konkreten Struktur passt, klären wir im Gespräch anhand Ihrer Prozesse.",
  },
  {
    question: "Kann IDA mehrere Produktions- und Arbeitsbereiche abbilden?",
    answer:
      "Ja. Aufträge, Arbeitsschritte, Material und Zeiten lassen sich bereichsbezogen führen, etwa für Metall, Holz, Montage, Verpackung, Gartenbau oder Wäscherei. Dadurch bleibt sowohl die Sicht auf den einzelnen Bereich als auch die übergreifende Gesamtsicht möglich.",
  },
  {
    question: "Welche Prozesse können mit IDA digitalisiert werden?",
    answer:
      "Typischerweise Aufträge und Projekte, Produktions- und Terminplanung, Material und Lager, Personal- und Zeiterfassung, Einkauf sowie kaufmännische Auswertungen. Der konkrete Umfang hängt davon ab, welche Abläufe Sie abbilden möchten und wie Ihre heutige Arbeitsweise aussieht.",
  },
  {
    question: "Kann IDA bestehende Systeme ersetzen oder ergänzen?",
    answer:
      "Beides ist grundsätzlich denkbar. Manche Betriebe lösen mehrere Einzellösungen und Excel-Listen ab, andere führen IDA zunächst für einen Teilbereich ein und behalten bestehende Systeme, etwa in der Buchhaltung. Welche Variante sinnvoll ist und welche Schnittstellen dafür nötig wären, prüfen wir gemeinsam.",
  },
  {
    question: "Gibt es Fördermöglichkeiten für Digitalisierung oder technische Arbeitshilfen?",
    answer:
      "Je nach individueller Situation können für digitale beziehungsweise technische Arbeitshilfen unterschiedliche Fördermöglichkeiten bestehen. Ob und in welchem Umfang eine Förderung möglich ist, sollte im konkreten Fall mit dem zuständigen Leistungsträger geprüft werden. Eine Zusage oder Garantie für eine Förderung können wir ausdrücklich nicht geben.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="border-b border-border bg-surface scroll-mt-20">
      <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 lg:py-24">
        <h2 className="font-display text-2xl leading-tight font-semibold sm:text-3xl">
          Häufige Fragen
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Kurze Antworten zu IDA im Kontext von Werkstätten und Produktionsbetrieben.
        </p>

        <Accordion
          type="single"
          collapsible
          className="mt-10"
          onValueChange={(value) => {
            if (value) trackEvent(CONVERSION_EVENTS.faqOpen, { question: value });
          }}
        >
          {faqItems.map((item) => (
            <AccordionItem key={item.question} value={item.question}>
              <AccordionTrigger className="text-left font-display text-base font-semibold">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
