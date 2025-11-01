// src/components/layout/FaqPageContent.tsx
import { Button } from "@/components/ui/button"; 
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

// --- CONTACT DETAILS (Lead Gen) ---
const PRIMARY_PHONE = "0101096211";
const EMAIL_ADDRESS = "admin@albaertonbatterymart.co.za";

// Highly relevant, objection-handling questions (8 total)
// This expanded set is rich in keywords like EFB, AGM, Alternator, etc.
const faqItems = [
  {
    question: "1. Is the mobile callout service free?",
    answer: "Our mobile callout includes a service fee for travel time and on-site assistance. However, the **battery testing and fitment service itself are 100% free.** You only pay for the battery and the callout fee, ensuring you receive transparent, fixed pricing.",
  },
  {
    question: "2. How long is the warranty period on your batteries?",
    answer: "We offer warranties ranging from 24 to 36 months on premium batteries. The specific warranty period is clearly displayed on every product and validated with our professional fitment service.",
  },
  {
    question: "3. Do you stock batteries for Start/Stop (EFB & AGM) vehicles?",
    answer: "Yes. We stock and specialize in **EFB (Enhanced Flooded Battery) and AGM (Absorbed Glass Mat) technology** required by modern vehicles, eliminating the risk of using an incorrect, warranty-voiding battery.",
  },
  {
    question: "4. Do I need an appointment for a battery replacement?",
    answer: "While you can visit our storefront directly during trading hours, we recommend calling first, especially for mobile service, to schedule the fastest dispatch time and ensure immediate availability of your specific battery code.",
  },
  {
    question: "5. How do I know if my alternator is faulty?",
    answer: "If your battery keeps failing after a recent replacement, your alternator is likely the issue. We offer a **free on-site alternator diagnostic test** with every fitment to identify and solve this problem permanently.",
  },
  {
    question: "6. Which brands do you stock, and why?",
    answer: "We are a multi-brand stockist, offering the best options from **Willard, Enertec, and Exide**. This flexibility allows us to guarantee the best fit for your vehicle's specifications and your budget, unlike single-brand centers.",
  },
  {
    question: "7. Do you sell batteries for solar and backup power?",
    answer: "Yes. We stock a full range of deep cycle batteries, including high-end Lithium ($\text{LiFePO}_{4}$) and AGM models, designed specifically for home inverters, solar setups, and load shedding mitigation.",
  },
  {
    question: "8. Where is your physical store located?",
    answer: `Our physical store is located at **28 St Columb Rd, New Redruth, Alberton, 1450.** We encourage in-store visits for expert consultation and over-the-counter sales.`,
  },
];

const FaqPageContent = () => {
  // Split the 8 questions into two arrays of 4 each for the desktop 2-column view
  const firstColumn = faqItems.slice(0, 4);
  const secondColumn = faqItems.slice(4, 8);

  return (
    // Background is white (bg-white) for the clean visual break 
    <section className="w-full bg-white py-16"> 
      <div className="container px-4 md:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold tracking-tight text-black">
            Frequently Asked Questions (FAQ)
          </h1>
          <p className="text-xl text-gray-700 mt-3">
            Get instant answers from Alberton's battery experts.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Grid for 2 Columns on desktop, stacking on mobile */}
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            
            {/* Column 1 */}
            <Accordion type="single" collapsible className="w-full">
              {firstColumn.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-300"> 
                  <AccordionTrigger className="text-lg font-semibold text-black hover:text-battery">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            {/* Column 2 */}
            <Accordion type="single" collapsible className="w-full">
              {secondColumn.map((item, index) => (
                <AccordionItem key={index} value={`item-${index + 4}`} className="border-b border-gray-300"> 
                  <AccordionTrigger className="text-lg font-semibold text-black hover:text-battery">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

          </div>
        </div>
        
        <Separator className="bg-gray-300 mt-16 max-w-4xl mx-auto" />

        {/* Lead Generation Hook: Final Contact CTA */}
        <div className="text-center pt-10">
          <h2 className="text-3xl font-extrabold text-black mb-4">
            Need Expert Advice or Immediate Service?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Call us now for a guaranteed quote and fast service booking.
          </p>
          <div className="flex justify-center space-x-4">
            <Button asChild size="xl" variant="battery" className="shadow-lg">
              <a href={`tel:${PRIMARY_PHONE}`}>
                <Phone className="h-5 w-5 mr-2" /> Call Now: {PRIMARY_PHONE}
              </a>
            </Button>
            <Button asChild size="xl" variant="outline" className="text-black border-black hover:bg-gray-200">
              <a href={`mailto:${EMAIL_ADDRESS}`}>
                <Mail className="h-5 w-5 mr-2" /> Email Inquiry
              </a>
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FaqPageContent;