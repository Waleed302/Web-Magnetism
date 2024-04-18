import React from 'react'
import './Overview.css'
import cd_img from '../../assets/img/cd_img.jpg'
import cd_img2 from '../../assets/img/cd_img2.jpg'
import cd_img3 from '../../assets/img/cd_img3.jpg'
import arrow2 from '../../assets/img/arrow2.png'

const Overview = () => {
  return (
    <>
    
    <div className='card-container'>
    <h3 className='cd-heading'>Overview of Services</h3>
        <div className='cd'>
            <img src={cd_img} alt="" />
            <div className='cd-content'>
               <h3>Bespoke Web Design</h3>
               <p>Lorem ipsum dolor sit amet consectetur. Eu massa turpis adipiscing libero
                 rhoncus posuere tempus. Sed fringilla malesuada felis vitae.
                 Montes mattis ultrices maecenas et. Ut ultricies viverra volutpat </p>
                 <button className="btn4">Bespoke web design <img className="arrow-img" src={arrow2} alt="" />
        </button>
            </div>
        </div>
        <div className='cd'>
            <img src={cd_img3} alt="" />
            <div className='cd-content'>
               <h3>App Development</h3>
               <p>Lorem ipsum dolor sit amet consectetur. Eu massa turpis adipiscing libero
                 rhoncus posuere tempus. Sed fringilla malesuada felis vitae.
                 Montes mattis ultrices maecenas et. Ut ultricies viverra volutpat </p>
                 <button className="btn4">Bespoke web design <img className="arrow-img" src={arrow2} alt="" />
        </button>
            </div>
            

        </div>
        <div className='cd'>
            <img src={cd_img} alt="" />
            <div className='cd-content'>
               <h3> Digital Marketing</h3>
               <p>Lorem ipsum dolor sit amet consectetur. Eu massa turpis adipiscing libero
                 rhoncus posuere tempus. Sed fringilla malesuada felis vitae.
                 Montes mattis ultrices maecenas et. Ut ultricies viverra volutpat </p>
                 <button className="btn4">Bespoke web design <img className="arrow-img" src={arrow2} alt="" />
        </button>
            </div>

        </div>

    </div>
    </>
  )
}

export default Overview