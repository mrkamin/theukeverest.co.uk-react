import React from 'react';
import { Link } from 'react-router-dom';

const Testimonials = () => (
  <div className="mt-5 py-5 container">
    <hr />
    <section id="contact" className="testimonial-sect d-flex flex-column align-items-center">
      <div>
        <h3>Air-conditioning & Refrigeration for Europe</h3>
        <h1>Testimonials</h1>
        <Link to="/send-testimonials">
          Click here to send us your testimonial
        </Link>
      </div>
    </section>
  </div>
);

export default Testimonials;
