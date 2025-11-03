// C:\Users\User1\abm2\src\components\layout\ServiceGrid.tsx
import { Card, CardContent } from "@/components/ui/card";
// *** FIX APPLIED: Corrected import syntax for Link ***
import Link from "next/link"; 
import { Car, Zap, ShieldCheck, Clock } from "lucide-react";

const SERVICE_FEATURES = [
    {
        title: "Mobile Battery Callout",
        description: "Fast, reliable on-site battery testing and fitment at your location across Alberton and surrounding suburbs.",
        icon: Zap,
        href: "/services",
    },
    {
        title: "All Vehicle Batteries",
        description: "Full range of batteries for Cars, Trucks, Motorcycles, including specialized AGM and EFB for Start/Stop systems.",
        icon: Car,
        href: "/products",
    },
    {
        title: "Deep Cycle & Solar Power",
        description: "Solutions for inverters, solar backup, camping, and marine applications. Reliable power during load shedding.",
        icon: Clock,
        href: "/products/type/deep-cycle",
    },
    {
        title: "Guaranteed Warranty",
        description: "All products are backed by a certified manufacturer warranty (24 to 36 months) and professional fitment assurance.",
        icon: ShieldCheck,
        href: "/faq",
    },
];

const ServiceGrid = () => {
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

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {SERVICE_FEATURES.map((feature, index) => (
                        // Removed legacyBehavior since Link is imported correctly
                        <Link key={index} href={feature.href} passHref> 
                            <Card className="shadow-lg hover:shadow-battery/20 transition-shadow duration-300 h-full cursor-pointer">
                                <CardContent className="p-6 space-y-4">
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