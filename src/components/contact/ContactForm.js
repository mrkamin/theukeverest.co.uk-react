import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contactform = () => {
  const form = useRef();
  const [isEmailSent, setIsEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kxwsuog",
        "template_zpovvd6",
        form.current,
        "lPZTbsmEHAmNgySzb"
      )
      .then(() => {
        setIsEmailSent(true);
        e.target.reset();
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <section id="contact" className="contact-sect p-5 gap-5">
      <div>
        <h2>The Uk Everest Refrigeration and Air-Conditioning</h2>
        <h5>Specialist Commercial Air Conditioning & Refrigeration Service</h5>
      <div>

      </div>
      </div>
      <div>
        <h3>Send your message to this supplier</h3>
        <div className="container contact__container">
          {isEmailSent ? (
            <p>Email successfully sent!</p>
          ) : (
            <form ref={form} onSubmit={sendEmail} className="d-flex flex-column gap-2">
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
              />
              <textarea
                name="message"
                rows="7"
                placeholder="Your Message"
                required
              />
              <button type="submit" className="contact-btn">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contactform;
