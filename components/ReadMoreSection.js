import React from 'react'
import ShopButton from './ShopButton'
const ReadMoreSection = () => {
  return (
    <div className="mb-5 flex h-auto xs:hidden md:inline-flex lg:w-5/6">
      <div className="relative xs:w-full">
        <img
          className="md:h-auto md:w-auto"
          src="https://blog.ipleaders.in/wp-content/uploads/2021/01/img-20190306-5c7f72b3a4ca1.jpg"
        />
        <div
          style={{
            position: 'absolute',
            bottom: '5%',
            right: '5%',
            textAlign: '-webkit-center',
          }}
        >
          <ShopButton btnColor="black" type="outline" width="110%">
            Read More
          </ShopButton>
        </div>
      </div>
      <div className="m-9 flex h-1 w-full justify-center bg-black sm:hidden"></div>
      <div className="relative xs:w-full">
        <img
          className="md:h-auto md:w-auto"
          src="https://blog.ipleaders.in/wp-content/uploads/2021/01/img-20190306-5c7f72b3a4ca1.jpg"
        />
        <div
          style={{
            position: 'absolute',
            bottom: '5%',
            right: '5%',
            textAlign: '-webkit-center',
          }}
        >
          <ShopButton btnColor="black" type="outline" width="110%">
            Read More
          </ShopButton>
        </div>
      </div>
    </div>
  )
}
export default ReadMoreSection
