'use client';

import { useEffect, useRef, useState } from "react";
import styles from "./Marquee.module.css"

export default function Marquee({ children }: { children: React.ReactNode }) {


    const [paused, setPaused] = useState<boolean>(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);


    const pauseMarquee = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        setPaused(true);
    }

    const resumeMarquee = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            setPaused(false);
        }, 1000)
    }

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, []);



    {/* trasparenze laterali da aggiungere al contenitore del componente padre*/ }
    {/*
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 
        bg-gradient-to-r from-primary via-primary/70 to-transparent 
        z-10" />
    <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 
        bg-gradient-to-l from-primary via-primary/70 to-transparent 
        z-10" />
    */}
    return (
        <div
            className={`${styles.marquee} ${paused ? styles.paused : ""}`}
            onTouchStart={pauseMarquee}
            onTouchEnd={resumeMarquee}
            onMouseEnter={pauseMarquee}
            onMouseLeave={resumeMarquee}
        >
            <ul className="flex">

                {/* Per il funzionamento corretto del marquee dovremo iterare gli elementi li per due volte
                    NB: dovremo applicare i margini laterali (mx) direttamente sui li */}

                {children}
            </ul>
        </div >
    )
}