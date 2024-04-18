import React from "react";
import "./Card.css";
import waves from "../../assets/img/waves.png";
import arrow from "../../assets/img/arrow.png";
import card_icon from "../../assets/img/card_icon.png";

const Card = () => {
  return (
    <div className="card-section">
      <img className="wave-img" src={waves} alt="" />
      <div className="card-content">
        <h2>
          Our Bespoke Website <br />
          Include The Following
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Blandit sodales <br />
          lacus vulputate aenean aliquam accumsan vestibulum in sit <br />
          Blandit sodales lacus vulputate aenean aliquam accumsa
        </p>
        <button className="btn3">CONTACT US <img className="arrow-img" src={arrow} alt="" />
        </button>
      </div>
      <div className="cards">
        <div className="card1">
          <div className="card-info">
            <img src={card_icon} alt="" />
            <div>
              <h3>Bespoke Design</h3>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus
            vulputate aenean aliquam accumsan vestibulum in sit Blandit sodales
            lacus vulputate aenean aliquam accumsan vestibulum in sit m accumsan
            ipsum.
          </p>
        </div>
        <div className="card2">
          <div className="card-info">
            <img src={card_icon} alt="" />
            <div>
              <h3>Mobile Optimised</h3>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus
            vulputate aenean aliquam accumsan vestibulum in sit Blandit sodales
            lacus vulputate aenean aliquam accumsan vestibulum in sit m accumsan
            ipsum.
          </p>
        </div>
        <div className="card3">
          <div className="card-info">
            <img src={card_icon} alt="" />
            <div>
              <h3>SEO Optimised</h3>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus
            vulputate aenean aliquam accumsan vestibulum in sit Blandit sodales
            lacus vulputate aenean aliquam accumsan vestibulum in sit m accumsan
            ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
