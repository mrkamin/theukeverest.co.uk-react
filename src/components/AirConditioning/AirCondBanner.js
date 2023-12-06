import IMG from "../assets/AirConditioning.jpg";
import AirConditioningSys from "./AirConditioningSys";
import "./aircondbanner.css";

const AirCondBanner = () => {
  return (
    <>
      <div className="air-cond-banner position-relative text-center">
        <img src={IMG} alt="bannerphoto" />
        <div className="air-cond-overlay position-absolute"></div>
          <h1 className="air-cond-heading p-0 m-0 position-absolute w-100">
            Air Conditioning Europe
          </h1>
      </div>
      <AirConditioningSys />
    </>
  );
};

export default AirCondBanner;
