import { COMPANY_NAME, COMPANY_URL, PRODUCT_URL } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} IDA Labs</p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a
            href={PRODUCT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            idalabs.de
          </a>
          <a
            href={COMPANY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            {COMPANY_NAME}
          </a>
        </div>
      </div>
    </footer>
  );
}
