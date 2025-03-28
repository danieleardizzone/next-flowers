'use client';

import CTA from "@/app/components/ui/CTA/CTA";

export default function HeroText() {
    return (
        <div className="w-full sm:w-4/6 md:w-2/3 h-3/4 md:h-1/2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="h-full flex flex-col justify-around
                        px-4 sm:px-0
                        text-secondary-content">
                <h2 className="text-center md:text-nowrap text-4xl  md:text-4xl lg:text-5xl font-extrabold
                            from-accent from-30% to-accentLighter bg-gradient-to-tr bg-clip-text text-transparent">
                    Flowers Apartments
                </h2>
                <p className="text-center lg:text-lg font-bold">
                    Comfort e accoglienza immersi nella natura dell'autentica Sicilia.
                    Ideale per chi ama il mare e la montagna.
                </p>
                <div className="mx-auto">
                    <CTA />
                </div>
            </div>
        </div>
    );
}