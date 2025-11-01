// src/components/layout/ServiceGrid.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Lightbulb, Battery, ShieldCheck } from "lucide-react"; 
import NextLink from "next/link";
import { Button } from "@/components/ui/button";

const ServiceGrid = () => {
  // Service blocks designed to capture distinct market needs (Automotive, Solar, Trust)
  const serviceBlocks = [
    {
      title: "Mobile Emergency Service",
      icon: Zap,
      description: "Fast on-site fitment, diagnostics, and alternator checks. Call us for immediate, guaranteed assistance.",
      ctaText: "Call Now: 010 109 6211",
      ctaHref: "tel:0101096211",
      variant: "battery", // Bright Red for Urgency
      keyFact: "Free Testing & Fitment On-Site", 
    },
    {
      title: "Multi-Brand Authority",
      icon: Battery,
      description: "Stocking Willard, Enertec, Exide, and more. Find the perfect OEM-spec battery for any vehicle.",
      ctaText: "Shop Car Batteries",
      ctaHref: "/products/automotive",
      variant: "outline", // White outline for Product Search
      keyFact: "All EFB & AGM Technologies Stocked", 
    },
    {
      title: "Solar & Backup Power",
      icon: Lightbulb,
      description: "LiFePO₄ and Deep Cycle batteries for load shedding solutions. Turnkey system design available.",
      ctaText: "Get Solar Quote",
      ctaHref: "/quote/solar",
      variant: "secondary", // Secondary color for long-term investment
      keyFact: "Expert Advice on LiFePO₄ Systems", 
    },
  ];

  return (
    <section className="w-full bg-card py-16">
      <div className="container px-4 md:px-6 lg:px-8 space-y-10">
        
        {/* Section Headline */}
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground">
            Alberton&apos;s Local Battery & Energy Experts {/* <-- FIX APPLIED HERE */}
          </h2>
          <p className="text-xl text-muted-foreground mt-2">
            Service, Selection, and Solutions for Every Power Need.
          </p>
        </div>

        {/* Grid of Featured Services */}
        <div className="grid md:grid-cols-3 gap-8">
          {serviceBlocks.map((block, index) => (
            <Card key={index} className="flex flex-col h-full bg-background border-battery shadow-lg hover:shadow-battery/40 transition-shadow">
              <CardHeader className="space-y-4 flex-grow">
                <div className="flex items-center space-x-3 text-battery">
                  <block.icon className="h-6 w-6" />
                  <CardTitle className="text-2xl font-bold text-foreground">{block.title}</CardTitle>
                </div>
                <p className="text-muted-foreground">{block.description}</p>
                
                {/* Highlighted Fact */}
                <div className="pt-2 text-sm text-battery font-semibold border-t border-dashed border-border">
                    <ShieldCheck className="h-4 w-4 inline mr-2 align-text-bottom"/> {block.keyFact}
                </div>

              </CardHeader>
              <CardContent className="p-6 pt-0">
                <Button asChild variant={block.variant as "default"} className="w-full">
                  {/* Note: Using <a> directly for tel: link, <NextLink> for internal next.js navigation */}
                  {block.ctaHref.startsWith("tel:") ? (
                    <a href={block.ctaHref}>{block.ctaText}</a>
                  ) : (
                    <NextLink href={block.ctaHref}>{block.ctaText}</NextLink>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Secondary Trust Signal Row */}
        <div className="flex justify-center text-center pt-8">
            <p className="text-lg text-foreground">
                Trusted Brands: Willard, Enertec, Exide, Sabat, and more. <span className="text-battery font-semibold">Up to 36-Month Warranty Available.</span>
            </p>
        </div>

      </div>
    </section>
  );
};

export default ServiceGrid;