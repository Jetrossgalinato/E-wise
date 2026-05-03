import { ModeToggle } from "@/components/mode-toggle";
import { TypographyH1 } from "@/components/ui/typography";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-row items-center justify-between">
      <ModeToggle />
      <TypographyH1>Welcome to E-Wise</TypographyH1>
    </div>
  );
}
