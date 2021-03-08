import{ useEffect } from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";


import { useRouter } from 'next/router'
import { SnackbarProvider } from "notistack";
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
        <SnackbarProvider> 
          <Navbar inverted={inverted} />
          <Component {...pageProps} />
          <Footer inverted={!inverted} />
        </SnackbarProvider>
      </PersistGate>
    </Provider>
    </>
  )
}

export default MyApp
