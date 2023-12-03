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
        <div className="homeSectionThreeItem p-4 text-start d-flex flex-column justify-content-start align-items-start">
          <img src={IMG1} alt="logo2" height={100} className="pb-3 logoimage" />
          <h3>Call: 0203 488 1889</h3>
          <p className="text-align-justify">
            Address: Office 7, 35/37 Ludgate Hill London, EC4M 7JN
          </p>
          <p>
            Email: <span className="email">info@theukeverest.co.uk</span>
          </p>
          <a
            href="https://www.facebook.com/mrkamin2"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-socials"
          >
            <FaFacebook />
          </a>
        </div>
        <div className="w-100 homeSectionThreeItem p-4">
          <h3>Air Conditioning & Refrigeration Eroupe</h3>
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
          <h3>Air Conditioning & Refrigeration Services</h3>
          <ul className=" d-flex flex-column gap-3">
            <li>
              <Link to="about-us" className="">
                AirConditioning Installation
              </Link>
            </li>
            <li>
              <Link to="about-us" className="">
                Air conditioning Repair
              </Link>
            </li>
            <li>
              <Link to="about-us" className="">
                Air Conditioning Maintenance
              </Link>
            </li>
            <li>
              <Link to="about-us" className="">
                Air Conditioning Service
              </Link>
            </li>
            <li>
              <Link to="about-us" className="">
                Commercial Refrigeration
              </Link>
            </li>
            <li>
              <Link to="about-us" className="">
                Refrigeration Repair
              </Link>
            </li>
            <li>
              <Link to="about-us" className="">
                Cold Rooms & Cellar Coolers
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-container2 d-flex align-items-center justify-content-between px-5">
        <p className="p-0 m-0">@2023 The Uk Everest LTD. Company number 12435t643. Office 7, 35-7 Ludgate . All Rights Reserved</p>
        <div className="d-flex align-items-center gap-5 footer-social-2">
        <p className="p-0 m-0">Privace Policy</p>
        <p className="p-0 m-0">Terms & Conditions</p>
        <a
            href="https://www.facebook.com/mrkamin2"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-socials"
          >
            <FaFacebook />
          </a>
          </div>
      </div>
    </>
  );
};

export default Footer;
