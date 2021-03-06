
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import { useRouter } from 'next/router'

import store from '../Redux/store'

import Navbar from '../Layouts/Navbar/Nav'
import Footer from '../Layouts/Footer/Footer'

import '../styles/globals.css'



function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter()
  const inverted = (pathname === '/register' || pathname === '/' ) ? true : false

  return( 
    <>
    <Provider store={store}>
      <Navbar inverted={inverted} />
      <Component {...pageProps} />
      <Footer inverted={!inverted} />
    </Provider>
    </>
  )
}

export default MyApp
