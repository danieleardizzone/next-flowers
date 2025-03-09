'use client';
import Link from "next/link";
import { LinkRefsProvider } from "@/app/context/linkRefsContext";
import NavbarCenter from "./NavbarCenter";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import Container from "@/app/components/ui/Container";
import Dropdown from "@/app/components/ui/Dropdown";
import SidebarMenuItems from "@/app/components/ui/header/SidebarMenuItems";
import CallToAction from "@/app/components/ui/CallToAction";


export default function Header() {

    const [isHomepage, setIsHomepage] = useState<boolean>(true);

    const pathname = usePathname();

    useEffect(() => {
        if (pathname === '/') {
            setIsHomepage(true);
        } else {
            setIsHomepage(false);
        }
    }, [pathname])

    return (

        <header className="text-secondary-content">
            <Container>
                <div className={`navbar 
                    bg-secondary
                    px-10 py-0 md:py-1 lg:py-2 mt-2 rounded-full
                    border-2 border-secondary-content`}>
                    <div className="navbar-start">

                        <Dropdown>
                            <SidebarMenuItems />
                        </Dropdown>

                        <Link href="/" className="hidden sm:block">
                            FLOWERS
                        </Link>
                    </div>
                    <LinkRefsProvider>
                        <NavbarCenter />
                    </LinkRefsProvider>
                    <div className="navbar-end">
                        <CallToAction />
                    </div>
                </div>
            </Container>
        </header>
    )
}