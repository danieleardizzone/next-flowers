'use client';
import Link from "next/link";
import { LinkRefsProvider } from "@/app/context/linkRefsContext";
import NavbarCenter from "./NavbarCenter";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";

import Dropdown from "@/app/components/ui/Dropdown";
import SidebarMenuItems from "@/app/components/ui/header/SidebarMenuItems";
import CallToAction from "@/app/components/ui/CTA/PrimaryCTA";


export default function Header() {



    return (
        <header className="text-secondary-content relative">
            <div className={`navbar 
                    fixed z-10 top-0 left-1/2 transform -translate-x-1/2 -translate-y-1
                    bg-secondary
                    px-10 mt-3 
                    lg:max-w-[90vw]
                    min-h-0 h-14 sm:h-16 xl:h-20
                    rounded-full border-2 border-secondary-content shadow-md`}>
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
        </header>
    )
}