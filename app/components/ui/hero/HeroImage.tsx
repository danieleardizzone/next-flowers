import Image from "next/image";

export default function HeroImage() {
    return (
        <Image className="rounded-lg w-full" src="https://picsum.photos/1000/600" alt="lorem" width={600} height={300} />
    )
}