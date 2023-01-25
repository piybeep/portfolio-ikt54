import Image from "next/image";
import React from "react";
import s from "../../styles/Layout.module.scss";

const Layout = ({ children }) => {
    return (
        <>
            <div className={s.header}>
                <Image
                    src={"/img/logo.png"}
                    alt="ikt54"
                    width={74}
                    height={57}
                />
                <div className="font-semibold text-sky">
                    <p className={s.title1}>
                        Колледж Связи №54 им. П. М. Вострухина
                    </p>
                    <p className={s.title2}>
                        Выставка достижений студентов ИКТ
                    </p>
                </div>
            </div>
            {children}
            <div className="w-fit ml-auto font-bold text-[16px] leading-[22px] text-default mt-40">
                © ikt54.ru, 2023
            </div>
        </>
    );
};

export default Layout;
