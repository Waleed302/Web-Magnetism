import React from "react";
import "./Hero.css";
import arrow from "../../assets/img/arrow.png";
import img1 from "../../assets/img/img1.png";
import img2 from "../../assets/img/img2.png";


const Hero = () => {
  return (
    <>
      <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,128L80,144C160,160,320,192,480,186.7C640,181,800,139,960,122.7C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <div className="hero-section">
        <div className="hero-content">
          <h2>Welcome to web magnetism</h2>
          <p>
            Your hub for bespoke web design and digital marketing success.
            <br /> We seamlessly merge creativity and SEO expertise to craft
            visually <br /> stunning websites that magnetize audiences. 
            </p>
            <p>
            Our digital marketing, from SEO mastery to impactful campaigns,
            <br /> ensures your brand's resonance online. At Web Magnetism,
            we're <br /> not just designers; we're digital architects, sculpting
            unique online <br /> experiences that elevate your brand.
            </p>
            <p>Navigate the digital landscape with confidence – choose Web <br />
            Magnetism for tailored web design and strategic digital marketing,
            <br /> where innovation meets results for a compelling online
            journey.
          </p>
          <button className='btn2'> ABOUT US  <img className="arrow-img" src={arrow} alt="" /></button>
        </div>
        
        <div className="hero-img">
          <div className="empty"></div>
           <img className="hero-img1" src={img1} alt="" />
           <div className="empty2"></div>
           <img className="hero-img2" src={img2} alt="" />
           
        </div>
      </div>
      
    </>
  );
};

export default Hero;
