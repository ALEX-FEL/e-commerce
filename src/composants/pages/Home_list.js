import Footer from "./Elements/Footer";
import Header from "./Elements/Header";

function Home_list () {
    return(
	<div>
	<Header />

    <div className ="container-fluid">
        <div className ="row px-xl-5">
            <div className ="col-lg-3 col-md-4">
                <div className ="bg-light p-4 mb-30">
                    <h4>Product <span>Categories</span></h4>
                    <ul className ="list-group single">
                        <li className ="list-group-item d-flex justify-content-between align-items-center">
                            Accessories
                            <span className ="badge badge-primary badge-pill">14</span>
                        </li>
                        <li className ="list-group-item d-flex justify-content-between align-items-center">
                            Suits
                            <span className ="badge badge-primary badge-pill">18</span>
                        </li>
                        <li className ="list-group-item d-flex justify-content-between align-items-center">
                            Footwear
                            <span className ="badge badge-primary badge-pill">12</span>
                        </li>
                        <li className ="list-group-item d-flex justify-content-between align-items-center">
                                Blazers
                            <span className ="badge badge-primary badge-pill">10</span>
                        </li>
                    </ul>
                </div>
            </div>
   
            <div className ="col-lg-9 col-md-8">
                <div className ="row pb-3">
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
            </div>

        </div>
    </div>
	<Footer />
		
    </div>
	);
}
export default Home_list