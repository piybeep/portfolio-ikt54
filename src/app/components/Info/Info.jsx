import React from 'react'
import s from './Info.module.scss'
// import tg from '@/img/img/tg.jpg'
// import ikt from '@/img/img/ikt.jpg'
// import vk from '@/img/img/vk.jpg'
import Image from 'next/image'

const Info = () => {

  const data = [
    {
      src: '/img/ikt.jpg',
      text: 'ks54.ru',
      alt: 'ikt54'
    },
    {
      src: '/img/vk.jpg',
      text: 'ks54_ikt',
      alt: 'vk54'
    },
    {
      src: '/img/tg.jpg',
      text: '@ks54_ikt',
      alt: 'tg54'
    }
  ]

  const dataText = [
    {
      title: 'о сайте',
      text: 'Lorem ipsum dolor sit amet consectetur. Eget maecenas at sit hendrerit nunc volutpat ac. Sit turpis cursus sem in lacinia in ipsum sagittis orci. Ultrices eu pellentesque non cursus. Viverra sed elit gravida luctus justo duis in massa. Pretium habitant donec fermentum nec eget ornare nisi sit. Enim dignissim a tempus tortor et vel porta adipiscing. Nisl adipiscing ut at amet lectus pellentesque. Habitant integer pellentesque tellus in pellentesque ut tortor. Pretium dictumst vivamus ut velit at. Nec tristique cursus vestibulum ultricies fames risus venenatis nullam. In sed elementum sed ultrices blandit mi adipiscing tortor pulvinar. Pellentesque et risus aliquam.',
      id: 1
    },
    {
      title: 'об икт',
      text: 'Отделение ИКТ (Информационно-коммуникационные технологии) - это одно подразделений Колледжа Связи №54. Enim dignissim a tempus tortor et vel porta adipiscing. Nisl adipiscing ut at amet lectus pellentesque. Habitant integer pellentesque tellus in pellentesque ut tortor. Pretium dictumst vivamus ut velit at. Nec tristique cursus vestibulum ultricies fames risus venenatis nullam. In sed elementum sed ultrices blandit mi adipiscing tortor pulvinar.',
      id: 2
    },
  ]

  return (
    <div className='flex flex-col gap-y-[70px] mb-[146px]'>
      <div className='flex gap-x-[30px]'>
        {
          dataText.map(el => {
            return (
              <div className={s.infoCont} key={el.id}>
                <h1>{el.title}</h1>
                <p>
                  {el.text}
                </p>
              </div>
            )
          })
        }
      </div>
      <div className='flex-center gap-x-[43px]'>
        {
          data.map((el, ind) => {
            return (
              <div className='flex flex-col items-center gap-y-[10px]' key={ind}>
                <Image src={el.src} className={s.image} width={60} height={60} alt={el.alt} />
                <p className='text-sky font-Nunito font-semibold text-[16px] leading-[22px]'>{el.text}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Info