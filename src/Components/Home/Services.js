import React, { useState } from 'react'
import ServicesApi from '../../api/SerivesApi'
const Services = () => {
    const [servicesDate] = useState(ServicesApi);
    return (
        <>
            <section className='servies-main-section'>
                <div className="container services-container">

                    <h1 className='main-heading text-center fw-bold'>HOW TO SEND MONEY</h1>
                    <div className='row'>
                    {servicesDate.map ((curElem) =>{
                        const {logo, title,info} = curElem;
                    return (
                        <>
                        <div className="col-lg-4 col-11 work-container-subdiv text-center "  >
                        
                        <i className={`fontawesome-style ${logo}`}></i>
                        
                                <h2 className='sub-heding'>{title}</h2>
                                <p>{info}</p>
                        </div>

        
                        </>
                    )})
                    }
                     
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services
