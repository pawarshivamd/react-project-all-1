import React from 'react'
import Nvabar from '../Navbar'
import Footer from '../Components/Home/Footer'
const Services = () => {
	return (
		<>
			<Nvabar />
			<div className='container services-pages-2'>
				<div className=' text-center main-heading '>
					<h1>Our Services</h1>
				</div>
				<div className='img-box'>
					<img src={require("../img/22222.jpeg")} alt="" />
				</div>
				<div className='container'>
					<div className='row  box-contain justify-content-evenly'>
						<div className='col-lg-3 col-12' >
							<div className='posinon '>
								<div className='icon-box'>
									<i className="fab fa-html5"></i>
								</div>
								<h1>
									Mobile Development
								</h1>
								<p>Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident.</p>
								<a href="/">MORE</a>
							</div>
						</div>
						<div className='col-lg-3 col-12'>
							<div className='posinon'>
								<div className='icon-box'>
									<i className="far fa-folder-open"></i>
								</div>
								<h1>
									Mobility Services
								</h1>
								<p>Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident.</p>
								<a href="/">MORE</a>
							</div>
						</div>
						<div className='col-lg-3 col-12'>
							<div className='posinon'>
								<div className='icon-box'>
									<i className="fab fa-uncharted"></i>
								</div>
								<h1>
									Software Consulting
								</h1>
								<p>Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident.</p>
								<a href="/">MORE</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<main className='services-pages'>
				<section>
					<h2>Web Design</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet tortor fringilla, commodo odio eu, laoreet nisi. Nam bibendum mauris eget nibh molestie mattis.</p>
				</section>

				<section>
					<h2>Mobile App Development</h2>
					<p>Mauris id finibus nisi, at convallis lorem. In hac habitasse platea dictumst. Suspendisse bibendum nunc eget augue maximus tempus.</p>
				</section>

				<section>
					<h2>Search Engine Optimization</h2>
					<p>Donec ullamcorper, purus vitae eleifend efficitur, mi lectus dictum orci, ut ullamcorper nibh nibh ut enim. Fusce maximus sapien quis nisi suscipit, ut aliquet justo lobortis.</p>
				</section>
			</main>
		
			<Footer />
		</>
	)
}

export default Services
