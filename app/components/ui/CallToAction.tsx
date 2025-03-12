import Link from "next/link";

export default function CallToAction() {
    return (
        <Link href="/booking" className="btn btn-accent btn-sm sm:btn-md xl:btn-lg rounded-full">
            Prenota ora!
        </Link>
    )
}