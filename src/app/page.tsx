// C:\Users\User1\abm2\src\app\page.tsx
import HeroSection from "@/components/layout/HeroSection";
import ThinCta from "@/components/layout/ThinCta";
import ProductSpotlight from "@/components/content/ProductSpotlight"; 
import ServiceGrid from "@/components/layout/ServiceGrid"; // Core service features/categories
import TestimonialSection from "@/components/layout/TestimonialSection"; // Social proof

export default function Home() {
  return (
    // The main tag serves as the root container for the page content
    <main>
      
      {/* 1. PRIMARY HERO SECTION (First screen content, fixed height) */}
      <HeroSection />
      
      {/* 2. PRODUCT SPOTLIGHT (Randomized product showcase) */}
      <ProductSpotlight count={3} /> 
      
      {/* 3. CORE SERVICE FEATURES / CATEGORIES (4-column grid) */}
      <ServiceGrid /> 
      
      {/* 4. TESTIMONIALS / SOCIAL PROOF */}
      <TestimonialSection /> 
      
      {/* 5. THIN CONVERSION CTA (Bottom-of-page contact funnel) */}
      <ThinCta />
      
      {/* Additional layout components you may have, such as: */}
      {/* <TrustAuthoritySection /> */}
      {/* <StorefrontCTA /> */}
      
    </main>
  );
}