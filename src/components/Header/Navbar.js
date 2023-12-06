import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavUperHead from "./NavUperHead";
import IMG from "../assets/Logo2.png";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLinkClick = () => {
    // Close the dropdown when a link is clicked
    setIsDropdownOpen(false);
  };

  const handleDropdownToggle = () => {
    // Toggle the dropdown when the link is hovered
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownClose = () => {
    // Close the dropdown when the mouse leaves the dropdown
    setIsDropdownOpen(false);
  };
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
                {/* <li className="nav-item">
                  <Link
                    className="nav-link fw-medium"
                    onMouseEnter={handleDropdownToggle}
                    to="air-conditioning"
                  >
                    Air-Conditioning
                  </Link>
                  <ul
                    className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}
                    onMouseLeave={handleDropdownClose}
                  >
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item"
                        onClick={handleLinkClick}
                      >
                        Commercial Installation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item"
                        onClick={handleLinkClick}
                      >
                        Domestic Split Installation Offer
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item"
                        onClick={handleLinkClick}
                      >
                        Residential Installation 
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item"
                        onClick={handleLinkClick}
                      >
                        Maintenance & Service 
                      </Link>
                    </li>
                  </ul>
                </li> */}
                <li class="nav-item dropdown">
                  <div className="d-flex">
                    <Link
                      className="nav-link fw-medium"
                      to="commercial-refrigeration"
                    >
                      Air-Conditioning
                    </Link>
                    <Link
                      className="nav-link dropdown-toggle fw-medium"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></Link>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          Domestic Split Installation Offer
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Residential Installation
                        </a>
                      </li>
                      <li></li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Maintenance & Service
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Repair
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <div className="d-flex">
                    <Link
                      className="nav-link fw-medium"
                      to="commercial-refrigeration"
                    >
                      Commercial Refrigeration
                    </Link>
                    <Link
                      className="nav-link dropdown-toggle fw-medium"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></Link>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          Cold Rooms & Cellar Cooler
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Maintenance & Service
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Repair
                        </a>
                      </li>
                    </ul>
                  </div>
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
