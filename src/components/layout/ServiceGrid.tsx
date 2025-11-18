"use client";

import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Car, Zap, ShieldCheck, Clock, Truck, Bike } from "lucide-react"; 
import { pushDataLayerEvent } from "@/lib/analytics";

// --- UPDATED: New service features with SEO keywords and correct links ---
const SERVICE_FEATURES = [
    {
        title: "Mobile Battery Callout",
        description: "See the full Alberton callout workflow, including Hilux & Ranger fitment examples.",
        icon: Zap,
        href: "/services/mobile-battery-replacement/alberton",
    },
    {
        title: "Car Batteries (AGM/EFB)",
        description: "Compare Willard 652 vs. Exide 668P for Hilux, Ranger, and BMW Start/Stop vehicles.",
        icon: Car,
        href: "/products/willard-652",
    },
    {
        title: "Truck & Commercial",
        description: "Book on-site truck battery fitment for Alrode fleets and see our Willard 658/689 range.",
        icon: Truck,
        href: "/services/truck-battery-fitment/alrode",
    },
    {
        title: "Motorcycle & Powersport",
        description: "Browse our motorcycle catalog and book a fitment slot for Suzuki Swift or superbike batteries.",
        icon: Bike,
        href: "/products/type/motorcycle",
    },
    {
        title: "Deep Cycle & Solar Power",
        description: "Explore our deep-cycle lineup for inverters and dual-battery setups before visiting the Fortuner guide.",
        icon: Clock,
        href: "/products/type/deep-cycle",
    },
    {
        title: "Guaranteed Warranty",
        description: "Understand our 36‑month warranty process and how diagnostics protect your Ranger/Hilux warranties.",
        icon: ShieldCheck,
        href: "/services/free-battery-testing/alberton",
    },
];

const ServiceGrid = () => {
    useEffect(() => {
        pushDataLayerEvent("service_grid_view");
    }, []);

    const handleClick = (title: string, href: string) => {
        pushDataLayerEvent("service_grid_click", { title, href });
    };

    return (
        <section className="py-16 bg-white/50 dark:bg-muted/10">
            <div className="container space-y-10">
                <div className="text-center space-y-3">
                    <h2 className="text-4xl font-extrabold text-foreground">
                        Your Trusted <span className="text-battery">Mobile Power</span> Specialists
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        We don't just sell batteries; we provide certified mobile fitment, testing, and expert advice for every vehicle and power requirement.
                    </p>
                </div>

                {/* --- UPDATED: Grid now supports 6 items gracefully --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICE_FEATURES.map((feature, index) => (
                        <Link key={index} href={feature.href} passHref> 
                            <Card className="shadow-lg hover:shadow-battery/20 transition-shadow duration-300 h-full cursor-pointer">
                                <CardContent className="p-6 space-y-4" onClick={() => handleClick(feature.title, feature.href)}>
                                   <feature.icon className="h-8 w-8 text-battery" />
                                    <h3 className="text-xl font-bold text-foreground">
                                         {feature.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                         {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
         </section>
    );
};

export default ServiceGrid;