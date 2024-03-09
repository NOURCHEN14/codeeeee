import React, { Fragment } from "react" ; 
import { Link } from "react-router-dom";
function footer (){
    return(
        <Fragment>
                  <div className="footer w3layouts">
		<div className="container">
			<div className="footer-agileinfo">
				<div className="col-md-3 col-sm-6 footer-grid">
					<h3>Informations utiles</h3>
					<p>Kidopia offre une plateforme inclusive et spécialisée pour accompagner les enfants autistes dans leur développement, tout en offrant un soutien précieux aux familles et aux professionnels de la santé.</p> 
				</div> 
				<div className="col-md-3 col-sm-6 footer-grid footer-tags">
					<h3>Navigation</h3>
					<ul>
						<li>
                        <Link to="/home">Home</Link>
                         </li>
						<li>
                        <Link to="/about">About</Link>
                           </li> 
						<li>
                        <Link to="/gallery">Gallery</Link>
                           </li>
						<li>
                        <Link to="/contact">Contact Us</Link>
                            </li>
					</ul>
				</div>
				<div className="col-md-4 col-sm-6 footer-grid footer-review">
					<h3>Newsletter</h3>
					<p>La douleur devrait être aussi importante que le clitoris lui-même.</p> 
					<form action="#" method="post">
						<input type="email" name="Email" placeholder="Your Email" required=""/>
						<input type="submit" value="Subscribe"/> 
						<div className="clearfix"> </div>
					</form>  
				</div>
				<div className="col-md-2 col-sm-6 footer-grid w3social">
					<h3>Media</h3>
					<ul>
						<li>
                            <Link to="#"><i className="fa fa-linkedin-square"></i>LinkedIn</Link></li>
						<li>
                            <Link to="#"><i className="fa fa-facebook"></i>Facebook</Link></li>
						<li>
                            <Link to="#"><i className="fa fa-instagram"></i>Instagram</Link></li>
						
                            
					</ul>
				</div>
				<div className="clearfix"> </div>
			</div> 
		</div>
	</div>
	<div className="copy-right wthree"> 
		<div className="container">
			<p>© 2024 KIDOPIA. All rights reserved</p>
		</div>
	</div>  

	<div className="modal bnr-modal fade" id="myModal" tabindex="-1" role="dialog">
		<div className="modal-dialog" role="document">
			<div className="modal-content">
				<div className="modal-header">
					<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>						
				</div> 
				<div className="modal-body modal-spa">
					<img src="assets/images/img2.jpg" className="img-responsive" alt=""/>
					<h4>Cras rutrum iaculis enim</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum iaculis enim, non convallis felis mattis at. Donec fringilla lacus eu pretium rutrum. Cras aliquet congue ullamcorper. Etiam mattis eros eu ullamcorper volutpat. Proin ut dui a urna efficitur varius miet congue consectetur adipiscing. Uisque molestie cursus miet congue consectetur adipiscing elit cras rutrum iaculis enim, Lorem ipsum dolor sit amet, non convallis felis mattis at. Maecenas sodales tortor ac ligula ultrices dictum et quis urna. Etiam pulvinar metus neque, eget porttitor massa vulputate in. Fusce lacus purus, pulvinar ut lacinia id, sagittis eu mi. Vestibulum eleifend massa sem, eget dapibus turpis efficitur at. </p>
				</div> 
			</div>
		</div>
	</div>

	<script src="assets/js/SmoothScroll.min.js"></script> 
	<script type="text/javascript" src="assets/js/move-top.js"></script>
	<script type="text/javascript" src="assets/js/easing.js"></script>	
	<script src="assets/js/bootstrap.js"></script>
</Fragment>
    )
}

export default footer ; 