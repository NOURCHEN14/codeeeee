import React, { Fragment } from "react" ; 
import { Link } from "react-router-dom";
import Header from "./Header" ;
import Footer from "./Footer" ; 
function gallery (){
    return(
        <Fragment>
            <Header/>
  
	<div className="gallery">
		<div className="container">  
			<h3 className="w3ls-title">Our Gallery</h3> 
			<div className="gallery-grids-top">
				<div className="gallery-grids">
					<div className="col-md-4 col-sm-4 col-xs-6 gallery-grid-img"> 
						<a className="example-image-link w3-agilepic" href="assets/images/s1.jpg" data-lightbox="example-set" data-title="">
							<img className="example-image img-responsive" src="assets/images/s1.jpg" alt=""/> 
							<div className="w3ls-overlay">
								<h4>Our Gallery</h4>
							</div> 
						</a> 
					</div>  
					<div className="col-md-4 col-sm-4 col-xs-6 gallery-grid-img hover ehover14">
						<a className="example-image-link w3-agilepic" href="images/s2.jpg" data-lightbox="example-set" data-title="">
							<img className="example-image img-responsive" src="assets/images/s2.jpg" alt=""/> 
							<div className="w3ls-overlay">
								<h4>Our Gallery</h4>
							</div> 
						</a> 
					</div>
					<div className="col-md-4 col-sm-4 col-xs-6 gallery-grid-img hover ehover14">
						<a className="example-image-link w3-agilepic" href="images/s3.jpg" data-lightbox="example-set" data-title="">
							<img className="example-image img-responsive" src="assets/images/s3.jpg" alt=""/> 
							<div className="w3ls-overlay">
								<h4>Our Gallery</h4>
							</div> 
						</a> 
					</div>
					<div className="col-md-6 col-sm-6 col-xs-6 gallery-grid-img gallery-mdl hover ehover14"> 
						<a className="example-image-link w3-agilepic" href="images/img5.jpg" data-lightbox="example-set" data-title="">
							<img className="example-image img-responsive" src="assets/images/img5.jpg" alt=""/> 
							<div className="w3ls-overlay">
								<h4>Our Gallery</h4>
							</div> 
						</a>
					</div>  
					<div className="col-md-6 col-sm-6 col-xs-6 gallery-grid-img gallery-mdl hover ehover14">
						<a className="example-image-link w3-agilepic" href="images/img1.jpg" data-lightbox="example-set" data-title="">
							<img className="example-image img-responsive" src="assets/images/img1.jpg" alt=""/>
							<div className="w3ls-overlay">
								<h4>Our Gallery</h4>
							</div> 
						</a> 
					</div>
					<div className="col-md-4 col-sm-4 col-xs-6 gallery-grid-img hover ehover14"> 
						<a className="example-image-link w3-agilepic" href="images/img3.jpg" data-lightbox="example-set" data-title="">
						<img className="example-image img-responsive" src="assets/images/img3.jpg" alt=""/>
							<div className="w3ls-overlay">
								<h4>Our Gallery</h4>
							</div> 
						</a> 
					</div>  
					<div className="col-md-4 col-sm-4 col-xs-6 gallery-grid-img hover ehover14">
						<a className="example-image-link w3-agilepic" href="images/img4.jpg" data-lightbox="example-set" data-title="">
							<img className="example-image img-responsive" src="assets/images/img4.jpg" alt=""/> 
							<div className="w3ls-overlay">
								<h4>Our Gallery</h4>
							</div> 
						</a> 
					</div>
					<div className="col-md-4 col-sm-4 col-xs-6 gallery-grid-img hover ehover14">
						<a className="example-image-link w3-agilepic" href="images/s4.jpg" data-lightbox="example-set" data-title="">
							<img className="example-image img-responsive" src="assets/images/s4.jpg" alt=""/>
							<div className="w3ls-overlay">
								<h4>Our Gallery</h4>
							</div> 
						</a>
					</div>	
					<div className="clearfix"> </div>	
					<script src="js/lightbox-plus-jquery.min.js"></script>	
				</div> 
			</div> 
		</div>
	</div>

	<div className="features about">
		<div className="container">   
			<div className="wthree-features-row">
				<div className="col-md-4 features-w3grid">
					<div className="col-xs-3 features-w3lleft">
						<i className="fa fa-phone" aria-hidden="true"></i>
					</div>
					<div className="col-xs-9 features-w3lright"> 
						<h4>CONTACT</h4>
						<p>+01 111 222 3333</p>
					</div>
					<div className="clearfix"> </div>
				</div>
				<div className="col-md-4 features-w3grid">
					<div className="col-xs-3 features-w3lleft">
						<i className="fa fa-map-marker" aria-hidden="true"></i>
					</div>
					<div className="col-xs-9 features-w3lright"> 
						<h4>LOCATION</h4>
						<p>Broome St, New York, NY 10002</p>
					</div>
					<div className="clearfix"> </div>
				</div>
				<div className="col-md-4 features-w3grid">
					<div className="col-xs-3 features-w3lleft">
						<i className="fa fa-envelope" aria-hidden="true"></i>
					</div>
					<div className="col-xs-9 features-w3lright"> 
						<h4>EMAIL</h4>
						<p><Link to="mailto:info@example.com"> mail@example.com</Link></p>
					</div>
					<div className="clearfix"> </div>
				</div>
				<div className="clearfix"> </div>
			</div>
		</div>
	</div>

	<Footer/>
        </Fragment>
    )
}

export default gallery ; 