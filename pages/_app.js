import Navbar from '../Layouts/Navbar/Nav'
import { useRouter } from 'next/router'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter()
  const inverted = (pathname === '/register' || pathname === '/' ) ? true : false

  return( 
    <>
    <Navbar inverted={inverted} />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
