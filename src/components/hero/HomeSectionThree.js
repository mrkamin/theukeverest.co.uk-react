import { Link } from "react-router-dom";
import IMG9 from "../assets/Accreditations (1).png";

const HomeSectionThree = () => {
  return (
    <>
      <div className="HomeSectionThree gap-3">
        <div className="w-100 homeSectionThreeItem p-4">
          <h3>Air-Conditioning</h3>
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
          <h3>Commercial Refrigeration Europe</h3>
          <p className="text-align-justify">
            <span className="brand-color">
              Installation, repair and maintenance.
            </span>{" "}
            <br /> <br />
            Walk-in Chiller / Freezer (Cold Room), Display Fridge / Freezer,
            Counter Fridge / Freezer, Upright Fridge / Freezer, Drink Fridge,
            Blast Chiller, Bottle Cooler, Cellar Cooler, Ice Maker / Machine,
            Sub Zero / Medical Refrigeration <br />
            <br />
            <span className="brand-color">24/7 repair service providing –</span>
            quick response time, top class service and quality of first time
            fix.
          </p>
          <Link to="contact-us" className=" read-more p-2 rounded-5 px-4">
            Request a Call Out
          </Link>
        </div>
        <div className="w-100 homeSectionThreeItem p-4">
          <h3>Fully Accredited Services</h3>
          <img
            src={IMG9}
            alt="Accredation"
            height={150}
            className="accredation"
          />
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
    </>
  );
};
export default HomeSectionThree;
