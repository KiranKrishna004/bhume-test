import React from 'react'

const TextBoxIntend = () => {
  return (
    <div>
      <div className="mt-4 flex flex-col items-center text-center leading-loose xs:m-5 sm:hidden">
        <div className="m-2"></div>
        <div className="font-semibold xs:m-2 sm:m-3 "></div>
        <p className="text-gray-500">
          This start up has been selected for <strong>Cohort</strong> which is
          an initiative of{' '}
          <strong>
            {' '}
            Green Innovation Fund of UNDP, Kerala Start up Mission and Haritha
            Kerala Mission
          </strong>{' '}
          to undertake textile upcycling activities in the Western Ghats region.
        </p>
        <div className="font-semibold xs:m-4"></div>
        <p className="text-gray-500">
          We intended to produce diverse products to suit the market demand,
          which would enable the <strong>Kudumbasree Unit</strong> in{' '}
          <strong>Munnar</strong> to sustain the collection and upcycling of
          tailoring excesses which they have already initiated.
        </p>
      </div>
      <div className="flex w-full justify-center">
        <div className="m-5 h-1 w-14  bg-black"></div>
      </div>
    </div>
  )
}

export default TextBoxIntend
