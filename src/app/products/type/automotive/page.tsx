// src/app/products/type/automotive/page.tsx
import ProductListPage from "@/components/layout/ProductListPage";
import { ALL_PRODUCTS, ProductCardData } from "@/data/products";
import CategoryFilterSidebar from "@/components/layout/CategoryFilterSidebar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button"; 
import { Phone, Zap, ShieldCheck, Gauge } from "lucide-react"; // --- NEW ICONS
import { Metadata } from "next";

// --- NEW: Page-Specific Metadata for SEO ---
export const metadata: Metadata = {
  title: "Car Batteries in Alberton | Standard & AGM | Alberton Battery Mart",
  description: "Shop car batteries in Alberton. We stock Willard, Exide, & Enertec, including AGM/EFB batteries for Start/Stop vehicles. Free fitment & testing.",
};

const EMERGENCY_PHONE_DISPLAY = "010 109 6211";
const EMERGENCY_PHONE_LINK = "0101096211";

// Filters for: Standard Automotive 
const AUTOMOTIVE_PRODUCTS = ALL_PRODUCTS.filter((p: ProductCardData) => 
  p.category === 'Standard Automotive' || p.category === 'Performance AGM/EFB'
);

const getFilterOptions = (products: ProductCardData[]) => {
    const brands = Array.from(new Set(products.map(p => p.brandName)));
    const sizes = Array.from(new Set(products.map(p => p.sku)));
    return { brands, sizes };
};
const { brands, sizes } = getFilterOptions(AUTOMOTIVE_PRODUCTS);

export default function StandardAutomotiveBatteriesPage() {
  return (
    <div className="container py-16 space-y-12">
        
        <div className="text-center space-y-3">
            <h1 className="text-5xl md:text-6xl font-extrabold text-foreground">
                <span className="text-battery">Car Battery</span> Catalog: Standard & Performance
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                 All certified maintenance-free batteries for your vehicle, including specialized EFB/AGM required for Start/Stop systems.
            </p>
        </div>
        
        {/* --- NEW SECTION: Bakkie/Workhorse Pillar Content --- */}
        <div className="max-w-5xl mx-auto space-y-6 bg-card border border-border p-8 rounded-lg shadow-xl">
          <div className="flex items-center space-x-3">
            <Gauge className="h-10 w-10 text-battery flex-shrink-0" />
            <h2 className="text-3xl font-bold text-foreground">
              For Bakkies, 4x4s, & Start/Stop Vehicles
            </h2>
          </div>
          <p className="text-lg text-muted-foreground">
            A modern bakkie like a **Toyota Hilux** or **Ford Ranger** is not just a "car." The high electrical demands and Start/Stop technology in new models require a specialized **EFB or AGM battery.**
          </p>
          <p className="text-lg text-muted-foreground">
            Installing a standard "cheap" battery will lead to premature failure and system warnings. We stock the correct, warrantied batteries your bakkie or modern SUV needs.
          </p>
          <div className="grid md:grid-cols-2 gap-6 pt-4">
            <div className="flex items-start space-x-3">
              <Zap className="h-6 w-6 text-battery flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-foreground">EFB for High Demand</h3>
                <p className="text-muted-foreground">Enhanced Flooded Batteries (EFB) are the perfect upgrade for vehicles with high electrical loads or basic Start/Stop.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <ShieldCheck className="h-6 w-6 text-battery flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-foreground">AGM for Peak Performance</h3>
                <p className="text-muted-foreground">Absorbent Glass Mat (AGM) is mandatory for advanced Start/Stop, regenerative braking, and premium vehicles (BMW, Audi, Mercedes).</p>
              </div>
            </div>
          </div>
        </div>
        {/* --- END NEW SECTION --- */}

        {/* Primary CTA Button on this page (Fixed number display) */}
        <div className="text-center">
             <Button asChild size="xl" variant="battery" className="shadow-lg">
                <a href={`tel:${EMERGENCY_PHONE_LINK}`} className="flex items-center space-x-3 mx-auto">
                    <Phone className="h-6 w-6" />
                    <span>Call Our Mobile Service Now: {EMERGENCY_PHONE_DISPLAY}</span>
                </a>
             </Button>
        </div>

        <Separator className="pt-4" />

        {/* --- MAIN LAYOUT: SIDEBAR + PRODUCT GRID --- */}
        <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Left Column: Filtering Sidebar */}
            <div className="lg:w-64 lg:flex-shrink-0">
                 <CategoryFilterSidebar
                    currentCategory="Car Batteries"
                    allBrands={brands}
                    allSizes={sizes}
                    // Note: This page uses the default capacity filters, which is correct
                 />
            </div>

            {/* Right Column: Product List */}
            <div className="lg:flex-grow">
                <ProductListPage
                    title="All Automotive Batteries"
                     description={`Displaying ${AUTOMOTIVE_PRODUCTS.length} products ready for fitment.`}
                    products={AUTOMOTIVE_PRODUCTS}
                />
            </div>

        </div>
    </div>
  );
}