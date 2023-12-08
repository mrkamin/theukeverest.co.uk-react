import { Link } from "react-router-dom";
import AIRCONDITIONIMG from "../assets/air conditioning.png";
import IMG1 from "../assets/airconditioning/1.jpg";
import IMG2 from "../assets/airconditioning/2.jpg";
import IMG3 from "../assets/airconditioning/3.jpg";
import IMG4 from "../assets/airconditioning/4.jpg";
import IMG5 from "../assets/airconditioning/5.avif";
import IMG6 from "../assets/airconditioning/6.jpg";
import IMG7 from "../assets/airconditioning/8.avif";
import IMG8 from "../assets/airconditioning/7.webp";
import ACOUTDOOR from "../assets/outdoor unit ac.jpg";
import twanyfourHours from "../assets/24houre.png";
import speacilOffers from "../assets/special offer.png";
import { GiAutoRepair } from "react-icons/gi";

const AirConditioningSys = () => {
  return (
    <div className="air-cond-sys-main-cont p-5 d-flex flex-column gap-2">
      <div className="air-cond-sys-cont gap-4">
        <div className="d-flex flex-column gap-2">
          <div className=" air-cond-sys-heading align-items-center">
            <h1>Air Conditioning Systems</h1>
            <hr className="w-100" />
          </div>
          <p className="">
            We are highly skilled, fully certified and accredited to install air
            conditioning systems for all the leading air conditioning brands
            including{" "}
            <span>
              Daikin, Mitsubishi Electric, Mitsubishi Heavy Industries, Samsung,
              Fujitsu, LG, Panasonic, Carrier and more.
            </span>{" "}
            <br />
            With over 10 years’ experience, our design, supply and{" "}
            <span>installation service </span>begins with a thorough onsite
            inspection to determine and discuss the best comfort cooling air
            conditioning options available for:
          </p>
          <div className="air-cond-sys-list d-flex fs-5">
            <ul className="w-75">
              <li className="air-cond-sys-list-item">Offices</li>
              <li className="air-cond-sys-list-item">House & Flats</li>
              <li className="air-cond-sys-list-item">
                Retail Stores & Factories
              </li>
              <li className="air-cond-sys-list-item">Restaurants</li>
            </ul>
            <ul className="w-100">
              <li className="air-cond-sys-list-item">Hotels</li>
              <li className="air-cond-sys-list-item">Cinemas & Theatres</li>
              <li className="air-cond-sys-list-item">Schools & Colleges</li>
              <li className="air-cond-sys-list-item">Shopping Centres</li>
            </ul>
          </div>
          <div className="cart-items d-flex flex-column text-center p-3 gap-3">
            <div className="cart-item align-items-center justify-content-center text-center">
              <img src={AIRCONDITIONIMG} alt="air" height={50} className="" />
              <div className="text-start ">
                <h3 className="p-0 m-0">Commercial Installation</h3>
                <p className="p-0 m-0">
                  We offer{" "}
                  <span>professional turnkey air conditioning solutions</span>{" "}
                  for industrial and commercial premises of any size, working as
                  contractors to the construction industry or directly to the
                  end user client.
                </p>
              </div>
            </div>
            <Link to="air-conditioning" className="read-more p-2 rounded-5">
              Read more
            </Link>
          </div>
          <div className="cart-items d-flex flex-column text-center p-3 gap-3">
            <div className="cart-item align-items-center justify-content-center text-center">
              <img src={ACOUTDOOR} alt="air" height={50} className="" />
              <div className="text-start ">
                <h3 className="p-0 m-0">Residential Installation</h3>
                <p className="p-0 m-0">
                  We offer a range of complete climate controlled solutions for
                  your home using the latest high spec systems and advanced
                  technologies.
                </p>
              </div>
            </div>
            <Link to="air-conditioning" className="read-more p-2 rounded-5">
              Read more
            </Link>
          </div>
          <div className="cart-items d-flex flex-column text-center p-3 gap-3">
            <div className="air-cart-item align-items-center justify-content-center text-start">
              <GiAutoRepair />
              <div className="text-start ">
                <h3 className="p-0 m-0">Maintenance & Service</h3>
                <p className="p-0 m-0">
                  We offer specialist{" "}
                  <span>
                    air conditioning maintenance and service packages{" "}
                  </span>
                  for all types of commercial and domestic air conditioning
                  systems.
                </p>
              </div>
            </div>
            <Link to="air-conditioning" className="read-more p-2 rounded-5">
              Read more
            </Link>
          </div>
          <div className="cart-items d-flex flex-column text-center p-3 gap-3">
            <div className="air-cart-item align-items-center justify-content-center text-center">
              <img
                src={twanyfourHours}
                alt="air"
                height={50}
                className="cart-icon"
              />
              <div className="text-start ">
                <h3 className="p-0 m-0">Repair</h3>
                <p className="p-0 m-0">
                  Our on-site <span>Call Out</span> inspection is{" "}
                  <span>FREE</span> and our trained engineers are usually able
                  to complete repairs on the first visit to get your system back
                  up and running quickly.
                </p>
              </div>
            </div>
            <Link to="air-conditioning" className="read-more p-2 rounded-5">
              Read more
            </Link>
          </div>
          <div className="cart-items d-flex flex-column text-center p-3 gap-3">
            <div className="air-cart-item align-items-center justify-content-center text-center">
              <img
                src={speacilOffers}
                alt="air"
                height={50}
                className="cart-icon"
              />
              <div className="text-start ">
                <h3 className="p-0 m-0">Domestic Split Special Offer</h3>
                <p className="p-0 m-0">
                  We are proud to offer our NEW Single Home Installation Offer.
                  Using our years of experience , The Uk Everest has selected
                  the very best wall mounted and floor mounted air conditioning
                  units on the market, the Mitsubishi SRK-ZSP-S and SRF-ZMX-S.
                  Renowned for high quality and reliability, Mitsubishi uses the
                  latest technology to offer a robust unit with remote
                  controlled, variable temperature settings which can be
                  programmed and scheduled to switch on and off to suit you.
                </p>
              </div>
            </div>
            <Link to="air-conditioning" className="read-more p-2 rounded-5">
              Read more
            </Link>
          </div>
        </div>
        <div className="air-cond-sys-contact-info px-5 d-flex flex-column justify-content-center border border-dark rounded-4">
          <p>Air Conditioning Installation Speciaist</p>
          <h1>02034.....3</h1>
          <p>
            <span>
              <Link to="contact-us" className="rounded-4">
                email us
              </Link>
            </span>{" "}
            or request a callback
          </p>
        </div>
      </div>
      <div className="air-cond-projects">
        <img src={IMG1} alt="IMG1" height={200} />
        <img src={IMG2} alt="IMG2" height={200} />
        <img src={IMG3} alt="IMG3" height={200} />
        <img src={IMG4} alt="IMG4" height={200} />
        <img src={IMG5} alt="IMG5" height={200} />
        <img src={IMG6} alt="IMG6" height={200} />
        <img src={IMG7} alt="IMG7" height={200} />
        <img src={IMG8} alt="IMG8" height={200} />
      </div>
    </div>
  );
};

export default AirConditioningSys;
