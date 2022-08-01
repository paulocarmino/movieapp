import type { AppProps } from 'next/app'
import { useEffect } from 'react';

import '@/styles/globals.css'
import Template from '@/components/Template'
import { getBroweserId, setBrowserId } from '@/utils/helpers';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {

  useEffect(() => {
    const browserId = getBroweserId()

    if (!browserId) {
      setBrowserId()
    }
  }, [])

  return (
    <Template>
      <Component {...pageProps} />
    </Template>
  )
}

export default MyApp
