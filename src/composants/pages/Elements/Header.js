import React from "react";


function Header() {
	const [activePage, setActivePage] = React.useState("Home");
	   
    return (


<div className ="container-fluid bg-dark mb-30">
	<div className ="row px-xl-5">
		<div className ="col-lg-3 d-none d-lg-block">
			<a className ="btn1 btn  d-flex align-items-center justify-content-between bg-primary w-100 btn-nav" data-toggle="collapse" href="/" >
			   <img src="assets/img/logo.jpg" className ="logo" />
			   <h2 className ="logo-text">PEWAT</h2>    
			</a>
		</div>
		
		<div className ="col-lg-9">
			<nav className ="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
				<a href="" className ="text-decoration-none d-block d-lg-none">
					<span className ="h1 text-uppercase text-dark bg-light px-2">Multi</span>
					<span className ="h1 text-uppercase text-light bg-primary px-2 ml-n1">Shop</span>
				</a>
				<button type="button" className ="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
					<span className ="navbar-toggler-icon"></span>
				</button>
				<div className ="collapse navbar-collapse justify-content-between" id="navbarCollapse">
					<div className ="navbar-nav mr-auto py-0">
						<a href="/" className ="nav-item nav-link ">Home</a>
						<a href="/Home_list" className ="nav-item nav-link">Shop</a>
						<a href="/Services" className ="nav-item nav-link">Services</a>
						<select className ="a1">
                            <option selected> Categories</option>
                            <option value="1">Categories 1</option>
                            <option value="2">Categories 2</option>
                            <option value="3">Categories 3</option>
                        </select>
						<a href="/About" className ="nav-link ">About</a>
						<a href="/Contact" className ="nav-item nav-link">Contact</a>
					</div>
					<div className ="navbar-nav ml-auto py-0 d-none d-lg-block">
						<a href="" className ="btn px-0 ml-3">
							
							<form action="#" method="post" className ="search-box">
								<input type="search" placeholder="alex" name="search" required="required"
									autoFocus=""/>
								<button type="submit" className ="btn"><i className ="fa fa-search mr-2 text-primary"></i></button>
							</form>
						</a>
						<a href="1" className ="btn px-0">
							<i className ="fas fa-heart text-primary "></i>
						</a>
						<a href="/Cart" className ="btn px-0 ml-3">
							<i className ="fas fa-shopping-cart text-primary"></i>
							<span className ="badge text-secondary border border-secondary rounded-circle">0</span>
						</a>
						<a href="3" className ="btn px-0 ml-3">
							<i className ="fas fa-envelope  text-primary"></i>
							<span className ="badge text-secondary border border-secondary rounded-circle">0</span>
						</a>
						<a href="" className ="btn px-0 ml-3">
							<i className ="fa fa-user text-primary"></i>
						</a>
					</div>
				</div>
			</nav>
		</div>
	</div>
</div>
    );
}
export default Header