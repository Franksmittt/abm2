// src/app/contact/page.tsx
import { Metadata } from "next";
import { headers } from "next/headers";
import ContactPageContent from "@/components/content/ContactPageContent";

// Mark route as dynamic since we're using headers()
export const dynamic = 'force-dynamic';

// --- NEW: Page-Specific Metadata for SEO with Open Graph ---
export const metadata: Metadata = {
  title: "Contact Alberton Battery Mart | Callouts & Store Location",
  description: "Contact us for battery help. Call 010 109 6211, WhatsApp us, or visit our store at 28 St Columb Rd, New Redruth, Alberton for a free battery test.",
  keywords: [
    'contact battery service Alberton',
    'battery store Alberton',
    'battery shop New Redruth',
    'battery callout Alberton',
    'battery testing Alberton'
  ],
  openGraph: {
    title: "Contact Alberton Battery Mart | Callouts & Store Location",
    description: "Contact us for battery help. Call 010 109 6211, WhatsApp us, or visit our store at 28 St Columb Rd, New Redruth, Alberton.",
    url: 'https://www.albertonbatterymart.co.za/contact',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Alberton Battery Mart',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.albertonbatterymart.co.za/contact',
  },
};

export default function ContactPage() {
  const bucketHeader = headers().get("x-ab-bucket");
  const bucket: "control" | "variant" = bucketHeader === "variant" ? "variant" : "control";

  return <ContactPageContent bucket={bucket} />;
}