import Footer from "./Elements/Footer";
import React from "react"
import Header from "./Elements/Header";
import { a } from 'react-router-dom';


function Home () {

    return(
<div>
	<Header />
	{/* carousel */}
	<div className ="container-fluid mb-3">
		<div className ="row px-xl-5">
			<div className ="col-lg-12">
				<div id="header-carousel" className ="carousel slide carousel-fade mb-30 mb-lg-0" data-ride="carousel">
					<ol className ="carousel-indicators">
						<li data-target="#header-carousel" data-slide-to="0" className ="active"></li>
						<li data-target="#header-carousel" data-slide-to="1"></li>
						<li data-target="#header-carousel" data-slide-to="2"></li>
					</ol>
					<div className ="carousel-inner">
						<div className ="carousel-item position-relative active" >
							<img className ="position-absolute w-100 h-100" src="assets/img/carousel-1.jpg" />
							<div className ="carousel-caption d-flex flex-column align-items-center justify-content-center">
								<div className ="p-3" >
									<h1 className ="display-4 text-white mb-3 animate__animated animate__fadeInDown">Men Fashion</h1>
									<p className ="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
									<a className ="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="#">Shop Now</a>
								</div>
							</div>
						</div>
						<div className ="carousel-item position-relative" >
							<img className ="position-absolute w-100 h-100" src="assets/img/carousel-2.jpg"/>
							<div className ="carousel-caption d-flex flex-column align-items-center justify-content-center">
								<div className ="p-3" >
									<h1 className ="display-4 text-white mb-3 animate__animated animate__fadeInDown">Women Fashion</h1>
									<p className ="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
									<a className ="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="#">Shop Now</a>
								</div>
							</div>
						</div>
						<div className ="carousel-item position-relative" >
							<img className ="position-absolute w-100 h-100" src="assets/img/carousel-3.jpg" />
							<div className ="carousel-caption d-flex flex-column align-items-center justify-content-center">
								<div className ="p-3" >
									<h1 className ="display-4 text-white mb-3 animate__animated animate__fadeInDown">Kids Fashion</h1>
									<p className ="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
									<a className ="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="#">Shop Now</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>


	<div className ="container-fluid pt-5">
		<div className ="row px-xl-5 pb-3">
			<div className ="col-lg-3 col-md-6 col-sm-12 pb-1">
				<div className ="d-flex align-items-center bg-light bg-light1 mb-4" >
					<h1 className ="fa fa-check text-primary m-0 mr-3"></h1>
					<h5 className ="font-weight-semi-bold m-0">Quality Product</h5>
				</div>
			</div>
			<div className ="col-lg-3 col-md-6 col-sm-12 pb-1">
				<div className ="d-flex align-items-center bg-light bg-light1 mb-4" >
					<h1 className ="fa fa-shipping-fast text-primary m-0 mr-2"></h1>
					<h5 className ="font-weight-semi-bold m-0">Free Shipping</h5>
				</div>
			</div>
			<div className ="col-lg-3 col-md-6 col-sm-12 pb-1">
				<div className ="d-flex align-items-center bg-light bg-light1 mb-4" >
					<h1 className ="fas fa-exchange-alt text-primary m-0 mr-3"></h1>
					<h5 className ="font-weight-semi-bold m-0">14-Day Return</h5>
				</div>
			</div>
			<div className ="col-lg-3 col-md-6 col-sm-12 pb-1">
				<div className ="d-flex align-items-center bg-light bg-light1 mb-4" >
					<h1 className ="fa fa-phone-volume text-primary m-0 mr-3"></h1>
					<h5 className ="font-weight-semi-bold m-0">24/7 Support</h5>
				</div>
			</div>
		</div>
	</div>



	{/* details sur l'entreprise */}
	<div className ="container-fluid pt-5">

		<div className ="row px-xl-5 pb-3">
		<div className ="container-xxl py-5">
			<div className ="container">
				<div className ="row g-5">
					<div className ="col-lg-6 pt-4" >
						<div className ="position-relative h-100 wow fadeIn" data-wow-delay="0.1s">
							<img className ="position-absolute img-fluid w-100 h-100" src="assets/img/logo.jpg"  alt=""/>
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
									<div className ="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1">
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
									<div className ="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1">
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
		</div>
	</div>

	{/* categories */}
	<div className ="container-fluid py-5">
		<div className ="row px-xl-5">
			<div className ="col-lg-12">
				<div className ="owl-carousel vendor-carousel col-lg-12">		
					<div class="owl-item cloned" >
						<div class="testimonial-item text-center">
							<a href="">
								<img class="bg-light rounded-circle p-2 mx-auto mb-3" src="assets/img/user.jpg"/>
								<h5 class="mb-00">Client Name</h5>
							</a>
						</div>
					</div>
					<div class="owl-item cloned" >
						<div class="testimonial-item text-center">
							<a href="">
								<img class="bg-light rounded-circle p-2 mx-auto mb-3" src="assets/img/user.jpg"/>
								<h5 class="mb-00">Client Name</h5>
							</a>
						</div>
					</div>
					<div class="owl-item cloned" >
						<div class="testimonial-item text-center">
							<a href="">
								<img class="bg-light rounded-circle p-2 mx-auto mb-3" src="assets/img/user.jpg"/>
								<h5 class="mb-00">Client Name</h5>
							</a>
						</div>
					</div>
					<div class="owl-item cloned" >
						<div class="testimonial-item text-center">
							<a href="">
								<img class="bg-light rounded-circle p-2 mx-auto mb-3" src="assets/img/user.jpg"/>
								<h5 class="mb-00">Client Name</h5>
							</a>
						</div>
					</div>
					<div class="owl-item cloned" >
						<div class="testimonial-item text-center">
							<a href="">
								<img class="bg-light rounded-circle p-2 mx-auto mb-3" src="assets/img/user.jpg"/>
								<h5 class="mb-00">Client Name</h5>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	{/* produits */}
	<div className ="container-fluid pt-5 pb-3">
		<h2 className ="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className ="bg-secondary pr-3 mb-00">Nos Produits</span></h2>
		<div className ="row px-xl-5">
			<div className ="col-lg-3 col-md-4 col-sm-6 pb-1">
				<div className ="product-item bg-light mb-4">
					<div className ="product-img position-relative overflow-hidden">
						<img className ="img-fluid w-100" src="assets/img/product-1.jpg" alt=""/>
						<div className ="product-action">
									<a className ="btn btn-outline-dark btn-square" href=""><i className ="fa fa-shopping-cart"></i></a>
									<a className ="btn btn-outline-dark btn-square" href="detail.html"><i className ="fa fa-search"></i></a>
						</div>
					</div>
					<div className ="text-center py-4">
						<a className ="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
						<div className ="d-flex align-items-center justify-content-center mt-2">
							<h5>$123.00</h5><h6 className ="text-muted ml-2"><del>$123.00</del></h6>
						</div>
						<div className ="d-flex align-items-center justify-content-center mb-1">
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small>(99)</small>
						</div>
					</div>
				</div>
			</div>
			<div className ="col-lg-3 col-md-4 col-sm-6 pb-1">
				<div className ="product-item bg-light mb-4">
					<div className ="product-img position-relative overflow-hidden">
						<img className ="img-fluid w-100" src="assets/img/product-2.jpg" alt=""/>
						<div className ="product-action">
									<a className ="btn btn-outline-dark btn-square" href=""><i className ="fa fa-shopping-cart"></i></a>
									<a className ="btn btn-outline-dark btn-square" href="detail.html"><i className ="fa fa-search"></i></a>
						</div>
					</div>
					<div className ="text-center py-4">
						<a className ="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
						<div className ="d-flex align-items-center justify-content-center mt-2">
							<h5>$123.00</h5><h6 className ="text-muted ml-2"><del>$123.00</del></h6>
						</div>
						<div className ="d-flex align-items-center justify-content-center mb-1">
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star-half-alt text-primary mr-1"></small>
							<small>(99)</small>
						</div>
					</div>
				</div>
			</div>
			<div className ="col-lg-3 col-md-4 col-sm-6 pb-1">
				<div className ="product-item bg-light mb-4">
					<div className ="product-img position-relative overflow-hidden">
						<img className ="img-fluid w-100" src="assets/img/product-3.jpg" alt=""/>
						<div className ="product-action">
									<a className ="btn btn-outline-dark btn-square" href=""><i className ="fa fa-shopping-cart"></i></a>
									<a className ="btn btn-outline-dark btn-square" href="detail.html"><i className ="fa fa-search"></i></a>
						</div>
					</div>
					<div className ="text-center py-4">
						<a className ="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
						<div className ="d-flex align-items-center justify-content-center mt-2">
							<h5>$123.00</h5><h6 className ="text-muted ml-2"><del>$123.00</del></h6>
						</div>
						<div className ="d-flex align-items-center justify-content-center mb-1">
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star-half-alt text-primary mr-1"></small>
							<small className ="far fa-star text-primary mr-1"></small>
							<small>(99)</small>
						</div>
					</div>
				</div>
			</div>
			<div className ="col-lg-3 col-md-4 col-sm-6 pb-1">
				<div className ="product-item bg-light mb-4">
					<div className ="product-img position-relative overflow-hidden">
						<img className ="img-fluid w-100" src="assets/img/product-4.jpg" alt=""/>
						<div className ="product-action">
									<a className ="btn btn-outline-dark btn-square" href=""><i className ="fa fa-shopping-cart"></i></a>
									<a className ="btn btn-outline-dark btn-square" href="detail.html"><i className ="fa fa-search"></i></a>
						</div>
					</div>
					<div className ="text-center py-4">
						<a className ="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
						<div className ="d-flex align-items-center justify-content-center mt-2">
							<h5>$123.00</h5><h6 className ="text-muted ml-2"><del>$123.00</del></h6>
						</div>
						<div className ="d-flex align-items-center justify-content-center mb-1">
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="far fa-star text-primary mr-1"></small>
							<small className ="far fa-star text-primary mr-1"></small>
							<small>(99)</small>
						</div>
					</div>
				</div>
			</div>
			<div className ="col-lg-3 col-md-4 col-sm-6 pb-1">
				<div className ="product-item bg-light mb-4">
					<div className ="product-img position-relative overflow-hidden">
						<img className ="img-fluid w-100" src="assets/img/product-5.jpg" alt=""/>
						<div className ="product-action">
									<a className ="btn btn-outline-dark btn-square" href=""><i className ="fa fa-shopping-cart"></i></a>
									<a className ="btn btn-outline-dark btn-square" href="detail.html"><i className ="fa fa-search"></i></a>
						</div>
					</div>
					<div className ="text-center py-4">
						<a className ="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
						<div className ="d-flex align-items-center justify-content-center mt-2">
							<h5>$123.00</h5><h6 className ="text-muted ml-2"><del>$123.00</del></h6>
						</div>
						<div className ="d-flex align-items-center justify-content-center mb-1">
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small>(99)</small>
						</div>
					</div>
				</div>
			</div>
			<div className ="col-lg-3 col-md-4 col-sm-6 pb-1">
				<div className ="product-item bg-light mb-4">
					<div className ="product-img position-relative overflow-hidden">
						<img className ="img-fluid w-100" src="assets/img/product-6.jpg" alt=""/>
						<div className ="product-action">
									<a className ="btn btn-outline-dark btn-square" href=""><i className ="fa fa-shopping-cart"></i></a>
									<a className ="btn btn-outline-dark btn-square" href="detail.html"><i className ="fa fa-search"></i></a>
						</div>
					</div>
					<div className ="text-center py-4">
						<a className ="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
						<div className ="d-flex align-items-center justify-content-center mt-2">
							<h5>$123.00</h5><h6 className ="text-muted ml-2"><del>$123.00</del></h6>
						</div>
						<div className ="d-flex align-items-center justify-content-center mb-1">
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star-half-alt text-primary mr-1"></small>
							<small>(99)</small>
						</div>
					</div>
				</div>
			</div>
			<div className ="col-lg-3 col-md-4 col-sm-6 pb-1">
				<div className ="product-item bg-light mb-4">
					<div className ="product-img position-relative overflow-hidden">
						<img className ="img-fluid w-100" src="assets/img/product-7.jpg" alt=""/>
						<div className ="product-action">
									<a className ="btn btn-outline-dark btn-square" href=""><i className ="fa fa-shopping-cart"></i></a>
									<a className ="btn btn-outline-dark btn-square" href="detail.html"><i className ="fa fa-search"></i></a>
						</div>
					</div>
					<div className ="text-center py-4">
						<a className ="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
						<div className ="d-flex align-items-center justify-content-center mt-2">
							<h5>$123.00</h5><h6 className ="text-muted ml-2"><del>$123.00</del></h6>
						</div>
						<div className ="d-flex align-items-center justify-content-center mb-1">
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star-half-alt text-primary mr-1"></small>
							<small className ="far fa-star text-primary mr-1"></small>
							<small>(99)</small>
						</div>
					</div>
				</div>
			</div>
			<div className ="col-lg-3 col-md-4 col-sm-6 pb-1">
				<div className ="product-item bg-light mb-4">
					<div className ="product-img position-relative overflow-hidden">
						<img className ="img-fluid w-100" src="assets/img/product-8.jpg" alt=""/>
						<div className ="product-action">
									<a className ="btn btn-outline-dark btn-square" href=""><i className ="fa fa-shopping-cart"></i></a>
									<a className ="btn btn-outline-dark btn-square" href="detail.html"><i className ="fa fa-search"></i></a>
						</div>
					</div>
					<div className ="text-center py-4">
						<a className ="h6 text-decoration-none text-truncate" href="">Nos produit</a>
						<div className ="d-flex align-items-center justify-content-center mt-2">
							<h5>$123.00</h5><h6 className ="text-muted ml-2"><del>$123.00</del></h6>
						</div>
						<div className ="d-flex align-items-center justify-content-center mb-1">
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="far fa-star text-primary mr-1"></small>
							<small className ="far fa-star text-primary mr-1"></small>
							<small>(99)</small>
						</div>
					</div>
				</div>
			</div>
		</div>
		<a href="shop.html" className ="plus">Plus de produits<i className ="fa fa-arrow-right ms-3"></i></a>
	</div>

	{/* carousel */}
	<div className="container-fluid pt-5 pb-3">
        <div className="row px-xl-5">
            <div className="col-lg-12">
                <div className="product-offer mb-30">
                    <img className="img-fluid" src="assets/img/offer-1.jpg" alt=""/>
                    <div className="offer-text">
                        <h6 className="text-white text-uppercase">Save 20%</h6>
                        <h3 className="text-white mb-3">Special Offer</h3>
                        <a href="" className="btn btn-primary">Shop Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

	{/* services */}
	<div className ="container-fluid pt-5 pb-3">
		<h2 className ="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className ="bg-secondary pr-3 mb-00">Nos services </span></h2>
		<div className ="row px-xl-5">
			<div className ="col-lg-3 col-md-4 col-sm-6 pb-1">
				<div className ="product-item bg-light mb-4">
					<div className ="product-img position-relative overflow-hidden">
						<img className ="img-fluid w-100" src="assets/img/product-1.jpg" alt=""/>
						<div className ="product-action">
							<a className ="btn btn-outline-dark btn-square" href=""><i className ="fa fa-search"></i></a>
						</div>
					</div>
					<div className ="text-center py-4">
						<a className ="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
						<div className ="d-flex align-items-center justify-content-center mb-1">
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
						</div>
						<a href="detail_service.html" className ="btn btn-primary py-3 px-5 mb-00">Voir le service<i className ="fa fa-arrow-right ms-3"></i></a>
					</div>
				</div>
			</div>
			<div className ="col-lg-3 col-md-4 col-sm-6 pb-1">
				<div className ="product-item bg-light mb-4">
					<div className ="product-img position-relative overflow-hidden">
						<img className ="img-fluid w-100" src="assets/img/product-2.jpg" alt=""/>
						<div className ="product-action">
							<a className ="btn btn-outline-dark btn-square" href=""><i className ="fa fa-search"></i></a>
						</div>
					</div>
					<div className ="text-center py-4">
						<a className ="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
						<div className ="d-flex align-items-center justify-content-center mb-1">
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
						</div>
						<a href="detail_service.html" className ="btn btn-primary py-3 px-5">Voir le service<i className ="fa fa-arrow-right ms-3"></i></a>
					</div>
				</div>
			</div>
			<div className ="col-lg-3 col-md-4 col-sm-6 pb-1">
				<div className ="product-item bg-light mb-4">
					<div className ="product-img position-relative overflow-hidden">
						<img className ="img-fluid w-100" src="assets/img/product-3.jpg" alt=""/>
						<div className ="product-action">
							<a className ="btn btn-outline-dark btn-square" href=""><i className ="fa fa-search"></i></a>
						</div>
					</div>
					<div className ="text-center py-4">
						<a className ="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
						<div className ="d-flex align-items-center justify-content-center mb-1">
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star-half-alt text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
						</div>
						<a href="detail_service.html" className ="btn btn-primary py-3 px-5">Voir le service<i className ="fa fa-arrow-right ms-3"></i></a>
					</div>
				</div>
			</div>
			<div className ="col-lg-3 col-md-4 col-sm-6 pb-1">
				<div className ="product-item bg-light mb-4">
					<div className ="product-img position-relative overflow-hidden">
						<img className ="img-fluid w-100" src="assets/img/product-4.jpg" alt=""/>
						<div className ="product-action">
							<a className ="btn btn-outline-dark btn-square" href=""><i className ="fa fa-search"></i></a>
						</div>
					</div>
					<div className ="text-center py-4">
						<a className ="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
						<div className ="d-flex align-items-center justify-content-center mb-1">
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="far fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
						</div>
						<a href="detail_service.html" className ="btn btn-primary py-3 px-5">Voir le service<i className ="fa fa-arrow-right ms-3"></i></a>
					</div>
				</div>
			</div>
			<div className ="col-lg-3 col-md-4 col-sm-6 pb-1">
				<div className ="product-item bg-light mb-4">
					<div className ="product-img position-relative overflow-hidden">
						<img className ="img-fluid w-100" src="assets/img/product-5.jpg" alt=""/>
						<div className ="product-action">
							<a className ="btn btn-outline-dark btn-square" href=""><i className ="fa fa-search"></i></a>
						</div>
					</div>
					<div className ="text-center py-4">
						<a className ="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
						<div className ="d-flex align-items-center justify-content-center mb-1">
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
						</div>
						<a href="detail_service.html" className ="btn btn-primary py-3 px-5">Voir le service<i className ="fa fa-arrow-right ms-3"></i></a>
					</div>
				</div>
			</div>
			<div className ="col-lg-3 col-md-4 col-sm-6 pb-1">
				<div className ="product-item bg-light mb-4">
					<div className ="product-img position-relative overflow-hidden">
						<img className ="img-fluid w-100" src="assets/img/product-6.jpg" alt=""/>
						<div className ="product-action">
							<a className ="btn btn-outline-dark btn-square" href=""><i className ="fa fa-search"></i></a>
						</div>
					</div>
					<div className ="text-center py-4">
						<a className ="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
						<div className ="d-flex align-items-center justify-content-center mb-1">
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
						</div>
						<a href="detail_service.html" className ="btn btn-primary py-3 px-5">Voir le service<i className ="fa fa-arrow-right ms-3"></i></a>
					</div>
				</div>
			</div>
			<div className ="col-lg-3 col-md-4 col-sm-6 pb-1">
				<div className ="product-item bg-light mb-4">
					<div className ="product-img position-relative overflow-hidden">
						<img className ="img-fluid w-100" src="assets/img/product-7.jpg" alt=""/>
						<div className ="product-action">
							<a className ="btn btn-outline-dark btn-square" href=""><i className ="fa fa-search"></i></a>
						</div>
					</div>
					<div className ="text-center py-4">
						<a className ="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
						<div className ="d-flex align-items-center justify-content-center mb-1">
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star-half-alt text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
						</div>
						<a href="detail_service.html" className ="btn btn-primary py-3 px-5">Voir le service<i className ="fa fa-arrow-right ms-3"></i></a>
					</div>
				</div>
			</div>
			<div className ="col-lg-3 col-md-4 col-sm-6 pb-1">
				<div className ="product-item bg-light mb-4">
					<div className ="product-img position-relative overflow-hidden">
						<img className ="img-fluid w-100" src="assets/img/product-8.jpg" alt=""/>
						<div className ="product-action">
							<a className ="btn btn-outline-dark btn-square" href=""><i className ="fa fa-search"></i></a>
						</div>
					</div>
					<div className ="text-center py-4">
						<a className ="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
						<div className ="d-flex align-items-center justify-content-center mb-1">
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="far fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
						</div>
						<a href="detail_service.html" className ="btn btn-primary py-3 px-5">Voir le service<i className ="fa fa-arrow-right ms-3"></i></a>
					</div>
				</div>
			</div>
			<div className ="col-lg-3 col-md-4 col-sm-6 pb-1">
				<div className ="product-item bg-light mb-4">
					<div className ="product-img position-relative overflow-hidden">
						<img className ="img-fluid w-100" src="assets/img/product-1.jpg" alt=""/>
						<div className ="product-action">
							<a className ="btn btn-outline-dark btn-square" href=""><i className ="fa fa-search"></i></a>
						</div>
					</div>
					<div className ="text-center py-4">
						<a className ="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
						<div className ="d-flex align-items-center justify-content-center mb-1">
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
						</div>
						<a href="detail_service.html" className ="btn btn-primary py-3 px-5 mb-00">Voir le service<i className ="fa fa-arrow-right ms-3"></i></a>
					</div>
				</div>
			</div>
			<div className ="col-lg-3 col-md-4 col-sm-6 pb-1">
				<div className ="product-item bg-light mb-4">
					<div className ="product-img position-relative overflow-hidden">
						<img className ="img-fluid w-100" src="assets/img/product-2.jpg" alt=""/>
						<div className ="product-action">
							<a className ="btn btn-outline-dark btn-square" href=""><i className ="fa fa-search"></i></a>
						</div>
					</div>
					<div className ="text-center py-4">
						<a className ="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
						<div className ="d-flex align-items-center justify-content-center mb-1">
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
						</div>
						<a href="detail_service.html" className ="btn btn-primary py-3 px-5">Voir le service<i className ="fa fa-arrow-right ms-3"></i></a>
					</div>
				</div>
			</div>
			<div className ="col-lg-3 col-md-4 col-sm-6 pb-1">
				<div className ="product-item bg-light mb-4">
					<div className ="product-img position-relative overflow-hidden">
						<img className ="img-fluid w-100" src="assets/img/product-3.jpg" alt=""/>
						<div className ="product-action">
							<a className ="btn btn-outline-dark btn-square" href=""><i className ="fa fa-search"></i></a>
						</div>
					</div>
					<div className ="text-center py-4">
						<a className ="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
						<div className ="d-flex align-items-center justify-content-center mb-1">
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star-half-alt text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
						</div>
						<a href="detail_service.html" className ="btn btn-primary py-3 px-5">Voir le service<i className ="fa fa-arrow-right ms-3"></i></a>
					</div>
				</div>
			</div>
			<div className ="col-lg-3 col-md-4 col-sm-6 pb-1">
				<div className ="product-item bg-light mb-4">
					<div className ="product-img position-relative overflow-hidden">
						<img className ="img-fluid w-100" src="assets/img/product-4.jpg" alt=""/>
						<div className ="product-action">
							<a className ="btn btn-outline-dark btn-square" href=""><i className ="fa fa-search"></i></a>
						</div>
					</div>
					<div className ="text-center py-4">
						<a className ="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
						<div className ="d-flex align-items-center justify-content-center mb-1">
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
							<small className ="far fa-star text-primary mr-1"></small>
							<small className ="fa fa-star text-primary mr-1"></small>
						</div>
						<a href="detail_service.html" className ="btn btn-primary py-3 px-5">Voir le service<i className ="fa fa-arrow-right ms-3"></i></a>
					</div>
				</div>
			</div>
			<a href="services.html" className ="plus">Plus de service<i className ="fa fa-arrow-right ms-3"></i></a>	
		</div>
	</div>

	{/* commentaires clients 
	<div className ="container-fluid py-5">
		<div className ="row px-xl-5">
			<div className ="col-lg-12">
				<div className ="owl-carousel vendor-carousel">		
					<div class="owl-item cloned" >
						<div class="testimonial-item text-center">							
							<img class="bg-light rounded-circle p-2 mx-auto mb-3" src="assets/img/user.jpg"/>
							<h5 class="mb-00">Client Name</h5>
							<div class="testimonial-text bg-light text-center p-4">
								<p class="mb-000">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
							</div>
						</div>
					</div>
					<div class="owl-item cloned" >
						<div class="testimonial-item text-center">
							<img class="bg-light rounded-circle p-2 mx-auto mb-3" src="assets/img/user.jpg"/>
							<h5 class="mb-00">Client Name</h5>
							<div class="testimonial-text bg-light text-center p-4">
								<p class="mb-000">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
							</div>
						</div>
					</div>
					<div class="owl-item cloned" >
						<div class="testimonial-item text-center">
							<img class="bg-light rounded-circle p-2 mx-auto mb-3" src="assets/img/user.jpg"/>
							<h5 class="mb-00">Client Name</h5>
							<div class="testimonial-text bg-light text-center p-4">
								<p class="mb-000">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
							</div>
						</div>
					</div>
					<div class="owl-item cloned" >
						<div class="testimonial-item text-center">
							<img class="bg-light rounded-circle p-2 mx-auto mb-3" src="assets/img/user.jpg"/>
							<h5 class="mb-00">Client Name</h5>
							<div class="testimonial-text bg-light text-center p-4">
								<p class="mb-000">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
							</div>
						</div>
					</div>
					<div class="owl-item cloned" >
						<div class="testimonial-item text-center">
							<img class="bg-light rounded-circle p-2 mx-auto mb-3" src="assets/img/user.jpg"/>
							<h5 class="mb-00">Client Name</h5>
							<div class="testimonial-text bg-light text-center p-4">
								<p class="mb-000">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
							</div>
						</div>
					</div>
					<div class="owl-item cloned" >
						<div class="testimonial-item text-center">
							<img class="bg-light rounded-circle p-2 mx-auto mb-3" src="assets/img/user.jpg"/>
							<h5 class="mb-00">Client Name</h5>
							<div class="testimonial-text bg-light text-center p-4">
								<p class="mb-000">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
							</div>
						</div>
					</div>
					<div class="owl-item cloned" >
						<div class="testimonial-item text-center">
							<img class="bg-light rounded-circle p-2 mx-auto mb-3" src="assets/img/user.jpg"/>
							<h5 class="mb-00">Client Name</h5>
							<div class="testimonial-text bg-light text-center p-4">
								<p class="mb-000">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
							</div>
						</div>
					</div>
					<div class="owl-item cloned" >
						<div class="testimonial-item text-center">
							<img class="bg-light rounded-circle p-2 mx-auto mb-3" src="assets/img/user.jpg"/>
							<h5 class="mb-00">Client Name</h5>
							<div class="testimonial-text bg-light text-center p-4">
								<p class="mb-000">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>*/}
	<Footer />
</div>

	);
}
export default Home