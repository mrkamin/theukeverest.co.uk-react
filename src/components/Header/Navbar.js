import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import StarSvg from "./StarSvg";
import { FaFacebook } from "react-icons/fa";
import IMG from "../assets/Logo2.png";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavbarToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeNavbar = () => {
    setNavbarOpen(false);
  };

  return (
    <>
      <div className="header-navbar d-flex flex-column-reverse">
        <nav className="navbar navbar-expand-lg p-0 m-0">
          <div className="container-fluid">
            <NavLink
              className="navbar-brand rounded-3"
              to="/"
              onClick={closeNavbar}
            >
              <img src={IMG} alt="Logo" height={80} />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              onClick={handleNavbarToggle}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse ${navbarOpen ? "show" : ""}`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                  <div className="d-flex">
                    <NavLink
                      className="nav-link fw-medium"
                      to="air-conditioning"
                      onClick={closeNavbar}
                    >
                      Air-Conditioning
                    </NavLink>
                    <NavLink
                      className="nav-link dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></NavLink>
                    <ul class="dropdown-menu">
                      <li>
                        <NavLink
                          class="dropdown-item"
                          to="commercial-refrigeration"
                          onClick={closeNavbar}
                        >
                          Domestic Split Installation Offer
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          class=" dropdown-item"
                          to="commercial-refrigeration"
                          onClick={closeNavbar}
                        >
                          Residential Installation
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          class="dropdown-item"
                          to="commercial-refrigeration"
                          onClick={closeNavbar}
                        >
                          Maintenance & Service
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          class="dropdown-item"
                          to="commercial-refrigeration"
                          onClick={closeNavbar}
                        >
                          Repair
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <div className="d-flex">
                    <NavLink
                      className="nav-link fw-medium"
                      to="commercial-refrigeration"
                      onClick={closeNavbar}
                    >
                      Commercial Refrigeration
                    </NavLink>
                    <NavLink
                      className="nav-link dropdown-toggle fw-medium"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></NavLink>
                    <ul class="dropdown-menu">
                      <li>
                        <NavLink
                          class=" dropdown-item"
                          to="commercial-refrigeration"
                          onClick={closeNavbar}
                        >
                          Cold Rooms & Cellar Cooler
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          class="nav-link dropdown-item"
                          to="commercial-refrigeration"
                          onClick={closeNavbar}
                        >
                          Maintenance & Service
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          class="nav-link dropdown-item"
                          to="commercial-refrigeration"
                          onClick={closeNavbar}
                        >
                          Repair
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link  fw-medium"
                    to="repair-maintenance"
                    onClick={closeNavbar}
                  >
                    Repair and Maintenance
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link  fw-medium"
                    to="our-projects"
                    onClick={closeNavbar}
                  >
                    Our Projects
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="support nav-link bg-white rounded-5 fw-medium text-center"
                    onClick={closeNavbar}
                    to="contact-us"
                  >
                    24/7 Support
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="d-flex justify-content-end">
          {" "}
          <nav className="navbar navbar-expand-lg p-0 m-0">
            <div className="container-fluid">
              <div
                className={`collapse navbar-collapse ${
                  navbarOpen ? "show" : ""
                }`}
                id="navbarSupportedContent"
              >
                <div className="d-flex align-items-center review">
                  <StarSvg />
                  <p className="p-0 m-0">Review</p>
                </div>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link  fw-medium"
                      aria-current="page"
                      to="about-us"
                      onClick={closeNavbar}
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link  fw-medium"
                      to="testimonials"
                      onClick={closeNavbar}
                    >
                      Testimonials
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link  fw-medium"
                      to="blog"
                      onClick={closeNavbar}
                    >
                      Blog
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link  fw-medium"
                      to="contact-us"
                      onClick={closeNavbar}
                    >
                      Contact Us
                    </NavLink>
                  </li>
                  <div className="d-flex gap-1 navbar-contact">
                    <li className=" d-flex nav-link bg-white rounded-5 fw-medium justify-content-center align-items-center">
                      <p className="p-0 m-0">07473319304</p>
                    </li>
                    <li className="nav-item px-1">
                      <a
                        href="https://www.facebook.com/mrkamin2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-socials rounded-5"
                      >
                        <FaFacebook />
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
