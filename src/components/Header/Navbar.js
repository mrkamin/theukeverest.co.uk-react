import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsWhatsapp } from 'react-icons/bs';
import StarSvg from './StarSvg';
import IMG from '../assets/Logo2.png';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavbarToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeNavbar = () => {
    setNavbarOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="header-navbar d-flex flex-column-reverse">
        <nav className="navbar navbar-expand-lg p-0 m-0">
          <div className="container-fluid">
            <NavLink
              className="navbar-brand rounded-3"
              to="/"
              onClick={() => {
                closeNavbar();
                scrollToTop();
              }}
            >
              <img src={IMG} alt="Logo" height={60} />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              aria-label="Email: info@theukeverest.co.uk"
              onClick={handleNavbarToggle}
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className={`collapse navbar-collapse ${navbarOpen ? 'show' : ''}`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <div className="d-flex">
                    <NavLink
                      className="nav-link fw-medium"
                      to="air-conditioning"
                      onClick={() => {
                        closeNavbar();
                        scrollToTop();
                      }}
                    >
                      Air-Conditioning
                    </NavLink>
                    <NavLink
                      className="nav-link dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    />
                    <ul className="dropdown-menu dropdown">
                      <li>
                        <NavLink
                          className="dropdown-item doropdown-list"
                          to="commercial-refrigeration"
                          onClick={() => {
                            closeNavbar();
                            scrollToTop();
                          }}
                        >
                          Domestic Split Installation Offer
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item doropdown-list"
                          to="commercial-refrigeration"
                          onClick={() => {
                            closeNavbar();
                            scrollToTop();
                          }}
                        >
                          Residential Installation
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item doropdown-list"
                          to="commercial-refrigeration"
                          onClick={() => {
                            closeNavbar();
                            scrollToTop();
                          }}
                        >
                          Maintenance & Service
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item doropdown-list"
                          to="commercial-refrigeration"
                          onClick={() => {
                            closeNavbar();
                            scrollToTop();
                          }}
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
                      onClick={() => {
                        closeNavbar();
                        scrollToTop();
                      }}
                    >
                      Commercial Refrigeration
                    </NavLink>
                    <NavLink
                      className="nav-link dropdown-toggle fw-medium"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    />
                    <ul className="dropdown-menu dropdown">
                      <li>
                        <NavLink
                          className="dropdown-item doropdown-list"
                          to="commercial-refrigeration"
                          onClick={() => {
                            closeNavbar();
                            scrollToTop();
                          }}
                        >
                          Cold Rooms & Cellar Cooler
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item doropdown-list"
                          to="commercial-refrigeration"
                          onClick={() => {
                            closeNavbar();
                            scrollToTop();
                          }}
                        >
                          Maintenance & Service
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item doropdown-list"
                          to="commercial-refrigeration"
                          onClick={() => {
                            closeNavbar();
                            scrollToTop();
                          }}
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
                    onClick={() => {
                      closeNavbar();
                      scrollToTop();
                    }}
                  >
                    Repair and Maintenance
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link  fw-medium"
                    to="our-projects"
                    onClick={() => {
                      closeNavbar();
                      scrollToTop();
                    }}
                  >
                    Our Projects
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="support nav-link bg-white rounded-5 fw-medium text-center"
                    onClick={() => {
                      closeNavbar();
                      scrollToTop();
                    }}
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
          {' '}
          <nav className="navbar navbar-expand-lg p-0 m-0">
            <div className="container-fluid">
              <div
                className={`collapse navbar-collapse ${
                  navbarOpen ? 'show' : ''
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
                      onClick={() => {
                        closeNavbar();
                        scrollToTop();
                      }}
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link  fw-medium"
                      to="testimonials"
                      onClick={() => {
                        closeNavbar();
                        scrollToTop();
                      }}
                    >
                      Testimonials
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link  fw-medium"
                      to="blog"
                      onClick={() => {
                        closeNavbar();
                        scrollToTop();
                      }}
                    >
                      Blog
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link  fw-medium"
                      to="contact-us"
                      onClick={() => {
                        closeNavbar();
                        scrollToTop();
                      }}
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
                        href="https://api.whatsapp.com//send?phone=00447473319304"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="button"
                        aria-label="Email: info@theukeverest.co.uk"
                        className="footer-socials rounded-5"
                      >
                        <BsWhatsapp className="contact__options-icon" />
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
