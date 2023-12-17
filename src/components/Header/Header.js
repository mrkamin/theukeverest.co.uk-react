import Headroom from 'react-headroom';
import Navbar from './Navbar';
import './Header.css';

const Header = () => (
  <>
    <Headroom>
      <div className="header">
        <Navbar />
      </div>
    </Headroom>
  </>
);

export default Header;
