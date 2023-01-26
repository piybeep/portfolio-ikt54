import Image from "next/image";
import Link from "next/link";
import React from "react";
//style
import s from "./Project.module.scss";
//img
import arrowBack from "@/public/svg/arrowBack.svg";

const Project = () => {
    const data = [
        {
            id: 1,
            text:
                "Lorem ipsum dolor sit amet consectetur. Eget maecenas at sit hendrerit nunc volutpat ac. Sit turpis cursus sem in lacinia in ipsum sagittis orci. Ultrices eu pellentesque non cursus. Viverra sed elit gravida luctus justo duis in massa. Pretium habitant donec fermentum nec eget ornare nisi sit. Enim dignissim a tempus tortor et vel porta adipiscing.",
            src: "/img/slider/bg.png",
        },
        {
            id: 2,
            text:
                "Lorem ipsum dolor sit amet consectetur. Eget maecenas at sit hendrerit nunc volutpat ac. Sit turpis cursus sem in lacinia in ipsum sagittis orci. Ultrices eu pellentesque non cursus. Viverra sed elit gravida luctus justo duis in massa. Pretium habitant donec fermentum nec eget ornare nisi sit. Enim dignissim a tempus tortor et vel porta adipiscing.",
            src: "/img/slider/bg.png",
        },
        {
            id: 3,
            text:
                "Lorem ipsum dolor sit amet consectetur. Eget maecenas at sit hendrerit nunc volutpat ac. Sit turpis cursus sem in lacinia in ipsum sagittis orci. Ultrices eu pellentesque non cursus. Viverra sed elit gravida luctus justo duis in massa. Pretium habitant donec fermentum nec eget ornare nisi sit. Enim dignissim a tempus tortor et vel porta adipiscing.",
            src: "/img/slider/bg.png",
        },
    ];
    return (
        <div>
            <div className={s.header}>
                <Link href="/" className={s.arrow}>
                    <Image src={arrowBack} alt="back" />
                </Link>
                <h1 className={s.title}>Название проекта</h1>
            </div>
            <div className="flex items-center flex-col gap-y-10">
                {data.map((el) => (
                    <div
                        className="flex flex-col items-center gap-y-10"
                        key={el.id}
                    >
                        <p className={s.text}>{el.text}</p>
                        <Image
                            src={el.src}
                            alt=""
                            width={860}
                            height={505}
                            className={s.img}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
