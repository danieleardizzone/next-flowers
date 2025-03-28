'use client';

import Bullet from "./Bullet"

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
// import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

import { faWifi, faWind, faPaw, faBasketShopping, faBanSmoking, faKey } from "@fortawesome/free-solid-svg-icons";

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
            icon: faBanSmoking,
            content: "Ambiente non fumatori"
        },
        {
            icon: faKey,
            content: "Check-in autonomo"
        }
    ]

    return (

        <div className="bullets-group relative py-2 lg:py-3">
            <Swiper
                slidesPerView="auto"
                spaceBetween={18}
                speed={5000}

                loop={true}
                freeMode={true}
                allowTouchMove={false}
                autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    768: {
                        spaceBetween: 36,
                    },
                    1024: {
                        spaceBetween: 42,
                    }
                }}
                modules={[Autoplay, FreeMode]}

                className="p-2"
            >
                {
                    bullets.map((bullet, index) => (
                        <SwiperSlide key={index}>
                            <Bullet icon={bullet.icon} content={bullet.content} />
                        </SwiperSlide>
                    ))
                }

            </Swiper>


            {/* trasparenze laterali */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 
                            bg-gradient-to-r from-primary via-primary/70 to-transparent 
                            z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 
                            bg-gradient-to-l from-primary via-primary/70 to-transparent 
                            z-10" />


        </div >
    )
}