// C:\Users\User1\abm2\src\app\layout.tsx
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from "@/components/theme-provider"; 
import { GTM_ID } from '@/lib/gtm-constants'; 
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Metadata } from 'next';
import Script from 'next/script'; // --- NEW: Import next/script

const inter = Inter({ subsets: ['latin'] });

// --- SEO: Root Metadata with Open Graph & Twitter Cards ---
export const metadata: Metadata = {
  title: {
    default: 'Alberton Battery Mart | Mobile Battery Replacement & Fitment Service',
    template: '%s | Alberton Battery Mart'
  },
  description: 'Fast, certified mobile battery replacement service in Alberton, New Redruth, and Meyersdal. We bring the Willard & Exide battery to you. Call for a quote!',
  metadataBase: new URL('https://www.albertonbatterymart.co.za'),
  keywords: [
    'battery replacement Alberton',
    'car battery Alberton',
    'mobile battery service',
    'Willard batteries',
    'Exide batteries',
    'battery fitment Alberton',
    'car battery New Redruth',
    'battery testing Alberton',
    'AGM battery Alberton',
    'EFB battery Alberton'
  ],
  authors: [{ name: 'Alberton Battery Mart' }],
  creator: 'Alberton Battery Mart',
  publisher: 'Alberton Battery Mart',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://www.albertonbatterymart.co.za',
    siteName: 'Alberton Battery Mart',
    title: 'Alberton Battery Mart | Mobile Battery Replacement & Fitment Service',
    description: 'Fast, certified mobile battery replacement service in Alberton, New Redruth, and Meyersdal. We bring the Willard & Exide battery to you. Call for a quote!',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Alberton Battery Mart - Mobile Battery Replacement Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alberton Battery Mart | Mobile Battery Replacement & Fitment Service',
    description: 'Fast, certified mobile battery replacement service in Alberton, New Redruth, and Meyersdal.',
    images: ['/images/og-image.jpg'],
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
    canonical: 'https://www.albertonbatterymart.co.za',
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
  "name": "Alberton Battery Mart",
  "image": "https://www.albertonbatterymart.co.za/images/logo-schema.jpg", 
  "url": "https://www.albertonbatterymart.co.za",
  "telephone": "+27101096211", 
  "priceRange": "R R R", 
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "28 St Columb Rd",
    "addressLocality": "New Redruth",
    "addressRegion": "Alberton",
    "postalCode": "1450",
    "addressCountry": "ZA"
  },
  "geo": { 
    "@type": "GeoCoordinates",
    "latitude": -26.2735, 
    "longitude": 28.1256  
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00", 
      "closes": "17:00" 
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00", 
      "closes": "12:00" 
    }
  ],
  "sameAs": []
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        
      </head>

      <body className={inter.className}>
        {/* --- NEW: Add GTM <noscript> tag --- */}
        <noscript>
          <iframe 
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
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