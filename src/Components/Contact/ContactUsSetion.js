import React from 'react'

const ContactUsSetion = () => {
    return (
        <>
           <div className="contactus-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-12">
                            <div className='row '>
                                <div className=' contact-left-side col-12 col-lg-5'>
                                    <h1 className='fw-bold main-heading'>Connect With Our <br />Sales Team. </h1>
                                    <p className='main-hero-para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat eligendi quae voluptatibus soluta voluptas maiores, quidem provident, rem sint, aliquid deserunt animi voluptatem beatae amet. Provident tempore totam quasi aliquam!</p>
                                    <figure>
                                        <img src={require('../../img/2.webp')} alt="contactImg" className='img-fluid' />
                                    </figure>
                                </div>
                                <div className='contact-rigtside col-12 col-lg-7 d-flex justify-content-center align-items-center '>
                                    <form action="" method='post'>

                                        <div className='row'>
                                            <div className='col-12 col-lg-6 contact'>
                                                <input type="text" name='' placeholder='First Name' className='my-3 w-100 form-control' />
                                            </div>
                                            <div className='col-12 col-lg-6 contact'>
                                                <input type="text" name='' placeholder='Last Name' className=' my-3 w-100 form-control' />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-12 col-lg-6 contact'>
                                                <input type="text" name='' placeholder='Phone Number' className='my-3 w-100 form-control' />
                                            </div>
                                            <div className='col-12 col-lg-6 contact'>
                                                <input type="email" name='' placeholder='Email' className='my-3 w-100 form-control' />
                                            </div>
                                        </div>
                                        <div>
                                            <input type="text" placeholder='Adderess' className='form-control my-3' />
                                        </div>
                                        <div>
                                            <input type="text" placeholder='Enter Your Message' className='form-control my-3' />
                                        </div>
                                        <div className="mb-3 form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                <label className="form-check-label" htmlFor="exampleCheck1">I agree that shivampawar may contact me at the email addresss or phone number above</label>
                                        </div>
                                        <div className='col-12 text-end'>
                                            <button className='btn-style my-4 ' type='submit'>Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUsSetion
