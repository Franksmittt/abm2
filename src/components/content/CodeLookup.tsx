// src/components/content/CodeLookup.tsx
"use client";
import { useState, useMemo } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Info, Phone } from "lucide-react";
import { ALL_PRODUCTS } from "@/data/products"; 
import ProductCard from "@/components/content/ProductCard"; 
// *** NEW IMPORT ***
import { useRouter } from 'next/navigation';

const EMERGENCY_PHONE = "0101096211";

const CodeLookup = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const router = useRouter(); // Initialize router for navigation
    
    // In-page filtering logic (for instant feedback in the hub)
    const filteredProducts = useMemo(() => {
        if (!searchTerm) return [];
        const normalizedSearch = searchTerm.toLowerCase().trim();
        return ALL_PRODUCTS.filter(product =>
            product.sku.toLowerCase().includes(normalizedSearch) || 
            product.name.toLowerCase().includes(normalizedSearch)
        ).slice(0, 12); 
    }, [searchTerm]);
    
    // --- NEW: Handle Form Submission ---
    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchTerm) {
            // Redirects to the results page using the query parameter
            router.push(`/products/results?q=${encodeURIComponent(searchTerm)}`);
        }
    };
    
    return (
        <div className="space-y-6">
            {/* Wrap the input and button in a form for submission */}
            <form onSubmit={handleSearchSubmit} className="flex w-full max-w-lg mx-auto space-x-2">
                <Input
                    type="text"
                    placeholder="Search by Code (e.g., 619, 652, EFB) or Product Name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="h-12 text-lg bg-card border-battery/50"
                />
                <Button type="submit" variant="battery" size="lg" disabled={!searchTerm}><Search /></Button>
            </form>

            {/* Display Results or Guidance */}
            {/* ... (Rest of the component remains the same for instant filtering display) ... */}
            
            <div className="pt-4">
                {/* We can now remove the in-page display if we want to force redirect, 
                   but keeping it for instant UX feedback is usually better. 
                   We will leave this section as is for now. */}
                {/* ... (Display logic for filteredProducts remains) ... */}
            </div>
        </div>
    );
};

export default CodeLookup;