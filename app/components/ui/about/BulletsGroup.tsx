'use client';

import Bullet from "./Bullet"

import { faWifi, faWind, faPaw, faBasketShopping, faBanSmoking, faKey, faSoap, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import Marquee from "../marquee/Marquee";

export default function BulletsGroup() {

    const bullets = [
        {
            icon: faWifi,
            content: "WiFi"
        },
        {
            icon: faWind,
            content: "Aria condizionata"
        },
        {
            icon: faPaw,
            content: "Pet friendly"
        },
        {
            icon: faBasketShopping,
            content: "Biancheria inclusa"
        },
        {
            icon: faSoap,
            content: "Lavanderia"
        },
        {
            icon: faBanSmoking,
            content: "Ambiente non fumatori"
        },
        {
            icon: faKey,
            content: "Check-in autonomo"
        },
        {
            icon: faShieldHalved,
            content: "Dispositivi di sicurezza"
        },
    ]

    return (
        <div className="bullets-group relative py-2 lg:py-3 overflow-hidden">
            <Marquee>

                {
                    bullets.map((bullet, index) => (
                        <li key={index} className="mx-1 sm:mx-2 md:mx-3 lg:mx-4">
                            <Bullet icon={bullet.icon} content={bullet.content} />
                        </li>
                    ))
                }

                {
                    bullets.map((bullet, index) => (
                        <li key={index} className="mx-1 sm:mx-2 md:mx-3 lg:mx-4">
                            <Bullet icon={bullet.icon} content={bullet.content} />
                        </li>
                    ))
                }
            </Marquee>

            {/* trasparenze laterali */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 
                            bg-gradient-to-r from-primary via-primary/70 to-transparent 
                            z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 
                            bg-gradient-to-l from-primary via-primary/70 to-transparent 
                            z-10" />
        </div>
    )
}