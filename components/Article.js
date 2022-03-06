import React from 'react'

const Article = () => {
  return (
    <div className="flex min-h-screen flex-row items-center justify-center px-4">
      <div className="relative flex justify-center overflow-hidden bg-black xs:w-full">
        <img
          className="transform bg-cover bg-center transition-all duration-500 ease-in-out hover:scale-150 hover:opacity-50 md:h-auto md:w-auto"
          src="https://static.toiimg.com/thumb/msid-53415848,imgsize-872949,width-400,resizemode-4/53415848.jpg"
        />
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '10%',
            textAlign: '-webkit-center',
          }}
        >
          <div>
            <a href="https://timesofindia.indiatimes.com/city/kochi/kerala-campuses-show-the-way-in-nature-conservation/articleshow/53415848.cms?from=mdr">
              <button
                /* style="background-color: rgb(22,101,52);color:white;border:1px solid rgb(22,101,52);" */

                type="submit"
                className="Form__Submit Button Button--primary Button--full rounded-lg bg-green-800 px-5 pt-2.5 pb-3 text-white hover:bg-gradient-to-r hover:from-green-700 hover:via-green-600 hover:to-green-700"
              >
                Read article
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden bg-black xs:w-full">
        <img
          className="transform bg-cover bg-center transition-all duration-500 ease-in-out hover:scale-150 hover:opacity-50 md:h-auto md:w-auto"
          src="https://dc-cdn.s3-ap-southeast-1.amazonaws.com/dc-Cover-jmoi78f0uhfgsmfb3q6v0invp5-20160701063851.Medi.jpeg"
        />
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '10%',
            textAlign: '-webkit-center',
          }}
        >
          <div>
            <a href="https://www.deccanchronicle.com/lifestyle/viral-and-trending/010716/good-bye-plastic-teresians-take-cloth-revolution-out-of-campus.html">
              <button
                /* style="background-color: rgb(22,101,52);color:white;border:1px solid rgb(22,101,52);" */

                type="submit"
                className="Form__Submit Button Button--primary Button--full rounded-lg bg-green-800 px-5 pt-2.5 pb-3 text-white hover:bg-gradient-to-r hover:from-green-700 hover:via-green-600 hover:to-green-700"
              >
                Read article
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article
