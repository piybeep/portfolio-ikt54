import React from 'react'
//img
import doc from '../../../../public/img/stars/doc.png'
//components
import Image from 'next/image'
//style
import s from './Awards.module.scss'

const Awards = () => {

    let data = []
    let i = 0
    while (i < 12) {
        data.push({ src: doc, id: i })
        i++
    }

    return (
        <div className={s.cont}>
            {
                data.map(el => <Image src={el.src} key={el.id} width={295} height={417} />)
            }
        </div>
    )
}

export default Awards