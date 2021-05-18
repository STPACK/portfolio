import React from "react";
import {Link} from 'react-router-dom';
import './contact.css'

const Contact = () => {
  return (
    <>
      <section className="contact section bd-container"  id="contact">
        <span className="section-subtitle">For project</span>
        <h2 className="section-title">Contact Me</h2>

        <div className="contact__container bd-grid">

          
            <div className="contact__box">
              <i className="bx bx-home-alt contact__icon"></i>
              <h3 className="contact__title">Location</h3>
              <span className="contact__description">bangboutong nonthaburi</span>
            </div>
          

            <div className="contact__box">
              <i className="bx bxs-phone contact__icon"></i>
              <h3 className="contact__title">Phone</h3>
              <span className="contact__description">+668-8685-9569</span>
            </div>
         

       
            <div className="contact__box">
              <i className="bx bx-envelope contact__icon"></i>
              <h3 className="contact__title">Email</h3>
              <span className="contact__description">sattha.prat@hotmail.com</span>
            </div>
      

         
            <div className="contact__box">
              <i className="bx bx-chat contact__icon"></i>
              <h3 className="contact__title">Chat</h3>
              <div>
                  <Link to="/" className="contact__social"><i className='bx bxl-facebook-square ' ></i></Link>
                  <Link to="/" className="contact__social"><i className='bx bxl-instagram ' ></i></Link>
              </div>
            </div>
  
      

        </div>
      </section>
    </>
  );
};

export default Contact;
