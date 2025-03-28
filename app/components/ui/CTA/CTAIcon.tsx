import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CTAIconProptypes {
    icon: IconDefinition;
}

export default function CTAIcon({ icon }: CTAIconProptypes) {
    return (
        <FontAwesomeIcon icon={icon} className="text-base sm:text-lg xl:text-xl" />
    )
}