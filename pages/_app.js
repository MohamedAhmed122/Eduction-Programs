
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";

import { useRouter } from 'next/router'

import { store, persistor } from '../Redux/store'

import Navbar from '../Layouts/Navbar/Nav'
import Footer from '../Layouts/Footer/Footer'

import '../styles/globals.css'



function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter()
  const inverted = (pathname === '/register' || pathname === '/' ) ? true : false

  return( 
    <>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Navbar inverted={inverted} />
        <Component {...pageProps} />
        <Footer inverted={!inverted} />
      </PersistGate>
    </Provider>
    </>
  )
}

export default MyApp
