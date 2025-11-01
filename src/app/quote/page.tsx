// src/app/quote/page.tsx

import { Battery, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const EMERGENCY_PHONE = "0101096211";
const EMAIL_ADDRESS = "admin@albaertonbatterymart.co.za";

export default function QuotePage() {
  return (
    <div className="container py-16 text-center space-y-10 max-w-2xl">
      <Battery className="h-16 w-16 text-battery mx-auto" />
      <h1 className="text-5xl font-extrabold text-foreground">Request a Solar, Inverter, or Bulk Order Quote</h1>
      <p className="text-xl text-muted-foreground">
        Use the form below for all non-emergency, large-scale, or specialized energy system inquiries. Our expert will contact you within 4 hours during business days.
      </p>

      {/* Future: Quote Form Component */}
      <div className="bg-card p-8 rounded-lg border border-border shadow-xl">
        <h3 className="text-2xl font-bold text-foreground mb-4">Your Quote Request Details</h3>
        <div className="h-48 bg-secondary/20 flex items-center justify-center rounded-md text-muted-foreground">
          [Placeholder for Detailed Quote Form Component]
        </div>
      </div>

      <p className="text-lg text-foreground">
        For immediate assistance, please call us directly:
      </p>
      
      <div className="flex justify-center space-x-4">
        <Button asChild size="lg" variant="battery">
          <a href={`tel:${EMERGENCY_PHONE}`} className="flex items-center space-x-2">
            <Phone className="h-5 w-5" />
            <span>Call Now</span>
          </a>
        </Button>
        <Button asChild size="lg" variant="outline">
          <a href={`mailto:${EMAIL_ADDRESS}`} className="flex items-center space-x-2">
            <Mail className="h-5 w-5" />
            <span>Email Inquiry</span>
          </a>
        </Button>
      </div>
    </div>
  );
}