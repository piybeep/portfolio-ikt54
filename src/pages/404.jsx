import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
//style
import s from '../styles/404.module.scss'

const NotFound = () => {
    return (
        <div className={s.cont}>
            <div className={s.wrapper}>
                <div className='flex gap-x-8'>
                    <Image src='/img/logo.png' alt='ks54' width={74} height={57} />
                    <div>
                        <p className={s.err}>Ошибка 404</p>
                        <p className={s.text}>Такой страницы нет...</p>
                    </div>
                </div>
                <Link href='/' className={s.back}>На главную</Link>
            </div>
        </div>
    )
}

export default NotFound