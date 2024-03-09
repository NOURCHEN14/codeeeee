import React, { Fragment } from "react" ; 
import { Link } from "react-router-dom";
import Header from "./Header" ;
import Footer from "./Footer" ; 
function about (){
    return(
        <Fragment>
            <Header/>

	<div className="about">
		<div className="container"> 
			<h3 className="w3ls-title">About Us</h3>
			<div className="about-w3ls-row"> 
				<div className="col-md-5 about-left">
					<img src="assets/images/img1.jpg" className="img-responsive" alt=""/>
				</div>
				<div className="col-md-7 about-right"> 
					<div className="about-agile-row">
						<div className="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
							<ul id="myTab" className=" nav-tabs" role="tablist">
								<li role="presentation" className="active">
								<Link to="#home" id="home-tab" role="tab" data-toggle="tab" aria-controls="home" aria-expanded="true" >About</Link>
									</li>
							</ul> 
							<div className="clearfix"> </div>
							<div id="myTabContent" className="tab-content">
								<div role="tabpanel" className="tab-pane fade in active" id="home" aria-labelledby="home-tab">
									<div className="tabcontent-grids">
										<p>Bienvenue sur Kidopia : Transformez le monde de l'autisme <br/><br/></p>
										<p>Nous sommes ravis de vous accueillir sur Kidopia, une plateforme dédiée à accompagner les enfants autistes dans leur parcours de développement, 
											tout en offrant un soutien précieux à leurs familles et à leurs thérapeutes. 
											Chez Kidopia, nous croyons fermement que chaque enfant mérite la chance de s'épanouir et de réaliser son plein potentiel, 
											quel que soit son chemin unique. C'est pourquoi nous avons créé une application web spécialement conçue pour répondre aux besoins uniques des enfants autistes, 
											en combinant expertise thérapeutique, technologie innovante et engagement communautaire.
											<br/><br/> Notre mission est simple mais profonde : offrir un environnement inclusif et bienveillant où chaque enfant autiste peut grandir, 
											apprendre et s'épanouir. Avec Kidopia, les enfants et leurs familles ont accès à une multitude de ressources et d'outils soigneusement sélectionnés, 
											conçus pour favoriser le développement de compétences essentielles telles que la communication, 
											la socialisation et l'autonomie. De plus, notre équipe de professionnels qualifiés est là pour fournir un soutien personnalisé, 
											des conseils pratiques et une expertise spécialisée à chaque étape du chemin. <br/> <br/> 
											Que vous soyez parent d'un enfant autiste, professionnel de la santé ou simplement un passionné de l'autisme, 
											nous sommes là pour vous accompagner. Explorez notre application, découvrez nos fonctionnalités et rejoignez notre 
											communauté dynamique et engagée. Ensemble, nous pouvons transformer le monde de l'autisme et offrir à chaque enfant 
											la chance de briller. Bienvenue sur Kidopia, où l'amour, la compréhension et le soutien sont au cœur de tout ce que 
											nous faisons.
											</p>
											
										<ul>
											<li><i className="fa fa-check-square-o"></i> Thérapie Personnalisée </li>
											<li><i className="fa fa-check-square-o"></i> Soutien aux Familles </li>
											<li><i className="fa fa-check-square-o"></i> Outils et Ressources </li>
											<li><i className="fa fa-check-square-o"></i> Consultation en ligne </li> 
										</ul>
									</div>
								</div>
								<div className="clearfix"> </div>
							</div>
						</div>
					</div>
				</div> 
				<div className="clearfix"> </div> 
			</div>
		</div>
	</div>

 	<div className="team agileits">
		<div className="team-info">
			<div className="container">
				<h3 className="w3ls-title">Notre équipe</h3> 
				<div className="team-row">		
				<div className="col-md-3 col-sm-6 col-xs-6 team-grids">
						<div className="team-agile-img"> 
							<div className="view-caption">
								<div className="w3ls-info">
									<h4></h4> 
									<p></p>
								</div>
								<ul>
									<li>
									<Link to="https://www.facebook.com/profile.php?id=100015572739977" ></Link>
										<span className="fa fa-facebook"></span>
										</li>
									<li>
									<Link to="https://www.instagram.com/nour_aamara?igsh=OHRqamRhZTQxYmp1" ></Link>
										<span className="fa fa-instagram"></span>
										</li>
									<li>
									<Link to="https://www.linkedin.com/in/nourchen-ben-amara/" ></Link>
										<span className="fa fa-linkedin-square"></span>
										</li>
								</ul>
							</div>    
						</div>
					</div>			
					<div className="col-md-3 col-sm-6 col-xs-6 team-grids">
						<div className="team-agile-img"> 
						<Link to="#" ></Link>
							<img src="assets/images/faouzia.jpg" alt="img"/>
							<div className="view-caption">
								<div className="w3ls-info">
									<h4>Faouzia</h4> 
									<p>Ben Hadedda</p>
								</div>
								<ul>
									<li><Link to="https://www.facebook.com/profile.php?id=100011209175106"><span className="fa fa-facebook"></span></Link></li>
									<li><Link to="https://www.instagram.com/faouziaa.jerbi?igsh=YzhmdmxqM3h5dTRn"><span className="fa fa-instagram"></span></Link></li>
									<li><Link to="https://www.linkedin.com/in/faouzia-ben-haded/"><span className="fa fa-linkedin-square"></span></Link></li>
								</ul>
							</div>    
						</div>
					</div>
					<div className="col-md-3 col-sm-6 col-xs-6 team-grids">
						<div className="team-agile-img"> 
							<Link to="#"><img src="assets/images/nour.jpg" alt="img"/></Link>
							<div className="view-caption">
								<div className="w3ls-info">
									<h4>Nourchene</h4> 
									<p>Ben Amara</p>
								</div>
								<ul>
									<li><Link to="https://www.facebook.com/profile.php?id=100015572739977"><span className="fa fa-facebook"></span></Link></li>
									<li><Link to="https://www.instagram.com/nour_aamara?igsh=OHRqamRhZTQxYmp1"><span className="fa fa-instagram"></span></Link></li>
									<li><Link to="https://www.linkedin.com/in/nourchen-ben-amara/"><span className="fa fa-linkedin-square"></span></Link></li>
								</ul>
							</div>    
						</div>
					</div>
					<div className="clearfix"> </div>
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
						<p>Tunisie,Tunis</p>
					</div>
					<div className="clearfix"> </div>
				</div>
				<div className="col-md-4 features-w3grid">
					<div className="col-xs-3 features-w3lleft">
						<i className="fa fa-envelope" aria-hidden="true"></i>
					</div>
					<div className="col-xs-9 features-w3lright"> 
						<h4>EMAIL</h4>
						<p>
							<Link to="mailto:info@example.com">kidopia@gmail.com</Link>
							</p>
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

export default about ; 