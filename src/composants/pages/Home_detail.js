
import Header from './Elements/Header';
import Footer from './Elements/Footer';
import React from 'react';


function Home_detail () {
 
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
                        <h3 className ="font-weight-semi-bold mb-4">$150.00</h3>
                        <h5 className ="font-weight-semi-bold mb-4">Product Descripti</h5>
                        <p className ="mb-4">Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit
                            clita ea. Sanc ipsum et, labore clita lorem magna duo dolor no sea
                            Nonumy
                        </p>
                        <div className ="d-flex align-items-center mb-4 pt-2">
                            <div className ="input-group quantity mr-3">
                                <div className ="input-group-btn">
                                    <button className ="btn btn-primary btn-minus">
                                        <i className ="fa fa-minus"></i>
                                    </button>
                                </div>
                                <input type="text" className ="form-control bg-secondary border-0 text-center" value="1"/>
                                <div className ="input-group-btn">
                                    <button className ="btn btn-primary btn-plus">
                                        <i className ="fa fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                            <button className ="btn btn-primary px-3"><i className ="fa fa-shopping-cart mr-1"></i> Add To
                                Cart</button>
                        </div>
                        <form>
                            <div className ="col-lg-5">
                                <textarea className ="form-control border-0" placeholder="Special Request"></textarea>
                            </div>
                            <div className ="col-lg-5">
                                <button className ="btn btn-secondary bg-primary w-100 py-3" type="submit">commentaire</button>
                            </div>
                        </form>
                    </div>
                </div>
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
export default Home_detail