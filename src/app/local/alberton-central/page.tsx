// src/app/local/alberton-central/page.tsx
import { Metadata } from 'next';
import { Phone, MapPin, Zap, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import ProductSpotlight from '@/components/content/ProductSpotlight';
import FaqSection from '@/components/layout/FaqSection';

// --- SEO: Hyper-Local Metadata ---
export const metadata: Metadata = {
  title: 'Mobile Battery Replacement Alberton Central | Alberton Battery Mart',
  description: 'Fast, on-site mobile battery replacement for Alberton Central. Stuck at Alberton City? We come to you. Free fitment & alternator testing.',
  alternates: {
    canonical: 'https://www.albertonbatterymart.co.za/local/alberton-central',
  },
};

// --- CONTACTS ---
const EMERGENCY_PHONE_DISPLAY = "010 109 6211";
const EMERGENCY_PHONE_LINK = "0101096211";

export default function AlbertonCentralPage() {
  return (
    <div className="space-y-16">
      
      {/* --- 1. HYPER-LOCAL HERO --- */}
      <section className="bg-card border-b border-border py-20">
        <div className="container text-center max-w-4xl space-y-6">
          <span className="text-battery font-bold text-lg uppercase">
            Hyper-Local Service: Alberton Central
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-foreground">
            Mobile Battery Replacement in <span className="text-battery">Alberton Central</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Stuck at Alberton City Mall, at your office, or on Voortrekker Road? Our mobile team is minutes away. We provide fast, on-site battery testing and expert fitment for your vehicle.
          </p>
          <Button asChild size="xl" variant="battery" className="shadow-lg">
            <a href={`tel:${EMERGENCY_PHONE_LINK}`} className="flex items-center space-x-3 mx-auto">
              <Phone className="h-6 w-6" />
              <span>Call for Immediate Help in Alberton Central</span>
            </a>
          </Button>
        </div>
      </section>

      {/* --- 2. LOCAL PROOF & SERVICES --- */}
      <section className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Local Service Details */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-foreground">
              Your Specialist <span className="text-battery">On-Site</span> Service
            </h2>
            <p className="text-lg text-muted-foreground">
              Don't get stranded. We are your local Alberton specialists, based in New Redruth, ready to dispatch a full-service mobile unit to your location in Alberton Central.
            </p>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start space-x-3">
                <Zap className="h-6 w-6 text-battery mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Fast Mobile Dispatch</h3>
                  <p className="text-muted-foreground text-base">Our mobile unit is equipped to handle 99% of battery issues on-site.</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <ShieldCheck className="h-6 w-6 text-battery mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Full Warranty & Testing</h3>
                  <p className="text-muted-foreground text-base">All batteries include a full manufacturer warranty, plus our free on-site alternator test to ensure your charging system is healthy.</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-battery mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Visit Our Nearby Store</h3>
                  <p className="text-muted-foreground text-base">
                    Prefer to visit? Our main store is just down the road at <Link href="/contact" className="text-battery underline">28 St Columb Rd, New Redruth</Link>.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Right: Local Image (Placeholder) */}
          <div className="w-full h-80 bg-secondary/20 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
            <p className="text-muted-foreground">Placeholder: Image of Alberton City Mall or local landmark</p>
          </div>
        </div>
      </section>

      <Separator />

      {/* --- 3. RE-USED PRODUCT SPOTLIGHT --- */}
      <ProductSpotlight count={3} />

      {/* --- 4. RE-USED FAQ SECTION --- */}
      <FaqSection />

    </div>
  );
}