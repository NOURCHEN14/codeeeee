import React, { Fragment, useRef } from "react";
import swal from "sweetalert";
import emailjs from '@emailjs/browser';   //npm i @emailjs/browser
import Header from "./Header";
import Footer from "./Footer";
function Contact() {


  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();


    emailjs
      .sendForm(
        'service_d2hcezl',
         
       form.current, {
        publicKey: 'ZVW_1HqTHTUB9EMc7',
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
 


  return (
    <Fragment>
      <Header />


      <div className="features about">
        <div className="container">
          <div className="wthree-features-row">
            <div className="col-md-4 features-w3grid">
              <div className="col-xs-3 features-w3lleft">
                <i className="fa fa-phone" aria-hidden="true"></i>
              </div>
              <div className="col-xs-9 features-w3lright">
                <h4>CONTACT</h4>
                <p>+216 51042946</p>
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="col-md-4 features-w3grid">
              <div className="col-xs-3 features-w3lleft">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
              </div>
              <div className="col-xs-9 features-w3lright">
                <h4>LOCALISATION</h4>
                <p>Tunis, Tunisie</p>
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
                  <a href="mailto:info@example.com">
                    {" "}
                    bnamaranourchen@gmail.com
                  </a>
                </p>
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>


      <div className="contact">
  <div className="container">
    <h3 className="w3ls-title">Nous contacter</h3>
    <p className="styled-input">
      Vous souhaitez nous joindre ? Nous sommes à votre disposition. Voici
      comment nous contacter :
    </p>


    <div className="contact-w3lsrow">
      <div className="col-md-6 contact-left w3-agileits">
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1Uu-NdyqOHqud9zE-ukApJJiJHG4&hl=en_US&ehbc=2E312F"
          width="640"
          height="480"
        ></iframe>{" "}
      </div>
      <div className="col-md-6 contact-right">
      <form ref={form} onSubmit={sendEmail}>
          <div className="styled-input agile-styled-input-top">
            <input type="text" name="user_name" />
            <label>Nom & prénom</label>
            <span></span>
          </div>
          <div className="styled-input">
            <input type="text" name="user_email" />
            <label>Email</label>
            <span></span>
          </div>
          <div className="styled-input">
            <input type="text" name="sujet" />
            <label>Sujet</label>
            <span></span>
          </div>
          <div className="styled-input">
            <textarea name="message" required></textarea>
            <label>Message</label>
            <span></span>
          </div>
          <input type="submit" value="SEND" />
        </form>
      </div>
      <div className="clearfix"> </div>
    </div>
  </div>
</div>




      <Footer />
    </Fragment>
  );
}


export default Contact;
