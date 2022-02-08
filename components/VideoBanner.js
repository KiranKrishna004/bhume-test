import React from 'react'
import Button from './Button'
const VideoBanner = () => {
  const image = [
    {
      image: 'https://www.wallpaperkiss.com/wimg/b/217-2178784_big.jpg',
    },
  ]
  return (
    <div>
      {' '}
      <div
        className="relative mt-5"
        style={{ maxWidth: 'none', maxHeight: 'none', height: 'none' }}
      >
        {image.map((slide, index) => {
          return (
            <img
              src={slide.image}
              alt="This is a carousel slide"
              key={index}
              style={{}}
              className="overflow-hidden"
            />
          )
        })}
        <div
          style={{
            width: '100%',
            // height: '4px',
            position: 'absolute',
            bottom: '50%',
            textAlign: '-webkit-center',
          }}
        >
          <Button btnColor="#16a34a" type="outline">
            Recycled / Handmade
          </Button>
        </div>
      </div>
    </div>
  )
}
export default VideoBanner
