// src/app/products/type/performance/page.tsx
import ProductListPage from "@/components/layout/ProductListPage";
import { ALL_PRODUCTS, ProductCardData } from "@/data/products";
import CategoryFilterSidebar from "@/components/layout/CategoryFilterSidebar";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import { ShieldCheck, Zap, BrainCircuit } from "lucide-react"; // --- NEW: Added BrainCircuit icon

// --- NEW: Page-Specific Metadata for SEO ---
export const metadata: Metadata = {
  title: "AGM & EFB Start/Stop Batteries in Alberton | Alberton Battery Mart",
  description: "Shop performance batteries in Alberton. We are experts in AGM & EFB batteries for Start/Stop vehicles. Free fitment and BMS calibration.",
};

// Filters for: Performance AGM/EFB
const PERFORMANCE_PRODUCTS = ALL_PRODUCTS.filter((p: ProductCardData) => 
  p.category === 'Performance AGM/EFB'
);

const getFilterOptions = (products: ProductCardData[]) => {
    const brands = Array.from(new Set(products.map(p => p.brandName)));
    const sizes = Array.from(new Set(products.map(p => p.sku)));
    return { brands, sizes };
};
const { brands, sizes } = getFilterOptions(PERFORMANCE_PRODUCTS);

export default function PerformanceBatteriesPage() {
  return (
    <div className="container py-16 space-y-12">
        
        <div className="text-center space-y-3">
            <h1 className="text-5xl md:text-6xl font-extrabold text-foreground">
                <span className="text-battery">Performance</span> & Start/Stop Batteries
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                 The specialized, high-capacity AGM/EFB solutions required for modern vehicles with Start/Stop systems. Longest warranties available.
            </p>
            <Separator className="pt-4" />
        </div>

        {/* --- NEW SECTION: Specialist Coding & Registration --- */}
        <div className="max-w-4xl mx-auto space-y-6 bg-card border-2 border-battery shadow-battery/20 p-8 rounded-lg shadow-xl">
          <div className="flex items-center space-x-3">
            <BrainCircuit className="h-10 w-10 text-battery flex-shrink-0" />
            <h2 className="text-3xl font-bold text-foreground">
              Expert Service for Premium Vehicles
            </h2>
          </div>
          <p className="text-lg text-muted-foreground">
            Installing a new AGM battery in a modern BMW, Mercedes, or Audi is not enough. The vehicle's Battery Management System (BMS) **must be registered** (or "coded") to accept the new battery.
          </p>
          <p className="text-lg text-muted-foreground">
            Skipping this step will cause the system to overcharge your new battery, destroying it in months. We are one of the only specialists in Alberton with the advanced diagnostic tools to perform this critical service.
          </p>
          <div className="grid md:grid-cols-2 gap-6 pt-4">
            <div className="flex items-start space-x-3">
              <ShieldCheck className="h-6 w-6 text-battery flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-foreground">Protect Your Warranty</h3>
                <p className="text-muted-foreground">Failure to register the new battery can void its warranty. We ensure it's done right, protecting your investment.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Zap className="h-6 w-6 text-battery flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-foreground">Full System Calibration</h3>
                <p className="text-muted-foreground">Our service ensures your car's charging profile and Start/Stop system are perfectly calibrated to the new battery.</p>
              </div>
            </div>
          </div>
        </div>
        {/* --- END NEW SECTION --- */}


        {/* --- MAIN LAYOUT: SIDEBAR + PRODUCT GRID --- */}
        <div className="flex flex-col lg:flex-row gap-8 pt-8">
             
            {/* Left Column: Filtering Sidebar */}
            <div className="lg:w-64 lg:flex-shrink-0">
                <CategoryFilterSidebar
                    currentCategory="Performance AGM/EFB"
                    allBrands={brands}
                     allSizes={sizes}
                    // This page will use the default car capacity filters, which is fine
                />
            </div>

            {/* Right Column: Product List */}
            <div className="lg:flex-grow">
 
                 <ProductListPage
                    title="All Performance & Start/Stop Batteries"
                    description={`Displaying ${PERFORMANCE_PRODUCTS.length} specialized EFB and AGM products ready for fitment.`}
                    products={PERFORMANCE_PRODUCTS}
                 />
            </div>

        </div>
    </div>
  );
}