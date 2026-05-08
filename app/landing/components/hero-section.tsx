import React from "react";
import {
  TypographyH1,
  TypographyLead,
  TypographyMuted,
} from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full bg-background overflow-hidden pt-16 pb-12 md:pt-24 md:pb-16 transition-colors duration-300">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl rounded-full opacity-70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Main Headline */}
        <div className="mb-6">
          <TypographyH1>
            Smart e-waste.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent pb-1 inline-block">
              Circular by design.
            </span>
          </TypographyH1>
        </div>

        {/* Sub-headline */}
        <div className="max-w-[42rem] mb-8">
          <TypographyLead>
            Turn your broken phones, dead laptops, and old TVs into value while
            saving Butuan City from toxic waste.
          </TypographyLead>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12 w-full">
          {/* Primary Button */}
          <Button
            variant="default"
            size="lg"
            className="rounded-full px-8 h-14 text-base shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-transform duration-200"
          >
            Get an Estimate
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Button>

          {/* Secondary Button */}
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 h-14 text-base border-2"
          >
            Learn More
          </Button>
        </div>

        {/* Image / Mockup Placeholder */}
        <div className="relative w-full max-w-4xl mt-4 rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl shadow-foreground/5 border border-border bg-card aspect-video flex items-center justify-center transition-colors duration-300">
          <div className="flex flex-col items-center gap-2">
            <svg
              className="w-8 h-8 opacity-50 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <TypographyMuted>
              [ Insert High-Fidelity UI Mockup Here ]
            </TypographyMuted>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
