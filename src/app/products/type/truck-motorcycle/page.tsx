// src/app/products/type/truck-motorcycle/page.tsx
import ProductListPage from "@/components/layout/ProductListPage";
import { MOCK_PRODUCTS } from "@/lib/product-mock-data";

// Filters for: Truck/Powersport
const TRUCK_MOTORCYCLE_PRODUCTS = MOCK_PRODUCTS.filter(p => 
  p.category === 'Truck/Powersport'
);

export default function TruckMotorcycleBatteriesPage() {
  return (
    <ProductListPage
      title="Truck, Commercial & Powersport Batteries"
      description="Specialized high-CCA commercial batteries for trucks, lorries, buses, and dedicated motorcycle/ATV batteries."
      products={TRUCK_MOTORCYCLE_PRODUCTS}
    />
  );
}