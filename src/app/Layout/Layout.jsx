import Head from 'next/head'
import React from 'react'
import s from '../../styles/Layout.module.scss'

const Layout = ({ children,title='Портфолио ИКТ' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
      <div className={s.footer}>© ikt54.ru, 2023</div>
    </>
  )
}

export default Layout
