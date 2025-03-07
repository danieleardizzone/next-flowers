'use client';
import { LinkRefsContext } from "@/app/context/linkRefsContext";
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useContext, useEffect, useRef } from "react";


export default function HeaderMenuItems() {

    const { setLinkRefs, updateInnerLine, pages } = useContext(LinkRefsContext)!;



    const navbarLinkRefs = useRef<HTMLLIElement[]>([]);

    useEffect(() => {
        setLinkRefs(navbarLinkRefs.current);
    }, [setLinkRefs]);

    return pages.map((page, index) => {
        return (
            <li key={page.url}
                ref={(el) => {
                    navbarLinkRefs.current[index] = el!;
                }}
                role="button" className={`navbar-link-el p-2 rounded-lg`}
                onMouseEnter={() => updateInnerLine(index)}>
                <Link href={page.url} className="capitalize font-bold p-1">
                    {page.name}
                </Link>
            </li>
        );
    });

}