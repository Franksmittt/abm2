"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from "lucide-react";
import { pushDataLayerEvent } from "@/lib/analytics";

type HeroCtaButtonsProps = {
  variant: "control" | "variant";
};

const EMERGENCY_PHONE_DISPLAY = "010 109 6211";
const EMERGENCY_PHONE_LINK = "0101096211";
const WHATSAPP_NUMBER_LINK = "27823046926";

export function HeroCtaButtons({ variant }: HeroCtaButtonsProps) {
  useEffect(() => {
    pushDataLayerEvent("hero_view", { bucket: variant });
  }, [variant]);

  const handleClick = (action: "call" | "whatsapp") => {
    pushDataLayerEvent("hero_cta_click", {
      bucket: variant,
      action,
    });
  };

  return (
    <div className="flex flex-col items-center md:flex-row md:justify-start space-y-4 md:space-y-0 md:space-x-4 pt-2">
      <Button
        asChild
        size="xl"
        variant="battery"
        className="shadow-lg w-full max-w-xs"
      >
        <a
          href={`tel:${EMERGENCY_PHONE_LINK}`}
          className="flex items-center justify-center space-x-2"
          onClick={() => handleClick("call")}
        >
          <Phone className="h-5 w-5" />
          <span className="text-lg font-bold">
            {variant === "variant" ? "Book Diagnostic" : "Call Us Now"}
          </span>
        </a>
      </Button>

      <Button
        asChild
        variant="secondary"
        size="xl"
        className="bg-green-600 hover:bg-green-700 text-white w-full max-w-xs"
      >
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER_LINK}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2"
          onClick={() => handleClick("whatsapp")}
        >
          <MessageSquare className="h-5 w-5" />
          <span className="text-lg font-bold">WhatsApp Us</span>
        </a>
      </Button>
    </div>
  );
}

