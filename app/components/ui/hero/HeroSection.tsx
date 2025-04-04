'use client';

import LgContainer from "@/app/components/ui/LgContainer";
import HeroText from "@/app/components/ui/hero/HeroText";
import HeroImage from "@/app/components/ui/hero/HeroImage";

export default function HeroSection() {

    return (
        <LgContainer>
            <div className="flex relative min-h-[80vh]">
                <HeroImage />

                <HeroText />
            </div>
        </LgContainer>
    );
}