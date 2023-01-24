import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
//img
import doc from '@/public/img/slider/bg.png'
//style
import s from './WorksEl.module.scss'
import { Pagination } from 'swiper';

const WorksEl = () => {
    return (
        <div className={s.cont}>
            <div className={s.slider}>
                <Swiper
                    slidesPerView={1}
                    loop
                    spaceBetween={10}
                    modules={[Pagination]}
                    pagination={{ clickable: true, horizontalClass: s.pagination }}
                    className={s.mod}
                >
                    <SwiperSlide><Image src={doc} alt='' /></SwiperSlide>
                    <SwiperSlide><Image src={doc} alt='' /></SwiperSlide>
                    <SwiperSlide><Image src={doc} alt='' /></SwiperSlide>
                </Swiper>
            </div>
            <div className='flex flex-col justify-between'>
                <div className={s.textCont}>
                    <p className='font-semibold text-xl'>Название проекта</p>
                    <p className='font-normal text-base'>
                        Lorem ipsum dolor sit amet consectetur. Eget maecenas at sit hendrerit nunc volutpat ac. Sit turpis cursus sem in lacinia in ipsum sagittis orci. Ultrices eu pellentesque non cursus. Viverra sed elit gravida luctus justo duis in massa. Pretium habitant donec fermentum nec eget ornare nisi sit. Enim dignissim a tempus tortor et vel porta adipiscing.
                    </p>
                </div>
                <div className={s.view}>
                    <p>Посмотреть</p>
                    <Image src={'/svg/arrow.svg'} alt='see' width={11} height={9} className='w-auto h-auto' />
                </div>
            </div>
        </div>
    )
}

export default WorksEl