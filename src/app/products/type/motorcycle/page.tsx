// src/app/products/type/motorcycle/page.tsx
import ProductListPage from "@/components/layout/ProductListPage";
import { ALL_PRODUCTS, ProductCardData } from "@/data/products";
import CategoryFilterSidebar from "@/components/layout/CategoryFilterSidebar";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Bike, Phone, MessageSquare, Zap } from "lucide-react";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { BASE_URL } from "@/lib/seo-constants";

const PAGE_TITLE =
  "Motorcycle & Powersport Batteries in Alberton | Alberton Battery Mart";
const PAGE_DESCRIPTION =
  "Enertec and Exide motorcycle, superbike, ATV, and powersport AGM batteries with on-site fitment.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "motorcycle battery Alberton",
    "superbike AGM battery",
    "scooter battery replacement",
    "powersport battery fitment",
  ],
  alternates: {
    canonical: `${BASE_URL}/products/type/motorcycle`,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${BASE_URL}/products/type/motorcycle`,
    type: "website",
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Motorcycle & Powersport Batteries - Alberton Battery Mart',
      },
    ],
  },
};

const MOTORCYCLE_PRODUCTS = ALL_PRODUCTS.filter((p: ProductCardData) => 
  p.category === 'Motorcycle'
);

const motorcycleCapacityFilters = [
    { label: "Small (Under 10 Ah)", min: 0, max: 10 },
    { label: "Medium (10-20 Ah)", min: 10, max: 20 },
    { label: "Large (20 Ah+)", min: 20, max: 9999 },
];

const getFilterOptions = (products: ProductCardData[]) => {
    const brands = Array.from(new Set(products.map(p => p.brandName)));
    const sizes = Array.from(new Set(products.map(p => p.sku)));
    return { brands, sizes };
};
const { brands, sizes } = getFilterOptions(MOTORCYCLE_PRODUCTS);

const SERVICE_LINKS = [
  {
    label: "Mobile Battery Replacement",
    href: "/services/mobile-battery-replacement/alberton",
    description: "Estate-friendly, perfect for limited parking or gated complexes.",
  },
  {
    label: "Free Battery Testing - Alberton",
    href: "/services/free-battery-testing/alberton",
    description: "Load test your existing motorcycle battery before replacement.",
  },
];

const VEHICLE_LINKS = [
  { label: "VW Amarok BiTDI fitment", slug: "volkswagen/amarok-btdi" },
  { label: "Suzuki Swift parasitic draw test", slug: "suzuki/swift-1-2" },
];

export default function MotorcycleBatteriesPage() {
  const productCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "ProductCollection",
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${BASE_URL}/products/type/motorcycle`,
    isRelatedTo: {
      "@type": "Service",
      name: "Motorcycle Battery Replacement",
      url: `${BASE_URL}/services/mobile-battery-replacement/alberton`,
    },
    hasPart: MOTORCYCLE_PRODUCTS.slice(0, 20).map((product) => ({
      "@type": "Product",
      name: product.name,
      sku: product.id,
      url: `${BASE_URL}/product/${product.id}`,
    })),
  };

  return (
    <div className="container py-16 space-y-12">
      <JsonLd data={productCollectionSchema} id="motorcycle-collection-schema" />
        
        <div className="text-center space-y-3">
            <h1 className="text-5xl md:text-6xl font-extrabold text-foreground">
                <span className="text-battery">Motorcycle</span> & Powersport Batteries
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Dedicated AGM batteries for motorcycles, scooters, ATVs, and all powersport vehicles.
            </p>
            <Separator className="pt-4" />
        </div>

        <div className="flex flex-col items-center gap-4 text-center max-w-md mx-auto">
          <Button
            asChild
            size="xl"
            variant="battery"
            trackingId="type-motorcycle-call"
            className="w-full shadow-lg"
          >
            <a href="tel:0101096211" className="flex w-full items-center justify-center gap-2">
              <Phone className="h-5 w-5" />
              Call our motorcycle fitment line
            </a>
          </Button>
          <Button
            asChild
            size="xl"
            variant="secondary"
            className="w-full bg-green-600 hover:bg-green-700 text-white"
            trackingId="type-motorcycle-whatsapp"
          >
            <a
              href="https://wa.me/27823046926?text=Motorcycle%20battery%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2"
            >
              <MessageSquare className="h-5 w-5" />
              WhatsApp the workshop
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
              Related fitment guides
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
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

        <div className="flex flex-col lg:flex-row gap-8">
            
            <div className="lg:w-64 lg:flex-shrink-0">
                <CategoryFilterSidebar
                    currentCategory="Motorcycle / Powersport"
                    allBrands={brands}
                    allSizes={sizes}
                    capacityFilters={motorcycleCapacityFilters}
                />
            </div>

            <div className="lg:flex-grow">
                <ProductListPage
                    title="All Motorcycle & Powersport Batteries"
                    description={`Displaying ${MOTORCYCLE_PRODUCTS.length} specialized products.`}
                    products={MOTORCYCLE_PRODUCTS}
                />
            </div>

        </div>
    </div>
  );
}