import React from "react";
import "./Review.css";
import Stars from '../../assets/img/Stars.png'
import man from '../../assets/img/man.jpg'
import girl from '../../assets/img/girl.jpg'
import man2 from '../../assets/img/man2.jpg'
import skip_page from '../../assets/img/skip page.png'

const Review = () => {
  return (
    <>
     <div className='review-container'>
    <h3 className='review-heading'>What our clients say about us</h3>
      <div className="review">
        <img className="review-img" src={man} alt="" />
        <div className="review-content">
            <img className="star" src={Stars} alt="" />
         
          <p>
            Lorem ipsum dolor sit amet consectetur. Eu massa turpis adipiscing
            libero rhoncus posuere tempus. Sed fringilla malesuada felis vitae.
            Montes mattis ultrices maecenas et. Ut ultricies viverra volutpat
          </p>
          <h6>Maria Bend, Director</h6>
          <a href=""> Read More</a>
        </div>
      </div>
      <div className="review">
        <img className="review-img" src={girl} alt="" />
        <div className="review-content">
            <img className="star" src={Stars} alt="" />
         
          <p>
            Lorem ipsum dolor sit amet consectetur. Eu massa turpis adipiscing
            libero rhoncus posuere tempus. Sed fringilla malesuada felis vitae.
            Montes mattis ultrices maecenas et. Ut ultricies viverra volutpat
          </p>
          <h6>Maria Bend, Director</h6>
          <a href=""> Read More</a>
        </div>
      </div>
      <div className="review">
        <img className="review-img" src={man2} alt="" />
        <div className="review-content">
            <img className="star" src={Stars} alt="" />
         
          <p>
            Lorem ipsum dolor sit amet consectetur. Eu massa turpis adipiscing
            libero rhoncus posuere tempus. Sed fringilla malesuada felis vitae.
            Montes mattis ultrices maecenas et. Ut ultricies viverra volutpat
          </p>
          <h6>Maria Bend, Director</h6>
          <a href=""> Read More</a>
        </div>
      </div>
      </div>
      <img className='skip-page' src={skip_page} alt="" />

    </>
  );
};

export default Review;
