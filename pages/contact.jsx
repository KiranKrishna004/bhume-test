import Head from 'next/head'
import React from 'react'
import Header from '../components/header'
import ContactText from '../components/contacttext'
import Footer from '../components/footer'

export default function Hello() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Header />
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContactText />
      <Footer />
    </div>
  )
}
