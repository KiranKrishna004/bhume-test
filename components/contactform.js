import ShopButton from './ShopButton'
import { useState, useEffect } from 'react'

const initFormState = {
  Name: '',
  email: '',
  Phone: '',
  OrgDes: '',
  Message: '',
}

const ContactForm = () => {
  /* const [formData, setFormData] = useState([]) */

  const [newFormData, setNewFormData] = useState(initFormState)

  const handleSubmit = (e) => {
    e.preventDefault()
    /* console.log(formData) */
    const infoObject = {
      Name: newFormData.Name,
      email: newFormData.email,
      Phone: newFormData.Phone,
      OrgDes: newFormData.OrgDes,
      Message: newFormData.Message,
    }

    console.log('newFormData', newFormData)
    /*   setFormData(formData.concat(newFormData)) */
    /* console.log('formData after concat', formData) */
    setNewFormData(initFormState)
    console.log(infoObject)
    console.log('after', newFormData)
  }

  return (
    <div className="Full_Form flex w-full justify-center pt-5 pb-5">
      <form action="" method="post" className="w-full" onSubmit={handleSubmit}>
        <div className="Form_Group relative m-4 flex flex-col justify-between md:flex-row">
          <div className="Form_Item mb-2 flex h-10 w-full md:mb-0 md:mr-2 md:w-1/2">
            <input
              onChange={(e) =>
                setNewFormData({ ...newFormData, Name: e.target.value })
              }
              type="text"
              className="peer w-full border pl-1 text-gray-600"
              name="Name"
              value={newFormData.Name}
              aria-label="Your name"
              placeholder="Your name  "
              required="required"
            />
            <p className="invisible absolute -inset-y-2 ml-1 h-3 w-auto bg-white px-1 pb-1 text-xs text-gray-400 peer-valid:visible">
              Your name
            </p>
          </div>
          <div className="Form_Item relative mt-2 flex h-10 w-full justify-end md:mt-0 md:ml-2 md:w-1/2">
            <input
              type="email"
              onChange={(e) =>
                setNewFormData({ ...newFormData, email: e.target.value })
              }
              value={newFormData.email}
              className="peer w-full border pl-1 text-gray-600"
              name="email"
              aria-label="Your email"
              placeholder="Your email"
              required="required"
            />
            <p className="invisible absolute -inset-y-2 -inset-x-0 ml-1 h-3 w-auto bg-white px-1 pb-1 text-xs text-gray-400 peer-valid:visible">
              Your email
            </p>
          </div>
        </div>

        <div className="Form_Item justify-centre relative m-4 h-10">
          <input
            type="text"
            className="peer h-full w-full border pl-1 text-gray-600"
            /* className="Form__Input" */
            onChange={(e) =>
              setNewFormData({ ...newFormData, Phone: e.target.value })
            }
            value={newFormData.Phone}
            name="contact[Your phone(optional)]"
            aria-label="Your phone(optional)"
            placeholder="Your phone(optional)"
            required="required"
          />
          <p className="invisible absolute -inset-y-2 ml-1 h-3 w-auto bg-white px-1 pb-1 text-xs text-gray-400 peer-valid:visible ">
            Your phone
          </p>
        </div>

        <div className="Form_Item relative m-4 h-10">
          <input
            type="text"
            className="peer h-full w-full border pl-1 text-gray-600"
            /* className="Form__Input" */
            onChange={(e) =>
              setNewFormData({ ...newFormData, OrgDes: e.target.value })
            }
            value={newFormData.OrgDes}
            name="contact[Your organisation and designation]"
            aria-label="Your organisation and designation"
            placeholder="Your organisation and designation"
            required="required"
          />
          <p className="invisible absolute -inset-y-2 ml-1 h-3 w-auto bg-white px-1 pb-1 text-xs text-gray-400 peer-valid:visible">
            Your organisation and designation
          </p>
        </div>

        <div className="Form_Item relative m-4 box-border h-40 active:border-blue-400">
          <textarea
            name="contact[body]"
            className="peer h-full w-full resize-none border px-2 pt-1 text-gray-600 active:border-blue-400 "
            cols="10"
            /*className="Form_Textarea" */
            onChange={(e) =>
              setNewFormData({ ...newFormData, Message: e.target.value })
            }
            value={newFormData.Message}
            rows="10"
            aria-label="Your message"
            placeholder="Your message"
            required="required"
          />
          <p className="invisible absolute -inset-y-2 ml-1 h-3 w-auto bg-white px-1 pb-1 text-xs text-gray-400 peer-valid:visible">
            Your message
          </p>
        </div>

        <div className="flex justify-center p-2">
          {/* <ShopButton btnColor="#166534" type="outline" width="110%">
            Send message
          </ShopButton> */}
          <button
            /* style="background-color: rgb(22,101,52);color:white;border:1px solid rgb(22,101,52);" */
            type="submit"
            className="Form__Submit Button Button--primary Button--full rounded-lg bg-green-800 px-5 pt-2.5 pb-3 text-white hover:bg-gradient-to-r hover:from-green-700 hover:via-green-600 hover:to-green-700"
          >
            Send message
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
