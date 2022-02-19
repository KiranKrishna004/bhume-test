import Head from 'next/head'
import Footer from '../components/footer'
import Header from '../components/header'
import Main from '../components/Main'
import VideoBanner from '../components/VideoBanner'
import Shopcard from '../components/Shopcard'
import ImageSlider from '../components/ImageSlider'
import SliderData from '../components/SliderData'
import ShopCardData from '../components/ShopCardData'
import ReadMoreSection from '../components/ReadMoreSection'
import ReadSliderData from '../components/ReadSilderData'
import TextBoxIntend from '../components/TextBoxIntend'
import TextMD from '../components/TextMD'
import ProcessIcons from '../components/ProcessIcons'
import PrcsIconsData from '../components/PrcsIconsData'

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex min-h-screen flex-col items-center justify-center">
        <Head>
          <title>BhuME</title>
          <link rel="icon" href="/logo.png" />
        </Head>
        <Main />
        <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
          <h1 className="text-6xl font-bold">
            Welcome to{' '}
            <a className="text-green-600" href="https://bhume.co.in/">
              BhuME
            </a>
          </h1>
        </main>
        <TextBoxIntend />
        <TextMD />
        <div className="my-5 w-full object-fill md:hidden">
          <ImageSlider slides={SliderData} btnText="Shop Now" />
        </div>
        <div className="mt-7 mb-7 h-full w-full flex-wrap xs:hidden md:flex">
          {ShopCardData.map((obj, index) => (
            <Shopcard imgLink={obj.image} key={index} redirectLink={true} />
          ))}
        </div>
        <div className="h-1 w-1/4 bg-black xs:mt-1 xs:mb-10 md:mt-5 "></div>
        <VideoBanner />
        <div className="flex h-1 w-1/4 justify-center bg-black xs:mt-10 xs:mb-7 md:m-10"></div>
        <ReadMoreSection />
        <div className=" w-full object-fill md:hidden">
          <ImageSlider slides={ReadSliderData} btnText="Read More" />
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center pt-20 ">
            <p className="text-3xl">Our Process</p>
            <p className="flex items-center py-5 text-center">
              Saved from being dumped in landfills, these jeans have begun a new
              journey by being turned into bags.
            </p>
          </div>

          <div className="flex flex-wrap justify-between px-5 py-5 md:w-1/2">
            {PrcsIconsData.map((obj, index) => (
              <ProcessIcons imgSrc={obj.image} text={obj.text} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
