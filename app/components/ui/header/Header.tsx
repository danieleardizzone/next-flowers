'use client';
import Container from "@/app/components/ui/Container";
import Dropdown from "@/app/components/ui/Dropdown";
import Link from "next/link";
import SidebarMenuItems from "@/app/components/ui/header/SidebarMenuItems";
import { LinkRefsProvider } from "@/app/context/linkRefsContext";
import NavbarCenter from "./NavbarCenter";


export default function Header() {
    return (
        <header className="bg-secondary text-secondary-content">
            <Container>
                <div className="navbar">
                    <div className="navbar-start">

                        <Dropdown>
                            <SidebarMenuItems />
                        </Dropdown>

                        <Link href="/">
                            FLOWERS
                        </Link>
                    </div>
                    <LinkRefsProvider>
                        <NavbarCenter />
                    </LinkRefsProvider>
                    <div className="navbar-end">
                        <Link href="/book-now"
                            className="navbar-cta
                            btn text-lg 
                            text-primary-content">
                            Prenota ora!
                        </Link>
                    </div>
                </div>
            </Container>
        </header>
    )
}