'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface BulletProptypes {
    icon: IconDefinition;
    content: string;
}

export default function Bullet({ icon, content }: BulletProptypes) {
    return (
        <div className="from-secondary from-20% via-secondaryLighter 
                        to-secondary to-80% bg-gradient-to-tr
                        bg-[length:200%] bg-[position:left_center]
                        px-3 py-1  lg:px-5 rounded-full w-fit
                        text-secondary-content text-nowrap">
            <div className="flex gap-4 items-center select-none">
                <FontAwesomeIcon icon={icon} />
                {content}
            </div>
        </div>
    )
}