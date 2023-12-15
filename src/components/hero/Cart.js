import { Link } from 'react-router-dom';
import { GiAutoRepair } from 'react-icons/gi';
import HomeSectionThree from './HomeSectionThree';
import AIRCONDITIONIMG from '../assets/air conditioning.png';
import ACOUTDOOR from '../assets/outdoor unit ac.jpg';

const Cart = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="cart-container gap-3 w-100 p-3">
        <div className="cart-items d-flex flex-column text-center p-3 gap-3">
          <div className="cart-item align-items-center justify-content-center text-center">
            <img
              src={AIRCONDITIONIMG}
              alt="air"
              height={50}
              className="cart-icon"
            />
            <div className="text-start">
              <h3 className="p-0 m-0">Air Conditioning Europe</h3>
              <p className="p-0 m-0">Specialist Design and Installation</p>
            </div>
          </div>
          <Link
            to="air-conditioning"
            className="read-more p-1 rounded-5"
            onClick={scrollToTop}
          >
            Read more
          </Link>
        </div>
        <div className="cart-items w-100 d-flex flex-column text-center p-3 gap-3">
          <div className="cart-item align-items-center">
            <img src={ACOUTDOOR} alt="air" height={50} className="cart-icon" />
            <div className="text-start">
              <h3 className="p-0 m-0">Commercial Refrigeration</h3>
              <p className="p-0 m-0">Walk-in Cold Rooms, Fridges & Freezers</p>
            </div>
          </div>
          <Link
            to="commercial-refrigeration"
            className="read-more p-1 rounded-5"
            onClick={scrollToTop}
          >
            Read more
          </Link>
        </div>
        <div className="cart-items  d-flex flex-column text-center p-3 gap-3">
          <div className="cart-item align-items-center">
            <GiAutoRepair />
            <div className="text-start">
              <h3 className="p-0 m-0">Repair and Maintenance</h3>
              <p className="p-0 m-0">
                Air-conditioning and Refrigeration Systems
              </p>
            </div>
          </div>
          <Link
            to="repair-maintenance"
            className="read-more p-1 rounded-5"
            onClick={scrollToTop}
          >
            Read more
          </Link>
        </div>
      </div>
      <HomeSectionThree />
    </>
  );
};

export default Cart;
