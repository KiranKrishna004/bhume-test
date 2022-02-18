import React from 'react'
import AboutSlider from '../aboutC/AboutSlider'
import AboutSlide from '../aboutC/aboutslide'

const AboutText = () => {
  return (
    <div className=" mt-8 mb-5 flex min-h-screen w-full flex-col items-center  ">
      <header className="PageHeader items-centre justify-start pt-[48px] pb-[48px] text-center text-3xl font-semibold text-gray-500">
        <div>
          <h1>WHAT IS BHUME</h1>
          <h2 className="pt-[40px] text-xl">
            ‘BHUME’ IS A SANSKRIT WORD USED TO DESCRIBE EARTH.
          </h2>
        </div>
      </header>

      <div className=" flex w-3/4 flex-col justify-center text-center text-gray-500">
        —
        <p className="my-5">
          BhuME Women's Pvt Ltd collects sanitizes and upcycles tailoring
          excesses generated in Kerala to use them as filling for soft toys
          which are cuddly and capable of serving educational needs. This start
          up has been selected for Cohort which is an initiative of Green
          Innovation Fund of UNDP, Kerala Start up Mission and Haritha Kerala
          Mission to undertake textile upcycling activities in the Western Ghats
          region.
        </p>
        —
      </div>

      <div className="my-5 w-3/4 py-5 text-center text-2xl text-gray-500">
        We aim to work towards the 3 objectives mentioned below through this
        initiative:
      </div>
      <div className="mt-3 mb-7 h-full w-full flex-wrap px-3 xs:hidden md:flex">
        <div className="relative h-auto w-full flex-1">
          <img src={'../assets/education.jpg'} className="h-full w-full" />
          <div className="flex justify-end">
            <div
              className="flex w-auto bg-black px-4 font-serif text-2xl text-white"
              style={{
                position: 'absolute',
                top: '5%',
                textAlign: 'center',
              }}
            >
              Education
            </div>
          </div>
          {/* <div
            className="pr-20 pl-2 font-serif text-lg text-white"
            style={{
              position: 'absolute',
              bottom: '14%',
              textAlign: 'start',
            }}
          >
            Improve quality of educational toys available at anganwadis (SDG 4)
          </div> */}
        </div>

        <div className="relative h-auto w-full flex-1">
          <img src={'../assets/environment.jpg'} />
          <div className="flex justify-center">
            <div
              className="w-auto bg-black px-4 font-serif text-2xl text-white"
              style={{
                position: 'absolute',
                top: '5%',
                textAlign: 'start',
              }}
            >
              Environment
            </div>
          </div>
          {/* <div
            className="pl-20 pr-2 font-serif text-lg text-white"
            style={{
              position: 'absolute',
              bottom: '5%',
              textAlign: 'end',
            }}
          >
            Create products that cause minimal environmental disruption and
            tackle tailoring waste management problem (SDG 12 and 15)
          </div> */}
        </div>
        <div className="relative h-auto w-full flex-1">
          <img src={'../assets/livelihood.jpg'} />
          <div className="flex justify-start">
            <div
              className="w-auto bg-black px-4 font-serif text-2xl text-white"
              style={{
                position: 'absolute',
                top: '5%',
                textAlign: '-webkit-center',
              }}
            >
              Livelihood
            </div>
          </div>
          {/*  <div
            className=" px-2 font-serif text-lg text-white"
            style={{
              position: 'absolute',
              bottom: '14%',
              textAlign: '-webkit-center',
            }}
          >
            Creation of livelihood opportunities for unemployed women (SDG 5)
          </div> */}
        </div>
      </div>
      <div className="my-5 w-full object-fill md:hidden">
        <AboutSlider slides={AboutSlide} />
      </div>
      <div className="my-5 w-3/4 py-5 text-center text-gray-500">
        —
        <p className="my-5">
          Our initiative up-cycles tailoring waste into educational toys with
          the help of underprivileged women under SHGs and intends to sell these
          products to anganwadis in our home district of Ernakulam, Kerala.
          These products have been designed under the guidance of Child
          Development and Fashion Technology experts at St. Teresa’s College,
          Kochi. Our initiative also received a grant from the United Nations
          Development Programme and the Kerala Startup Mission to expand this
          initiative to the district of Idukki, Kerala.
        </p>
        —
      </div>
    </div>
  )
}

export default AboutText
