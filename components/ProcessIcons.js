import react from 'react'

const ProcessIcons = ({ imgSrc, text }) => {
  return (
    <div className="flex h-auto w-1/2 flex-col items-center p-10 md:w-1/4 md:p-5 ">
      <div>
        <svg
          xmlns={imgSrc}
          class="h-full w-full"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
      <div className="mt-5">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default ProcessIcons
