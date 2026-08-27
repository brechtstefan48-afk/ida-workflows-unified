import { Button, type ButtonProps } from "@/components/ui/button";
import { CALENDAR_URL, BOOKING_ANCHOR } from "@/lib/site";
import { CONVERSION_EVENTS, trackEvent } from "@/lib/tracking";

interface BookingButtonProps extends Omit<ButtonProps, "asChild"> {
  /** Position auf der Seite – für die spätere Conversion-Auswertung */
  location: string;
  label?: string;
}

/**
 * Zentraler Conversion-Button.
 * Solange kein Kalenderlink konfiguriert ist (siehe src/lib/site.ts),
 * scrollt der Button zum Kalenderbereich.
 */
export function BookingButton({
  location,
  label = "Beratungstermin vereinbaren",
  variant = "cta",
  size = "xl",
  ...props
}: BookingButtonProps) {
  const href = CALENDAR_URL ?? BOOKING_ANCHOR;
  const isExternal = Boolean(CALENDAR_URL);

  return (
    <Button variant={variant} size={size} asChild {...props}>
      <a
        href={href}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        data-cta={location}
        onClick={() => trackEvent(CONVERSION_EVENTS.ctaBooking, { location, label })}
      >
        {label}
      </a>
    </Button>
  );
}
