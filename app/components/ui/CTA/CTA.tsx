import PrimaryCTA from "./PrimaryCTA";
import SecondaryCTA from "./SecondaryCTA";

export default function CTA() {
    return (
        <div className="flex items-center gap-3 sm:gap-6">
            <PrimaryCTA />
            <SecondaryCTA />
        </div>
    )
}