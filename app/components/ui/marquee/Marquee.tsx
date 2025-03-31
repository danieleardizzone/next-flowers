'use client';

import styles from "./Marquee.module.css"

export default function Marquee({ children }: { children: React.ReactNode }) {

    {/* trasparenze laterali da aggiungere al contenitore del componente padre*/ }
    //     <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 
    //     bg-gradient-to-r from-primary via-primary/70 to-transparent 
    //     z-10" />
    // <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 
    //     bg-gradient-to-l from-primary via-primary/70 to-transparent 
    //     z-10" />
    return (
        <div className={styles.marquee}>
            <ul className="flex">

                {/* Per il funzionamento corretto del marquee dovremo iterare gli elementi li per due volte
                    NB: dovremo applicare i margini laterali (mx) direttamente sui li */}

                {children}
            </ul>
        </div>
    )
}