import React from 'react'
import Button from './Button'

const Banner = () => {
  const largeCarouselData = [
    {
      image: '../assets/bannerw.jpg',
    },
  ]
  const smallCarouselData = [
    {
      image: '../assets/bannerl.jpg',
    },
  ]

  const currentSlide = 0

  return (
    <div>
      {' '}
      <div
        className="relative  flex h-full h-72 w-full max-w-lg overflow-hidden xs:hidden sm:hidden md:block lg:block"
        style={{ maxWidth: 'none', maxHeight: 'none', height: 'auto' }}
      >
        {largeCarouselData.map((slide, index) => {
          return (
            <img
              src={slide.image}
              alt="This is a carousel slide"
              key={index}
              style={{}}
              className={
                index === currentSlide
                  ? 'block h-auto w-full object-cover'
                  : 'hidden'
              }
            />
          )
        })}
        <div
          style={{
            width: '100vw',
            height: '4px',
            position: 'absolute',
            bottom: '20%',
            textAlign: '-webkit-center',
          }}
        >
          <Button btnColor="#166534" type="outline">
            Recycled / Handmade
          </Button>
        </div>
      </div>
      <div
        className="relative flex h-full h-72 w-full max-w-lg overflow-hidden md:hidden lg:hidden"
        style={{ maxWidth: 'none', maxHeight: 'none', height: 'auto' }}
      >
        {smallCarouselData.map((slide, index) => {
          return (
            <img
              src={slide.image}
              alt="This is a carousel slide"
              key={index}
              style={{}}
              className={
                index === currentSlide
                  ? 'block h-auto w-full object-cover'
                  : 'hidden'
              }
            />
          )
        })}
        <div
          style={{
            width: '100vw',
            height: '100%',
            position: 'absolute',
            flexDirection: 'column',
            textAlign: '-webkit-center',
            justifyContent: 'center',
            display: 'inline-grid',
          }}
        >
          <Button btnColor="#166534" type="outline">
            Recycled / Handmade
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Banner
