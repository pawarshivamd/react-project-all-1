
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Header = () => {
    useEffect(() => {
        AOS.init({
            delay: 100,
            duration: 1000,
        });
       
      }, [])
    return (
        <>
            <header>
                <section className='container main-hero container'>
                    <div className='row'>
                        <div className='col-sm-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-item-start'>
                            <h1 className='dispaly-2'>online payment made <br /> Easy for you</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sequi recusandae error accusantium, laboriosam aspernatur ducimus a dolores? Esse quia explicabo assumenda omnis! Et placeat vel repellendus asperiores nobis optio?</p>
                            <h3>Get early access for you</h3>
                            <div className='input-group mt-3'>
                                <input type="text" className='rounded-pill w-75 me-3 form-control' />
                                <div className='input-group-text'>Get it now</div>
                                </div>
                        </div>
                       <div className='col-sm-12 col-lg-6 header-right-side d-flex justify-content-center main-hero-imgs flex-colunm align-item-center'>
                            <img src={require('../../img/Grey-Outfit.jpg')} alt="hero" className='img-fluid' />
                            <img src={require('../../img/Grey-Outfit.jpg')} alt="hero" className='img-fluid main-her-section-2' data-aos="fade-down-left" />

                        </div>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Header
