import { Link } from "react-router-dom";
import StarSvg from "./StarSvg";
import { FaFacebook } from "react-icons/fa";

const NavUperHead = () => {
  return (
    <>
      <div className="navuperhead d-flex justify-content-end">
        {" "}
        <nav className="navbar navbar-expand-lg p-0 m-0">
          <div className="container-fluid">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="d-flex align-items-center review">
                <StarSvg />
                <p className="p-0 m-0">Review</p>
              </div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link  fw-medium"
                    aria-current="page"
                    to="about-us"
                  >
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  fw-medium" to="testimonials">
                    Testimonials
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  fw-medium" to="blog">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  fw-medium" to="contact-us">
                    Contact Us
                  </Link>
                </li>
                <div className="d-flex gap-1 navbar-contact">
                <li className=" d-flex nav-link bg-white rounded-5 fw-medium justify-content-center align-items-center">
                  <p className="p-0 m-0">0797578699</p>
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
    </>
  );
};
export default NavUperHead;
