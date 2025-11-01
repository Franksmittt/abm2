// src/app/products/page.tsx
import ProductListPage from "@/components/layout/ProductListPage";
import { MOCK_PRODUCTS } from "@/lib/product-mock-data";

// Show the full mock catalog on the main products page
const ALL_PRODUCTS = MOCK_PRODUCTS; 

export default function ProductsBasePage() {
  return (
    <ProductListPage
      title="Complete Battery Product Catalog"
      description="Your single source for Willard, Enertec, Exide, and specialized Deep Cycle batteries in Alberton."
      products={ALL_PRODUCTS}
    />
  );
}