'use client';
import { useEffect, useRef, useState } from "react";


export default function Dropdown({ children }: { children: React.ReactNode }) {

    const [isVisible, setIsVisible] = useState(false);

    const dropdownMenuRef = useRef<HTMLUListElement>(null);
    const dropdownBtnRef = useRef<HTMLDivElement>(null);

    function toggleDropdown() {
        if (isVisible) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                !dropdownMenuRef.current?.contains(event.target as Node) && !dropdownBtnRef.current?.contains(event.target as Node)
            ) {
                setIsVisible(false);
            }
        }
        document.addEventListener('click', handleClickOutside);

        function handleClickInside(event: MouseEvent) {
            if (dropdownMenuRef.current?.contains(event.target as Node)) {
                setIsVisible(false);
            }
        }
        document.addEventListener('click', handleClickInside);
    }, []);

    return (
        <>
            <div className="cust-dropdown relative">
                <div role="button"
                    className="btn btn-ghost lg:hidden"
                    ref={dropdownBtnRef}
                    onClick={toggleDropdown}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    className={`menu menu-lg 
                    rounded-box z-[1] mt-3 w-42 p-2 shadow bg-secondary 
                    border-2 border-secondary-content
                    absolute top-12 sm:top-14
                    transition-opacity ease-in duration-100
                    ${isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                    ref={dropdownMenuRef}>
                    {children}
                </ul>
            </div>
        </>
    )
}