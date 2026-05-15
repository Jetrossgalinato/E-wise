import { TypographyMuted, TypographyP } from "./ui/typography";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-16 border-t border-border/80 bg-card/70 backdrop-blur">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto max-w-screen-2xl px-4 py-8 md:px-8 md:py-10">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="space-y-1 text-center sm:text-left">
            <TypographyP>E-Wise</TypographyP>
            <TypographyMuted>
              Circular intelligence for cleaner cities.
            </TypographyMuted>
          </div>

          <nav className="flex items-center gap-5 text-xs text-muted-foreground">
            <a href="#" className="transition-colors hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Terms
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Contact
            </a>
          </nav>
        </div>

        <TypographyMuted>© {year} E-Wise. All rights reserved.</TypographyMuted>
      </div>
    </footer>
  );
}
