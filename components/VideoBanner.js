import React from 'react'
import ResponsivePlayer from './ResponsivePlayer'

const VideoBanner = () => {
  return (
    <div className="xs:w-full md:w-5/6 lg:w-1/2">
      <ResponsivePlayer url="https://youtu.be/60tkCLWUxOY" controls={true} />
    </div>
  )
}
export default VideoBanner
