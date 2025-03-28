'use client';

import styles from "./Marquee.module.css"

export default function Marquee({ children }: { children: React.ReactNode }) {
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