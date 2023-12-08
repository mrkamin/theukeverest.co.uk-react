import IMG from "../assets/commircial refergration/banner.jpg";
import RefergrationSectTwo from "./RefergrationSectTwo";
import "./refergration.css";

const Refergration = () => {
  return (
    <>
      <div className="air-cond-banner position-relative text-center">
        <img src={IMG} alt="bannerphoto" />
        <div className="air-cond-overlay position-absolute"></div>
        <h1 className="air-cond-heading p-0 m-0 position-absolute w-100">
          Commercial Refrigeration Europe
        </h1>
      </div>
      <RefergrationSectTwo />
    </>
  );
};

export default Refergration;
