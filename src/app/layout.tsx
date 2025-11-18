// C:\Users\User1\abm2\src\app\layout.tsx
import { Inter } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { GTM_ID } from "@/lib/gtm-constants";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";
import Script from "next/script"; // --- NEW: Import next/script
import { JsonLd } from "@/components/seo/JsonLd";
import {
  BASE_URL,
  BUSINESS_ADDRESS,
  BUSINESS_CONTACT,
  DEFAULT_HERO_IMAGE,
  DEFAULT_LOGO,
  DEFAULT_OPENING_HOURS,
  LOCAL_BUSINESS_ID,
  ORG_ID,
  SERVICE_AREAS,
} from "@/lib/seo-constants";

const inter = Inter({ subsets: ['latin'] });
const ENVIRONMENT = process.env.NODE_ENV ?? "development";

// --- SEO: Root Metadata with Open Graph & Twitter Cards ---
export const metadata: Metadata = {
  title: {
    default:
      "Alberton Battery Mart | Mobile Battery Replacement & Fitment Service",
    template: "%s | Alberton Battery Mart",
  },
  description:
    "Fast, certified mobile battery replacement service in Alberton, New Redruth, and Meyersdal. We bring the Willard & Exide battery to you. Call for a quote!",
  metadataBase: new URL(BASE_URL),
  keywords: [
    "battery replacement Alberton",
    "car battery Alberton",
    "mobile battery service",
    "Willard batteries",
    "Exide batteries",
    "battery fitment Alberton",
    "car battery New Redruth",
    "battery testing Alberton",
    "AGM battery Alberton",
    "EFB battery Alberton",
  ],
  authors: [{ name: "Alberton Battery Mart" }],
  creator: "Alberton Battery Mart",
  publisher: "Alberton Battery Mart",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: BASE_URL,
    siteName: "Alberton Battery Mart",
    title:
      "Alberton Battery Mart | Mobile Battery Replacement & Fitment Service",
    description:
      "Fast, certified mobile battery replacement service in Alberton, New Redruth, and Meyersdal. We bring the Willard & Exide battery to you. Call for a quote!",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alberton Battery Mart - Mobile Battery Replacement Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Alberton Battery Mart | Mobile Battery Replacement & Fitment Service",
    description:
      "Fast, certified mobile battery replacement service in Alberton, New Redruth, and Meyersdal.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    // Add Google Search Console verification when available
    // google: 'your-verification-code',
  },
};

// --- LocalBusiness Schema ---
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": LOCAL_BUSINESS_ID,
  name: "Alberton Battery Mart",
  image: DEFAULT_LOGO,
  url: BASE_URL,
  telephone: BUSINESS_CONTACT.telephone,
  priceRange: "R R R",
  address: { "@type": "PostalAddress", ...BUSINESS_ADDRESS },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -26.2735,
    longitude: 28.1256,
  },
  openingHoursSpecification: DEFAULT_OPENING_HOURS.map((entry) => ({
    "@type": "OpeningHoursSpecification",
    ...entry,
  })),
  sameAs: [BUSINESS_CONTACT.whatsapp].filter(Boolean),
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  name: "Alberton Battery Mart",
  url: BASE_URL,
  logo: DEFAULT_LOGO,
  image: DEFAULT_HERO_IMAGE,
  address: { "@type": "PostalAddress", ...BUSINESS_ADDRESS },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: BUSINESS_CONTACT.telephone,
      contactType: "customer service",
      areaServed: SERVICE_AREAS,
      availableLanguage: ["English"],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* --- MODIFIED: Removed the manual <script> tag for GTM --- */}

        {/* --- Add LocalBusiness Schema to HEAD --- */}
        <JsonLd data={localBusinessSchema} id="local-business-schema" />
        <JsonLd data={organizationSchema} id="organization-schema" />
      </head>

      <body className={inter.className}>
        {/* --- NEW: Add GTM <noscript> tag --- */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* --- NEW: Add GTM <Script> tag --- */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
        <Script id="abm-log-context" strategy="afterInteractive">
          {`
            window.__abmEnv = '${ENVIRONMENT}';
          `}
        </Script>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <Header />
          <div className="pt-20">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}