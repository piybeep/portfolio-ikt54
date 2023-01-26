import Image from "next/image";
import Link from "next/link";
import React from "react";
import s from "../../styles/Layout.module.scss";

const Layout = ({ children }) => {
    return (
        <>
            <Link href="/" className={s.header}>
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
            </Link>
            {children}
            <div className={s.footer}>© ikt54.ru, 2023</div>
        </>
    );
};

export default Layout;
