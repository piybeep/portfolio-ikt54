import React from 'react'
import Image from 'next/image'
//style
import s from './Main.module.scss'

const Main = () => {
  return (
    <div className='flex justify-center gap-y-[70px]'>
      <div className='flex gap-x-[25px]'>
        <div className='flex gap-x-[10px]'>
          <img src='/svg/shape.svg' className={s.navEl} width={18} height={16} />
          <p>Работы</p>
        </div>
        <div className='flex gap-x-[10px]'>
          <Image src='/svg/star.svg' className={s.navEl} width={18} height={16} />
          <p>Награды</p>
        </div>
      </div>
    </div>
  )
}

export default Main