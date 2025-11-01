// src/app/contact/page.tsx

import { Mail, MapPin, Clock, Phone, MessageSquare } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Import Button
import { Card, CardContent } from "@/components/ui/card"; // Import Card
import ContactForm from "@/components/content/ContactForm"; // Import the form

// --- FINAL VERIFIED CONTACT DETAILS ---
const CONTACT_DETAILS = {
  primaryPhone: "0101096211",
  whatsAppNumber: "082 304 6926", // Display number
  whatsAppLink: "27823046926", // Link format
  email: "admin@albaertonbatterymart.co.za",
  address: "28 St Columb Rd, New Redruth, Alberton, 1450",
  hours: "Mon - Fri: 8:00am - 5:00pm | Sat: 8:00am - 1:00pm",
  mapsLink: "https://maps.app.goo.gl/w13E2jc81bMM3uty5",
};

const IFRAME_SRC = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.683815614464!2d28.12046317541756!3d-26.27192337703497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e951bf317cfb98d%3A0x33408b268a9458a6!2sAlberton%20Battery%20Mart!5e0!3m2!1sen!2sza!4v1761999180110!5m2!1sen!2sza";

export default function ContactPage() {
  return (
    <div className="container py-16 space-y-12">
      <h1 className="text-5xl font-extrabold text-foreground text-center">Get in Touch with Our Experts</h1>
      <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-center">
        Call us for immediate assistance, or use the form below for detailed inquiries.
      </p>

      {/* Grid: Contact Options, Form, and Map */}
      <div className="grid lg:grid-cols-3 gap-10 pt-6">
        
        {/* Column 1: Contact Details & CTAs */}
        <div className="lg:col-span-1 space-y-6">
          
          <h2 className="text-3xl font-bold text-battery mb-4">Immediate Contact</h2>
          
          {/* CTA: Phone Call (High Urgency) */}
          <Card className="bg-card border-l-4 border-battery">
            <CardContent className="p-4 space-y-2">
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-battery" />
                <h3 className="text-xl font-bold text-foreground">Mobile Callouts / Shop Line</h3>
              </div>
              <p className="text-2xl font-extrabold text-foreground">{CONTACT_DETAILS.primaryPhone}</p>
              <Button asChild variant="battery" className="w-full mt-2">
                <a href={`tel:${CONTACT_DETAILS.primaryPhone}`}>Call Us Now</a>
              </Button>
            </CardContent>
          </Card>
          
          {/* CTA: WhatsApp (Messaging Only) - CRITICAL CLARITY */}
          <Card className="bg-card border-l-4 border-green-600">
            <CardContent className="p-4 space-y-2">
              <div className="flex items-center space-x-3">
                <MessageSquare className="h-6 w-6 text-green-600" />
                <h3 className="text-xl font-bold text-foreground">WhatsApp Messaging Only</h3>
              </div>
              <p className="text-lg text-muted-foreground">**Please note: This number is for messaging only. No calls.**</p>
              <Button asChild variant="secondary" className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white">
                <a href={`https://wa.me/${CONTACT_DETAILS.whatsAppLink}`} target="_blank" rel="noopener noreferrer">
                  Message {CONTACT_DETAILS.whatsAppNumber}
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Other Details */}
          <div className="space-y-4 pt-4 border-t border-border">
            <h3 className="text-2xl font-bold text-foreground">Location & Hours</h3>
            
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-battery flex-shrink-0" />
              <p className="text-lg text-foreground">
                <a href={CONTACT_DETAILS.mapsLink} target="_blank" className="hover:text-battery">
                  {CONTACT_DETAILS.address} (Click for Directions)
                </a>
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <Clock className="h-6 w-6 text-battery" />
              <p className="text-lg text-foreground">{CONTACT_DETAILS.hours}</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-battery" />
              <Link href={`mailto:${CONTACT_DETAILS.email}`} className="text-lg text-foreground hover:text-battery">
                {CONTACT_DETAILS.email}
              </Link>
            </div>
          </div>
        </div>

        {/* Column 2: Contact Form */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-foreground mb-6">Send Us a Detailed Inquiry</h2>
          <ContactForm />
        </div>
      </div>

      {/* Full Width Section for Map */}
      <div className="w-full pt-16">
        <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Find Us on the Map</h2>
        <div className="bg-card rounded-lg overflow-hidden border border-border aspect-video shadow-xl">
          {/* Embedded Map (Zero API Cost) */}
          <iframe 
            src={IFRAME_SRC} 
            width="100%" 
            height="100%" 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
            title="Google Maps Location of Alberton Battery Mart"
          />
        </div>
      </div>
    </div>
  );
}