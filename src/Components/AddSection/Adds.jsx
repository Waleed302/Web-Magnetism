import React from 'react'
import './Adds.css'
import amazon from '../../assets/img/amazon.png'
import ADAD from '../../assets/img/ADAD.png'
import Aus from '../../assets/img/Aus.png'

const Adds = () => {
  return (
    <div className='Adds'>
        <div className='Adds-img'>
        <img src={amazon} alt="" />
           <img src={Aus} alt="" />
           <img src={ADAD} alt="" />
           <img src={amazon} alt="" />
           <img src={ADAD} alt="" />
           <img src={Aus} alt="" />
           <img src={amazon} alt="" />
        </div>

    </div>
  )
}

export default Adds