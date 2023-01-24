import LayoutBasic from '@/app/Layout/LayoutBasic'
import '@/styles/globals.css'
import { Nunito } from '@next/font/google'
import 'swiper/css';
import 'swiper/css/pagination';

const font = Nunito({ preload: true, subsets: ['cyrillic'], weight: ["400", "600", "700"], display: "swap" })

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <LayoutBasic>
      {getLayout(<Component {...pageProps} />)}
      <style jsx global>
        {`
        *{
          font-family:${font.style.fontFamily},sans-serif;
        }
    `}
      </style>
    </LayoutBasic>
  )
}
