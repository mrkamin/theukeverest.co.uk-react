import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import IMG from "../assets/banner1.jpg";
import "./home.css";
import Cart from "./Cart";

const Home = () => {
  const rightAnimition = useRef();
  const leftAnimation = useRef();

  useLayoutEffect(() => {
    const bannerAninmation = gsap.context(() => {
      gsap.from(".bannerMsgBtnleft", {
        duration: 2,
        x: "-600%",
        ease: "bounce",
      });
      gsap.to(leftAnimation.current, {
        duration: 2,
        x: "0%",
        ease: "bounce",
      });
      gsap.from(".bannerMsgBtnright", {
        duration: 2,
        x: "400%",
        ease: "bounce",
      });
      gsap.to(rightAnimition.current, {
        duration: 2,
        x: "0%",
        ease: "bounce",
      });
      gsap.from(".bannerUpAnimation", {
        duration: 2,
        y: "-400%",
        ease: "bounce",
      });
      gsap.to(rightAnimition.current, {
        duration: 2,
        y: "0%",
        ease: "bounce",
      });
      // gsap.from(".bannerUpAnimation", {
      //   duration: 2,
      //   y: "-400%",
      //   ease: "bounce",
      // });
      // gsap.to(rightAnimition.current, {
      //   duration: 2,
      //   y: "0%",
      //   ease: "bounce",
      // });
    });
    return () => bannerAninmation.revert();
  }, []);

  return (
    <div className="home position-relative">
      <div className="banner-container position-relative">
        <img src={IMG} alt="banner" className="banner-img" />
        <div className="overlay" />
      </div>
      <div className="banner-msg d-flex flex-column position-absolute align-items-center">
        <div className="banner-msg-p d-flex flex-column align-items-center px-3">
          <h1 className="p-0 m-0 bannerUpAnimation" ref={rightAnimition}>
            Air Conditioning & Refrigeration Europe
          </h1>
          <p className="p-0 m-0 fs-5 paragraphAminiation" ref={leftAnimation}>
            Specialist Aircon Installation & Commercial Refrigeration Service
          </p>
        </div>
        <div className="d-flex gap-2 mt-4 banner-link w-100 justify-content-center">
          <Link
            to="our-projects"
            className="bannerMsgBtnleft border border-3 rounded-5 p-2"
            ref={leftAnimation}
          >
            OUR PROJECTS
          </Link>
          <Link
            to="our-projects"
            className="bannerMsgBtnright border border-3 rounded-5  p-2"
            ref={rightAnimition}
          >
            DISCUSS YOUER PROJECTS
          </Link>
        </div>
      </div>
      <Cart />
    </div>
  );
};

export default Home;
