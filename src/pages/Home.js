import React from 'react'
// import Nvabar from '../Navbar'
import Header from '../Components/Home/Header'
import HowItWorks from '../Components/Home/HowItWorks'
import Aboutus from '../Components/Home/Aboutus'
import Services from '../Components/Home/Services'
import Contact from '../Components/Home/Contact'
// import Footer from '../Components/Home/Footer'

const Home = () => {
  return (
    <>
    {/* <Nvabar/> */}
    <Header/>
    <HowItWorks/>
    <Aboutus/>
    <Services/>
    <Contact/>
    {/* <Footer/> */}
    </>
  )
}

export default Home
