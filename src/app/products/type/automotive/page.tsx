// src/app/products/type/automotive/page.tsx
import ProductListPage from "@/components/layout/ProductListPage";
import { MOCK_PRODUCTS } from "@/lib/product-mock-data";

// Filters for: Standard Automotive (since performance/AGM is a separate category)
const STANDARD_AUTOMOTIVE_PRODUCTS = MOCK_PRODUCTS.filter(p => 
  p.category === 'Standard Automotive'
);

export default function StandardAutomotiveBatteriesPage() {
  return (
    <ProductListPage
      title="Standard Maintenance-Free Car Batteries"
      description="The high-quality replacement batteries for older vehicles and general sedans. Best value and warranty."
      products={STANDARD_AUTOMOTIVE_PRODUCTS}
    />
  );
}