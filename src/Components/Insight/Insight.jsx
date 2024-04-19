import React from 'react'
import './insight.css'
import ss1 from '../../assets/img/ss1.png'
import ss2 from '../../assets/img/ss2.png'
import ss3 from '../../assets/img/ss3.png'

const Insight = () => {
  return (
    <div>
        <div className="latest-insight">
          <h2>Latest Insight</h2>
          <div className="latest-insight-pic-div">
            <div className="insight-picture">
              <img src={ss1} />
              <div className="insight-inner">
                <div className="inner">
                  <h3>Websites Accesibility And Why It Matters</h3>
                </div>
                <div className="inner">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Blandit sodales
                    lacus vulputate aen dolor sit amet conss ...
                  </p>
                </div>
                <div className="inner inner-left-right">
                  <div className="left">
                    <p>25.01.2024</p>
                  </div>
                  <div className="right"><p>Read more</p></div>
                </div>
              </div>
            </div>
            <div className="insight-picture">
              <img src={ss2} />
              <div className="insight-inner">
                <div className="inner">
                  <h3>Websites Accesibility And Why It Matters</h3>
                </div>
                <div className="inner">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Blandit sodales
                    lacus vulputate aen dolor sit amet conss ...
                  </p>
                </div>
                <div className="inner inner-left-right">
                  <div className="left">
                    <p>25.01.2024</p>
                  </div>
                  <div className="right"><p>Read more</p></div>
                </div>
              </div>
            </div>
            <div className="insight-picture">
              <img src={ss3} />
              <div className="insight-inner">
                <div className="inner">
                  <h3>Websites Accesibility And Why It Matters</h3>
                </div>
                <div className="inner">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Blandit sodales
                    lacus vulputate aen dolor sit amet conss ...
                  </p>
                </div>
                <div className="inner inner-left-right">
                  <div className="left">
                    <p>25.01.2024</p>
                  </div>
                  <div className="right"><p>Read more</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Insight