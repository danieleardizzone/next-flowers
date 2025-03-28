import Link from "next/link";

import CTAIcon from "./CTAIcon";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";


export default function SecondaryCTA() {
    return (
        <Link href="/booking" className="btn btn-xs sm:btn-sm xl:btn-md rounded-full
                                        text-secondary-content border-0
                                        from-secondary from-20% via-secondaryLighter to-secondary to-80% bg-gradient-to-tr
                                        bg-[length:200%] bg-[position:left_center] hover:bg-[position:right_center]
                                        transition-all duration-300 ease-in-out">
            <div className="flex gap-2 items-center">
                <CTAIcon icon={faWhatsapp} />
                <span>
                    Contattaci
                </span>
            </div>
        </Link>
    )
}