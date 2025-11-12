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

// --- SEO: Root Metadata ---
export const metadata: Metadata = {
  title: 'Alberton Battery Mart | Mobile Battery Replacement & Fitment Service', 
  description: 'Fast, certified mobile battery replacement service in Alberton, New Redruth, and Meyersdal. We bring the Willard & Exide battery to you. Call for a quote!',
  metadataBase: new URL('https://www.albertonbatterymart.co.za'), 
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