
import React, { useState,useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import howToUse from '../../api/HowTouse'
const Aboutus = () => {
  useEffect(() => {
    AOS.init({
        delay: 100,
        duration: 1000,
    });
   
  }, [])
    const [aboutDate] = useState(howToUse);
    return (
      <>
        <section className='common-section our-services'>
          <div className='container mb-5'>
            <div className='row '>
              <div className='col-lg-5 col-12 text-center  align-items-center d-flex' data-aos="fade-right">
              <div className='our-services-leftside'>
                <img src={require('../../img/2.webp')} alt="aboutusImg" />
              </div>
              </div>
              <div className='col-lg-7 col-12 our-servies-list' data-aos="fade-left">
                <h3 className='mini-title'>--AVAILABLE @ GOOGLE AND IOS STORY ONLY</h3>
                <h1 className='main-heading'>HOW TO USE APP?</h1>
                  {aboutDate.map( (curElem)  => {
                    const{key,title,info} = curElem;
                    return ( <>
                    <div className='row our-servies-info ' key={key}>
                  <div className='col-1 our-servies-number'>
                    {key}
                  </div>
                  <div className='col-10 our-servies-date'>
                    <h2>{title}</h2>
                    <p> {info}</p>
                  </div>
                </div>
                    </>)
                  })}
              
                <br />
                <button className='btn-style btn-style-border'>learn more</button>
              </div>
            </div>
          </div>
        </section>
        {/* 2nd part of bayt section */}
        <section className='common-section our-services'>
          <div className='container mb-5'>
            <div className='row'>
              <div className='col-lg-7 col-12 our-servies-list' data-aos="fade-right">
                <h3 className='mini-title'>--SUPPORT IN ANY LANGUAGES</h3>
                <h1 className='main-heading'>World class support is available 24/7</h1>
                  {aboutDate.map ((curElem)  => {
                    const{key,title,info} = curElem;
                    return ( <>
                    <div className='row our-servies-info ' key={key}>
                  <div className='col-1 our-servies-number'>
                    {key}
                  </div>
                  <div className='col-10 our-servies-date'>
                    <h2>{title}</h2>
                    <p> {info}</p>
                  </div>
                </div>
                    </>)
                  })}
              
                <br />
                <button className='btn-style btn-style-border'>learn more</button>
              </div>
              <div className='col-lg-5 col-12 text-center  align-items-center d-flex' data-aos="fade-left">
              <div className='our-services-leftside'>
                <img src={require('../../img/2.webp')} alt="aboutusImg" />
              </div>
              </div>
            </div>
          </div>
        </section>
      </>
  )
}

export default Aboutus
