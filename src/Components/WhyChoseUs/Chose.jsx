import React from 'react'
import "./Chose.css"
import symbol1 from '../../assets/img/symbol1.png' 
import symbol2 from '../../assets/img/symbol2.png' 
import symbol3 from '../../assets/img/symbol3.png' 

const Chose = () => {
  return (
    <div className='chose-section'>
    <svg className='chose-svg1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,160L120,144C240,128,480,96,720,101.3C960,107,1200,149,1320,170.7L1440,192L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
     
     <div className='chose-content'>
        <h2 className=''>Why Choose Us</h2>
           
        <div className="slider">
                <ul >
                    <li>
                        <div className='slide'>
                            <div className="user-info">
                                <img className='icon-sym' src={symbol1} alt="" />
                                <div>
                                    <h3>Take Control of Your <br /> Entire Marketing <br />
                                    Landscape</h3>
                                </div>
                            </div>
                            <p>We've curated top-tier teams under one roof, enabling you to bypass 
                                the complexities of overseeing a network of agencies and internal hires.</p>
                        </div>

                    </li>
                    <li>
                        <div className='slide'>
                            <div className="user-info">
                                <img className='icon-sym' src={symbol2} alt="" />
                                <div>
                                    <h3>Take Control of Your <br /> Entire Marketing <br />
                                    Landscape</h3>
                                </div>
                            </div>
                            <p>We've curated top-tier teams under one roof, enabling you to bypass 
                                the complexities of overseeing a network of agencies and internal hires.</p>
                        </div>

                    </li>
                    <li>
                        <div className='slide'>
                            <div className="user-info">
                                <img className='icon-sym' src={symbol3} alt="" />
                                <div>
                                    <h3>Take Control of Your <br /> Entire Marketing <br />
                                    Landscape</h3>
                                </div>
                            </div>
                            <p>We've curated top-tier teams under one roof, enabling you to bypass 
                                the complexities of overseeing a network of agencies and internal hires.</p>
                        </div>

                    </li>


                    </ul>


                    </div>

     </div>
      
     <svg className='chose-svg2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F3F2FF" fill-opacity="1" d="M0,128L120,144C240,160,480,192,720,186.7C960,181,1200,139,1320,117.3L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>    </div>

    
  )
}

export default Chose
