import { BookingButton } from "./BookingButton";

const navItems = [
  { href: "#loesung", label: "Lösung" },
  { href: "#werkstatt", label: "Für Werkstätten" },
  { href: "#faq", label: "Fragen" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5" aria-label="IDA Labs Startseite">
          <span
            aria-hidden="true"
            className="grid h-8 w-8 place-items-center rounded-md bg-[image:var(--gradient-primary)] text-sm font-semibold text-primary-foreground"
          >
            ID
          </span>
          <span className="font-display text-base font-semibold tracking-tight">IDA Labs</span>
        </a>

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <BookingButton
          location="header"
          label="Beratung vereinbaren"
          size="default"
          className="hidden sm:inline-flex"
        />
      </div>
    </header>
  );
}
