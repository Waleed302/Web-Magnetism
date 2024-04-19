import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Service from './Components/Service/Service'
import Chose from './Components/WhyChoseUs/Chose'
import Card from './Components/Card/Card'
import Overview from './Components/Overview/Overview'
import Adds from './Components/AddSection/Adds'
import Gallery from './Components/Gallery/Gallery'
import Review from './Components/Review/Review'
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact/Contact'
import Insight from './Components/Insight/Insight'


function App() {
  return (
    
    <>

      <Navbar/>
      <Hero/>
      <Service/>
      <Chose/>
      <Card/>
      <Overview/>
      <Adds/>
      <Gallery/>
      <Review/>
     <Insight/>
      <Contact/>

      <Footer/>
      
     
    </>
  
     
  )
}

export default App
