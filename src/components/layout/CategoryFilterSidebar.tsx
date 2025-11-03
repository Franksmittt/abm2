// src/components/layout/CategoryFilterSidebar.tsx
"use client";
import * as React from 'react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, Battery, Zap } from "lucide-react";
import Link from "next/link";
import { useRouter } from 'next/navigation'; 

interface CategoryFilterSidebarProps {
    currentCategory: string; // e.g., 'Deep Cycle/Solar'
    allBrands: string[]; // e.g., ['Willard', 'Enertec', 'Exide', 'Sabat', 'Deltec']
    allSizes: string[]; // e.g., ['619', '652', 'D100', 'EFB55']
}

// Fixed filter options for demonstration
const capacityFilters = [
    { label: "Under 50 Ah", min: 0, max: 50 },
    { label: "50 Ah - 75 Ah", min: 50, max: 75 },
    { label: "75 Ah - 100 Ah", min: 75, max: 100 },
    { label: "100 Ah and Up", min: 100, max: 500 }, 
];

const CategoryFilterSidebar: React.FC<CategoryFilterSidebarProps> = ({
    currentCategory,
    allBrands,
    allSizes,
}) => {
    const [activeCapacity, setActiveCapacity] = React.useState<string | null>(null);
    const router = useRouter(); 

    // FIX: Function now routes to the central results page with minAh and maxAh parameters
    const handleCapacityFilter = (label: string, min: number, max: number) => {
        const url = `/products/results?minAh=${min}&maxAh=${max}`;
        router.push(url);
        setActiveCapacity(label);
    };
    
    // Function to handle quick SKU filter links
    const handleSkuFilter = (sku: string) => {
        router.push(`/products/results?q=${encodeURIComponent(sku)}`);
    }

    // Function to handle Brand filter links (Brand links in the sidebar go through the results page)
    const handleBrandFilter = (brand: string) => {
        router.push(`/products/results?brand=${encodeURIComponent(brand)}`);
    }
    
    return (
        <div className="lg:sticky lg:top-24 w-full lg:w-64 space-y-6 p-4 bg-card rounded-lg border border-border shadow-lg">
            
            {/* Current Context */}
            <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Now Viewing:</p>
                <h3 className="text-xl font-extrabold text-battery flex items-center space-x-2">
                    <Battery className="h-5 w-5" />
                    <span>{currentCategory}</span>
                </h3>
            </div>

            <Separator />

            {/* 1. Shop by Brand (Fixed to use router) */}
            <div className="space-y-3">
                <h4 className="text-lg font-bold text-foreground">Shop by Brand</h4>
                {allBrands.slice(0, 4).map((brand, index) => ( // Display up to 4 popular brands
                    <button key={index} onClick={() => handleBrandFilter(brand)} className="flex items-center justify-between w-full text-sm text-muted-foreground hover:text-battery transition-colors bg-transparent border-none p-0 cursor-pointer">
                        <span>{brand}</span>
                        <ChevronRight className="h-4 w-4" />
                    </button>
                ))}
                <Link href="/products" className="text-sm text-battery font-semibold block pt-2">
                    View All Brands
                </Link>
            </div>

            <Separator />
            
            {/* 2. Filter by Capacity (Ah) */}
            <div className="space-y-3">
                <h4 className="text-lg font-bold text-foreground flex items-center space-x-2">
                    <Zap className="h-4 w-4" />
                    <span>Filter by Capacity (Ah)</span>
                </h4>
                <p className="text-xs text-muted-foreground">Narrow down by Amp-hour capacity for Deep Cycle/Solar.</p>
                
                <div className="space-y-2">
                    {capacityFilters.map((filter, index) => (
                        <Button
                            key={index}
                            variant={activeCapacity === filter.label ? "battery" : "outline"}
                            className="w-full justify-start text-left text-sm"
                            onClick={() => handleCapacityFilter(filter.label, filter.min, filter.max)}
                        >
                            {filter.label}
                        </Button>
                    ))}
                </div>
            </div>
            
            <Separator />
            
            {/* 3. Filter by SKU/Size (Fixed to use router) */}
            <div className="space-y-3">
                <h4 className="text-lg font-bold text-foreground">Quick Find by Size (SKU)</h4>
                <div className="flex flex-wrap gap-2">
                    {allSizes.slice(0, 5).map((size, index) => ( // Display up to 5 common sizes
                        <button key={index} onClick={() => handleSkuFilter(size)} className="text-xs font-semibold bg-secondary/50 text-foreground hover:bg-secondary px-3 py-1 rounded-full transition-colors cursor-pointer border-none">
                            {size}
                        </button>
                    ))}
                </div>
                <p className="text-xs text-muted-foreground pt-1">Common codes: 619, 652, EFB.</p>
            </div>
        </div>
    );
};

export default CategoryFilterSidebar;