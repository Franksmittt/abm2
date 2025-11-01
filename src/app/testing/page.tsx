// src/app/testing/page.tsx
import { Gauge, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const EMERGENCY_PHONE = "0101096211";

export default function TestingPage() {
  return (
    <div className="container py-16 text-center space-y-8 max-w-3xl">
      <Gauge className="h-12 w-12 text-battery mx-auto" />
      <h1 className="text-5xl font-extrabold text-foreground">Free On-Site Battery Testing</h1>
      <p className="text-xl text-muted-foreground">
        Every service call includes a professional diagnostic test to confirm your battery's health and performance. This service is complimentary with all fitments.
      </p>
      
      <div className="bg-card p-6 rounded-lg border border-border shadow-lg space-y-3">
        <h2 className="text-2xl font-bold text-battery">Alternator Check Included</h2>
        <p className="text-foreground">
          We go further than a simple voltage check. Our technicians test your **alternator output and charging circuit** to prevent premature failure on your new battery.
        </p>
      </div>

      <Button asChild size="xl" variant="battery" className="mt-8 shadow-lg">
        <a href={`tel:${EMERGENCY_PHONE}`} className="flex items-center space-x-3 mx-auto">
          <Phone className="h-6 w-6" />
          <span>Call Now to Schedule Free Testing</span>
        </a>
      </Button>
    </div>
  );
}