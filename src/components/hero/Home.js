import { Link } from "react-router-dom";
import IMG from "../assets/banner1.jpg";
import "./home.css";

const Home = () => {
  return (
    <div className="home position-relative">
      <div className="banner-container position-relative">
        <img src={IMG} alt="banner" className="banner-img" />
        <div className="overlay" />
      </div>
      <div className="banner-msg d-flex flex-column position-absolute align-items-center">
        <h1>Air Conditioning & Refrigeration Europe</h1>
        <h5>Specialist Aircon Installation & Commercial Refrigeration Service</h5>
        <div className="d-flex gap-2 mt-4">
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
    </div>
  );
};

export default Home;
