import { Link } from "react-router-dom";
import IMG from "../assets/banner1.jpg";
import AIRCONDITIONIMG from "../assets/air conditioning.png";
import ACOUTDOOR from "../assets/outdoor unit ac.jpg";
import { GiAutoRepair } from "react-icons/gi";
import "./home.css";
import HomeSectionThree from "./HomeSectionThree";

const Home = () => {
  return (
    <div className="home position-relative">
      <div className="banner-container position-relative">
        <img src={IMG} alt="banner" className="banner-img" />
        <div className="overlay" />
      </div>
      <div className="banner-msg d-flex flex-column position-absolute align-items-center">
        <div className="banner-msg-p">
          <h1 className="p-0 m-0">Air Conditioning & Refrigeration Europe</h1>
          <p className="p-0 m-0">
            Specialist Aircon Installation & Commercial Refrigeration Service
          </p>
        </div>
        <div className="d-flex gap-2 mt-4 banner-link">
          <Link
            to="our-projects"
            className="border border-3 rounded-5 text-dark p-2"
          >
            OUR PROJECTS
          </Link>
          <Link
            to="our-projects"
            className="border border-3 rounded-5 text-dark p-2"
          >
            DISCUSS YOUER PROJECTS
          </Link>
        </div>
      </div>
      <div className="cart-container gap-3 w-100 p-3">
        <div className="cart-items w-100 d-flex flex-column text-center p-5 gap-3">
          <div className="cart-item align-items-center justify-content-center text-center">
            <img
              src={AIRCONDITIONIMG}
              alt="air"
              height={50}
              className="cart-icon"
            />
            <div className="text-start">
              <h3 className="p-0 m-0">Air Conditioning Europe</h3>
              <p className="p-0 m-0">Specialist Design and Installation</p>
            </div>
          </div>
          <Link to="air-conditioning" className="read-more p-2 rounded-5">
            Read more
          </Link>
        </div>
        <div className="cart-items w-100 d-flex flex-column text-center p-5 gap-3">
          <div className="cart-item align-items-center">
            <img src={ACOUTDOOR} alt="air" height={50} className="cart-icon" />
            <div className="text-start">
              <h3 className="p-0 m-0">Commercial Refrigeration</h3>
              <p className="p-0 m-0">Walk-in Cold Rooms, Fridges & Freezers</p>
            </div>
          </div>
          <Link
            to="commercial-refrigeration"
            className="read-more p-2 rounded-5"
          >
            Read more
          </Link>
        </div>
        <div className="cart-items w-100 d-flex flex-column text-center p-5 gap-3">
          <div className="cart-item align-items-center">
            <GiAutoRepair />
            <div className="text-start">
              <h3 className="p-0 m-0">Repair and Maintenance</h3>
              <p className="p-0 m-0">
                Air-conditioning and Refrigeration Systems
              </p>
            </div>
          </div>
          <Link to="repair-maintenance" className="read-more p-2 rounded-5">
            Read more
          </Link>
        </div>
      </div>
      <HomeSectionThree />
    </div>
  );
};

export default Home;
