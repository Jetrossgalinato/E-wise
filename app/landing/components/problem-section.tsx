import React from "react";
import { Trash2, TrendingDown, Building2 } from "lucide-react";
import {
  TypographyH2,
  TypographyLead,
  TypographyLarge,
  TypographyMuted,
  TypographyP,
} from "@/components/ui/typography";

const ProblemSection: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-20 bg-secondary/30 border-y border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16 [&_h2]:border-none [&_h2]:pb-0">
          <TypographyH2>The Silent Crisis</TypographyH2>
          <div className="mt-4">
            <TypographyLead>
              We looked at what happens to old electronics, and the reality is
              shocking. Toxic metals are leaching into our soil, batteries are
              causing fires, and valuable materials are thrown away.
            </TypographyLead>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 md:mb-16">
          {/* Stat Card 1 */}
          <div className="flex flex-col items-center text-center p-8 lg:p-10 rounded-[2rem] bg-card text-card-foreground shadow-sm hover:shadow-md border border-transparent dark:border-white/10 dark:hover:border-white/20 transition-all duration-300 h-full">
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
              <Trash2 className="w-7 h-7" />
            </div>
            <span className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-3 text-foreground">
              537k
            </span>
            <TypographyLarge>Tonnes of E-Waste</TypographyLarge>
            <div className="mt-3 flex-1">
              <TypographyMuted>
                Generated in the Philippines in 2022 alone. Most of it ends up
                in a drawer, or worse, a landfill.
              </TypographyMuted>
            </div>
          </div>

          {/* Stat Card 2 */}
          <div className="flex flex-col items-center text-center p-8 lg:p-10 rounded-[2rem] bg-card text-card-foreground shadow-sm hover:shadow-md border border-transparent dark:border-white/10 dark:hover:border-white/20 transition-all duration-300 h-full">
            <div className="h-14 w-14 rounded-full bg-destructive/10 flex items-center justify-center mb-6 text-destructive">
              <TrendingDown className="w-7 h-7" />
            </div>
            <span className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-3 text-foreground">
              &lt; 0.5%
            </span>
            <TypographyLarge>Properly Collected</TypographyLarge>
            <div className="mt-3 flex-1">
              <TypographyMuted>
                The staggering fraction of e-waste actually collected by
                government systems. The system is broken.
              </TypographyMuted>
            </div>
          </div>

          {/* Stat Card 3 */}
          <div className="flex flex-col items-center text-center p-8 lg:p-10 rounded-[2rem] bg-card text-card-foreground shadow-sm hover:shadow-md border border-transparent dark:border-white/10 dark:hover:border-white/20 transition-all duration-300 h-full">
            <div className="h-14 w-14 rounded-full bg-accent/20 flex items-center justify-center mb-6 text-accent">
              <Building2 className="w-7 h-7" />
            </div>
            <span className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-3 text-foreground">
              Zero
            </span>
            <TypographyLarge>Dedicated Systems</TypographyLarge>
            <div className="mt-3 flex-1">
              <TypographyMuted>
                Right here in Butuan City, there are zero dedicated, city-wide
                systems for e-waste disposal.
              </TypographyMuted>
            </div>
          </div>
        </div>

        {/* Closing Thought / Pivot to Solution */}
        <div className="max-w-2xl mx-auto pt-8 border-t border-border/50 flex justify-center text-center">
          <TypographyP>
            We knew there had to be a better way. Instead of giving your items
            away for a tiny fraction of their worth, or letting them disappear
            into sidecars...
          </TypographyP>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
