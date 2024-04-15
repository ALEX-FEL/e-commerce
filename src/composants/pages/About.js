import Footer from "./Elements/Footer";
import Header from "./Elements/Header";
import React from "react";

function About() {
    return(
<div>
	<Header />
	<div className ="container-xxl py-5">
		<div className ="container">
			<div className ="row g-4">
				<div className ="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
					<div className ="d-flex bg-light py-5 px-4">
						<i className ="fa fa-certificate fa-3x text-primary flex-shrink-0"></i>
						<div className ="ps-4">
							<h5 className ="mb-3">Quality Servicing</h5>
							<h6>Diam dolor diam ipsum sit amet diam et eos erat ipsum</h6>
							<a className ="text-secondary border-bottom" href="">Read More</a>
						</div>
					</div>
				</div>
				<div className ="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
					<div className ="d-flex bg-light py-5 px-4">
						<i className ="fa fa-users-cog fa-3x text-primary flex-shrink-0"></i>
						<div className ="ps-4">
							<h5 className ="mb-3">Expert Workers</h5>
							<h6>Diam dolor diam ipsum sit amet diam et eos erat ipsum</h6>
							<a className ="text-secondary border-bottom" href="">Read More</a>
						</div>
					</div>
				</div>
				<div className ="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
					<div className ="d-flex bg-light py-5 px-4">
						<i className ="fa fa-tools fa-3x text-primary flex-shrink-0"></i>
						<div className ="ps-4">
							<h5 className ="mb-3">Modern Equipment</h5>
							<h6>Diam dolor diam ipsum sit amet diam et eos erat ipsum</h6>
							<a className ="text-secondary border-bottom" href="">Read More</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
		<div className ="container-xxl py-5">
			<div className ="container">
				<div className ="row g-5">
					<div className ="col-lg-6 pt-4">
						<div className ="position-relative h-100 wow fadeIn" data-wow-delay="0.1s">
							<img className ="position-absolute img-fluid w-100 h-100" src="assets/img/logo.jpg"/>
							<div className ="position-absolute top-00 end-0 mt-n4 me-n4 py-4 px-5">
								<h1 className ="display-4  th mb-0">15 <span className ="fs-4">Years</span></h1>
								<h4 className =" th">Experience</h4>
							</div>
						</div>
					</div>
					<div className ="col-lg-6">
						<h6 className ="text-primary text-uppercase">// About Us //</h6>
						<h1 className ="mb-4"><span className ="text-primary">CarServ</span> Is The Best Place For Your Auto Care</h1>
						<p className ="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
						<div className ="row g-4 mb-3 pb-3">
							<div className ="col-12 wow fadeIn" data-wow-delay="0.1s">
								<div className ="d-flex">
									<div className ="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" >
										<span className ="fw-bold text-secondary">01</span>
									</div>
									<div className ="ps-3">
										<h6>Professional & Expert</h6>
										<span>Diam dolor diam ipsum sit amet diam et eos</span>
									</div>
								</div>
							</div>
							<div className ="col-12 wow fadeIn" data-wow-delay="0.3s">
								<div className ="d-flex">
									<div className ="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" >
										<span className ="fw-bold text-secondary">02</span>
									</div>
									<div className ="ps-3">
										<h6>Quality Servicing Center</h6>
										<span>Diam dolor diam ipsum sit amet diam et eos</span>
									</div>
								</div>
							</div>
							<div className ="col-12 wow fadeIn" data-wow-delay="0.5s">
								<div className ="d-flex">
									<div className ="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" >
										<span className ="fw-bold text-secondary">03</span>
									</div>
									<div className ="ps-3">
										<h6>Awards Winning Workers</h6>
										<span>Diam dolor diam ipsum sit amet diam et eos</span>
									</div>
								</div>
							</div>
						</div>
						<a href="about.html" className ="btn btn-primary py-3 px-5">Read More<i className ="fa fa-arrow-right ms-3"></i></a>
					</div>
				</div>
			</div>
		</div>
	<div className ="container-fluid fact bg-dark my-5 py-5">
		<div className ="container">
			<div className ="row g-4">
				<div className ="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
					<i className ="fa fa-check fa-2x text-white mb-3"></i>
					<h2 className ="text-white mb-2" data-toggle="counter-up">1234</h2>
					<p className ="text-white mb-0">Years Experience</p>
				</div>
				<div className ="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
					<i className ="fa fa-users-cog fa-2x text-white mb-3"></i>
					<h2 className ="text-white mb-2" data-toggle="counter-up">1234</h2>
					<p className ="text-white mb-0">Expert Technicians</p>
				</div>
				<div className ="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
					<i className ="fa fa-users fa-2x text-white mb-3"></i>
					<h2 className ="text-white mb-2" data-toggle="counter-up">1234</h2>
					<p className ="text-white mb-0">Satisfied Clients</p>
				</div>
				<div className ="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
					<i className ="fa fa-car fa-2x text-white mb-3"></i>
					<h2 className ="text-white mb-2" data-toggle="counter-up">1234</h2>
					<p className ="text-white mb-0">Compleate Projects</p>
				</div>
			</div>
		</div>
	</div>
	<div className ="container-xxl py-5">
		<div className ="container">
			<div className ="text-center wow fadeInUp" data-wow-delay="0.1s">
				<h1 className ="mb-5 mb-00">Our Expert Technicians</h1>
			</div>
			<div className ="container-fluid py-5">
				<div className ="row px-xl-5">
					<div className ="col-lg-12">
						<div className ="owl-carousel vendor-carousel">
							<div className ="testimonial-item text-center">
								<img className ="bg-light rounded-circle p-2 mx-auto mb-3" src="assets/img/user.jpg" />
								<h5 className ="mb-00">Client Name</h5>
								<div className ="testimonial-text bg-light text-center p-4">
								<p className ="mb-000">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
								</div>
							</div>
							<div className ="testimonial-item text-center">
								<img className ="bg-light rounded-circle p-2 mx-auto mb-3" src="assets/img/user.jpg" />
								<h5 className ="mb-00">Client Name</h5>
								<div className ="testimonial-text bg-light text-center p-4">
								<p className ="mb-000">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<Footer />
</div>	

	); 
}
export default About