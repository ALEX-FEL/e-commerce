import Footer from "./Elements/Footer";
import Header from "./Elements/Header";
import React from "react";



function Home_detail_service () {
 
    return (
<div>
    <Header />
    <div className ="container-fluid pb-5">
        <div className ="row px-xl-5">
            <div className ="col-lg-5 mb-30">
                <div id="product-carousel" className ="carousel slide" data-ride="carousel">
                    <div className ="carousel-inner bg-light">
                        <div className ="carousel-item active">
                            <img className ="w-100 h-100" src="assets/img/product-1.jpg" alt="Image"/>
                        </div>
                        <div className ="carousel-item">
                            <img className ="w-100 h-100" src="assets/img/product-2.jpg" alt="Image"/>
                        </div>
                        <div className ="carousel-item">
                            <img className ="w-100 h-100" src="assets/img/product-3.jpg" alt="Image"/>
                        </div>
                        <div className ="carousel-item">
                            <img className ="w-100 h-100" src="assets/img/product-4.jpg" alt="Image"/>
                        </div>
                    </div>
                    <a className ="carousel-control-prev" href="#product-carousel" data-slide="prev">
                        <i className ="fa fa-2x fa-angle-left text-dark"></i>
                    </a>
                    <a className ="carousel-control-next" href="#product-carousel" data-slide="next">
                        <i className ="fa fa-2x fa-angle-right text-dark"></i>
                    </a>
                </div>
            </div>

            <div className ="col-lg-7 h-auto mb-30">
                <div className ="h-100 bg-light p-30">
                    <h3>Product Name Goes Here</h3>
                    <div className ="d-flex mb-3">
                        <div className ="text-primary mr-2">
                            <small className ="fas fa-star"></small>
                            <small className ="fas fa-star"></small>
                            <small className ="fas fa-star"></small>
                            <small className ="fas fa-star-half-alt"></small>
                            <small className ="far fa-star"></small>
                        </div>
                        <small className ="pt-1">(99 Reviews)</small>
                    </div>
                    <h5 className ="font-weight-semi-bold mb-4">Product Descripti</h5>
                    <h6 className ="mb-4">Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit
                        clita ea. Sanc ipsum et, labore clita lorem magna duo dolor no sea
                        Nonumy
                        Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit
                        clita ea. Sanc ipsum et, labore clita lorem magna duo dolor no sea
                        Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit
                        clita ea. Sanc ipsum et, labore clita lorem magna duo dolor no sea
                        Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit
                        clita ea. Sanc ipsum et, labore clita lorem magna duo dolor no sea
                    </h6>
                    <form>
                        <div className ="col-lg-5">
                            <textarea className ="form-control border-0" placeholder="Special Request"></textarea>
                        </div>
                        <div className ="col-lg-5">
                            <button className ="btn bg-primary w-100 py-3" type="submit"><h4>commenter</h4></button>
                        </div>
                        </form>
                </div>
            </div>
        </div>
    </div>
    <div className ="col-lg-6 row ">
        <div className ="bg-primary h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn" data-wow-delay="0.6s">
            <h1 className ="text-white mb-4">Book For A Service</h1>
            <form>
                <div className ="row g-3">
                    <div className ="col-12 col-sm-6">
                        <input type="text" className ="form-control border-0" placeholder="Your Name" />
                    </div>
                    <div className ="col-12 col-sm-6">
                        <input type="email" className ="form-control border-0" placeholder="Your Email" />
                    </div>
                    <div className ="col-12 col-sm-6">
                        <select className ="form-select border-0" >
                            <option selected>Select A Service</option>
                            <option value="1">Service 1</option>
                            <option value="2">Service 2</option>
                            <option value="3">Service 3</option>
                        </select>
                    </div>
                    <div className ="col-12 col-sm-6">
                        <div className ="date" id="date1" data-target-input="nearest">
                            <input type="datetime"
                                className ="form-control border-0 datetimepicker-input"
                                placeholder="Service Date" data-target="#date1" data-toggle="datetimepicker" />
                        </div>
                    </div>
                    <div className ="col-12">
                        <textarea className ="form-control border-0" placeholder="Special Request"></textarea>
                    </div>
                    <div className ="col-12">
                        <button className ="btn btn-secondary w-100 py-3" type="submit">Book Now</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <div className ="container-fluid py-5">
        <h2 className ="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className ="bg-secondary pr-3">Autres produits</span></h2>
        <div className ="row px-xl-5">
            <div className ="col">
                <div className ="owl-carousel related-carousel">
                    <div className ="product-item bg-light">
                        <div className ="product-img position-relative overflow-hidden">
                            <img className ="img-fluid w-100" src="assets/img/product-1.jpg" alt=""/>
                            <div className ="product-action">
                                <a className ="btn btn-outline-dark btn-square" href=""><i className ="fa fa-shopping-cart"></i></a>
                                <a className ="btn btn-outline-dark btn-square" href=""><i className ="fa fa-search"></i></a>
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
                    <div className ="product-item bg-light">
                        <div className ="product-img position-relative overflow-hidden">
                            <img className ="img-fluid w-100" src="assets/img/product-2.jpg" alt=""/>
                            <div className ="product-action">
                                <a className ="btn btn-outline-dark btn-square" href=""><i className ="fa fa-shopping-cart"></i></a>
                                <a className ="btn btn-outline-dark btn-square" href=""><i className ="fa fa-search"></i></a>
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
                    <div className ="product-item bg-light">
                        <div className ="product-img position-relative overflow-hidden">
                            <img className ="img-fluid w-100" src="assets/img/product-3.jpg" alt=""/>
                            <div className ="product-action">
                                <a className ="btn btn-outline-dark btn-square" href=""><i className ="fa fa-shopping-cart"></i></a>
                                <a className ="btn btn-outline-dark btn-square" href=""><i className ="fa fa-search"></i></a>
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
                    <div className ="product-item bg-light">
                        <div className ="product-img position-relative overflow-hidden">
                            <img className ="img-fluid w-100" src="assets/img/product-4.jpg" alt=""/>
                            <div className ="product-action">
                                <a className ="btn btn-outline-dark btn-square" href=""><i className ="fa fa-shopping-cart"></i></a>
                                <a className ="btn btn-outline-dark btn-square" href=""><i className ="fa fa-search"></i></a>
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
                    <div className ="product-item bg-light">
                        <div className ="product-img position-relative overflow-hidden">
                            <img className ="img-fluid w-100" src="assets/img/product-5.jpg" alt=""/>
                            <div className ="product-action">
                                <a className ="btn btn-outline-dark btn-square" href=""><i className ="fa fa-shopping-cart"></i></a>
                                <a className ="btn btn-outline-dark btn-square" href=""><i className ="fa fa-search"></i></a>
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
            </div>
        </div>
    </div>
    <Footer />
</div>

	);

}
export default Home_detail_service