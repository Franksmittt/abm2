// src/app/faq/page.tsx
import FaqPageContent from "@/components/layout/FaqPageContent";
import { Metadata } from "next";

// --- NEW: Page-Specific Metadata for SEO with Open Graph ---
export const metadata: Metadata = {
  title: "FAQ - Alberton Battery Mart | Free Testing & Fitment",
  description: "Answers to common battery questions in Alberton. Learn about our free callouts, warranty, and AGM/EFB batteries. Get expert advice.",
  keywords: [
    'battery FAQ Alberton',
    'battery questions',
    'AGM battery questions',
    'EFB battery questions',
    'battery warranty',
    'mobile callout service',
    'battery testing Alberton'
  ],
  openGraph: {
    title: "FAQ - Alberton Battery Mart | Free Testing & Fitment",
    description: "Answers to common battery questions in Alberton. Learn about our free callouts, warranty, and AGM/EFB batteries.",
    url: 'https://www.albertonbatterymart.co.za/faq',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.albertonbatterymart.co.za/faq',
  },
};

// This page serves as the dedicated SEO resource for FAQ keywords
export default function FaqPage() {
  return <FaqPageContent />;
}