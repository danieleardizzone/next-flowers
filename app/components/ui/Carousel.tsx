'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';
import sala2 from '@/public/sala2.jpg';
import cucina4 from '@/public/cucina4.jpg';
import cucina2 from '@/public/cucina2.jpg';
import camera2 from '@/public/camera2.jpg';
import camera1 from '@/public/camera1.jpg';

export default function Carousel() {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            className='rounded-3xl'
        >
            <SwiperSlide>
                <Image className="w-full" src={sala2} alt="living room" />
            </SwiperSlide>
            <SwiperSlide>
                <Image className="w-full" src={cucina4} alt="kitchen" />
            </SwiperSlide>
            <SwiperSlide>
                <Image className="w-full" src={cucina2} alt="kitchen" />
            </SwiperSlide>
            <SwiperSlide>
                <Image className="w-full" src={camera2} alt="bedroom" />
            </SwiperSlide>
            <SwiperSlide>
                <Image className="w-full" src={camera1} alt="bedroom" />
            </SwiperSlide>
        </Swiper>
    );
}