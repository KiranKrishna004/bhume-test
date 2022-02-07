import React from 'react'
import Button from './Button'

const Banner = () => {
  const largeCarouselData = [
    {
      image:
        'https://cdn.shopify.com/s/files/1/0423/9929/files/slider_bc4a0d80-df06-4889-ad3c-b260eedeea9d_1800x.jpg?v=1552206501',
    },
  ]
  const smallCarouselData = [
    {
      image:
        'https://cdn.shopify.com/s/files/1/0423/9929/files/slider-mobile_951f4d56-a672-4fa3-ae88-b6d0b04fa978_x800.jpg?v=1552206513',
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
          <Button btnColor="blue" type="outline">
            Outline Button
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
      </div>
    </div>
  )
}

export default Banner
