import Image from "next/image";
import headerImg from "@/public/marineo.jpg"

export default function HeroImage() {
    return (
        <div>
            <div className="hero-top-gradient"></div>
            <div className="hero-right-gradient"></div>
            <div className="hero-bottom-gradient"></div>
            <div className="hero-left-gradient"></div>
            <div className="hero-background"></div>
            <Image src={headerImg} alt="lorem"
                className="z-[-1] h-full object-cover" />

        </div>
    )
}