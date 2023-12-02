import { Link } from "react-router-dom";
import IMG from "../assets/banner1.jpg";
import "./home.css";
import Cart from "./Cart";

const Home = () => {
  return (
    <div className="home position-relative">
      <div className="banner-container position-relative">
        <img src={IMG} alt="banner" className="banner-img" />
        <div className="overlay" />
      </div>
      <div className="banner-msg d-flex flex-column position-absolute align-items-center">
        <div className="banner-msg-p d-flex flex-column align-items-center">
          <h1 className="p-0 m-0">Air Conditioning & Refrigeration Europe</h1>
          <p className="p-0 m-0 fs-4">
            Specialist Aircon Installation & Commercial Refrigeration Service
          </p>
        </div>
        <div className="d-flex gap-2 mt-4 banner-link">
          <Link
            to="our-projects"
            className="border border-3 rounded-5  p-2"
          >
            OUR PROJECTS
          </Link>
          <Link
            to="our-projects"
            className="border border-3 rounded-5  p-2"
          >
            DISCUSS YOUER PROJECTS
          </Link>
        </div>
      </div>
      <Cart />
    </div>
  );
};

export default Home;
