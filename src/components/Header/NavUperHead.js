import StarSvg from "../StarSvg";

const NavUperHead = () => {
  return (
    <>
      <div className="d-flex align-items-center gap-1">
        {" "}
        <div className="d-flex align-items-center">
          <StarSvg />
        </div>
        <p className="p-0 m-0">Review</p>
      </div>
    </>
  );
};
export default NavUperHead;
