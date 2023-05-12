import React from 'react'
import WorkApi from '../../api/WorkApi'
import { useState ,useEffect }  from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const HowItWorks = () => {
    const [workDate] = useState(WorkApi);
    console.log(workDate);
    useEffect(() => {
        AOS.init({
            delay: 100,
            duration: 1000,
        });
       
      }, [])
    return (
        <>

            <div className='work-container container'>
                <h1 className='main-heading text-center'>How does it work</h1>
                <div className='row'>
                    {workDate.map((cueElem , index) => {
                        const { logo, title, info } = cueElem;
                        return (
                            
                                <div key={index} className='col-sm-12 col-lg-4 text-center work-container-subdiv'   data-aos="fade-up-right" >
                                    <i className={`fontawesome-style ${logo}`}></i>
                                    <h2 className='sub-heding'>{title}</h2>
                                    <p className='main-hero-para w-80'>{info}</p>
                                </div>
                            
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default HowItWorks;
