'use client';
import usePages from "@/app/hooks/usePages";
import Link from "next/link"
import { usePathname } from "next/navigation";

interface Page {
    name: string,
    url: string,
}

export default function SidebarMenuItems() {

    const pages: Page[] = usePages();

    const pathname = usePathname();

    return pages.map((page) => {
        return (
            <li key={page.url} role="button" className={`navbar-link-el p-2 rounded-lg ${pathname === page.url ? 'active-cust' : ''}`}>
                <Link href={page.url} className="capitalize font-bold p-1">
                    {page.name}
                </Link>
            </li>
        );
    });

}