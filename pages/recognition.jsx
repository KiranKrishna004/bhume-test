import Article from '../components/Article'
import Head from 'next/head'
import Footer from '../components/footer'
import Header from '../components/header'

export default function Recognition() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Header />
      <Head>
        <title>Recognition</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Article />
      <Footer />
    </div>
  )
}
