import React, { CSSProperties } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import Image from 'next/image'
import slider1 from '../img/unidade_piedade.jpeg'
import slider2 from '../img/unidade_peixinhos.jpeg'
import slider3 from '../img/unidade_maria_farinha.jpeg'


export default function SwiperComponent() {
    return (
            <Swiper className={`
                relative flex justify-center items-center
                w-full h-full
                cursor-grab
            `}
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false
                }}
                style={{
                    "--swiper-pagination-color": "#facc15",
                    "--swiper-theme-color": "#facc15",
                } as CSSProperties}
            >
                <SwiperSlide>
                    <Image
                        src={slider1}
                        alt="Banner Piedade com equipamentos e valores do campo, mínimo de jogadores, extras e equipamentos próprios."
                        className='w-full h-full block object-fill'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={slider2}
                        alt="Banner Peixinhos com equipamentos e valores do campo, mínimo de jogadores, extras e equipamentos próprios."
                        className='w-full h-full block object-fill'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={slider3}
                        alt="Banner Maria Farinha com equipamentos e valores do campo, mínimo de jogadores, extras e equipamentos próprios."
                        className='w-full h-full block object-fill'
                    />
                </SwiperSlide>
            </Swiper>
    )
}