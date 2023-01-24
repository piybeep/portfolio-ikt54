import React from 'react'
//styles
import s from './Works.module.scss'
import WorksEl from './WorksEl/WorksEl'

const Works = () => {
  return (
    <div className={s.cont}>
      <WorksEl />
      <WorksEl />
      <WorksEl />
    </div>
  )
}

export default Works