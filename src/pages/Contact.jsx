import React from "react"

import Footer from "../components/Common/Footer"
import ReviewSlider from "../components/Common/ReviewSlider"
import ContactDetails from "../components/core/ContactUsPage/ContactDetails"
import ContactForm from "../components/core/ContactUsPage/ContactForm"

const Contact = () => {
  return (
    <div className=" bg-gradient-to-b from-[#2e1a5a] to-[#34019a]  mb">
      <div className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row mb-10 ">
        {/* Contact Details */}
        <div className="lg:w-[40%]">
          <ContactDetails />
        </div>

        {/* Contact Form */}
        <div className="lg:w-[60%]">
          <ContactForm />
        </div>
      </div>
     
      <Footer />
    </div>
  )
}

export default Contact
