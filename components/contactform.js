import ShopButton from './ShopButton'

const ContactForm = () => {
  return (
    <div className="Full_Form flex w-full justify-center pt-5 pb-5">
      <form action="" method="post" class="w-full">
        {/* <input type="hidden" name="form_type" value="contact" />
        <input type="hidden" name="utf8" value="✓" /> */}
        {/* <table class="auto table">
          <thead></thead>
          <tr> */}
        <div className="Form_Group relative m-4 flex flex-col justify-between md:flex-row">
          <div className="Form_Item mb-2 flex h-10 w-full md:mb-0 md:mr-2 md:w-1/2">
            <input
              type="text"
              class="peer w-full border pl-1 text-gray-600"
              name="contact[name]"
              aria-label="Your name"
              placeholder="Your name  "
              required="required"
            />
            <p class="invisible absolute -inset-y-2 ml-1 h-3 w-auto bg-white pl-1 pr-1 text-xs text-gray-400 peer-valid:visible">
              Your name
            </p>
          </div>
          <div className="Form_Item relative mt-2 flex h-10 w-full justify-end md:mt-0 md:ml-2 md:w-1/2">
            <input
              type="email"
              class="peer w-full border pl-1 text-gray-600"
              name="contact[email]"
              aria-label="Your email"
              placeholder="Your email"
              required="required"
            />
            <p class="invisible absolute -inset-y-2 left-1 ml-1 h-3 w-auto bg-white pl-1 pr-1 text-xs text-gray-400 peer-valid:visible ">
              Your email
            </p>
          </div>
        </div>
        {/* </tr>
          <tr> */}
        <div className="Form_Item justify-centre relative m-4 h-10">
          <input
            type="text"
            class="peer h-full w-full border pl-1 text-gray-600"
            /* class="Form__Input" */
            name="contact[Your phone(optional)]"
            aria-label="Your phone(optional)"
            placeholder="Your phone(optional)"
            required="required"
          />
          <p class="invisible absolute -inset-y-2 ml-1 h-3 w-auto bg-white pl-1 pr-1 text-xs text-gray-400 peer-valid:visible ">
            Your phone
          </p>
        </div>
        {/* </tr>
          <tr> */}
        <div className="Form_Item relative m-4 h-10">
          <input
            type="text"
            class="peer h-full w-full border pl-1 text-gray-600"
            /* class="Form__Input" */
            name="contact[Your organisation and designation]"
            aria-label="Your organisation and designation"
            placeholder="Your organisation and designation"
            required="required"
          />
          <p class="invisible absolute -inset-y-2 ml-1 h-3 w-auto bg-white pl-1 pr-1 text-xs text-gray-400 peer-valid:visible ">
            Your organisation and designation
          </p>
        </div>
        {/* </tr>
          <tr> */}
        <div className="Form_Item relative m-4 box-border h-40 active:border-blue-400">
          <textarea
            name="contact[body]"
            class="peer h-full w-full resize-none border pl-1 text-gray-600 active:border-blue-400 "
            cols="10"
            /*class="Form_Textarea" */
            rows="10"
            aria-label="Your message"
            placeholder="Your message"
            required="required"
          />
          <p class="invisible absolute -inset-y-2 ml-1 h-3 w-auto bg-white pl-1 pr-1 text-xs text-gray-400 peer-valid:visible">
            Your message
          </p>
        </div>
        {/* </tr>
        </table> */}
        <div className="flex justify-center p-2">
          {/* <button
            style="background-color: rgb(22,101,52);color:white;border:1px solid rgb(22,101,52);"
            type="submit"
            class="Form__Submit Button Button--primary Button--full"
          >
            Send message
          </button> */}

          <ShopButton btnColor="#166534" type="outline" width="110%">
            Send message
          </ShopButton>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
