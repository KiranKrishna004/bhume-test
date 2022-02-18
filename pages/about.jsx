import Head from 'next/head'
import React from 'react'
import Header from '../components/header'

import Footer from '../components/footer'
import AboutText from '../components/aboutc/abouttext'

export default function Hello() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Header />
      <Head>
        <title>About</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <AboutText />
      <Footer />
    </div>
  )
}
