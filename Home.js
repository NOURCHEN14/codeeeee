import React, { Fragment } from "react" ; 
import { Link } from "react-router-dom";
import Header from "./Header" ; 
import Footer from "./Footer" ; 
function Home (){
    return (
        <Fragment>
			<Header/>

	<div className="about">
		<div className="container">
			<div className="about-agileinfo">
				<h3 className="w3ls-title">Bienvenue</h3>
				<p>Bienvenue sur KIDOPIA, votre destination dédiée à l'autisme. Chez KIDOPIA, nous nous engageons à créer un monde où chaque enfant autiste peut s'épanouir et réaliser son plein potentiel. 
					Notre application web combine expertise thérapeutique, technologie innovante et soutien communautaire pour offrir une expérience inclusive et bienveillante. Rejoignez-nous alors que nous travaillons ensemble pour transformer le paysage de l'autisme et offrir à chaque enfant les outils et le soutien dont il a besoin pour réussir. 
					Bienvenue sur KIDOPIA, où chaque enfant compte et chaque succès est célébré.</p>
			</div>	
		</div>	
	</div>

	<div className="welcome agileits">  
		<div className="col-md-8 col-sm-8 w3welcome-img"> 
			
		</div>
		<div className="col-md-4 col-sm-4 w3welcome-right"> 
			<div className="w3welcome-text"> 
				<h5 className="w3l-subtitle">- Notre mission</h5>
				<p>Chez KIDOPIA, notre mission est de créer un environnement où chaque enfant autiste peut s'épanouir et réaliser son plein potentiel. Nous nous engageons à fournir un soutien holistique, comprenant des ressources éducatives de qualité, un accompagnement personnalisé et un environnement inclusif pour toute la famille. Ensemble, nous travaillons à briser les barrières et à élever la voix des enfants autistes, afin de créer un avenir où l'autisme est célébré, compris et pleinement intégré dans notre société.</p>
			</div> 
		
		</div> 
		<div className="clearfix"> </div> 
	</div> 
	   	
	<div className="services">   
		<div className="container">
			<h3 className="w3ls-title">Nos services</h3>	 
			<div className="services-agileinfo">  
				<div className="col-md-3 col-sm-3 col-xs-6 services-w3lsgrids"> 
					<div className="services-w3text"> 
						<i className="fa fa-cutlery" aria-hidden="true"></i> 
						<h5>Thérapie Personnalisée</h5>  
					</div>
				</div>
				<div className="col-md-3 col-sm-3 col-xs-6 services-w3lsgrids"> 
					<div className="services-w3text srvs-w3text2"> 
						<i className="fa fa-map" aria-hidden="true"></i> 
						<h5>Soutien aux Familles</h5> 
					</div>
				</div>
				<div className="col-md-3 col-sm-3 col-xs-6 services-w3lsgrids"> 
					<div className="services-w3text srvs-w3text3"> 
						<i className="fa fa-credit-card" aria-hidden="true"></i>
						<h5>Outils et Ressources</h5> 
					</div>
				</div>
				<div className="col-md-3 col-sm-3 col-xs-6 services-w3lsgrids"> 
					<div className="services-w3text srvs-w3text4"> 
						<i className="fa fa-truck" aria-hidden="true"></i>
						<h5>Consultation en ligne</h5> 
					</div>
				</div>
				<div className="clearfix"> </div> 
			</div>
		</div>
	</div>
	
	<div className="welcome agileits">  
		<div className="col-md-8 col-sm-8 w3welcome-img"> 
			
		</div>
		<div className="col-md-4 col-sm-4 w3welcome-right">  
			<div className="w3welcome-text"> 
				<h5 className="w3l-subtitle">- Questions fréquemment posées</h5>
				<p>Chez KIDOPIA, notre mission est de créer un environnement où chaque enfant autiste peut s'épanouir et réaliser son plein potentiel. Nous nous engageons à fournir un soutien holistique, comprenant des ressources éducatives de qualité, 
					un accompagnement personnalisé et un environnement inclusif pour toute la famille. 
					Ensemble, nous travaillons à briser les barrières et à élever la voix des enfants autistes, afin de créer un avenir où l'autisme est célébré, compris et pleinement intégré dans notre société.</p>
					
			</div> 
		
		</div> 
		<div className="clearfix"> </div> 
	</div> 







	<div className="services news">
		<div className="container">   
			<h3 className="w3ls-title">Instructeurs experts</h3>  
			<div className="news-agileinfo">
				<div className="col-sm-4 news-w3lgrids">
					<div className="news-gridtext">
						<div className="news-w3img">
							<Link to="/single"><img src="assets/images/docteur.jpg" className="img-responsive zoom-img" alt=""/></Link>
						</div>
						<div className="news-w3imgtext">
							<h5 className="w3-agilep"></h5>
							<h4>
							<Link to="/">Docteur 1</Link>
								
							</h4> 
							<p>INFO </p>
							<a className="w3-agilebtn" href="/single">
								<span>En savoir plus</span></a>
						</div>
					</div>
				</div>
				<div className="col-sm-4 news-w3lgrids">
					<div className="news-gridtext">
						<div className="news-w3img">
						<Link to="/single"></Link>
					
								<img src="assets/images/docteur.jpg" className="img-responsive zoom-img" alt=""/>
						</div>
						<div className="news-w3imgtext">
							<h5 className="w3-agilep"></h5>
							<h4>
							  <Link to="/">Docteur 2</Link>
								
							</h4> 
							<p>INFO </p>
							<a className="w3-agilebtn" href="/single"><span>En savoir plus</span></a> 
						</div>
					</div>
				</div>
				<div className="col-sm-4 news-w3lgrids">
					<div className="news-gridtext">
						<div className="news-w3img">
						   <Link to="/single"></Link>
							
								<img src="assets/images/docteur.jpg" className="img-responsive zoom-img" alt=""/>
						</div>
						<div className="news-w3imgtext">
							<h5 className="w3-agilep"></h5>
							<h4>
							<Link to="/">Docteur 3</Link>
								</h4> 
							<p>INFO </p> 
							<a className="w3-agilebtn" href="/single"><span>En savoir plus</span></a>
						</div>
					</div>
				</div>
				<div className="clearfix"> </div>
			</div>
		</div>
	</div>

	<div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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
						<p>+216 54 024 353 / +216 51 042 946</p>
					</div>
					<div className="clearfix"> </div>
				</div>
				<div className="col-md-4 features-w3grid">
					<div className="col-xs-3 features-w3lleft">
						<i className="fa fa-map-marker" aria-hidden="true"></i>
					</div>
					<div className="col-xs-9 features-w3lright"> 
						<h4>LOCATION</h4>
						<p>Tunisie,Tunis,Tunis</p>
					</div>
					<div className="clearfix"> </div>
				</div>
				<div className="col-md-4 features-w3grid">
					<div className="col-xs-3 features-w3lleft">
						<i className="fa fa-envelope" aria-hidden="true"></i>
					</div>
					<div className="col-xs-9 features-w3lright"> 
						<h4>EMAIL</h4>
						<p><Link to="mailto:info@example.com"> kidopia@gmail.com</Link></p>
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


export default Home ; 