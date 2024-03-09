import React, { Fragment } from "react" ; 
import { Link } from "react-router-dom";
function header (){
    return(
        <Fragment>
      

	<div className="agileits-banner">
		<div className="bnr-agileinfo"> 
	
			<div className="top-nav w3-agiletop">
				<div className="container">
					<div className="navbar-header w3llogo">
						<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
							<span className="sr-only"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>  
						<h1>
                        <Link to="/">KIDOPIA</Link>
                            </h1> 
					</div>
					
					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<div className="w3menu navbar-right">
							<ul className="nav navbar">
								<li>
                                    <Link to="/">Home</Link>
                                    </li>
								<li>
                                <Link to="/about">About</Link>
                                    </li> 
								<li>
                                <Link to="/gallery">Gallery</Link>
                                    </li>
								<li>
								<Link to="/login">Login</Link>
                                    
									<ul className="dropdown-menu"> 
										<li>
                                        <Link to="/icons">Web Icons</Link>
                                            </li>
										<li>
                                        <Link to="/codes">Short Codes</Link>
                                           </li>
									</ul>
								</li>  
								<li>
                                <Link to="/contact">Contact</Link>
                                    </li>
							</ul>
						</div> 
						<div className="clearfix"> </div>  
					</div>
				</div>	
			</div>	
			
			<div className="banner-w3text w3layouts">
				<div className="container">
					
					<div className="w3lsmore">
						<a className="w3-agilebtn" href="about"><span>More About</span></a>
					</div> 
				</div> 
			</div> 
		</div>
	</div>
        </Fragment>
    )
}

export default header ; 