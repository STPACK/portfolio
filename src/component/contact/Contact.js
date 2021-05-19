import React from "react";
import './contact.css'

const Contact = () => {
  const fb="https://web.facebook.com/papipack"
  const ig="https://www.instagram.com/paxcz/"
  return (
    <>
      <section className="contact section bd-container"  id="contact">
        <span className="section-subtitle">For work</span>
        <h2 className="section-title">Contact Me</h2>

        <div className="contact__container bd-grid">

          
            <div className="contact__box">
              <i className="bx bx-home-alt contact__icon"></i>
              <h3 className="contact__title">Location</h3>
              <span className="contact__description">Nonthaburi Thailand</span>
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
                  <a href={fb} className="contact__social" target="_blank" rel="noreferrer"><i className='bx bxl-facebook-square contact__social-icon ' ></i></a>
                  <a href={ig} className="contact__social" target="_blank" rel="noreferrer"><i className='bx bxl-instagram contact__social-icon' ></i></a>
              </div>
            </div>
  
      

        </div>
      </section>
    </>
  );
};

export default Contact;
