'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface CardProptypes {
    icon: IconDefinition;
    title: string;
    content: string;
}

export default function Card({ icon, title, content }: CardProptypes) {

    return (
        <div className="card w-full shadow-md border-4 border-accent
                        from-secondary from-20% via-secondaryLighter to-secondary to-80% bg-gradient-to-tr
                        bg-[length:200%] bg-[position:left_center] hover:bg-[position:right_center]
                        transition-all duration-300 ease-in-out">
            <div className="card-body">
                <div className="card-title text-accent xl:text-2xl
                                flex justify-between">
                    <span>
                        {title}
                    </span>
                    <span>
                        <FontAwesomeIcon icon={icon} />
                    </span>
                </div>
                <p dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </div>
    )

}