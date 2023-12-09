import IMG from "../assets/repair/1.jpg";
import RepairMaintaince from "./RepairMaintainence";
import './repairmaintainec.css';

const RepairBanner = () => {
  return (
    <>
      <div className="air-cond-banner position-relative text-center">
        <img src={IMG} alt="bannerphoto" />
        <div className="air-cond-overlay position-absolute"></div>
        <h1 className="air-cond-heading p-0 m-0 position-absolute w-100">
          Air Conditioning & Commercial Refrigeration Repair and Maintenance
        </h1>
      </div>
      <RepairMaintaince />
    </>
  );
};

export default RepairBanner;
