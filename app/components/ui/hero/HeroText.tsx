'use client';

import CallToAction from "@/app/components/ui/CallToAction";

export default function HeroText() {
    return (
        <div className="flex flex-col gap-2 sm:gap-5 lg:gap-12
                        px-4 sm:px-0
                        text-secondary-content">
            <h1 className="text-center text-nowrap text-2xl md:text-4xl lg:text-5xl font-bold">
                Flowers Apartments
            </h1>
            <p className="text-center text-xs md:text-sm lg:text-lg font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident praesentium ut laudantium nisi iste nemo maxime repellat aliquid, nam quidem.
            </p>
            <div className="mx-auto">
                <CallToAction />
            </div>
        </div>
    );
}