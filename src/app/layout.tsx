// src/app/layout.tsx

import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/layout/Header"; 
import Footer from "@/components/layout/Footer"; 

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Header remains fixed at the top */}
          <Header /> 

          {/* The main structural wrapper sets a minimum height of the screen and uses flex-col.
            This ensures the footer is pushed to the bottom of the content.
          */}
          <div className="flex flex-col min-h-screen">
            {/* The main tag contains the page content.
              flex-grow ensures it takes up all remaining vertical space.
              pt-20 compensates for the fixed 80px (5rem) height of the Header.
            */}
            <main className="flex-grow w-full pt-20">
                {children}
            </main>
          </div>
          
          {/* Footer is placed after the main content */}
          <Footer /> 
        </ThemeProvider>
      </body>
    </html>
  );
}