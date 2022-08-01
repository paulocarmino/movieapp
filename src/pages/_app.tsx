import axios, { HeadersDefaults } from 'axios';
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import { uuid } from 'uuidv4';

import '@/styles/globals.css'
import Template from '@/components/Template'

interface HeaderPropertiesWithBrowserId extends HeadersDefaults {
  ['browser-id']: string
}

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {

  const getBroweserId = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem('movieapp-browser-id')
    }
  }

  const setBrowserId = () => {
    if (typeof window !== "undefined") {
      const generatedUuid = uuid()
      localStorage.setItem('movieapp-browser-id', generatedUuid)

      axios.defaults.headers = {
        ['browser-id']: generatedUuid
      } as HeaderPropertiesWithBrowserId
    }
  }

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
