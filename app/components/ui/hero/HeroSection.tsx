'use client';

import LgContainer from "@/app/components/ui/LgContainer";
import HeroText from "@/app/components/ui/hero/HeroText";
import HeroImage from "@/app/components/ui/hero/HeroImage";

export default function HeroSection() {

    return (
        <LgContainer>
            <div className="flex relative min-h-[80vh]">
                <HeroImage />
                <div className="w-full sm:w-1/2 md:w-2/3 h-3/4 md:h-1/2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <HeroText />
                </div>
            </div>
        </LgContainer>
    );
}