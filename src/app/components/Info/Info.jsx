import React from "react";
import s from "./Info.module.scss";
import Image from "next/image";
import Link from "next/link";

const Info = () => {
    const data = [
        {
            src: "/img/ikt.png",
            text: "ks54.ru",
            alt: "ikt54",
            link: "https://ks54.ru",
        },
        {
            src: "/img/vk.png",
            text: "ks54_ikt",
            alt: "vk54",
            link: "https://vk.com/ks54_ikt",
        },
        {
            src: "/img/tg.png",
            text: "@ks54_ikt",
            alt: "tg54",
            link: "https://t.me/ks54_ikt",
        },
    ];

    const dataText = [
        {
            title: "о сайте",
            text: `На данном сайте представлены лучшие проекты студентов Колледжа Связи №54 им П.М. Вострухина, отделения        Информационно-коммуникационных технологий. 
Интересные разработки и идеи, лучшие реализации проектов, используемых даже вне стен отделения, награды, грамоты и призы. Все это про нас, ведь нам есть чем гордиться.`,
            id: 1,
        },
        {
            title: "об икт",
            text: `Отделение информационно-коммуникационных технологий, это давно утвердившее свой высокий статус и продолжающее развиваться отделение Колледжа Связи №54 им. П.М. Вострухина.
Самое важное о нас:
<strong>Специальность</strong>
09.02.07 Информационные системы и программирование
<strong>Компетенции</strong>
•	Программист – 24 групп
•	Администратор баз данных – 10 групп
•	Веб и мультимедийные приложения – 1 группа
<strong>Общая численность студентов</strong>
880 человек`,
            id: 2,
        },
    ];

    return (
        <div className="flex flex-col gap-y-[70px] mb-[146px]">
            <div className={s.infoCont}>
                {dataText.map((el) => {
                    return (
                        <div className={s.infoEl} key={el.id}>
                            <h1>{el.title}</h1>
                            <p dangerouslySetInnerHTML={{__html:el.text}} />
                        </div>
                    );
                })}
            </div>
            <div className="flex-center gap-x-[43px]">
                {data.map((el, ind) => {
                    return (
                        <Link
                            href={el.link}
                            className="flex flex-col items-center gap-y-[10px]"
                            key={ind}
                        >
                            <Image
                                src={el.src}
                                className={s.image}
                                width={60}
                                height={60}
                                alt={el.alt}
                            />
                            <p className="text-sky font-semibold text-[16px] leading-[22px]">
                                {el.text}
                            </p>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Info;
