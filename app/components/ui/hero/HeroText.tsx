'use client';

import CallToAction from "@/app/components/ui/CallToAction";

export default function HeroText() {
    return (
        <div className="flex flex-col gap-5">
            <h1 className="text-4xl font-bold">
                Flowers Apartments
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident praesentium ut laudantium nisi iste nemo maxime repellat aliquid, nam quidem.
            </p>
            <CallToAction />
        </div>
    );
}