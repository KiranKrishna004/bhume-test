import Head from 'next/head'
import Footer from '../components/footer'
import Header from '../components/header'
import Main from '../components/Main'
import VideoBanner from '../components/VideoBanner'
import Shopcard from '../components/Shopcard'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Header />
      <Head>
        <title>BhuME</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <div className="flex h-full w-full flex-wrap justify-around">
        <Shopcard imgLink={true} redirectLink={true} />
        <Shopcard imgLink={true} redirectLink={true} />
        <Shopcard imgLink={true} redirectLink={true} />
      </div>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-green-600" href="https://nextjs.org">
            BhuME
          </a>
        </h1>
      </main>
      {/* <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="ml-2 h-4" />
        </a>
      </footer> */}
      <VideoBanner />
      <Footer />
    </div>
  )
}
