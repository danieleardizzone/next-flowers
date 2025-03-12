'use client';

import CallToAction from "@/app/components/ui/CallToAction";

export default function HeroText() {
    return (
        <div className="h-full flex flex-col justify-around
                        px-4 sm:px-0
                        text-secondary-content">
            <h2 className="text-center md:text-nowrap text-4xl  md:text-4xl lg:text-5xl font-extrabold
                            from-accent from-30% to-accentLighter bg-gradient-to-tr bg-clip-text text-transparent">
                Flowers Apartments
            </h2>
            <p className="text-center lg:text-lg font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident praesentium ut laudantium nisi iste nemo maxime repellat aliquid, nam quidem.
            </p>
            <div className="mx-auto">
                <CallToAction />
            </div>
        </div>
    );
}