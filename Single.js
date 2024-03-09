import React, { Fragment, useRef } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import emailjs from '@emailjs/browser';  
import Header from "./Header" ;
import Footer from "./Footer" ;










function Single (){


    const form = useRef();




  const sendEmail = (e) => {
    e.preventDefault();




    emailjs
      .sendForm(
        'service_d2hcezl',
        'template_djhx6mv',
       form.current, {
        publicKey: 'qSGenkFoM5rfiNcmU',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          swal({
            title: "Succès!",
            text: "Votre formulaire a été soumis avec succès.",
           icon: "success",
      });
       },
           (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


    return(
        <Fragment>
            <Header/>


            <div className="single about">
        <div className="container">
            <h3 className="w3ls-title">Contact Docteur</h3>
            <div className="col-md-7 w3ls_single_left">
                <div className="w3ls_single_left_grid">
                    <div className="w3ls_single_left_grid_right">
                   
            <div className="section doctor-single">
    <div className="container">
        <div className="row">
            <div className="col-lg-4 col-md-6">
                <div className="doctor-img-block">
                <img src="assets/images/docteur.jpg" alt="" className="img-responsive zoom-img"/>




                <div className="page-title bg-1">
  <div claclassNamess="overlay"></div>
  <div className="container">
    <div classNameass="row">
      <div className="col-md-12">
        <div className="block text-center">
         
          <h1 className="text-capitalize mb-5 text-lg">Alexandar james</h1>




         
        </div>
      </div>
    </div>
  </div>
</div>
                   




                        <ul className="list-inline mt-4 doctor-social-links">
                            <li className="list-inline-item"><a href="#"><i className="icofont-facebook"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="icofont-twitter"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="icofont-skype"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="icofont-linkedin"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="icofont-pinterest"></i></a></li>
                        </ul>
                   
                </div>
            </div>




            <div className="col-lg-8 col-md-6">
                <div className="doctor-details mt-4 mt-lg-0">
                    <h2 className="text-md">Me présenter....</h2>
                    <div className="divider my-4"></div>
                    <div className="tabcontent-grids">




                                        <br></br>




                                        <p>
                                        Le docteur  Guigné vous accueille pour des consultations de psychiatrie/psychothérapie au sein de son cabinet aussi sur notre platefrome Kidopia.
                                            <br></br>
                                            Le docteur  Guigné est formée aux thérapies cognitivo-comportementales (TCC) et aux ACT (thérapies d'acceptation et d'engagement).
                                            <br></br>




                                           Le psychiatre est un médecin spécialisé en santé mentale. Il diagnostique, traite et tente de prévenir la souffrance psychique et les maladies mentales.Le docteur Estelle Guigné est formée aux thérapies cognitivo-comportementales (TCC) et aux ACT (thérapies d'acceptation et d'engagement).
                                          <br></br>
                                          </p>
                                           
                                        <ul>
                                            <li><i className="fa fa-check-square-o"></i> Thérapie Personnalisée </li>
                                            <li><i className="fa fa-check-square-o"></i> Thérapie TCC </li>
                                            <li><i className="fa fa-check-square-o"></i> Thérapie ACT </li>
                                            <li><i className="fa fa-check-square-o"></i> Consultation en ligne </li>
                                        </ul>
                                    </div>
                                <br></br>
                               




                    <a href="#" className="btnn btnn-main-2 btnn-round-full mt-3">Prendre un rendez-vous</a>
                </div>
            </div>
        </div>
    </div>
</div>
</div>




                    <div className="clearfix"> </div>  
                </div>
                <div className="w3l_admin">
                    <p><i className="fa fa-quote-left"></i> Différent ne signifie pas moins. Il est possible de surmonter les handicaps, et beaucoup d'entre nous l'ont fait.  Cette citation illustre son expérience personnelle en tant qu'autiste et son message d'espoir et d'acceptation pour les personnes autistes et neurotypiques.</p>
                    <Link to="#"><i>Temple Grandin</i></Link>
                </div>
            </div>
            <div className="col-md-5 w3ls_single_right">
                <div className="wthree_recent">
            </div>  
            </div>
            <div className="clearfix"> </div>
            <div className="agile_tags_cate">
                <div className="col-md-4 agile_cat_grid">
                    <h4>Disponiblilité</h4>
                    <ul className="categories">
                        <li><Link to="#">Lundi</Link></li>
                        <li><Link to="#">Mardi</Link></li>
                        <li><Link to="#">Mercredi</Link></li>
                        <li><Link to="#">Jeudi</Link></li>
                        <li><Link to="#">Vendredi</Link></li>
                    </ul>
                </div>
                <div className="col-md-4 agile_cat_grid">
                    <h4> Heure</h4>
                    <ul className="categories">
                        <li><Link to="#">April 15,2024</Link></li>
                        <li><Link to="#">Sep 19,2024</Link></li>
                        <li><Link to="#">May 24,2024</Link></li>
                        <li><Link to="#">April 15,2024</Link></li>
                        <li><Link to="#">June 21,2024</Link></li>
                    </ul>
                </div>
                <div className="clearfix"> </div>
            </div>
           
            <div className="w3_leave_comment">
                <h3>Leave your <span>comment</span></h3>
                <form ref={form} onSubmit={sendEmail}>
                <div className="styled-input agile-styled-input-top">
                  <input type="text" name="name"/>
                  <label>Nom & prénom</label>
                  <span></span>
                </div>
                <div className="styled-input">
                  <textarea name="message" required></textarea>
                  <label>Commentaire</label>
                  <span></span>
                </div>
                <input type="submit" value="SEND" />
              </form>


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
                        <p>
                            <Link to="mailto:info@example.com">kidopia9@outlook.fr</Link>
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


export default Single ;
