import Head from 'next/head'
import Footer from '../components/footer'
import Header from '../components/header'
import Main from '../components/Main'
import VideoBanner from '../components/VideoBanner'
import Shopcard from '../components/Shopcard'
import ImageSlider from '../components/ImageSlider'
import SliderData from '../components/SliderData'
import ReadMoreSection from '../components/ReadMoreSection'
import ReadSliderData from '../components/ReadSilderData'
import TextBoxIntend from '../components/TextBoxIntend'
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Header />
      <Head>
        <title>BhuME</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Main />
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-green-600" href="https://nextjs.org">
            BhuME
          </a>
        </h1>
      </main>
      <TextBoxIntend />
      <div className="my-5 w-full object-fill md:hidden">
        <ImageSlider slides={SliderData} btnText="Shop Now" />
      </div>
      <div className="mt-7 mb-7 h-full w-full flex-wrap justify-around xs:hidden md:flex">
        <Shopcard imgLink={true} redirectLink={true} />
        <Shopcard imgLink={true} redirectLink={true} />
        <Shopcard imgLink={true} redirectLink={true} />
      </div>
      <VideoBanner />
      <div className="m-9 flex h-1 justify-center bg-black sm:w-1/4 lg:w-1/4"></div>
      <ReadMoreSection />
      <div className="my-5 w-full object-fill md:hidden">
        <ImageSlider slides={ReadSliderData} btnText="Read More" />
      </div>
      <Footer />
    </div>
  )
}
