import React from 'react'
import ContactForm from './contactform'

const ContactText = () => {
  return (
    <div className=" mt-8 mb-5 flex min-h-screen w-full flex-col md:w-1/2 ">
      <header className="PageHeader items-centre w-full justify-start pt-[48px] pb-[48px] text-center text-3xl font-semibold text-gray-500">
        <div>
          <h1>CONTACT</h1>
        </div>
      </header>

      <div className="sm-5 justify-center text-center text-gray-500 ">
        <p>
          We help organisations transform their textile waste. <br />
          We want designers to help us find newer solutions. <br />
          We want our customers to give us their feedback.
        </p>
      </div>
      <div className="pt-5 pb-5 text-center text-gray-500">
        —
        <br />
        Contact us at <span>&nbsp;</span>
        <a
          href="mailto:example@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          example@gmail.com
        </a>
        &nbsp; or fill the form below
        <br />—
      </div>
      <ContactForm />
    </div>
  )
}

export default ContactText
