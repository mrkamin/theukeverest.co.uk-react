import NavUperHead from "./NavUperHead";
import IMG from "../assets/Logo2.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div>
        <NavUperHead />
        <nav className="navbar navbar-expand-lg p-0 m-0">
          <div className="container-fluid">
            <Link className="navbar-brand rounded-3" to="/">
              <img src={IMG} alt="Logo" height={80} />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link  fw-medium"
                    aria-current="page"
                    to="air-conditioning"
                  >
                    Air-Conditioning
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link  fw-medium"
                    to="commercial-refrigeration"
                  >
                    Commercial Refrigeration
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  fw-medium" to="repair-maintenance">
                    Repair and Maintenance
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  fw-medium" to="our-projects">
                    Our Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="support nav-link bg-white rounded-5 fw-medium text-center"
                    to="contactus"
                  >
                    24/7 Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
