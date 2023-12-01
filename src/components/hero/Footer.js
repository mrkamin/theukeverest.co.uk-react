import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import IMG1 from "../assets/Logo-2.png";

const Footer = () => {
  return (
    <>
      <div className="footer-container d-flex flex-column align-items-center justify-content-center">
        <Link to="contact-us" className="fs-5 p-0 m-0">
          {" "}
          Click here for a No Obligation Quote or On-site Call Out
        </Link>
        <p className="fs-5 p-0 m-0">or Call us on 0787351724</p>
      </div>
      <div className="HomeSectionThree gap-3">
        <div className="w-100 homeSectionThreeItem p-4">
          <img src={IMG1} alt="logo2" height={150} className="pb-3" />
          <h3>Call: 0203 488 1889</h3>
          <p className="text-align-justify">
            Address: Office 7, 35/37 Ludgate Hill London, EC4M 7JN
          </p>
          <h6>Email: info@theukeverest.co.uk</h6>
          <a
            href="https://www.facebook.com/mrkamin2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </div>
        <div className="w-100 homeSectionThreeItem p-4">
          <h2>Air Conditioning & Refrigeration Eroupe</h2>
          <p className="text-align-justify">
            At The UK Everest Ltd, we supply air conditioning and refrigeration
            services for commercial businesses and estate agencies. We’ve
            worked…
          </p>
          <Link to="about-us" className=" read-more p-2 rounded-5 px-4">
            Read more{">"}
          </Link>
        </div>
        <div className="w-100 homeSectionThreeItem p-4">
          <h2>Air Conditioning & Refrigeration Services</h2>
          <ul className=" d-flex flex-column gap-3">
            <li>
              <Link to="about-us" className="">
                AirConditioning Installation
              </Link>
            </li>
            <li>
              <Link to="about-us" className="">
                AirConditioning Installation
              </Link>
            </li>
            <li>
              <Link to="about-us" className="">
                AirConditioning Installation
              </Link>
            </li>
            <li>
              <Link to="about-us" className="">
                AirConditioning Installation
              </Link>
            </li>
            <li>
              <Link to="about-us" className="">
                AirConditioning Installation
              </Link>
            </li>
            <li>
              <Link to="about-us" className="">
                AirConditioning Installation
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-container d-flex flex-column align-items-center justify-content-center">
        <p className="fs-5 p-0 m-0">or Call us on 0787351724</p>
      </div>
    </>
  );
};

export default Footer;
