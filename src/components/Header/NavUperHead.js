import { Link } from "react-router-dom";
import StarSvg from "../StarSvg";
import { FaFacebook } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";

const NavUperHead = () => {
  return (
    <>
      <div className="d-flex align-items-center gap-2 p-1 justify-content-end">
        {" "}
        <div className="d-flex align-items-center">
          <StarSvg />
        </div>
        <p className="p-0 m-0">Review</p>
        <ul className="list-group list-group-horizontal d-flex align-itmes-center p-0 m-0">
          <li className="list-group-item">
            <Link to="/aboutus" className="list-group-item-action active">
              About Us
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/testimonials" className="list-group-item-action active">
              Testimonials
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/blog" className="list-group-item-action active">
              Blog
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/contactus" className="list-group-item-action active">
              Contact Us
            </Link>
          </li>
        </ul>
        <p className="p-0 m-0">0797578699</p>
        <div className="footer-socials">
          <a
            href="https://www.facebook.com/mrkamin2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/rafikambiz/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImInstagram />
          </a>
        </div>
      </div>
    </>
  );
};
export default NavUperHead;
