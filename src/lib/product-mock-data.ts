// src/lib/product-mock-data.ts
// Defines the structure and supplies the data for the Product Card component.

// 1. Define the TypeScript interface for a Product Card
export interface ProductCardData {
  id: number;
  name: string; 
  sku: string; 
  category: string; // Used for filtering listing pages
  ahCapacity: number; 
  cca: number; 
  warrantyMonths: number; 
  priceAnchor: string; // The displayed price string
  isAGM: boolean; 
  imagePath: string; 
}

// 2. Define static Willard mock data for display (11 items)
export const MOCK_PRODUCTS: ProductCardData[] = [
  {
    id: 101,
    name: "Willard 619 Car Battery",
    sku: "619",
    category: "Standard Automotive",
    ahCapacity: 43,
    cca: 325,
    warrantyMonths: 24,
    priceAnchor: "R 1,450.00",
    isAGM: false,
    imagePath: "/images/willard-619.jpg",
  },
  {
    id: 102,
    name: "Willard 652 Car Battery",
    sku: "652",
    category: "Standard Automotive",
    ahCapacity: 70,
    cca: 590,
    warrantyMonths: 24,
    priceAnchor: "R 2,150.00",
    isAGM: false,
    imagePath: "/images/willard-652.jpg",
  },
  {
    id: 103,
    name: "Willard 669 Car Battery",
    sku: "669",
    category: "Standard Automotive",
    ahCapacity: 80,
    cca: 590,
    warrantyMonths: 24,
    priceAnchor: "R 3,000.00",
    isAGM: false,
    imagePath: "/images/willard-669.jpg",
  },
  {
    id: 104,
    name: "Willard 668 Car Battery",
    sku: "668",
    category: "Standard Automotive",
    ahCapacity: 80,
    cca: 590,
    warrantyMonths: 24,
    priceAnchor: "R 2,950.00",
    isAGM: false,
    imagePath: "/images/willard-668.jpg",
  },
  {
    id: 105,
    name: "Willard 657 Car Battery",
    sku: "657",
    category: "Standard Automotive",
    ahCapacity: 70,
    cca: 590,
    warrantyMonths: 24,
    priceAnchor: "R 2,400.00",
    isAGM: false,
    imagePath: "/images/willard-657.jpg",
  },
  {
    id: 106,
    name: "Willard 651/647 Car Battery",
    sku: "651",
    category: "Standard Automotive",
    ahCapacity: 60,
    cca: 460,
    warrantyMonths: 24,
    priceAnchor: "R 2,200.00",
    isAGM: false,
    imagePath: "/images/willard-651.jpg",
  },
  {
    id: 107,
    name: "Willard 616 Car Battery",
    sku: "616",
    category: "Standard Automotive",
    ahCapacity: 35,
    cca: 280,
    warrantyMonths: 24,
    priceAnchor: "R 1,550.00",
    isAGM: false,
    imagePath: "/images/willard-616.jpg",
  },
  {
    id: 108,
    name: "Willard 628/9 Car Battery",
    sku: "628",
    category: "Standard Automotive",
    ahCapacity: 50,
    cca: 335,
    warrantyMonths: 24,
    priceAnchor: "R 1,600.00",
    isAGM: false,
    imagePath: "/images/willard-628.jpg",
  },
  {
    id: 109,
    name: "Willard 658 Car Battery",
    sku: "658",
    category: "Standard Automotive",
    ahCapacity: 90,
    cca: 630,
    warrantyMonths: 24,
    priceAnchor: "R 3,050.00",
    isAGM: false,
    imagePath: "/images/willard-658.jpg",
  },
  {
    id: 110,
    name: "Willard 646 Car Battery",
    sku: "646",
    category: "Standard Automotive",
    ahCapacity: 55,
    cca: 380,
    warrantyMonths: 24,
    priceAnchor: "R 1,900.00",
    isAGM: false,
    imagePath: "/images/willard-646.jpg",
  },
  // High-performance placeholder item
  {
    id: 201,
    name: "Willard EFB Start/Stop",
    sku: "W668EFB",
    category: "Performance AGM/EFB",
    ahCapacity: 75,
    cca: 780,
    warrantyMonths: 36, 
    priceAnchor: "R 3,499.00",
    isAGM: true,
    imagePath: "/images/willard-efb.jpg",
  },
];