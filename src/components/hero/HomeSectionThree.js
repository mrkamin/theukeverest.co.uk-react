import { Link } from "react-router-dom";
import IMG1 from "../assets/Foster-Refrigeration.png";
import IMG2 from "../assets/Daikin-Air-Conditioning.png";
import IMG3 from "../assets/Fujitsu-Air-Conditioning.png";
import IMG4 from "../assets/Hoshizaki-Ice-Machine-1.png";
import IMG5 from "../assets/Mitsubishi-Electric-Air-Conditioning.png";
import IMG7 from "../assets/Williams-Refrigeration.png";
import IMG8 from "../assets/True-Refrigeration-1.png";

const HomeSectionThree = () => {
  return (
    <>
      <div className="HomeSectionThree gap-3">
        <div className="w-100 homeSectionThreeItem p-4">
          <h2>Air-Conditioning</h2>
          <p className="text-align-justify">
            We offer a{" "}
            <span className="brand-color">
              full design, installation and repair service
            </span>{" "}
            for all types of air conditioning systems.
            <br />
            <br /> Air-Conditioning – VRV, VRF, Wall-mounted, Cassette,
            Floor-mounted, Ducted, Split System, and Multi-split
            <br />
            <br />
            As accredited installers all equipment supplied by is provided with
            an extended <span className="brand-color">7 YEAR </span>WARRANTY
            giving you peace of mind that your air conditioning unit remains
            reliable and energy efficient.
          </p>
          <Link to="contact-us" className=" read-more p-2 rounded-5 px-4">
            Discuss your project
          </Link>
        </div>
        <div className="w-100 homeSectionThreeItem p-4">
          <h2>Commercial Refrigeration Europe</h2>
          <p className="text-align-justify">
            <span className="brand-color">
              Installation, repair and maintenance.
            </span>{" "}
            Walk-in Chiller / Freezer (Cold Room), Display Fridge / Freezer,
            Counter Fridge / Freezer, Upright Fridge / Freezer, Drink Fridge,
            Blast Chiller, Bottle Cooler, Cellar Cooler, Ice Maker / Machine,
            Sub Zero / Medical Refrigeration
            <span className="brand-color">24/7 repair service providing –</span>
            quick response time, top class service and quality of first time
            fix.
          </p>
          <Link to="contact-us" className=" read-more p-2 rounded-5 px-4">
            Request a Call Out
          </Link>
        </div>
        <div className="w-100 homeSectionThreeItem p-4">
          <h2>Fully Accredited Services</h2>
          <p className="text-align-justify">
            Our aim is to provide enhanced working environments so that
            businesses can operate at their best – without the pains of slow and
            expensive repairs.
          </p>
          <Link to="about-us" className=" read-more p-2 rounded-5 px-4">
            More about us
          </Link>
        </div>
      </div>
      <div className="swiper d-flex flex-column">
          <div className="swiper-slide">
            <img src={IMG1} alt="swiper image1" />
            <img src={IMG2} alt="swiper image2" />
            <img src={IMG3} alt="swiper image3" />
            <img src={IMG4} alt="swiper image4" />
          </div>
          <div className="swiper-slide">
            <img src={IMG5} alt="swiper image5" />
            <img src={IMG7} alt="swiper image6" />
            <img src={IMG8} alt="swiper image7" />
            <img src={IMG1} alt="swiper image1" />
          </div>
      </div>
    </>
  );
};
export default HomeSectionThree;
