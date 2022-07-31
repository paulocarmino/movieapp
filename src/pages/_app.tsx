import type { AppProps } from 'next/app'

import '@/styles/globals.css'
import Template from '@/components/Template'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <Template>
      <Component {...pageProps} />
    </Template>
  )
}

export default MyApp
