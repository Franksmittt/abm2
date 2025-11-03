        // src/data/products.ts
        // This file is generated automatically from product_master_template.csv

export interface ProductCardData {
  id: number;
  name: string; 
  sku: string;
  category: string;
  brandName: string;
  ahCapacity: number; 
  cca: number; 
  warrantyMonths: number; 
  priceAnchor: string; // The displayed price string (e.g., 'R 1,200.00')
  isAGM: boolean; 
  imagePath: string;
}

        export const ALL_PRODUCTS: ProductCardData[] = [
{
    id: 101,
    name: "Willard 619 Maintenance-Free",
    sku: "619",
    category: "Standard Automotive",
    brandName: "Willard",
    ahCapacity: 43,
    cca: 325,
    warrantyMonths: 24,
    priceAnchor: "R 1,300.00",
    isAGM: false,
    imagePath: "/images/willard-619.jpg",
},
{
    id: 102,
    name: "Willard 652 Maintenance-Free",
    sku: "652",
    category: "Standard Automotive",
    brandName: "Willard",
    ahCapacity: 70,
    cca: 590,
    warrantyMonths: 24,
    priceAnchor: "R 2,600.00",
    isAGM: false,
    imagePath: "/images/willard-652.jpg",
},
{
    id: 103,
    name: "Willard 658 High Performance",
    sku: "658",
    category: "Standard Automotive",
    brandName: "Willard",
    ahCapacity: 68,
    cca: 600,
    warrantyMonths: 25,
    priceAnchor: "R 3,437.50",
    isAGM: false,
    imagePath: "/images/willard-658.jpg",
},
{
    id: 104,
    name: "Willard 668 Commercial",
    sku: "668",
    category: "Standard Automotive",
    brandName: "Willard",
    ahCapacity: 90,
    cca: 720,
    warrantyMonths: 25,
    priceAnchor: "R 4,000.00",
    isAGM: false,
    imagePath: "/images/willard-668.jpg",
},
{
    id: 105,
    name: "Willard 628 EFB Start/Stop",
    sku: "628",
    category: "Performance AGM/EFB",
    brandName: "Willard",
    ahCapacity: 70,
    cca: 680,
    warrantyMonths: 36,
    priceAnchor: "R 4,680.00",
    isAGM: true,
    imagePath: "/images/willard-628-efb.jpg",
},
{
    id: 201,
    name: "Exide 646 Eco",
    sku: "646",
    category: "Standard Automotive",
    brandName: "Exide",
    ahCapacity: 55,
    cca: 380,
    warrantyMonths: 24,
    priceAnchor: "R 2,145.00",
    isAGM: false,
    imagePath: "/images/exide-646.jpg",
},
{
    id: 202,
    name: "Exide 652 High Cycle",
    sku: "652",
    category: "Standard Automotive",
    brandName: "Exide",
    ahCapacity: 70,
    cca: 600,
    warrantyMonths: 24,
    priceAnchor: "R 3,187.50",
    isAGM: false,
    imagePath: "/images/exide-652.jpg",
},
{
    id: 203,
    name: "Exide 658 AGM Performance",
    sku: "658",
    category: "Performance AGM/EFB",
    brandName: "Exide",
    ahCapacity: 72,
    cca: 720,
    warrantyMonths: 36,
    priceAnchor: "R 4,920.00",
    isAGM: true,
    imagePath: "/images/exide-658-agm.jpg",
},
{
    id: 204,
    name: "Exide 668 AGM Premium",
    sku: "668",
    category: "Performance AGM/EFB",
    brandName: "Exide",
    ahCapacity: 95,
    cca: 850,
    warrantyMonths: 36,
    priceAnchor: "R 5,760.00",
    isAGM: true,
    imagePath: "/images/exide-668-agm.jpg",
},
{
    id: 301,
    name: "Willard 646 Maintenance-Free",
    sku: "646",
    category: "Standard Automotive",
    brandName: "Willard",
    ahCapacity: 55,
    cca: 380,
    warrantyMonths: 24,
    priceAnchor: "R 2,210.00",
    isAGM: false,
    imagePath: "/images/willard-646.jpg",
}
        ];
