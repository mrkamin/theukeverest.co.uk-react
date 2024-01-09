import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsWhatsapp } from 'react-icons/bs';
import { StarSvg, SvgLogo } from '../Svg';

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
              className="navbar-brand rounded-3 logo"
              to="/"
              onClick={() => {
                closeNavbar();
                scrollToTop();
              }}
            >
              <SvgLogo className="logo" />
            </NavLink>
            <button
              className="navbar-toggler m-4"
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
                      className="nav-link nav-suppurt fw-bold fs-6"
                      to="air-conditioning"
                      onClick={() => {
                        closeNavbar();
                        scrollToTop();
                      }}
                    >
                      Air-Conditioning
                    </NavLink>
                    <NavLink
                      className="nav-link dropdown-toggle nav-suppurt"
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
                          className="dropdown-item doropdown-list "
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
                          className="dropdown-item doropdown-list "
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
                      className="nav-link nav-suppurt fw-bold fs-6"
                      to="commercial-refrigeration"
                      onClick={() => {
                        closeNavbar();
                        scrollToTop();
                      }}
                    >
                      Commercial Refrigeration
                    </NavLink>
                    <NavLink
                      className="nav-link dropdown-toggle nav-suppurt "
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    />
                    <ul className="dropdown-menu dropdown">
                      <li>
                        <NavLink
                          className="dropdown-item doropdown-list "
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
                    className="nav-link  nav-suppurt fw-bold fs-6"
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
                    className="nav-link  nav-suppurt fw-bold fs-6"
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
                    className="support nav-link fw-bold fs-6 rounded-5 nav-suppurt text-center "
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
                <div className="d-flex align-items-center">
                  <StarSvg />
                  <p className="p-0 m-0 text-white fw-bold fs-6">Review</p>
                </div>
                <ul className="navbar-nav mb-lg-0 my-1">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link  nav-suppurt fw-bold fs-6"
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
                      className="nav-link  nav-suppurt fw-bold fs-6"
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
                      className="nav-link  nav-suppurt fw-bold fs-6"
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
                      className="nav-link  nav-suppurt fw-bold fs-6"
                      to="contact-us"
                      onClick={() => {
                        closeNavbar();
                        scrollToTop();
                      }}
                    >
                      Contact Us
                    </NavLink>
                  </li>
                  <div className="d-flex gap-1 ">
                    <li className="d-flex nav-link bg-white rounded-5 nav-suppurt  justify-content-center align-items-center">
                      <p className="px-1 py-0 m-0 fs-6 nav-phone">07473319304</p>
                    </li>
                    <li className="nav-item px-0">
                      <a
                        href="https://api.whatsapp.com//send?phone=00447473319304"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="button"
                        aria-label="Email: info@theukeverest.co.uk"
                        className="whats-up-icon rounded-5 p-1"
                      >
                        <BsWhatsapp className="fs-6" />
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
