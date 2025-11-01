// src/app/about/page.tsx

import { Battery } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container py-16 space-y-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-foreground">Our Story: Powering Alberton</h1>
      <p className="text-xl text-muted-foreground">
        Founded on the principle of reliable power and honest service, Alberton Battery Mart has grown to be the area's trusted multi-brand battery specialist. We focus on providing solutions, not just products.
      </p>

      <div className="grid md:grid-cols-2 gap-8 pt-4">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-battery">Mission & Values</h2>
          <p className="text-muted-foreground">
            We prioritize customer safety and satisfaction, offering free on-site battery testing and expert diagnostics to ensure you always drive away with peace of mind. We stock only quality, warrantied brands like Willard, Enertec, and Exide.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-battery">Why We Lead</h2>
          <p className="text-muted-foreground">
            Our commitment to the local community means we offer the fastest mobile response times and maintain the widest stock range, from standard car batteries to complex solar backup units.
          </p>
        </div>
      </div>

      <div className="pt-8 text-center">
        <Button asChild size="lg" variant="default" className="bg-battery hover:bg-battery/80 text-white">
          <Link href="/products">View Our Full Product Range</Link>
        </Button>
      </div>
    </div>
  );
}