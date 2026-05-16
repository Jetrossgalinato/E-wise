//components
import { ModeToggle } from "./mode-toggle";
import { TypographyH4 } from "./ui/typography";
import { Button } from "./ui/button";

//next
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border-60 bg-card backdrop-blur">
      <div className="container mx-auto px-4 md:px-8 flex h-16 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <Image
            src="/icon.png"
            alt="E-Wise Logo"
            width={32}
            height={32}
            className="dark:brightness-80"
          />
          <TypographyH4>E-Wise</TypographyH4>
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link
              href="/"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Home
            </Link>
            <Link
              href="#/pricing"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Pricing
            </Link>
            <Link
              href="#/about"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              About
            </Link>
          </nav>

          <div className="h-4 w-[1px] bg-border mx-2 hidden md:block" />

          <div className="flex items-center">
            <ModeToggle />
            <Link href="/login">
              <Button size="md" className="ml-4">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
