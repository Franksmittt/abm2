// src/app/products/results/page.tsx
import { ALL_PRODUCTS, ProductCardData } from "@/data/products";
import ProductListPage from "@/components/layout/ProductListPage";
import { notFound } from 'next/navigation';

interface ResultsPageProps {
  searchParams: {
    q?: string; // For SKU/Code Search (e.g., ?q=619)
    brand?: string; // For Brand Filter (e.g., ?brand=Willard)
    minAh?: string; // For Capacity Filter (e.g., ?minAh=50)
    maxAh?: string; // For Capacity Filter (e.g., &maxAh=75)
    category?: string; // Should be handled by the layout, but kept for clarity
  };
}

// Function now returns an object containing both the filtered list and the title string.
const filterProducts = (params: ResultsPageProps['searchParams']): { products: ProductCardData[], title: string } => {
  let filtered = ALL_PRODUCTS;
  let title = "Search Results";

  // --- Filter 1: SKU/Code Search (?q=619) ---
  if (params.q) {
    const query = params.q.toLowerCase();
    filtered = filtered.filter(p => 
      p.sku.toLowerCase().includes(query) || p.name.toLowerCase().includes(query)
    );
    title = `Search Results for "${params.q}"`;
  }
  
  // --- Filter 2: Brand Filter (?brand=Willard) ---
  else if (params.brand) {
    const brandQuery = params.brand.toLowerCase();
    filtered = filtered.filter(p => p.brandName.toLowerCase() === brandQuery);
    title = `${params.brand} Batteries`;
  }

  // --- Filter 3: Capacity Filter (?minAh=50&maxAh=75) ---
  else if (params.minAh || params.maxAh) {
    const min = parseFloat(params.minAh || '0');
    const max = parseFloat(params.maxAh || '9999');
    
    filtered = filtered.filter(p => p.ahCapacity >= min && p.ahCapacity <= max);
    
    const minStr = params.minAh ? `${params.minAh} Ah` : '0 Ah';
    const maxStr = params.maxAh ? `${params.maxAh} Ah` : 'Max';
    title = `Capacity: ${minStr} to ${maxStr}`;
  }
  
  // *** Return the results as a clean object ***
  return { products: filtered, title };
};

export default function SearchResultsPage({ searchParams }: ResultsPageProps) {
  // *** FIX: Destructure the returned object to get products and title ***
  const { products: filteredProducts, title } = filterProducts(searchParams);

  if (filteredProducts.length === 0) {
    notFound(); // Redirects to the 404 page if no products are found
  }

  // *** FIX: Use the captured 'title' variable ***
  return (
    <ProductListPage
      title={title}
      description={`Displaying ${filteredProducts.length} certified products matching your criteria.`}
      products={filteredProducts}
    />
  );
}