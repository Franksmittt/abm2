// src/app/page.tsx

import HeroSection from "@/components/layout/HeroSection";
import ServiceGrid from "@/components/layout/ServiceGrid"; 
import ProductSpotlight from "@/components/layout/ProductSpotlight"; 
import TrustAuthoritySection from "@/components/layout/TrustAuthoritySection"; 
import TestimonialSection from "@/components/layout/TestimonialSection"; 
import FaqSection from "@/components/layout/FaqSection"; // <-- NEW IMPORT
import ThinCta from "@/components/layout/ThinCta"; // <-- NEW IMPORT
import StorefrontCTA from "@/components/layout/StorefrontCTA"; 

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 1. High-Impact Hero Section (Dark) */}
      <HeroSection />

      {/* 2. Conversion-Focused Service Grid (Dark) */}
      <ServiceGrid />

      {/* 3. Product Authority Spotlight (Dark) */}
      <ProductSpotlight />

      {/* 4. Trust & Authority Section (Dark) */}
      <TrustAuthoritySection />

      {/* 5. FAQ Section (SUBTLE CONTRAST: Uses bg-card for visual break) */}
      <FaqSection />

      {/* 6. Testimonial Section (Social Proof & Final Trust - Dark) */}
      <TestimonialSection />

      {/* 7. Thin CTA (MAXIMUM CONTRAST: Full Red band for final urgency) */}
      <ThinCta />

      {/* 8. Storefront CTA / Final Conversion Block (Dark Card on Dark BG) */}
      <StorefrontCTA />

      {/* Page content ends here and flows into the Footer from layout.tsx */}
    </div>
  );
}