import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
//img
import doc from '@/public/img/slider/bg.png'
//style
import s from './WorksEl.module.scss'
import { Pagination } from 'swiper';

const WorksEl = ({el}) => {
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
                    {
                        el.images.map((e, ind) => <SwiperSlide key={ind}>
                            <Image src={e} alt='' />
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
            <div className='flex flex-col justify-between'>
                <div className={s.textCont}>
                    <p className='font-semibold text-xl'>{el.title}</p>
                    <p className='font-normal text-base'>{el.description}</p>
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