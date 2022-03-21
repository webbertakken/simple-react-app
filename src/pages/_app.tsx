import React from 'react'
import Head from 'next/head'
import type { AppProps /*, AppContext */ } from 'next/app'
import 'firebase/auth'
import 'firebase/firestore'
import { IconContext } from 'react-icons'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { reducer } from '../logic'
import { FirebaseAppProvider } from 'reactfire'
import config from '../core/config'
import '../styles/globals.css'
import 'react-tippy/dist/tippy.css'

// Styles

// Global instances
const store = configureStore({ reducer })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Simple React App</title>
        {/* viewport meta tag specifically must be in _app.tsx */}
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5" />
      </Head>
      <Provider store={store}>
        <FirebaseAppProvider firebaseConfig={config.firebase}>
          <IconContext.Provider value={{ className: 'anticon' }}>
            <Component {...pageProps} />
          </IconContext.Provider>
        </FirebaseAppProvider>
      </Provider>
    </>
  )
}
