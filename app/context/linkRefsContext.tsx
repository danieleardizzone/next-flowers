import { usePathname } from "next/navigation";
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import usePages from "../hooks/usePages";

interface InnerLineStyle {
    left: number;
    width: number;
}

interface Page {
    name: string,
    url: string,
}

interface LinkRefsContextType {
    linkRefs: HTMLLIElement[];
    setLinkRefs: Dispatch<SetStateAction<HTMLLIElement[]>>;
    linksWidth: number;
    innerLineStyle: InnerLineStyle;
    updateInnerLine: (index: number) => void,
    pages: Page[],
    activeIndex: number,
}

export const LinkRefsContext = createContext<LinkRefsContextType | undefined>(undefined);

export function LinkRefsProvider({ children }: { children: ReactNode }) {

    const [linkRefs, setLinkRefs] = useState<HTMLLIElement[]>([]);

    const [linkRects, setLinkRects] = useState<DOMRect[]>([]);

    const [linksWidth, setLinksWidth] = useState<number>(0);

    const [innerLineStyle, setInnerLineStyle] = useState<InnerLineStyle>({ left: 0, width: 0 });

    // const [activeIndex, setActiveIndex] = useState<number>(0);

    const pages: Page[] = usePages();

    const pathname = usePathname();

    const activeIndex = pages.findIndex((page) => page.url === pathname);

    // setActiveIndex(pages.findIndex((page) => page.url === pathname));

    useEffect(() => {

        if (linkRefs.length > 0) {
            const rects = linkRefs.map((ref) => ref.getBoundingClientRect());

            setLinkRects(rects);

        }

    }, [linkRefs, linkRefs.length]);

    useEffect(() => {

        if (linkRefs.length > 0) {
            console.log(linkRects[0].x)

            const linkRectsFirstChild = linkRects[0];
            const linkRectsLastChild = linkRects[linkRects.length - 1];

            setLinksWidth(linkRectsLastChild.width + linkRectsLastChild.x - linkRectsFirstChild.x)
        }
    }, [linkRects, linkRefs.length]);

    function updateInnerLine(index: number) {
        if (linkRects[index] && linkRects.length > 0) {
            const linkRect = linkRects[index];
            const containerRect = linkRects[0];

            const left = linkRect.x - containerRect.x;

            setInnerLineStyle({ left, width: linkRect.width });
        }
    }

    return (
        <LinkRefsContext.Provider value={{ linkRefs, setLinkRefs, linksWidth, innerLineStyle, updateInnerLine, pages, activeIndex }}>
            {children}
        </LinkRefsContext.Provider>
    );

}