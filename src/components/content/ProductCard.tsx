// src/components/content/ProductCard.tsx
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Gauge, Shield, Tag, Phone } from "lucide-react";
import Link from "next/link"; // For future product details page links
import Image from "next/image"; // Placeholder for future Image component use
import { ProductCardData } from "@/lib/product-mock-data";

interface ProductCardProps {
  product: ProductCardData;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Logic to determine if this is a premium/performance battery
  const isHighPerformance = product.isAGM || product.warrantyMonths >= 36;
  const EMERGENCY_PHONE = "0101096211";

  // Specs array for easy display
  const specs = [
    { icon: Zap, label: "CCA", value: `${product.cca}`, unit: 'CCA' },
    { icon: Gauge, label: "Capacity", value: `${product.ahCapacity}`, unit: 'Ah' },
    { icon: Shield, label: "Warranty", value: `${product.warrantyMonths}`, unit: 'Months' },
    { icon: Tag, label: "Guide Price", value: product.priceAnchor, unit: '' },
  ];

  return (
    <Card className="flex flex-col overflow-hidden bg-card border-border shadow-lg hover:shadow-battery/30 transition-shadow h-full">
      
      {/* Product Header and Image Placeholder */}
      <CardHeader className="p-0 relative">
        {/* Placeholder Image Area */}
        <div className="w-full h-48 bg-secondary/20 flex items-center justify-center relative">
          <span className="text-muted-foreground text-sm">Image Placeholder: {product.sku}</span>
        </div>
        
        {/* Performance Badge */}
        {isHighPerformance && (
          <div className="absolute top-3 left-3 bg-battery text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            PREMIUM {product.warrantyMonths}M WARRANTY
          </div>
        )}
      </CardHeader>

      {/* Product Details */}
      <CardContent className="p-6 flex-grow space-y-4">
        <CardTitle className="text-xl font-extrabold text-foreground min-h-[3rem] tracking-tight">
          {product.name}
        </CardTitle>
        
        {/* Technical Specs Grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-3 pt-2">
          {specs.map((spec) => (
            <div key={spec.label} className="flex items-center space-x-2">
              <spec.icon className="h-4 w-4 text-battery flex-shrink-0" />
              <div className="text-sm">
                {/* Highlights Price/CCA/Warranty Value in Bold */}
                <p className="font-bold text-foreground leading-none">{spec.value}{spec.unit}</p>
                <p className="text-xs text-muted-foreground">{spec.label}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      
      {/* Footer: Conversion CTA */}
      <CardFooter className="p-4 border-t border-border">
        <Button asChild variant="battery" className="w-full">
          <a href={`tel:${EMERGENCY_PHONE}`} className="flex items-center justify-center space-x-2">
            <Phone className="h-5 w-5" />
            <span>Call for Quote & Fitment</span>
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;