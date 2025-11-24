// src/components/layout/HeroSection.tsx
import { Zap, MapPin } from "lucide-react";
import React from "react";
import { HeroCtaButtons } from "./HeroCtaButtons";

type HeroSectionProps = {
  variant?: "control" | "variant";
};

const HeroSection = ({ variant = "control" }: HeroSectionProps) => {
  // H1 Headline - Direct, Urgent, Expert-Focused per Brand Identity
  const coreHeadline = (
    <>
      <span className="text-battery">MOBILE</span> Battery Replacement with{" "}
      <span className="text-battery">GUARANTEED TESTING</span> & Fitment On-Site.
    </>
  );

  // --- Brand Identity: Direct, Urgent, Expert-Focused Messaging ---
  const calloutWording =
    variant === "variant"
      ? "Don't guess. Know for sure. We test your battery, alternator, and starter before swapping anything—at your driveway."
      : "Dead battery? Don't get stuck. Our mobile team brings guaranteed testing and the right battery to you fast in Alberton, New Redruth, and Meyersdal.";

  return (
    <section className="relative w-full bg-background min-h-[calc(100vh-5rem)] flex items-center pt-20">
      <div className="container px-4 md:px-6 lg:px-8 py-4 md:py-6 max-w-4xl mx-auto w-full">
        <div className="flex flex-col items-center text-center space-y-3 md:space-y-4">
          
          {/* Primary Urgent Headline: High-Contrast, Extra Bold per Brand Identity */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-[1.1] max-w-4xl">
            {coreHeadline}
          </h1>

          {/* Secondary Expert-Focused Callout - Direct & Urgent */}
          <p className="text-base md:text-lg lg:text-xl text-foreground font-medium max-w-3xl leading-snug">
            {calloutWording}
          </p>

          {/* High-Contrast Dual CTA - Above the Fold, Maximum Visibility */}
          <div className="pt-1">
            <HeroCtaButtons variant={variant} />
          </div>

          {/* Simple Trust Indicators - Minimal, Clean */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-5 pt-2 text-foreground/80">
            <div className="flex items-center gap-1.5">
              <Zap className="h-4 w-4 text-battery" />
              <span className="text-xs md:text-sm font-medium">Free On-Site Diagnostics</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-battery" />
              <span className="text-xs md:text-sm font-medium">Serving Alberton, New Redruth & Meyersdal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;