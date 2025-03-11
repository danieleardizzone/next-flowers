import { useContext } from "react";
import HeaderMagicLine from "./HeaderMagicLine";
import HeaderMenuItems from "./HeaderMenuItems";
import { LinkRefsContext } from "@/app/context/linkRefsContext";

export default function NavbarCenter() {

    const { updateInnerLine, activeIndex } = useContext(LinkRefsContext)!;

    // useEffect(() => {
    //     updateInnerLine(activeIndex)
    // }, [activeIndex])

    return (
        <div className="navbar-center hidden lg:flex relative"
            onMouseLeave={() => updateInnerLine(activeIndex)}>
            <ul className="flex gap-12  text-lg">
                <HeaderMenuItems />
            </ul>
            <HeaderMagicLine />
        </div>
    )
}