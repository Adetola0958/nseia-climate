import React from 'react'
import AboutSection from '../Components/AboutSection'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import Services from '../Components/Services'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <AboutSection/>
        <Services/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home