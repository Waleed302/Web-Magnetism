import React from "react";
import "./Navbar.css";
import logo from "../../assets/img/logo.png";
import Vector from "../../assets/img/Vector.png";
import arrow from "../../assets/img/arrow.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-item">
        <div className="logo">
          <img className="logo-img" src={logo} alt="" />
        </div>
        <div className="vector">
          <img className="vector-img" src={Vector} alt="" />
        </div>
      </div>
      <div className='nav-content'>
        <h1>WEB MAGNETISM</h1>
    <p>Transforming Businesses with unique Web design and <br />
       strategic digital marketing for impactful online visibility.</p>
       <button className='btn'> GET A PROPOSAL <img className="arrow-img" src={arrow} alt="" /></button>
        </div>
    </div>
    
  );
};

export default Navbar;
