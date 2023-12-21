import { Link } from 'react-router-dom';
import { GiAutoRepair } from 'react-icons/gi';
import HomeSectionThree from './HomeSectionThree';
import { Svg1, Svg2 } from '../Svg';

const Cart = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="cart-container gap-3 w-100 px-3 py-5">
        <div className="cart-items d-flex flex-column text-center p-3 gap-3">
          <div className="cart-item align-items-center justify-content-center text-center">
            <Svg1 />
            <div className="text-start">
              <h3 className="p-0 m-0">Air Conditioning Europe</h3>
              <p className="p-0 m-0">Specialist Design and Installation</p>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <Link
              to="air-conditioning"
              className="read-more px-2 rounded-5"
              onClick={scrollToTop}
            >
              Read more
            </Link>
          </div>
        </div>
        <div className="cart-items w-100 d-flex flex-column text-center p-3 gap-3">
          <div className="cart-item align-items-center">
            <Svg2 />
            <div className="text-start">
              <h3 className="p-0 m-0">Commercial Refrigeration</h3>
              <p className="p-0 m-0">Walk-in Cold Rooms, Fridges & Freezers</p>
            </div>
          </div>
          <div className="d-flex justify-content-end ">
            <Link
              to="commercial-refrigeration"
              className="read-more px-2 rounded-5"
              onClick={scrollToTop}
            >
              Read more
            </Link>
          </div>
        </div>
        <div className="cart-items  d-flex flex-column text-center p-3 gap-3">
          <div className="cart-item align-items-center">
            <GiAutoRepair fill="#5dc9db" />
            <div className="text-start">
              <h3 className="p-0 m-0">Repair and Maintenance</h3>
              <p className="p-0 m-0">
                Air-conditioning and Refrigeration Systems
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <Link
              to="repair-maintenance"
              className="read-more px-2 rounded-5"
              onClick={scrollToTop}
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
      <HomeSectionThree />
    </>
  );
};

export default Cart;
