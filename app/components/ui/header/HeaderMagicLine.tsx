import { LinkRefsContext } from "@/app/context/linkRefsContext";
import { useContext } from "react";

export default function HeaderMagicLine() {

    const { linksWidth, innerLineStyle } = useContext(LinkRefsContext)!;



    return (
        <div
            style={{ width: `${linksWidth}px` }}
            className={`magic-line 
                rounded-lg h-1 bg-tertiary
                absolute bottom-0`}>
            <div className="relative">
                <div
                    style={{
                        width: `${innerLineStyle.width}px`,
                        left: `${innerLineStyle.left}px`,
                    }}
                    className="inner-magic-line absolute
                        rounded-lg h-1 bg-accent
                        transition-all duration-200">

                </div>
            </div>
        </div>
    );
}