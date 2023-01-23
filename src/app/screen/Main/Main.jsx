import React, { useState } from 'react'
import Shape from '../../../../public/svg/shape.svg'
import Star from '../../../../public/svg/star.svg'
//style
import s from './Main.module.scss'

const Main = () => {

  cont[nav, setNav] = useState(true)

  return (
    <div className='flex justify-center gap-y-[70px]'>
      <div className='flex gap-x-[25px]'>
        <div className='flex gap-x-[10px]'>
          <Shape color={'red'} className={s.navEl} />
          <p>Работы</p>
        </div>
        <div className='flex gap-x-[10px]'>
          <Star color={'red'} className={s.star} />
          <p>Награды</p>
        </div>
      </div>
    </div>
  )
}

export default Main