import type { AppProps /*, AppContext */ } from 'next/app'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* viewport meta tag specifically must be in _app.tsx, other tags are in _document.tsx */}
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
