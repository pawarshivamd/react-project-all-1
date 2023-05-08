import React from 'react'
import Nvabar from '../Navbar'
import Footer from '../Components/Home/Footer'

const About = () => {
  return (
    <>
    <Nvabar/>
    <div className="About-section">
      <div className="container ">
        <div className="row align-items-center">
          <div className='col-lg-6 col-12'>
              <div className='img-box'>
                  <img src={require("../img/about.jpg")} alt="" />
              </div>
          </div>
          <div className='col-lg-6 col-12'>
            <div className='right-sigth-contain'>
              <h3>INNOVATIVE BUSINESS</h3>
              <h1>About Us</h1>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <div>
                <p  className='btn-style text-center d-flex  justify-content-center  align-items-center'>LEARN MORE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default About
