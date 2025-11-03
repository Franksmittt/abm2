// src/components/content/ProductSpotlight.tsx
"use client";
import React, { useMemo } from 'react';
import { ALL_PRODUCTS, ProductCardData } from "@/data/products";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

// ----------------------------------------------------
// *** FIX: Stabilized Random Function for Hydration ***
// Using a deterministic seed (Day of the week)
// ----------------------------------------------------

const generateDeterministicShuffledArray = (products: ProductCardData[], seed: number): ProductCardData[] => {
  // Simple pseudo-random hash generator based on date and array length
  const dateSeed = new Date().getDay() + seed; // 0 (Sun) to 6 (Sat)
  const array = [...products];

  // Fisher-Yates shuffle algorithm using a seeded generator for predictability
  for (let i = array.length - 1; i > 0; i--) {
    // A simplified seeded random number generation (good enough for this purpose)
    const j = Math.floor((Math.sin(dateSeed * i) + 1) * 1000) % (i + 1);
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

// Function to get 'n' stable, random products
const getStableRandomProducts = (products: ProductCardData[], count: number): ProductCardData[] => {
  if (products.length === 0) return [];
  
  // Use a constant seed (e.g., 0) for the shuffle order
  const shuffled = generateDeterministicShuffledArray(products, 0); 
  
  return shuffled.slice(0, count);
};

// ----------------------------------------------------
// *** Component Starts Here ***
// ----------------------------------------------------

interface ProductSpotlightProps {
  count?: number; // Number of products to display (default: 3)
}

const ProductSpotlight: React.FC<ProductSpotlightProps> = ({ count = 3 }) => {
  // Use the stable function in useMemo
  const featuredProducts = useMemo(() => getStableRandomProducts(ALL_PRODUCTS, count), [count]);

  if (featuredProducts.length === 0) return null;

  return (
    <section className="py-16 bg-muted/20">
      <div className="container space-y-10">
        
        {/* Header Section */}
        <div className="text-center space-y-4">
          <Zap className="h-10 w-10 text-battery mx-auto" />
          <h2 className="text-4xl font-extrabold text-foreground tracking-tight">
            Weekly <span className="text-battery">Power Picks</span> & Hot Deals
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Check out our top-selling batteries and current promotions. Deals refresh every week!
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* Footer CTA */}
        <div className="text-center">
            <Button asChild variant="secondary" size="lg" className="shadow-md">
                <Link href="/products" className="flex items-center justify-center space-x-2">
                    <span>View Full Product Catalog</span>
                    <ArrowRight className="h-4 w-4" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductSpotlight;