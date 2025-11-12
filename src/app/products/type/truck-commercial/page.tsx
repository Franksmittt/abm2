// src/app/products/type/truck-commercial/page.tsx
import ProductListPage from "@/components/layout/ProductListPage";
import { ALL_PRODUCTS, ProductCardData } from "@/data/products";
import CategoryFilterSidebar from "@/components/layout/CategoryFilterSidebar";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import { Building, ShieldCheck, Zap } from "lucide-react"; // --- NEW ICONS
import { Button } from "@/components/ui/button"; // --- NEW
import Link from "next/link"; // --- NEW

// --- NEW: Page-Specific Metadata for SEO ---
export const metadata: Metadata = {
  title: "Truck & Commercial Batteries in Alberton | Alberton Battery Mart",
  description: "Shop heavy-duty truck batteries in Alberton. We stock high-CCA commercial batteries for lorries, buses, and heavy-duty vehicles.",
};

const TRUCK_PRODUCTS = ALL_PRODUCTS.filter((p: ProductCardData) => 
  p.category === 'Truck & Commercial'
);

const truckCapacityFilters = [
    { label: "Heavy Duty (90-115 Ah)", min: 90, max: 115 },
    { label: "Super Heavy Duty (115Ah+)", min: 115, max: 9999 },
];

const getFilterOptions = (products: ProductCardData[]) => {
    const brands = Array.from(new Set(products.map(p => p.brandName)));
    const sizes = Array.from(new Set(products.map(p => p.sku)));
    return { brands, sizes };
};
const { brands, sizes } = getFilterOptions(TRUCK_PRODUCTS);

export default function TruckBatteriesPage() {
  return (
    <div className="container py-16 space-y-12">
        
        <div className="text-center space-y-3">
            <h1 className="text-5xl md:text-6xl font-extrabold text-foreground">
                <span className="text-battery">Truck & Commercial</span> Batteries
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                 Specialized high-CCA commercial batteries for trucks, lorries, buses, and heavy-duty applications.
            </p>
        </div>

        {/* --- NEW SECTION: B2B/Fleet Pillar Content --- */}
        <div className="max-w-5xl mx-auto space-y-8 bg-card border-2 border-battery shadow-battery/20 p-8 rounded-lg shadow-xl">
          <div className="flex items-center space-x-3">
            <Building className="h-10 w-10 text-battery flex-shrink-0" />
            <h2 className="text-3xl font-bold text-foreground">
              Fleet & B2B Solutions for Alberton Businesses
            </h2>
          </div>
          <p className="text-lg text-muted-foreground">
            We understand that for a commercial fleet, downtime is not an option. We are a dedicated B2B partner for Alberton's logistics, construction, and transport companies. We provide not just batteries, but reliable power solutions that protect your bottom line.
          </p>
          <div className="grid md:grid-cols-2 gap-6 pt-4">
            <div className="flex items-start space-x-3">
              <Zap className="h-6 w-6 text-battery flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-foreground">High-CCA & Vibration Resistance</h3>
                <p className="text-muted-foreground">Our commercial range (from brands like Exide) is built for the demands of heavy-duty diesel engines, offering high Cold Cranking Amps (CCA) and superior vibration resistance for tough South African roads.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <ShieldCheck className="h-6 w-6 text-battery flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-foreground">Full Manufacturer Warranties</h3>
                <p className="text-muted-foreground">Protect your fleet. All our heavy-duty batteries are backed by a full manufacturer warranty, giving you total peace of mind and predictable operational costs.</p>
              </div>
            </div>
          </div>
          <div className="text-center pt-6">
            <Button asChild size="lg" variant="battery">
              <Link href="/quote">Request a Free Fleet/B2B Quote</Link>
            </Button>
          </div>
        </div>
        {/* --- END NEW SECTION --- */}

        <Separator className="pt-4" />

        <div className="flex flex-col lg:flex-row gap-8">
            
            <div className="lg:w-64 lg:flex-shrink-0">
                 <CategoryFilterSidebar
                    currentCategory="Truck & Commercial"
                    allBrands={brands}
                    allSizes={sizes}
                    capacityFilters={truckCapacityFilters}
                 />
            </div>

            <div className="lg:flex-grow">
                <ProductListPage
                    title="All Commercial & Truck Batteries"
                    description={`Displaying ${TRUCK_PRODUCTS.length} heavy-duty products.`}
                     products={TRUCK_PRODUCTS}
                />
            </div>

        </div>
    </div>
  );
}