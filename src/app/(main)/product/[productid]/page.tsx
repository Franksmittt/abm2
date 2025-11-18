// src/app/(main)/product/[productid]/page.tsx

import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Metadata } from 'next';

import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Truck, Users, Clock, Zap, SunMoon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ALL_PRODUCTS, ProductCardData } from '@/data/products';
// The import below was removed because the function formatAhCapacity is no longer used,
// and the source file was empty, causing error TS2306.

// --- Metadata Generation ---
type Props = {
  params: { productid: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const productId = parseInt(params.productid);
  const product = ALL_PRODUCTS.find((p) => p.id === productId);

  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The requested product could not be found.',
    };
  }

  const title = `${product.name} | ${product.seoSubtitle} Price`;
  const description = product.seoDescription || `Buy ${product.name} ${product.category} battery with ${product.warrantyMonths}-month warranty, available in Alberton.`;

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      images: [
        {
          url: product.imagePath,
          alt: product.name,
        },
      ],
    },
  };
}

// --- Component Rendering ---
export default function ProductDetailPage({ params }: Props) {
  const productId = parseInt(params.productid);
  const product: ProductCardData | undefined = ALL_PRODUCTS.find(
    (p) => p.id === productId
  );

  if (!product) {
    notFound();
  }

  const isAGM = product.isAGM;

  return (
    <div className="container py-8 md:py-12">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Column: Image and Warranty Tag */}
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-sm aspect-square mb-6">
            <Image
              src={product.imagePath}
              alt={product.name}
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <Card className={cn(
            "w-full max-w-sm text-center p-4",
            isAGM ? "border-red-600 bg-red-50/50 dark:bg-red-950/20" : "border-green-600 bg-green-50/50 dark:bg-green-950/20"
          )}>
            <Clock className="w-6 h-6 inline-block mr-2" />
            <span className={cn(
              "text-xl font-extrabold",
              isAGM ? "text-red-600 dark:text-red-400" : "text-green-600 dark:text-green-400"
            )}>
              {product.warrantyMonths} Month Warranty
            </span>
            <p className="text-sm text-gray-500 mt-1">
              {isAGM ? "Exide Enduro AGM Performance Battery" : `${product.brandName} Standard Battery`}
            </p>
          </Card>
        </div>

        {/* Right Column: Details and CTA */}
        <div className="flex flex-col space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              {product.name}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {product.seoSubtitle}
            </p>
            <div className="flex items-baseline space-x-4">
              <span className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                Price:
              </span>
              <span className="text-4xl font-extrabold text-red-600 dark:text-red-400">
                {product.sellingPrice_OUTPUT}
              </span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              (Price is indicative and subject to change.)
            </p>
          </div>

          <Separator />

          {/* Key Specifications Card */}
          <Card className="p-6">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-2xl">Key Specifications</CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-red-600" />
                  <p className="font-medium">CCA (Cold Cranking Amps):</p>
                </div>
                <p className="text-right font-bold text-lg">
                  {product.cca || 'N/A'}
                </p>
                <div className="flex items-center space-x-2">
                  <SunMoon className="w-5 h-5 text-yellow-600" />
                  <p className="font-medium">Capacity (Ah):</p>
                </div>
                <p className="text-right font-bold text-lg">
                  {product.ahCapacity}Ah
                </p>
              </div>
              
              <Separator />

              {/* POPULAR FITS (RETAINED ON THIS PAGE) */}
              <div className="space-y-2">
                <p className="flex items-center space-x-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
                  <Users className="w-5 h-5" />
                  <span>Popular Vehicle Fits:</span>
                </p>
                <p className="text-base text-gray-600 dark:text-gray-400 pl-7">
                  {product.popularFits}
                </p>
              </div>

            </CardContent>
          </Card>

          <Separator />

          {/* CTA Section */}
          <div className="flex flex-col space-y-4">
            <Button size="lg" className="w-full text-lg h-12 bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600">
              <Truck className="w-5 h-5 mr-2" />
              Request a Free Quote & Installation
            </Button>
            <Button variant="outline" size="lg" className="w-full text-lg h-12">
              Call Now: 011 869 1709
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}