import React from 'react'
import './Footer.css'
import logo from '../../assets/img/logo.png'
import arrow from '../../assets/img/arrow.png'
import fb from '../../assets/img/fb.png'
import insta from '../../assets/img/insta.png'
import twiter from '../../assets/img/twiter.png'
import telegram from '../../assets/img/telegram.png'
import youtube from '../../assets/img/youtube.png'
import tiktok from '../../assets/img/tiktok.png'
// import { FaFacebook } from 'react-icons/fa'


const Footer = () => {
  return (
    <div>
      <div className="footer-main">
    <div className="footer-main-head">
        <div className="footer-main-head-left">
        <span><img src={logo} alt="logo" /></span>
        </div>
        <div className="footer-main-head-right">
            <button>
               CONTACT US
                <span
                  ><img src={arrow} alt=""
                /></span>
              </button>
        </div>
    </div>

    <div className="footer-heading-main">
    <div className="service-heading ser ser1">
        <h5>Services</h5>
        <h6>Digital Marketing<span>Bespoke Web Design</span></h6> 
        <p>Email Nurture<span>Web Design</span></p> 
        <p>SEO<span>Web Redesign</span></p> 
        <p>Social Media Marketing<span>UI/UX Design</span></p> 
        <p>Conversion Rate Optimization<span>Brand Identity and logo</span></p> 
        <p>Copy Writing<span> App Development</span></p> 
        <p>Email Marketing</p> 
        <p>Remarketing</p> 
        <p>PPC</p> 
    </div>

    <div className="home-heading ser">
        <h5>Home</h5>
        <h5>About Us</h5>
        <h5>Contact Us</h5>
        <p>United Kington, TW4 7LU London</p>
    </div>
    <div className="resource-heading ser">
        <h5>Resources</h5>
        <p>Our Work</p>
        <p>Insights</p>
    </div>
    <div className="social-heading serSocial">
        <h5>Social Media</h5>
        <div className="imgPara top">
            <div className="image">
                <img src={fb}/>
            </div>
            <div className="para">Facebook</div>
        </div>
        <div className="imgPara">
            <div className="image">
                <img src={insta}/>
            </div>
            <div className="para">Instagram</div>
        </div>
        <div className="imgPara">
            <div className="image">
                <img src={twiter}/>
            </div>
            <div className="para">Twitter</div>
        </div>
        <div className="imgPara">
            <div className="image">
                <img src={telegram}/>
            </div>
            <div className="para">Telegram</div>
        </div>
        <div className="imgPara">
            <div className="image">
                <img src={youtube}/>
            </div>
            <div className="para">Youtube</div>
        </div>
        <div className="imgPara">
            <div className="image">
                <img src={tiktok}/>
            </div>
            <div className="para">Tiktok</div>
        </div>
    </div>
    {/* <!-- subcribe btn --> */}
    <div className="subcribe ser">
        <p> Subscribe to our weekly newsletter today!</p>
       <div className="subcribeBtn">
           <input type="texte" placeholder="Enter Your Email Address Here"/>
           <div className="btnArrow">❯</div>
       </div>
    </div>
</div>
<div className="ser copyRight"><p>©Copyright. 2024 Web Magnetism All rights reserved I Terms and condition I Privacy Policy.</p></div>
</div>
</div>
   
  )
}

export default Footer