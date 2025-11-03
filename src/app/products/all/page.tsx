// src/app/products/all/page.tsx
import ProductListPage from "@/components/layout/ProductListPage";
import { ALL_PRODUCTS } from "@/data/products";

// This page explicitly displays the entire inventory
export default function AllProductsPage() {
  return (
    <ProductListPage
      title="Complete Inventory: All Battery Products"
      description="View every battery, charger, and accessory in stock. Filter by category or use the search bar above."
      products={ALL_PRODUCTS}
    />
  );
}