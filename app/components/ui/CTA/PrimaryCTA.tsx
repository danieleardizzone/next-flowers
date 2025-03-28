import Link from "next/link";

import CTAIcon from "./CTAIcon";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";

export default function PrimaryCTA() {
    return (
        <Link href="/booking" className="btn btn-sm sm:btn-md xl:btn-lg rounded-full
                                        text-primary-content border-0
                                        from-accent from-20% via-accentLighter to-accent to-80% bg-gradient-to-tr
                                        bg-[length:200%] bg-[position:left_center] hover:bg-[position:right_center]
                                        transition-all duration-300 ease-in-out">
            <div className="flex gap-2 items-center">
                <CTAIcon icon={faCalendar} />
                <span>
                    Prenota
                </span>
            </div>
        </Link>
    )
}