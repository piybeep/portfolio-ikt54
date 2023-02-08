import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import s from '@/styles/Layout.module.scss'
import { useRouter } from 'next/router'

const LayoutBasic = ({ children }) => {
  const router = useRouter()

  return (
    <>
      {router.pathname != '/404' ? (
        <Link href='/' className={s.header}>
          <Image src={'/img/logo.png'} alt='ikt54' width={74} height={57} />
          <div className='font-semibold text-sky'>
            <p className={s.title1}>Колледж Связи №54 им. П. М. Вострухина</p>
            <p className={s.title2}>Выставка достижений студентов ИКТ</p>
          </div>
        </Link>
      ) : (
        ''
      )}
      <div className='max-w-[1348px] mt-[30px] mb-[60px] mx-auto px-6 lg:mb-12 md:px-4'>
        {children}
      </div>
    </>
  )
}

export default LayoutBasic
