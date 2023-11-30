import { Link } from "react-router-dom";
import IMG from "../assets/The-Uk-Everest-banner.jpg";
import "./home.css";

const Home = () => {
  return (
    <div className="home position-relative">
      <img src={IMG} alt="banner" className="banner-img" />
      <div className="banner-msg d-flex flex-column position-absolute align-items-center">
        <h1>Air Conditioning & Refrigeration Europe</h1>
        <p>Specialist Aircon Installation & Commercial Refrigeration Service</p>
        <div className="d-flex gap-2">
          <Link to="our-projects" className="border border-3 rounded-5 text-white p-2">OUR PROJECTS</Link>
          <Link to="our-projects" className="border border-3 rounded-5 text-white p-2">DISCUSS YOUER PROJECTS</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
