import Image from "next/image";
import Link from "next/link";
import React from "react";
import s from "../../styles/Layout.module.scss";

const Layout = ({ children }) => {
    return (
        <>
            {children}
            <div className={s.footer}>© ikt54.ru, 2023</div>
        </>
    );
};

export default Layout;
