'use client';

import Bullet from "./Bullet"

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

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

        <div>
            <Swiper
                freeMode={true}
                loop={true}
                speed={800}
                slidesPerView="auto"
                spaceBetween={18}
                breakpoints={{
                    768: {
                        spaceBetween: 36,
                    },
                    1024: {
                        spaceBetween: 42,
                    }
                }}
                modules={[FreeMode]}
                className="bullets-group p-2"
            >

                {
                    bullets.map((bullet, index) => (
                        <SwiperSlide key={index}>
                            <Bullet icon={bullet.icon} content={bullet.content} />
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    )
}