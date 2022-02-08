import React from 'react'

const VideoBanner = () => {
  return (
    <div className="mt-7 flex w-5/6 overflow-hidden border-solid hover:border-double xs:h-56 xs:w-full sm:h-96 sm:border-4 sm:p-2 xl:w-1/2">
      <iframe
        className="h-full w-full justify-center overflow-hidden"
        width="60%"
        height="80%"
        src="https://www.youtube.com/embed/ScMzIvxBSi4"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}
{/* <iframe width="717" height="403" src="https://www.youtube.com/embed/ScMzIvxBSi4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
export default VideoBanner
