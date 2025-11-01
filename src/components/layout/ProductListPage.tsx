// src/components/layout/ProductListPage.tsx
import { MOCK_PRODUCTS, ProductCardData } from "@/lib/product-mock-data";
import ProductCard from "@/components/content/ProductCard";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

// This template is designed to accept a title and a filtered list of products
interface ProductListPageProps {
  title: string;
  description: string;
  products: ProductCardData[];
}

const ProductListPage: React.FC<ProductListPageProps> = ({ title, description, products }) => {
  const EMERGENCY_PHONE = "0101096211";

  return (
    <div className="w-full bg-background py-16">
      <div className="container px-4 md:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="text-center space-y-3 border-b border-border pb-6">
          <h1 className="text-5xl font-extrabold text-battery">{title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{description}</p>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="lg:col-span-4 text-center py-20 bg-card/50 rounded-lg">
              <h3 className="text-2xl font-semibold text-foreground">No matching products found.</h3>
              <p className="text-muted-foreground mt-2">Try a different category or call us for direct assistance.</p>
            </div>
          )}
        </div>
        
        {/* Final Conversion CTA */}
        <div className="text-center pt-8">
          <p className="text-2xl font-bold text-foreground mb-4">Need immediate help or a specific quote?</p>
          <Button asChild size="xl" variant="battery">
            <a href={`tel:${EMERGENCY_PHONE}`} className="flex items-center justify-center space-x-3 mx-auto">
              <Phone className="h-6 w-6" />
              <span>CALL NOW: {EMERGENCY_PHONE}</span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;