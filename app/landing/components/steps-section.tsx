import React from "react";
import { ScanLine, Truck, CircleDollarSign } from "lucide-react";
import {
  TypographyH2,
  TypographyLead,
  TypographyH3,
  TypographyMuted,
} from "@/components/ui/typography";

const StepsSection: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-secondary/30 border-y border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 md:mb-24 [&_h2]:border-none [&_h2]:pb-0">
          <TypographyH2>How It Works</TypographyH2>
          <div className="mt-4">
            <TypographyLead>
              Turning your e-waste into value is easier than ever. Just snap,
              connect, and get paid.
            </TypographyLead>
          </div>
        </div>

        {/* Steps Grid container */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Connecting Line (Desktop Only) */}
          {/* This line sits exactly behind the center of the icons to create a timeline effect */}
          <div className="hidden md:block absolute top-12 left-[16.5%] right-[16.5%] h-[2px] bg-border/80 z-0"></div>

          {/* Step 1: AI Analysis (Uses Custom Purple for Tech/AI) */}
          <div className="relative z-10 flex flex-col items-center text-center">
            {/* The solid bg-background blocks the line, while the inner div adds the transparent color tint */}
            <div className="relative h-24 w-24 rounded-full bg-background shadow-sm flex items-center justify-center mb-8 transition-transform duration-300 hover:scale-110">
              <div className="absolute inset-0 rounded-full bg-icon-purple/10"></div>
              <ScanLine className="relative z-10 w-10 h-10 text-icon-purple" />
            </div>
            <TypographyH3>1. Snap a Photo</TypographyH3>
            <div className="mt-3 max-w-xs mx-auto">
              <TypographyMuted>
                Our AI instantly analyzes your {"device's"} condition and
                estimates its local market value. Zero guesswork.
              </TypographyMuted>
            </div>
          </div>

          {/* Step 2: Connection (Uses Custom Blue for Logistics/Connection) */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="relative h-24 w-24 rounded-full bg-background shadow-sm flex items-center justify-center mb-8 transition-transform duration-300 hover:scale-110">
              <div className="absolute inset-0 rounded-full bg-icon-blue/10"></div>
              <Truck className="relative z-10 w-10 h-10 text-icon-blue" />
            </div>
            <TypographyH3>2. Get Connected</TypographyH3>
            <div className="mt-3 max-w-xs mx-auto">
              <TypographyMuted>
                Choose to sell directly to DENR-accredited collectors or match
                with local technicians for repair.
              </TypographyMuted>
            </div>
          </div>

          {/* Step 3: Get Paid (Uses Custom Emerald for Money/Success) */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="relative h-24 w-24 rounded-full bg-background shadow-sm flex items-center justify-center mb-8 transition-transform duration-300 hover:scale-110">
              <div className="absolute inset-0 rounded-full bg-icon-emerald/10"></div>
              <CircleDollarSign className="relative z-10 w-10 h-10 text-icon-emerald" />
            </div>
            <TypographyH3>3. Track & Get Paid</TypographyH3>
            <div className="mt-3 max-w-xs mx-auto">
              <TypographyMuted>
                Monitor your request in real-time. Once the handover is
                complete, receive your payment securely.
              </TypographyMuted>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
