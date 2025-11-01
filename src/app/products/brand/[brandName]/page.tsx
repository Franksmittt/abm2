// src/app/products/brand/[brandName]/page.tsx
import ProductListPage from "@/components/layout/ProductListPage";
import { MOCK_PRODUCTS } from "@/lib/product-mock-data"; 
import { notFound } from 'next/navigation'; // Optional: Use this if you want a 404 page

interface BrandPageProps {
  params: {
    brandName: string; // This is the variable segment from the URL
  };
}

// Helper function to create a clean, capitalized title
const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();

const getTitle = (brand: string) => {
    const capitalized = capitalize(brand);
    return `${capitalized} Batteries: Full Maintenance-Free Range`;
};

export default function BrandListingPage({ params }: BrandPageProps) {
  const brandName = params.brandName;
  const brandTitle = getTitle(brandName);
  
  // Filter mock data based on brand name (case-insensitive check against the product name)
  const BRAND_PRODUCTS = MOCK_PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(brandName.toLowerCase())
  );
  
  // Optional: Use the Next.js notFound() function if the list is empty
  // if (BRAND_PRODUCTS.length === 0) {
  //   notFound();
  // }

  return (
    <ProductListPage
      title={brandTitle}
      description={`View all batteries stocked from the ${capitalize(brandName)} manufacturer. Guaranteed quality and warranty.`}
      products={BRAND_PRODUCTS}
    />
  );
}