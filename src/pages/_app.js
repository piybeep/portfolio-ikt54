
import LayoutBasic from '@/app/Layout/LayoutBasic'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <LayoutBasic>
      {getLayout(<Component {...pageProps} />)}
    </LayoutBasic>
  )
}
