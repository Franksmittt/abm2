// src/app/products/type/performance/page.tsx
import ProductListPage from "@/components/layout/ProductListPage";
import { MOCK_PRODUCTS } from "@/lib/product-mock-data";

// Filters for: Performance AGM/EFB
const PERFORMANCE_PRODUCTS = MOCK_PRODUCTS.filter(p => 
  p.category === 'Performance AGM/EFB'
);

export default function PerformanceBatteriesPage() {
  return (
    <ProductListPage
      title="Performance & Start/Stop (AGM/EFB) Batteries"
      description="The specialized, high-capacity batteries required for modern vehicles with Start/Stop systems and advanced electronics. Longest warranty available."
      products={PERFORMANCE_PRODUCTS}
    />
  );
}