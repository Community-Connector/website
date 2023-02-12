import '@/styles/globals.css'
import Head from 'next/head'

import { useRouter } from 'next/router'

import { useEffect, useState } from 'react'

import Nav, { NavPlaceholder } from '../components/Nav/Nav'
import Footer from '@/components/Footer/Footer'

export default function App({ Component, pageProps }) {

  const router = useRouter()

  const [title, setTitle] = useState('')

  useEffect(() => {

    const end = router.pathname.split('/').pop()

    if (end == '')
      setTitle('Fundraisers')
    else if (end === 'previous-fundraisers')
      setTitle('Previous Fundraisers')

    else if (end === 'about')
      setTitle('About')

    else if (end === 'contact')
      setTitle('Contact')

  }, [router.pathname])

  return (
    <>
    <Head>
      <title>{title}</title>
      <link rel="shortcut icon" href="/logo192.png" />
    </Head>
      <Nav />
      <NavPlaceholder />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
