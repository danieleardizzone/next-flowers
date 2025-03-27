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

        // <div className="py-2 lg:py-3">
        //     <Swiper
        //         onSwiper={(swiper) => {
        //             setTimeout(() => {
        //                 swiper.autoplay.start();
        //             }, 1);
        //         }}
        //         freeMode={true}
        //         loop={true}
        //         speed={5000}
        //         autoplay={{
        //             delay: 0,
        //             disableOnInteraction: false,
        //             pauseOnMouseEnter: false,
        //             waitForTransition: false,
        //         }}
        //         slidesPerView="auto"
        //         spaceBetween={18}
        //         breakpoints={{
        //             768: {
        //                 spaceBetween: 36,
        //             },
        //             1024: {
        //                 spaceBetween: 42,
        //             }
        //         }}
        //         modules={[FreeMode, Autoplay]}
        //         className="bullets-group p-2"
        //     >

        //         {
        //             bullets.map((bullet, index) => (
        //                 <SwiperSlide key={index}>
        //                     <Bullet icon={bullet.icon} content={bullet.content} />
        //                 </SwiperSlide>
        //             ))
        //         }

        //     </Swiper>
        // </div>

        <div className="bullets-group relative py-2 lg:py-3">
            {/* <Swiper
                loop={true}
                speed={800}
                autoplay={{
                    delay: 0,
                }}
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
                modules={[Autoplay]}
                className="bullets-group p-2"
            >

                {
                    bullets.map((bullet, index) => (
                        <SwiperSlide key={index}>
                            <Bullet icon={bullet.icon} content={bullet.content} />
                        </SwiperSlide>
                    ))
                }

            </Swiper> */}
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

                // onMouseEnter={() => {
                //     Swiper.autoplay.stop();
                // }}
                // onMouseLeave={() => {
                //     Swiper.autoplay.start();
                // }}

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


            <div className="absolute top-0 left-[-2%] 
                            w-8 h-full z-10
                            blur-sm bg-primary"></div>
            <div className="absolute top-0 left-0 
                            w-8 h-full z-10
                            blur-md bg-primary"></div>
            <div className="absolute top-0 right-[-2%]
                            w-8 h-full z-10
                            blur-sm bg-primary"></div>
            <div className="absolute top-0 right-0 
                            w-8 h-full z-10
                            blur-md bg-primary"></div>
        </div >
    )
}