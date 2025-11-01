// src/components/layout/ThinCta.tsx
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from "lucide-react";
// Removed unused 'Link' import

// --- CONTACT DETAILS ---
const PRIMARY_PHONE = "0101096211"; 
const WHATSAPP_NUMBER_LINK = "27823046926"; 

const ThinCta = () => {
  return (
    <section className="w-full bg-battery py-8"> {/* Full Bright Red background for maximum contrast */}
      <div className="container px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-white space-y-4 md:space-y-0">
        
        <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          Emergency Battery Help: Call Us Now.
        </h3>
        
        <div className="flex space-x-4">
          
          {/* Call Us Button (White border over Red background) */}
          <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
            <a href={`tel:${PRIMARY_PHONE}`} className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>Call: {PRIMARY_PHONE}</span>
            </a>
          </Button>

          {/* WhatsApp Button (White border over Red background) */}
          <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
            <a href={`https://wa.me/${WHATSAPP_NUMBER_LINK}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
              <MessageSquare className="h-5 w-5" />
              <span>WhatsApp Now</span>
            </a>
          </Button>
        </div>
        
      </div>
    </section>
  );
};

export default ThinCta;