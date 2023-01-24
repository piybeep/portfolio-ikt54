import React, { useState } from 'react'
//img
import Shape from '../../../../public/svg/shape.svg'
import Star from '../../../../public/svg/star.svg'
//components
import Awards from '@/app/components/Awards/Awards'
import Works from '@/app/components/Works/Works'
//style
import s from './Main.module.scss'

const Main = () => {

  const [isWorks, setIsWorks] = useState(true)

  return (
    <div className={s.cont}>
      <div className='flex gap-x-[25px]'>
        <div className={s.navEl + (isWorks ? (' ' + s.navEl_active) : '')} onClick={() => setIsWorks(e => !e)}>
          <Shape color={isWorks ? '#4E73DF' : '#808080'} />
          <p>Работы</p>
        </div>
        <div className={s.navEl + (!isWorks ? (' ' + s.navEl_active) : '')} onClick={() => setIsWorks(e => !e)}>
          <Star color={!isWorks ? '#4E73DF' : '#808080'} />
          <p>Награды</p>
        </div>
      </div>
      {
        isWorks ? <Works /> : <Awards />
      }
    </div>
  )
}

export default Main