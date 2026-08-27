import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/landing/SiteHeader";
import { Hero } from "@/components/landing/Hero";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { WorkshopSection } from "@/components/landing/WorkshopSection";
import { ParticipationSection } from "@/components/landing/ParticipationSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { ConversionSection } from "@/components/landing/ConversionSection";
import { FaqSection, faqItems } from "@/components/landing/FaqSection";
import { SiteFooter } from "@/components/landing/SiteFooter";

const title = "IDA Labs – ERP für Werkstätten für Menschen mit Behinderung (WfbM)";
const description =
  "ERP-Software für WfbM und Produktionswerkstätten: Aufträge, Produktion, Material, Personal und Verwaltung zentral steuern. Beratungstermin unverbindlich vereinbaren.";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "ERP WfbM, ERP Werkstatt für Menschen mit Behinderung, Digitalisierung WfbM, Software Werkstatt für Menschen mit Behinderung, digitale Werkstattverwaltung, ERP Produktionswerkstatt",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "de_DE" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd),
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <WorkshopSection />
        <ParticipationSection />
        <BenefitsSection />
        <ConversionSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </div>
  );
}
