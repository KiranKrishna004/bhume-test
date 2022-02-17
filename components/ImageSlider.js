import React, { useState } from 'react'
import { SliderData } from './SliderData'
/* import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa' */
import styles from './ImageSlider.module.css'
import ShopButton from './ShopButton'
import Slider from 'react-touch-drag-slider'
const ImageSlider = ({ slides, btnText }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <div className="h-80">
      <Slider
        onSlideComplete={(i) => {
          console.log('finished dragging, current slide is', i)
        }}
        onSlideStart={(i) => {
          console.log('started dragging on slide', i)
        }}
        activeIndex={0}
        threshHold={100}
        transition={0.5}
        scaleOnDrag={true}
      >
        {slides.map((slide, index) => (
          <div className={`${styles.image} relative `}>
            <img src={slide.image} key={index} />
            <div
              style={{
                position: 'absolute',
                top: '20%',
                right: '20%',
                textAlign: '-webkit-center',
              }}
            >
              <ShopButton btnColor="transparent" type="outline" width="35%">
                {btnText}
              </ShopButton>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ImageSlider
