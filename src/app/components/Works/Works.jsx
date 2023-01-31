import React from "react";
//styles
import s from "./Works.module.scss";
import WorksEl from "./WorksEl/WorksEl";
//img
import onePr1 from "@/public/img/slider/one/one.jpg";
import onePr2 from "@/public/img/slider/one/two.jpg";
import onePr3 from "@/public/img/slider/one/three.jpg";
import onePr4 from "@/public/img/slider/one/four.jpg";
import onePr5 from "@/public/img/slider/one/five.jpg";
//
import twoPr1 from "@/public/img/slider/two/one.png";
import twoPr2 from "@/public/img/slider/two/two.png";
import twoPr3 from "@/public/img/slider/two/three.png";
import twoPr4 from "@/public/img/slider/two/four.png";
//
import threePr1 from "@/public/img/slider/three/one.png";
import threePr2 from "@/public/img/slider/three/two.png";
import threePr3 from "@/public/img/slider/three/three.png";
import threePr4 from "@/public/img/slider/three/four.png";
import threePr5 from "@/public/img/slider/three/five.png";
//
import fourPr1 from "@/public/img/slider/four/one.png";
import fourPr2 from "@/public/img/slider/four/two.png";
import fourPr3 from "@/public/img/slider/four/three.png";
import fourPr4 from "@/public/img/slider/four/four.png";

const Works = () => {
    let data = [
        {
            images: [onePr1, onePr2, onePr3, onePr4, onePr5],
            id: 1,
            title: "Мобильная разработка",
            description: `Отделение Информационно-коммуникационных технологий активно развивается и внедряет свои разработки в жизнь Колледжа.
Одна из наших значимых мобильных разработок - социальная сеть «KSMess».
Студенты группы 3ИСП9-13 Хасанов Георгий и Хасанов Альберт, под руководством преподавателя спец. дисциплин Адышкина Сергея Сергеевича реализовали в жизнь идею, которая посещала многих. 
      `,
        },
        {
            images: [twoPr1, twoPr2, twoPr3, twoPr4],
            id: 2,
            title: "Хакатон",
            description: `Хакатон “Поколение IT” - это мероприятие для веб-разработчиков из всех регионов, которое проводится несколько раз в год. Организовано Депортаментом образования Москвы и московскими колледжами.`,
        },
        {
            images: [threePr1, threePr2, threePr3, threePr4, threePr5],
            id: 3,
            title: "Volunvice",
            description: `Сервис для хороших дел`,
        },
        {
            images: [fourPr1, fourPr2, fourPr3, fourPr4],
            id: 4,
            title: "Loctravel",
            description: `Портал для путешественников и жителей Москвы, для помощи в развитии регионального туризма.`,
        },
    ];

    return (
        <div className={s.cont}>
            {data.map((el) => (
                <WorksEl key={el.id} el={el} />
            ))}
        </div>
    );
};

export default Works;
