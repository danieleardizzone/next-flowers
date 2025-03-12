import Link from "next/link";

export default function CallToAction() {
    return (
        <Link href="/booking" className="btn btn-sm sm:btn-md xl:btn-lg rounded-full
                                        text-primary-content border-0
                                        from-accent from-20% via-accentLighter to-accent to-80% bg-gradient-to-tr
                                        bg-[length:200%] bg-[position:left_center] hover:bg-[position:right_center]
                                        transition-all duration-300 ease-in-out">
            Prenota ora!
        </Link>
    )
}