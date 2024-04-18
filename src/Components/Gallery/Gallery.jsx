import React from 'react'
import './Gallery.css'
import arrow from '../../assets/img/arrow.png'
import Appmob from '../../assets/img/App mob.png'
import web_design from '../../assets/img/web_design.png'
import ecommerce from '../../assets/img/ecommerce.png'
import skip_page from '../../assets/img/skip page.png'

const Gallery = () => {
  return (
    <>
     <div className='gallery-content'>
      <h2>Our work</h2>
      <p>We don’t claim to be gurus or wizards. We’re just a super experienced,<br />
       passionate team who knows how to get results for our clients. All our <br />
        work is custom and thoughtfully designed, written, and developed <br />
       with your business goals in mind.</p>
       <button className="btn5">VIEW FULL PORTFOLIO <img className="arrow-img" src={arrow} alt="" />
        </button>
     </div>
     <div className='gallery-container'>
     <div className='gallery'>
            <img src={Appmob} alt="" />
            <div className='gallery-img-content'>
               <h3>Redesign of b2b website</h3>
               <p>Web design</p>

            </div>
        </div>
     <div className='gallery'>
            <img src={web_design} alt="" />
            <div className='gallery-img-content'>
               <h3>Mobile application</h3>
               <p>Mobile application</p>

            </div>
        </div>
     <div className='gallery'>
            <img src={ecommerce} alt="" />
            <div className='gallery-img-content'>
               <h3>E-commerce shop</h3>
               <p>Web Development</p>
            </div>
        </div>

        </div>
        <img className='skip-page' src={skip_page} alt="" />

    </>
  )
}

export default Gallery