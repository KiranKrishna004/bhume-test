import React from 'react'
import ShopButton from './ShopButton'
const Shopcard = ({ imgLink, redirectLink }) => {
  return (
    // <div className="flex h-full w-full flex-wrap justify-around">
      <div className="relative h-auto w-96">
        <img src="https://media.istockphoto.com/photos/brown-teddy-bear-isolated-in-front-of-a-white-background-picture-id909772478?k=20&m=909772478&s=612x612&w=0&h=mzLuJ7ywrSDHmpchf9spOeNF2Ovr2aQBw1z57Szx17g=" />
        <div
          style={{
            position: 'absolute',
            bottom: '20%',
            textAlign: '-webkit-center',
          }}
        >
          <ShopButton btnColor='black' type="outline" width='110%'>
            Shop Now
          </ShopButton>
        </div>
      </div>
  )
}
export default Shopcard
