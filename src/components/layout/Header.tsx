// src/components/layout/Header.tsx
import Link from "next/link";
import { Battery, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileNav from "@/components/layout/MobileNav";

const Header = () => {
  // FINAL FORMATTING
  const PRIMARY_PHONE = "010 109 6211";
  const WHATSAPP_NUMBER_LINK = "27823046926"; // Link format remains concise

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Batteries" },
    { href: "/services", label: "Fitment & Testing" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="container flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo and Brand Name */}
        <Link href="/" className="flex items-center space-x-3">
          <Battery className="h-6 w-6 text-battery-foreground bg-battery rounded-full p-1" />
          <span className="text-xl font-extrabold tracking-tight text-foreground">
            ALBERTON <span className="text-battery">BATTERY MART</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-foreground transition-colors hover:text-battery font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center space-x-3">

          {/* Call Us Button */}
          <Button asChild variant="battery" size="sm">
            <a href={`tel:${PRIMARY_PHONE}`} className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>Call Us</span>
            </a>
          </Button>

          {/* WhatsApp Button */}
          <Button asChild variant="secondary" size="sm" className="bg-green-600 hover:bg-green-700 text-white">
            <a href={`https://wa.me/${WHATSAPP_NUMBER_LINK}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
              <MessageSquare className="h-4 w-4" />
              <span>WhatsApp</span>
            </a>
          </Button>

        </div>

        {/* Mobile Navigation Trigger */}
        <MobileNav />

      </div>
    </header>
  );
};

export default Header;