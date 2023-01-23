import Head from 'next/head'
import React from 'react'

const LayoutBasic = ({ children }) => {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet" />
            </Head>
            <div className='max-w-[1300px] mt-[30px] mb-[60px] mx-auto'>
                {children}
            </div>
        </>
    )
}

export default LayoutBasic