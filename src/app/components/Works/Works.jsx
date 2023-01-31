import React from "react";
//styles
import s from "./Works.module.scss";
import WorksEl from "./WorksEl/WorksEl";
//img
import doc from "@/public/img/slider/bg.png";

const Works = () => {
    let data = [
        {
            images: [doc, doc, doc],
            id: 1,
            title: "Мобильная разработка",
            description: `Отделение Информационно-коммуникационных технологий активно развивается и внедряет свои разработки в жизнь Колледжа.
Одна из наших значимых мобильных разработок - социальная сеть «KSMess».
Студенты группы 3ИСП9-13 Хасанов Георгий и Хасанов Альберт, под руководством преподавателя спец. дисциплин Адышкина Сергея Сергеевича реализовали в жизнь идею, которая посещала многих. 
      `,
        },
        {
            images: [doc, doc, doc],
            id: 2,
            title: "Хакатон",
            description:
                "Lorem ipsum dolor sit amet consectetur. Eget maecenas at sit hendrerit nunc volutpat ac. Sit turpis cursus sem in lacinia in ipsum sagittis orci. Ultrices eu pellentesque non cursus. Viverra sed elit gravida luctus justo duis in massa. Pretium habitant donec fermentum nec eget ornare nisi sit. Enim dignissim a tempus tortor et vel porta adipiscing.",
        },
        {
            images: [doc, doc, doc],
            id: 3,
            title: "Хакатон",
            description:
                "Lorem ipsum dolor sit amet consectetur. Eget maecenas at sit hendrerit nunc volutpat ac. Sit turpis cursus sem in lacinia in ipsum sagittis orci. Ultrices eu pellentesque non cursus. Viverra sed elit gravida luctus justo duis in massa. Pretium habitant donec fermentum nec eget ornare nisi sit. Enim dignissim a tempus tortor et vel porta adipiscing.",
        },
        {
            images: [doc, doc, doc],
            id: 4,
            title: "Хакатон",
            description:
                "Lorem ipsum dolor sit amet consectetur. Eget maecenas at sit hendrerit nunc volutpat ac. Sit turpis cursus sem in lacinia in ipsum sagittis orci. Ultrices eu pellentesque non cursus. Viverra sed elit gravida luctus justo duis in massa. Pretium habitant donec fermentum nec eget ornare nisi sit. Enim dignissim a tempus tortor et vel porta adipiscing.",
        },
        {
            images: [doc, doc, doc],
            id: 5,
            title: "Хакатон",
            description:
                "Lorem ipsum dolor sit amet consectetur. Eget maecenas at sit hendrerit nunc volutpat ac. Sit turpis cursus sem in lacinia in ipsum sagittis orci. Ultrices eu pellentesque non cursus. Viverra sed elit gravida luctus justo duis in massa. Pretium habitant donec fermentum nec eget ornare nisi sit. Enim dignissim a tempus tortor et vel porta adipiscing.",
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
