import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const SendTestimonials = () => {
  const form = useRef();
  const [isEmailSent, setIsEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_mjg3nmi',
        'template_bni9d7g',
        form.current,
        'ICkryGMcTL8bCrQoB',
      )
      .then(() => {
        setIsEmailSent(true);
        e.target.reset();
        setTimeout(() => {
          setIsEmailSent(false);
        }, 4000);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <div className="mt-5 py-5 container">
      <hr />
      <section id="contact" className="testimonial-sect d-flex flex-column align-items-center">
        <div className="w-50">
          <h3>
            Submit a Testimonial
          </h3>
          <div className=" contact__container">
            {isEmailSent ? (
              <p className="w-100 ">
                <span>Testimonial successfully sent!</span>
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
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className=""
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Your Phone No"
                  required
                  className=""
                />
                <input type="text" name="company-name" placeholder="your company name" required className="" />
                <input type="text" name="company-website" placeholder="your company website" className="" />
                <input type="text" name="heading" placeholder="your position" className="" />
                <textarea
                  name="message"
                  rows="7"
                  placeholder="Your testimonials"
                  required
                />
                <button
                  type="submit"
                  className="contact-btn read-more rounded-5"
                >
                  Submit testimonials
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SendTestimonials;
