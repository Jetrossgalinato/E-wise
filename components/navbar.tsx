import { ModeToggle } from "./mode-toggle";
import Image from "next/image";
import { TypographyLarge } from "./ui/typography";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border-60 bg-card backdrop-blur">
      <div className="container mx-auto px-4 md:px-8 flex h-14 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <Image
            src="/icon.png"
            alt="E-Wise Logo"
            width={28}
            height={28}
            className="dark:brightness-80"
          />
          <TypographyLarge>E-Wise</TypographyLarge>
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a
              href="#"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Features
            </a>
            <a
              href="#"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Pricing
            </a>
            <a
              href="#"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              About
            </a>
          </nav>

          <div className="h-4 w-[1px] bg-border mx-2 hidden md:block" />

          <div className="flex items-center">
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
