import React from "react";
import { Camera, Cpu, ShieldCheck, Wrench, Activity } from "lucide-react";
import {
  TypographyH2,
  TypographyLead,
  TypographyH3,
  TypographyMuted,
} from "@/components/ui/typography";
import { ShineCard } from "@/components/ui/shine-card";

const SolutionSection: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16 [&_h2]:border-none [&_h2]:pb-0">
          <TypographyH2>The Circular Solution</TypographyH2>
          <div className="mt-4">
            <TypographyLead>
              E-WISE is an AI-powered, city-wide platform that changes
              everything. Sell directly, repair locally, and track every step in
              real-time.
            </TypographyLead>
          </div>
        </div>

        {/* Bento Box Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {/* Feature 1: AI Value Estimator (Keeps Primary Green) */}
          <ShineCard className="md:col-span-2 bg-card">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
              <Camera className="w-6 h-6" />
            </div>
            <TypographyH3>AI Value Estimator</TypographyH3>
            <div className="mt-3 flex-1 max-w-lg">
              <TypographyMuted>
                Snap a photo of your old phone. Our AI instantly analyzes its
                condition and gives you a fair, local market price. We
                completely remove the guesswork.
              </TypographyMuted>
            </div>
          </ShineCard>

          {/* Feature 2: AI Material Classifier (Keeps Accent Yellow) */}
          <ShineCard className="bg-card">
            <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center mb-6 text-accent">
              <Cpu className="w-6 h-6" />
            </div>
            <TypographyH3>Material Classifier</TypographyH3>
            <div className="mt-3 flex-1">
              <TypographyMuted>
                Built right into the core. Our AI tells you exactly what can be
                reused, recycled, or requires safe handling. It works like
                magic.
              </TypographyMuted>
            </div>
          </ShineCard>

          {/* Feature 3: Verified Collectors (Uses Custom Emerald Green) */}
          <ShineCard className="bg-secondary/50">
            <div className="h-12 w-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6 text-emerald-500">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <TypographyH3>Verified Collectors</TypographyH3>
            <div className="mt-3 flex-1">
              <TypographyMuted>
                Instead of giving items away, sell them directly to
                DENR-accredited collectors. {"It's"} fully legal, traceable, and
                secure.
              </TypographyMuted>
            </div>
          </ShineCard>

          {/* Feature 4: Local Repair Network (Uses Custom Amber) */}
          <ShineCard className="bg-secondary/50">
            <div className="h-12 w-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-6 text-amber-500">
              <Wrench className="w-6 h-6" />
            </div>
            <TypographyH3>Repair & Upcycle</TypographyH3>
            <div className="mt-3 flex-1">
              <TypographyMuted>
                Before you throw a device out, connect with local technicians to
                repair it, or upcycle old components on our marketplace.
              </TypographyMuted>
            </div>
          </ShineCard>

          {/* Feature 5: Real-Time Tracking (Uses Custom Blue) */}
          <ShineCard className="bg-secondary/50">
            <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 text-blue-500">
              <Activity className="w-6 h-6" />
            </div>
            <TypographyH3>Real-Time Tracking</TypographyH3>
            <div className="mt-3 flex-1">
              <TypographyMuted>
                From the moment you make a request to the moment you get paid,
                everything is tracked. Total transparency. Total trust.
              </TypographyMuted>
            </div>
          </ShineCard>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
