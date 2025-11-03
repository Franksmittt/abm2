// src/components/layout/ProductListPage.tsx
import { ALL_PRODUCTS, ProductCardData } from "@/data/products"; 
import ProductCard from "@/components/content/ProductCard";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

// --- VERIFIED CONTACT ---
// *** FIX APPLIED: Formatted and unformatted numbers for safety ***
const EMERGENCY_PHONE_DISPLAY = "010 109 6211";
const EMERGENCY_PHONE_LINK = "0101096211";

// This template is designed to accept a title and a filtered list of products
interface ProductListPageProps {
  title: string;
  description: string;
  products: ProductCardData[]; // Uses the imported interface
}

const ProductListPage: React.FC<ProductListPageProps> = ({ title, description, products }) => {
  return (
    // NOTE: Removed py-0 and restored py-16 for top/bottom page padding
    <div className="w-full bg-background py-16"> 
      
      {/* Container: Added px-4 for mobile spacing, removed horizontal margin fix as padding is better handled by 'container' */}
      <div className="container px-4 md:px-6 lg:px-8 space-y-12">
        
        {/* Page Header (Adjusted bottom padding) */}
        <div className="text-center space-y-3 border-b border-border pb-10"> 
          <h1 className="text-5xl font-extrabold text-battery">{title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{description}</p>
        </div>

        {/* Product Grid */}
        {/* We use 2 columns for tablet/small desktop (md) and max out at 3 columns for large screens (xl) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6"> 
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="sm:col-span-2 lg:col-span-3 text-center py-20 bg-card/50 rounded-lg">
              <h3 className="text-2xl font-semibold text-foreground">No matching products found.</h3>
              <p className="text-muted-foreground mt-2">Try a different category or call us for direct assistance.</p>
            </div>
          )}
        </div>
        
        {/* Final Conversion CTA (Increased top padding) */}
        <div className="text-center pt-12"> 
          <p className="text-2xl font-bold text-foreground mb-4">Need immediate help or a specific quote?</p>
          <Button asChild size="xl" variant="battery">
            <a href={`tel:${EMERGENCY_PHONE_LINK}`} className="flex items-center justify-center space-x-3 mx-auto">
              <Phone className="h-6 w-6" />
              {/* *** FIX APPLIED: Display formatted number *** */}
              <span>CALL NOW: {EMERGENCY_PHONE_DISPLAY}</span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;