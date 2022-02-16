import { prependOnceListener } from 'process'
import React from 'react'
import ShopButton from './ShopButton'
const Shopcard = ({ imgLink, redirectLink }) => {
  return (
    // <div className="flex h-full w-full flex-wrap justify-around">
    <div className="relative h-auto flex-1">
      <img src={imgLink} />
      <div
        style={{
          position: 'absolute',
          bottom: '20%',
          textAlign: '-webkit-center',
        }}
      >
        <ShopButton btnColor="black" type="outline" width="110%">
          Shop Now
        </ShopButton>
      </div>
    </div>
  )
}
export default Shopcard
