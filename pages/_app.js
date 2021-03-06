import Navbar from '../Layouts/Navbar/Nav'
import { useRouter } from 'next/router'
import '../styles/globals.css'
import Footer from '../Layouts/Footer/Footer'

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter()
  const inverted = (pathname === '/register' || pathname === '/' ) ? true : false

  return( 
    <>
      <Navbar inverted={inverted} />
      <Component {...pageProps} />
      <Footer inverted={!inverted} />
    </>
  )
}

export default MyApp
