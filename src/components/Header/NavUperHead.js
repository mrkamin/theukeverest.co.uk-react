import { Link } from "react-router-dom";
import StarSvg from "../StarSvg";
import { FaFacebook } from "react-icons/fa";

const NavUperHead = () => {
  return (
    <>
      <div className="navuperhead d-flex align-items-center gap-2 justify-content-end">
        {" "}
        <div className="d-flex align-items-center review">
          <StarSvg />
          <p className="p-0 m-0">Review</p>
        </div>
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
        
        <div className="footer-socials d-flex align-items-center gap-1">
        <p className="p-0 m-0">0797578699</p>
          <a
            href="https://www.facebook.com/mrkamin2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </>
  );
};
export default NavUperHead;
