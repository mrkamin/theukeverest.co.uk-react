import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { HiMiniPhone } from "react-icons/hi2";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import './contactForm.css';

const Contactform = () => {
  const form = useRef();
  const [isEmailSent, setIsEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mjg3nmi",
        "template_bni9d7g",
        form.current,
        "ICkryGMcTL8bCrQoB"
      )
      .then(() => {
        setIsEmailSent(true);
        e.target.reset();
        setTimeout(() => {
          setIsEmailSent(false);
        }, 4000);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div className="mt-5 py-5 container">
      <hr />
      <section id="contact" className="contact-sect gap-5">
        <div className="contact d-flex flex-column gap-5">
          <div>
            <h4>The Uk Everest Refrigeration and Air-Conditioning</h4>
            <h5>
              Specialist Commercial Air Conditioning & Refrigeration Service
            </h5>
          </div>
          <div className="d-flex gap-2 p-0 m-0">
            <HiMiniPhone className="mt-1" />
            <div className="p-0 m-0">
              <p className="p-0 m-0">Phone</p>
              <p className="p-0 m-0">07473319304</p>
            </div>
          </div>
          <div className="d-flex gap-2 p-0 m-0">
            <IoLocation className="mt-1" />
            <div className="p-0 m-0">
              <p className="p-0 m-0">Address</p>
              <p className="p-0 m-0">
                Office 7, 35/37 Ludgate Hill, London, EC4M 7JN
              </p>
            </div>
          </div>
          <div className="d-flex gap-2 p-0 m-0">
            <MdEmail className="mt-1" />
            <div className="p-0 m-0">
              <p className="p-0 m-0">E-mail</p>
              <p className="p-0 m-0">info@theukeverest.co.uk</p>
            </div>
          </div>
          <div></div>
        </div>
        <div>
          <h3>
            Europe’s Top Refrigeration company. <br />
            Contact us
          </h3>
          <div className=" contact__container">
            {isEmailSent ? (
              <p className="w-100 ">
                <span>Email successfully sent!</span>
              </p>
            ) : (
              <form
                ref={form}
                onSubmit={sendEmail}
                className="d-flex flex-column gap-2"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  required
                />
                <div className=" d-flex gap-2 w-100 ">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-50"
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Your Phone No"
                    required
                    className="w-50"
                  />
                </div>

                <textarea
                  name="message"
                  rows="7"
                  placeholder="Your Message"
                  required
                />
                <button
                  type="submit"
                  className="contact-btn read-more rounded-5"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contactform;
