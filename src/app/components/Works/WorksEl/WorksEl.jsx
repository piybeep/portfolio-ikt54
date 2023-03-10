import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
//style
import s from "./WorksEl.module.scss";
import { Pagination } from "swiper";
import Link from "next/link";

const WorksEl = ({ el }) => {
    return (
        <div className={s.cont}>
            <div className={s.slider}>
                <Swiper
                    slidesPerView={1}
                    loop
                    spaceBetween={10}
                    modules={[Pagination]}
                    pagination={{
                        clickable: true,
                        horizontalClass: s.pagination,
                        bulletActiveClass: s.bulletActive,
                        bulletClass: s.bullet,
                    }}
                    className={s.mod}
                >
                    {el.images.map((e, ind) => (
                        <SwiperSlide key={ind}>
                            <Image
                                src={e}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className={s.info}>
                <div className={s.textCont}>
                    <p className={s.textCont__title}>{el.title}</p>
                    <p className={s.textCont__description}>{el.description}</p>
                </div>
                <Link href={`/work/${el.id}`} className={s.view}>
                    <p>Посмотреть</p>
                    <Image
                        src={"/svg/arrow.svg"}
                        alt="see"
                        width={11}
                        height={9}
                        className="w-auto h-auto"
                    />
                </Link>
            </div>
        </div>
    );
};

export default WorksEl;
