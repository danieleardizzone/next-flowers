'use client';

import Container from "@/app/components/ui/Container";
import HeroText from "@/app/components/ui/hero/HeroText";
import HeroImage from "@/app/components/ui/hero/HeroImage";
import FirstSection from "@/app/components/ui/FirstSection";

export default function HeroSection() {

    return (
        <>

            <FirstSection />

            <Container>
                <div className="flex relative min-h-[80vh]">
                    <HeroImage />

                    <HeroText />
                </div>
            </Container>
        </>
    );
}