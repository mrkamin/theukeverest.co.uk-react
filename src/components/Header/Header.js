import NavUperHead from "./NavUperHead";
import Navbar from "./Navbar";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <NavUperHead />
        <Navbar />
      </div>
    </>
  );
};

export default Header;
