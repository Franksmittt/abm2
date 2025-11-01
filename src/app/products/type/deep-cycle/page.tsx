// src/app/products/type/deep-cycle/page.tsx
import ProductListPage from "@/components/layout/ProductListPage";
import { MOCK_PRODUCTS } from "@/lib/product-mock-data";

// Filters for: Deep Cycle/Solar
const DEEP_CYCLE_PRODUCTS = MOCK_PRODUCTS.filter(p => 
  p.category === 'Deep Cycle/Solar'
);

export default function DeepCycleBatteriesPage() {
  return (
    <ProductListPage
      title="Solar, Inverter & Deep Cycle Batteries"
      description="High-end LiFePO₄ and AGM Deep Cycle solutions for uninterrupted backup power during load shedding, camping, or marine use."
      products={DEEP_CYCLE_PRODUCTS}
    />
  );
}