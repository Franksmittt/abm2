// src/components/layout/MobileNav.tsx
"use client";

import { useState } from 'react';
import Link from "next/link";
import { Menu, Battery } from "lucide-react"; // Removed unused 'X' icon
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

// Define navigation links centrally
const navItems = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Batteries" },
  { href: "/services", label: "Fitment & Testing" },
  { href: "/contact", label: "Contact Us" },
  { href: "/quote", label: "Get A Quote", isCta: true },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const PRIMARY_PHONE = "0101096211"; 
  const WHATSAPP_NUMBER_LINK = "27823046926"; 

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6 text-foreground" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full bg-background border-l border-border sm:max-w-xs">
        <SheetHeader className="pb-6">
          <SheetTitle>
            <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
              <Battery className="h-6 w-6 text-battery-foreground bg-battery rounded-full p-1" />
              <span className="text-lg font-extrabold tracking-tight text-foreground">
                ALBERTON <span className="text-battery">BATTERY MART</span>
              </span>
            </Link>
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-4 pt-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-xl font-medium ${item.isCta ? 'text-battery hover:text-battery/80' : 'text-foreground hover:text-battery'} transition-colors`}
              onClick={() => setIsOpen(false)} 
            >
              {item.label}
            </Link>
          ))}
          
          {/* Mobile CTAs for immediate contact */}
          <div className="flex flex-col space-y-3 pt-6">
            <Button asChild variant="battery" size="lg">
              <a href={`tel:${PRIMARY_PHONE}`}>Call Us: {PRIMARY_PHONE}</a>
            </Button>
            <Button asChild variant="secondary" size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              <a href={`https://wa.me/${WHATSAPP_NUMBER_LINK}`} target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;