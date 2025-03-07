'use client';

import Container from "@/app/components/ui/Container";
import HeroText from "@/app/components/ui/hero/HeroText";
import HeroImage from "@/app/components/ui/hero/HeroImage";

export default function HeroSection() {

    return (
        <Container>
            <div className="grid gap-10 justify-items-center
                            grid-cols-12
                            lg:gap-6">
                <div className="col-span-12 md:col-start-4 md:col-end-10 lg:col-span-4">
                    <HeroText />
                </div>
                <div className="col-span-12 lg:col-span-8 w-full">
                    <HeroImage />
                </div>
            </div>
        </Container>
    );
}