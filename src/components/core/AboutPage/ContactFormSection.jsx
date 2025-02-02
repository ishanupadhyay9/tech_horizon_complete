import React from "react";
import ContactUsForm from "../ContactUsPage/ContactUsForm";

const ContactFormSection = () => {
  return (
    <div className="mx-auto mb-10 bg-[#6332f6] ">
      <h1 className="text-center text-4xl font-semibold">Get in Touch</h1>
      <p className="text-center text-[#ebebf0] mt-3">
        We&apos;d Love to here for you, Please fill out this form.
      </p>
      <div className="mt-12 mx-auto">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactFormSection;
