// src/components/content/ProductCard.tsx

'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { cn } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ProductCardData } from '@/data/products';

export function ProductCard({ product }: { product: ProductCardData }) {
  const isAGM = product.isAGM;
  
  // Use product ID to create dynamic link path
  const linkPath = `/product/${product.id}`;

  return (
    <Link 
      href={linkPath}
      className={cn(
        'block w-full h-full transform transition-all duration-300',
        'hover:scale-[1.02] hover:shadow-2xl rounded-xl',
        'focus:outline-none focus:ring-4 focus:ring-red-500/50'
      )}
    >
      <Card className="w-full h-full flex flex-col justify-between overflow-hidden">
        <CardHeader className="p-4 flex flex-col items-center">
          <Image
            src={product.imagePath}
            alt={product.name}
            width={120}
            height={120}
            className="object-contain mb-3"
          />
          <CardTitle className="text-lg text-center leading-snug">
            {product.name}
          </CardTitle>
          <CardDescription className="text-center text-xs">
            {product.seoSubtitle}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="p-4 pt-0 flex flex-col justify-between h-full">
          <div className="flex-grow">
            {/* // The original 'Popular Fits' section is removed from the Card List View, 
              // but the data remains available on the individual product page (page.tsx).
            */}
          </div>
          
          <Separator className="my-3" />
          
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
            <p className="font-semibold">CCA:</p>
            <p className="text-right">{product.cca || 'N/A'}</p>
            
            <p className="font-semibold">Capacity (Ah):</p>
            <p className="text-right">{product.ahCapacity}Ah</p>

            <p className={cn("font-semibold", isAGM ? "text-red-600 dark:text-red-400" : "text-green-600 dark:text-green-400")}>
              Warranty:
            </p>
            <p className={cn("text-right font-bold", isAGM ? "text-red-600 dark:text-red-400" : "text-green-600 dark:text-green-400")}>
              {product.warrantyMonths} Months
            </p>
          </div>
        </CardContent>
        
        <CardFooter className={cn(
          "p-4 border-t",
          isAGM ? "bg-red-50 dark:bg-red-950/20" : "bg-green-50 dark:bg-green-950/20"
        )}>
          <div className="flex justify-between items-center w-full">
            <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
              Retail Price:
            </span>
            <span className="text-xl font-extrabold text-red-600 dark:text-red-400">
              {product.sellingPrice_OUTPUT}
            </span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}