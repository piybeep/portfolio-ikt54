import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
//style
import s from "./Project.module.scss";
//data
import data from "./projectData.js";

const Project = () => {
    const router = useRouter();

    let info = [],
        names = Object.keys(data);
    console.log(router.query.id);
    if (router.query.hasOwnProperty("id")) {
        info = {
            data: data[names[router.query.id - 1]],
            title: names[router.query.id - 1],
        };
        console.log(info);
    }

    return (
        <div>
            <div className={s.header}>
                <Link href="/" className={s.arrow}>
                    <svg
                        width="20"
                        height="15"
                        viewBox="0 0 20 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M19 8.5C19.5523 8.5 20 8.05228 20 7.5C20 6.94772 19.5523 6.5 19 6.5V8.5ZM0.292892 6.79289C-0.0976315 7.18342 -0.0976315 7.81658 0.292892 8.20711L6.65685 14.5711C7.04738 14.9616 7.68054 14.9616 8.07107 14.5711C8.46159 14.1805 8.46159 13.5474 8.07107 13.1569L2.41421 7.5L8.07107 1.84315C8.46159 1.45262 8.46159 0.819457 8.07107 0.428932C7.68054 0.0384078 7.04738 0.0384078 6.65685 0.428932L0.292892 6.79289ZM19 6.5L1 6.5V8.5L19 8.5V6.5Z"
                            fill="#9B9B9B"
                        />
                    </svg>
                </Link>
                <h1 className={s.title}>{info.title}</h1>
            </div>
            <div className="flex items-center flex-col gap-y-10">
                {info?.data?.map((el) => (
                    <div
                        className="flex flex-col items-center gap-y-10"
                        key={el.id}
                    >
                        {el.text && <p className={s.text}>{el.text}</p>}
                        <div className="flex-center gap-4 w-full xl:flex-wrap">
                            {el.src.map((item, ind) => (
                                <Image
                                    key={ind}
                                    src={item}
                                    alt=""
                                    width={860}
                                    height={505}
                                    className={s.img}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
