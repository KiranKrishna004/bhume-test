import React from 'react'

const Article = () => {
  return (
    <div className="flex max-h-min flex-row items-center justify-center px-4">
      <div className="relative flex w-1/2 justify-center overflow-hidden bg-black xs:w-full">
        <img
          className="h-auto w-full transform bg-cover bg-center transition-all duration-500 ease-in-out hover:scale-150 hover:opacity-50"
          src="../assets/firstimg.jpg"
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
      <div className="relative max-h-min w-1/2 overflow-hidden bg-black xs:w-full">
        <img
          className="h-full transform bg-cover bg-center transition-all duration-500 ease-in-out hover:scale-150 hover:opacity-50 md:w-auto"
          src="../assets/secondimg.jpg"
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
