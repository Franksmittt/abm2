// src/app/api/feeds/local.xml/route.ts
import { ALL_PRODUCTS } from "@/data/products";
import { NextRequest, NextResponse } from "next/server";

// --- CRITICAL: REPLACE THIS ---
// This code must be retrieved from your linked Google Business Profile [cite: 3390, 3474-3475]
const STORE_CODE = 'YOUR_GMB_STORE_CODE_HERE';
// ---

// Helper function to format the price
function formatPrice(priceAnchor: string): string {
  // Input: "R 1,450.00"
  const price = priceAnchor
    .replace("R", "")
    .replace(/,/g, "")
    .trim();
  // Output: "1450.00 ZAR"
  return `${price} ZAR`;
}

export async function GET(request: NextRequest) {
  const baseUrl = "https://www.albertonbatterymart.co.za";
  const products = ALL_PRODUCTS;

  const xmlEntries = products.map(product => {
    // --- NOTE: Your products.ts has no quantity. ---
    // We are hardcoding a quantity of '10' for every item to make the feed valid.
    // For a real-world system, this 'quantity' would come from your database.
    const quantity = 10; 
    const availability = quantity > 0 ? 'in stock' : 'out of stock';

    return `
    <entry>
      <g:id>${product.id}</g:id>
      <g:store_code>${STORE_CODE}</g:store_code>
      <g:price>${formatPrice(product.priceAnchor)}</g:price>
      <g:quantity>${quantity}</g:quantity>
      <g:availability>${availability}</g:availability>
      <g:pickup_method>buy</g:pickup_method>
      <g:pickup_sla>same day</g:pickup_sla>
    </entry>`;
  }).join("");

  const xmlFeed = `
<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xmlns:g="http://base.google.com/ns/1.0">
  <title>Alberton Battery Mart Local Inventory Feed</title>
  <link rel="self" href="${baseUrl}/api/feeds/local.xml" />
  ${xmlEntries}
</feed>
  `.trim();

  return new NextResponse(xmlFeed, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      // Cache local inventory for less time than the primary feed
      "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=900",
    },
  });
}