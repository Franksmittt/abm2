// src/app/products/type/performance/page.tsx
import ProductListPage from "@/components/layout/ProductListPage";
import { ALL_PRODUCTS, ProductCardData } from "@/data/products";
import CategoryFilterSidebar from "@/components/layout/CategoryFilterSidebar";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import { ShieldCheck, Zap, BrainCircuit, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { BASE_URL } from "@/lib/seo-constants";

const PAGE_TITLE =
  "AGM & EFB Start/Stop Batteries in Alberton | Alberton Battery Mart";
const PAGE_DESCRIPTION =
  "Premium AGM/EFB Start-Stop batteries with coding, BMS registration, and on-site fitment.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "AGM battery Alberton",
    "Start Stop battery coding",
    "EFB battery replacement",
    "premium battery fitment",
  ],
  alternates: {
    canonical: `${BASE_URL}/products/type/performance`,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${BASE_URL}/products/type/performance`,
    type: "website",
  },
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

const SERVICE_LINKS = [
  {
    label: "Premium Fitment - Meyersdal",
    href: "/services/battery-fitment/meyersdal",
    description: "Boot battery projects, coding, and Start/Stop calibration.",
  },
  {
    label: "Mobile Battery Replacement - Alberton",
    href: "/services/mobile-battery-replacement/alberton",
    description: "On-site swaps for estates and office parks.",
  },
];

const VEHICLE_LINKS = [
  { label: "BMW 3-Series F30 Start/Stop workflow", slug: "bmw/3-series-f30" },
  { label: "Mercedes C-Class W205 AGM coding", slug: "mercedes/c-class-w205" },
  { label: "Audi Q5 boot battery replacement", slug: "audi/q5-tdi" },
];

export default function PerformanceBatteriesPage() {
  const productCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "ProductCollection",
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${BASE_URL}/products/type/performance`,
    isRelatedTo: {
      "@type": "Service",
      name: "Premium Battery Fitment - Meyersdal",
      url: `${BASE_URL}/services/battery-fitment/meyersdal`,
    },
    hasPart: PERFORMANCE_PRODUCTS.slice(0, 20).map((product) => ({
      "@type": "Product",
      name: product.name,
      sku: product.id,
      url: `${BASE_URL}/product/${product.id}`,
    })),
  };

  return (
    <div className="container py-16 space-y-12">
      <JsonLd data={productCollectionSchema} id="performance-collection-schema" />
        
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

        <div className="text-center space-y-4">
          <Button
            asChild
            size="lg"
            variant="battery"
            trackingId="type-performance-call"
            className="shadow-lg"
          >
            <a href="tel:0101096211" className="flex items-center gap-2 mx-auto">
              <Phone className="h-5 w-5" />
              Call Premium Fitment Desk
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-green-600 hover:bg-green-700 text-white"
            trackingId="type-performance-whatsapp"
          >
            <a
              href="https://wa.me/27823046926?text=AGM%20battery%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mx-auto"
            >
              <MessageSquare className="h-5 w-5" />
              WhatsApp our technicians
            </a>
          </Button>
        </div>

        <section className="grid md:grid-cols-2 gap-6">
          {SERVICE_LINKS.map((service) => (
            <div
              key={service.href}
              className="p-6 rounded-2xl bg-secondary/20 border border-border space-y-3"
            >
              <h3 className="text-xl font-semibold text-battery">
                {service.label}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
              <Link
                href={service.href}
                className="text-sm font-semibold text-foreground hover:text-battery"
              >
                Explore →
              </Link>
            </div>
          ))}
        </section>

        {VEHICLE_LINKS.length > 0 && (
          <section className="bg-card/50 border border-border rounded-2xl p-8 space-y-4">
            <h2 className="text-3xl font-bold text-foreground">
              Vehicles we recode daily
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {VEHICLE_LINKS.map((vehicle) => (
                <Link
                  key={vehicle.slug}
                  href={`/vehicles/${vehicle.slug}`}
                  className="p-4 rounded-xl bg-background border border-border hover:border-battery transition-colors"
                >
                  {vehicle.label}
                </Link>
              ))}
            </div>
          </section>
        )}


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