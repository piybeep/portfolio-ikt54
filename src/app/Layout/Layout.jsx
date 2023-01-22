import Image from 'next/image'
import React from 'react'
import logo from '@/img/img/logo.png'

const Layout = ({ children }) => {
    return (
        <>
            <div className='flex-center w-full gap-x-8 mb-[90px]'>
                <Image src={logo} alt='ikt54' />
                <div className='font-Nunito font-semibold text-sky'>
                    <p className='text-[17px] leading-6'>Колледж Связи №54 им. П. М. Вострухина</p>
                    <p className='text-[24px] leading-[23px]'>Выставка достижений студентов ИКТ</p>
                </div>
            </div>
            {children}
            <div className='w-fit ml-auto font-Nunito font-bold text-[16px] leading-[22px] text-default'>
                © ikt54.ru, 2023
            </div>
        </>
    )
}

export default Layout