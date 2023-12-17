import { GiCheckMark } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import IMG1 from '../assets/aboutus/1.png';
import IMG2 from '../assets/aboutus/2.jpg';
import IMG4 from '../assets/aboutus/11.jpg';
import IMG3 from '../assets/aboutus/3.jpg';
import IMG5 from '../assets/aboutus/4.jpg';
import IMG6 from '../assets/aboutus/5.jpg';
import IMG7 from '../assets/aboutus/6.jpg';
import IMG8 from '../assets/aboutus/7.png';
import IMG9 from '../assets/aboutus/8.png';
import IMG10 from '../assets/aboutus/9.png';
import IMG11 from '../assets/aboutus/10.jpg';
import IMG12 from '../assets/aboutus/11 copy.jpg';
import './aboutas.css';

const Aboutas = () => (
  <>
    <div className="about-us container gap-5 py-5">
      <div className="">
        <h1>The Uk Everest Refrigeration & Air-conditioning Service Eroupe</h1>
        <hr />
        <p>
          <span>The Uk Everest Refrigeration & Air-conditioning</span>
          is a family run business founded in 2015 by the Ramin Family, that
          specialises in air conditioning and refrigeration services for
          commercial businesses in and around the Eroupe area.
          <br />
          {' '}
          <br />
          Our reputation has been built on our excellent customer service and
          high standards of workmanship. Unlike other firms, we don’t operate by
          the hour.
          {' '}
          <br />
          {' '}
          <br />
          We offer a full
          {' '}
          <span>24-hour repair service</span>
          and pride ourselves on our quick response time, top class service and
          quality of first-time fix.
          {' '}
          <br />
          {' '}
          <br />
          Our clients depend on us because they get a personal service from a
          company that they can trust. We are proud to include a large number of
          high profile businesses among our loyal clients including:
          {' '}
          <br />
          {' '}
          <br />
          <span>
            Costa Coffee, KFC, Tesco, Jamie’s Italian, Patisserie Valerie, Byron
            Hamburger Restaurants and more.
          </span>
        </p>
        <div className="about-image-container gap-1 align-items-center text-center justify-content-center">
          <div>
            <img src={IMG1} alt="IMG1" height={100} className="" />
          </div>
          <div>
            <img src={IMG2} alt="IMG2" height={100} className="w-100" />
          </div>
          <div>
            <img src={IMG4} alt="IMG4" height={100} className="" />
          </div>
          <div>
            <img src={IMG5} alt="IMG5" height={100} className="w-100" />
          </div>
          <div>
            <img src={IMG6} alt="IMG6" height={100} className="" />
          </div>
          <div>
            <img src={IMG8} alt="IMG8" height={100} className="" />
          </div>
          <div>
            <img src={IMG9} alt="IMG9" height={100} className="w-100" />
          </div>
          <div>
            <img src={IMG10} alt="IMG10" height={100} className="" />
          </div>
          <div>
            <img src={IMG11} alt="IMG11" height={100} className="" />
          </div>
          <div>
            <img src={IMG12} alt="IMG12" height={100} className="" />
          </div>
          <div>
            <img src={IMG3} alt="IMG3" height={100} className="" />
          </div>
          <div>
            <img src={IMG7} alt="IMG7" height={100} className="" />
          </div>
        </div>
        <p>
          Our experienced team of highly skilled engineers is accredited to
          provide a full spectrum of refrigeration services from supply and
          installation to maintenance and repair.
          <br />
          {' '}
          <br />
          Our air conditioning services range from single unit installations to
          bespoke high end residential to complex systems across 7-floor offices
          (hotels & Offices).
        </p>
        <div>
          <h1>Specialist in air conditioning and refrigeration services</h1>
          <p>
            If you are looking for first class service from a company whose
            business has been built on trust and recommendation,
            {' '}
            <span>
              <Link to="/contact-us">
                {' '}
                contact The Uk Everest Refrigeration
                {' '}
              </Link>
            </span>
            today!
          </p>
        </div>
      </div>
      <div className="d-flex flex-column gap-5">
        <div className="d-flex gap-3">
          <div className="">
            <p
              to="about-us"
              rel="noopener noreferrer"
              className="footer-socials rounded-5"
            >
              <GiCheckMark />
            </p>
          </div>
          <div className="d-flx flex-column">
            <h5 className="p-0 m-0"> 10+ Years Experience</h5>
            <p className="p-0 m-0">Established in 2015</p>
          </div>
        </div>
        <div className="d-flex gap-3">
          <div className="">
            <p rel="noopener noreferrer" className="footer-socials rounded-5">
              <GiCheckMark />
            </p>
          </div>
          <div className="d-flx flex-column">
            <h5 className="p-0 m-0"> 1510+ Jobs Completed</h5>
            <p className="p-0 m-0">Installation | Repair | Maintenance</p>
          </div>
        </div>
        <div className="d-flex gap-3">
          <div className="">
            <p rel="noopener noreferrer" className="footer-socials rounded-5">
              <GiCheckMark />
            </p>
          </div>
          <div className="d-flx flex-column">
            <h5 className="p-0 m-0"> 5 Star Google Reviews</h5>
            <p className="p-0 m-0">Professional and Reliable</p>
          </div>
        </div>
        <div className="d-flex gap-3">
          <div className="">
            <p rel="noopener noreferrer" className="footer-socials rounded-5">
              <GiCheckMark />
            </p>
          </div>
          <div className="d-flx flex-column">
            <h5 className="p-0 m-0"> 10+ Years Experience</h5>
            <p className="p-0 m-0">
              F-Gas | Safe Contractor | Accredited Installer
            </p>
          </div>
        </div>
        <div className="d-flex gap-3">
          <div className="">
            <p rel="noopener noreferrer" className="footer-socials rounded-5">
              <GiCheckMark />
            </p>
          </div>
          <div className="d-flx flex-column">
            <h5 className="p-0 m-0"> 24/7 Emergency Response</h5>
            <p className="p-0 m-0">On-site in less than 4 hours</p>
          </div>
        </div>
        <div className="d-flex gap-3">
          <div className="">
            <p rel="noopener noreferrer" className="footer-socials rounded-5">
              <GiCheckMark />
            </p>
          </div>
          <div className="d-flx flex-column">
            <h5 className="p-0 m-0"> High First Time Fix</h5>
            <p className="p-0 m-0">Low recall score</p>
          </div>
        </div>
        <div className="d-flex gap-3">
          <div className="">
            <p rel="noopener noreferrer" className="footer-socials rounded-5">
              <GiCheckMark />
            </p>
          </div>
          <div className="d-flx flex-column">
            <h5 className="p-0 m-0"> Guaranteed Customer Satisfaction</h5>
            <p className="p-0 m-0">High Key Performance Indicators Rating</p>
          </div>
        </div>
        <div className="d-flex gap-3">
          <div className="">
            <p rel="noopener noreferrer" className="footer-socials rounded-5">
              <GiCheckMark />
            </p>
          </div>
          <div className="d-flx flex-column">
            <h5 className="p-0 m-0"> High Efficiency and Performance</h5>
            <p className="p-0 m-0">Lower montlhy bills</p>
          </div>
        </div>
        <div className="d-flex gap-3">
          <div className="">
            <p rel="noopener noreferrer" className="footer-socials rounded-5">
              <GiCheckMark />
            </p>
          </div>
          <div className="d-flx flex-column">
            <h5 className="p-0 m-0"> High Energy Rating</h5>
            <p className="p-0 m-0">
              5 COP (coefficient of performance) and EER (energy efficiency
              ratio) Rating
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Aboutas;
