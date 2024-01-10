import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import IMG from '../assets/banner1.jpg';
import './home.css';
import Cart from './Cart';

const Home = () => {
  const rightAnimition = useRef();
  const leftAnimation = useRef();

  useLayoutEffect(() => {
    const bannerAninmation = gsap.context(() => {
      gsap.from('.bannerMsgBtnleft', {
        duration: 1,
        x: '-600%',
        ease: '',
      });
      gsap.to(leftAnimation.current, {
        duration: 1,
        x: '0%',
        ease: '',
      });
      gsap.from('.bannerMsgBtnright', {
        duration: 1,
        x: '400%',
        ease: '',
      });
      gsap.to(rightAnimition.current, {
        duration: 1,
        x: '0%',
        ease: '',
      });
      gsap.from('.bannerUpAnimation', {
        duration: 1,
        y: '-400%',
        ease: '',
      });
      gsap.to(rightAnimition.current, {
        duration: 1,
        y: '0%',
        ease: '',
      });
    });
    return () => bannerAninmation.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="home position-relative">
      <div className="banner-container position-relative">
        <img src={IMG} alt="banner" className="banner-img" />
        <div className="overlay" />
      </div>
      <div className="banner-msg d-flex flex-column position-absolute align-items-center">
        <div className="banner-msg-p d-flex flex-column align-items-center px-3">
          <h1 className="p-0 m-0 bannerUpAnimation text-white" ref={rightAnimition}>
            The UK Everest Refrigeration Europe
          </h1>
          <p className="p-0 m-0 fs-5 paragraphAminiation text-white" ref={leftAnimation}>
            Specialist Fridges Installation & Commercial Refrigeration Service
          </p>
        </div>
        <div className="d-flex gap-2 mt-4 banner-link w-100 justify-content-center">
          <Link
            to="our-projects"
            className="bannerMsgBtnleft border border-3 rounded-5 p-2"
            ref={leftAnimation}
            onClick={scrollToTop}
          >
            OUR PROJECTS
          </Link>
          <Link
            to="contact-us"
            className="bannerMsgBtnright border border-3 rounded-5  p-2"
            ref={rightAnimition}
            onClick={scrollToTop}
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
