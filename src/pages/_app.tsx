import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import { uuid } from 'uuidv4';

import '@/styles/globals.css'
import Template from '@/components/Template'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {

  const getBroweserId = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem('movieapp-browser-id')
    }
  }

  const setBrowserId = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem('movieapp-browser-id', uuid())
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
