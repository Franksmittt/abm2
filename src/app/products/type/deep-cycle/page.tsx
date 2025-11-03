// src/app/products/type/deep-cycle/page.tsx
import ProductListPage from "@/components/layout/ProductListPage";
// --- FIX: Update import path to the new data source and pull in the interface ---
import { ALL_PRODUCTS, ProductCardData } from "@/data/products";

// Filters for: Deep Cycle/Solar
const DEEP_CYCLE_PRODUCTS = ALL_PRODUCTS.filter((p: ProductCardData) => 
  p.category === 'Deep Cycle/Solar'
);
// --- FIX: Explicitly typed 'p' as ProductCardData to resolve TS7006 error ---

export default function DeepCycleBatteriesPage() {
  return (
    <ProductListPage
      title="Solar, Inverter & Deep Cycle Batteries"
      description="High-end LiFePO₄ and AGM Deep Cycle solutions for uninterrupted backup power during load shedding, camping, or marine use."
      products={DEEP_CYCLE_PRODUCTS}
    />
  );
}