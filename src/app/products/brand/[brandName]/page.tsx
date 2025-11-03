// src/app/products/page.tsx
import ProductListPage from "@/components/layout/ProductListPage";
import { ALL_PRODUCTS } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";
import { Battery, Zap, Truck, Sun, Car, LayoutGrid } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import CodeLookup from "@/components/content/CodeLookup"; // NEW IMPORT

// Group all unique filtering paths
const filterLinks = {
    category: [
        { title: "Standard Automotive", icon: Car, href: "/products/type/automotive" },
        { title: "Performance AGM/EFB", icon: Zap, href: "/products/type/performance" },
        { title: "Deep Cycle / Solar", icon: Sun, href: "/products/type/deep-cycle" },
        { title: "Truck & Powersport", icon: Truck, href: "/products/type/truck-motorcycle" },
        { title: "Show All Products", icon: LayoutGrid, href: "/products/all" },
    ],
    brand: [
        { title: "Willard Batteries", icon: Battery, href: "/products/brand/willard" },
        { title: "Enertec Batteries", icon: Battery, href: "/products/brand/enertec" },
        { title: "Exide Batteries", icon: Battery, href: "/products/brand/exide" },
    ]
};

export default function ProductsBasePage() {
  return (
    <div className="container py-16 space-y-16">
        
        {/* H1 and Introduction (SEO Focus) */}
        <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-6xl font-extrabold text-foreground">
                Find Your Perfect <span className="text-battery">Battery</span> Solution
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Shop our certified multi-brand selection by category, vehicle type, or specific battery code. All prices include a competitive warranty.
            </p>
        </div>

        {/* ------------------------------------------- */}
        {/* FILTER SECTION 1: SHOP BY CATEGORY/TYPE */}
        {/* ------------------------------------------- */}
        <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground text-center">1. Shop by Vehicle or Power Type</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                {filterLinks.category.map((item, index) => (
                    <Card key={index} className="hover:border-battery transition-colors shadow-lg">
                        <Link href={item.href}>
                            <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
                                <item.icon className="h-8 w-8 text-battery mb-3" />
                                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                            </CardContent>
                        </Link>
                    </Card>
                ))}
            </div>
        </div>

        <Separator className="bg-border" />
        
        {/* ------------------------------------------- */}
        {/* FILTER SECTION 2: QUICK FIND BY CODE/SIZE (The Critical Lookup) */}
        {/* ------------------------------------------- */}
        <div className="space-y-8">
            <h2 className="text-3xl font-bold text-foreground text-center">2. Look Up Battery Code or Size (e.g., 619)</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center">
                Know your battery code? Use this feature to instantly search all matching batteries across all brands we stock.
            </p>
            <CodeLookup /> {/* NEW COMPONENT INTEGRATION */}
        </div>
        
        <Separator className="bg-border" />

        {/* ------------------------------------------- */}
        {/* FILTER SECTION 3: SHOP BY BRAND (Trust Factor) */}
        {/* ------------------------------------------- */}
        <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground text-center">3. Shop by Brand</h2>
            <div className="flex flex-wrap justify-center gap-6">
                {filterLinks.brand.map((item, index) => (
                    <Card key={index} className="hover:border-battery transition-colors shadow-lg w-full max-w-[200px]">
                        <Link href={item.href}>
                            <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
                                <item.icon className="h-8 w-8 text-battery mb-3" />
                                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                            </CardContent>
                        </Link>
                    </Card>
                ))}
            </div>
        </div>
    </div>
  );
}