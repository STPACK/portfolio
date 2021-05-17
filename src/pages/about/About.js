import React from "react";
import { Link } from "react-router-dom";
import imgAbout from "../../assets/img/about.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <section className="about section bd-container">
        <span className="section-subtitle">My history</span>
        <h2 className="section-title">About me</h2>
        <div className="about__container bd-grid">
          <div className="about__data bd-grid">
            <p className="about__description">
              <span>
                Hello ,I am
                <br />
              </span>
              I am interested in applying for web developer developer and I
              learn about programming by online learning.
            </p>
            <div>
              <span className="about__number">05</span>
              <span className="about__achievement">Years off Experience</span>
            </div>
            <div>
              <span className="about__number">29+</span>
              <span className="about__achievement">Project completes</span>
            </div>
            <div>
              <span className="about__number">07</span>
              <span className="about__achievement">Best work awards</span>
            </div>
            <img src={imgAbout} alt="" className="about__img" />
          </div>
        </div>
      </section>

      <section className="qualification section bd-container">
        <span className="section-subtitle">Experience and Education</span>
        <h2 className="section-title">Qualification</h2>
        <div className="qualification__content bd-grid">
          <div className="qualification__content">
            <h2 className="qualification__title">
              <i className="bx bx-briefcase-alt qualification__title-icon "></i>
              Work Experience
            </h2>
            <div className="bd-grid">
              <div className="qualification__data">
                <h3 className="qualification_area">
                  Senior Front End Developer
                </h3>
                <div className="qualification__box">
                  <span className="qualification__work">
                    <i className="bx bx-briefcase-alt qualification__icon "></i>
                    Adobe-New York
                  </span>
                  <span className="qualification__work">
                    <i className="bx bx-calendar qualification__icon "></i>
                    Jan 2019 - Aug 2019
                  </span>
                </div>
              </div>
              <div className="qualification__data">
                <h3 className="qualification_area">UI/UX</h3>
                <div className="qualification__box">
                  <span className="qualification__work">
                    <i className="bx bx-briefcase-alt  qualification__icon "></i>
                    Figma -Lima
                  </span>
                  <span className="qualification__work">
                    <i className="bx bx-calendar qualification__icon "></i>
                    Oct 2019 - Aug 2020
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="qualification__content">
            <h2 className="qualification__title">
              <i className="bx bx-bookmark qualification__title-icon "></i>
              Education
            </h2>
            <div className="bd-grid">
              <div className="qualification__data">
                <h3 className="qualification_area">Electrical Engineering</h3>
                <div className="qualification__box">
                  <span className="qualification__work">
                    <i className="bx bx-book-bookmark qualification__icon "></i>
                    Bangkok University
                  </span>
                  <span className="qualification__work">
                    <i className="bx bx-calendar qualification__icon "></i>
                    2010-2014
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service section bd-container">
        <span className="section-subtitle">What i offer</span>
        <h2 className="section-title">Services</h2>
        <div className="services__container bd-grid">

          <div className="services__data">
            <i class="bx bxl-react services__icon"></i>
            <h3 className="services__title">React</h3>
            <p className="services__description">
              Service that I offer and work ,with years of Experience in the
              work area
            </p>
            <Link to="/" className=" button">
              Know more
            </Link>
          </div>
          <div className="services__data">
            <i class="bx bx-laptop services__icon"></i>
            <h3 className="services__title">Web development</h3>
            <p className="services__description">
              Service that I offer and work ,with years of Experience in the
              work area
            </p>
            <Link to="/" className=" button">
              Know more
            </Link>
          </div>
          <div className="services__data">
            <i class="bx bx-pen services__icon"></i>
            <h3 className="services__title">Graphic</h3>
            <p className="services__description">
              Service that I offer and work ,with years of Experience in the
              work area
            </p>
            <Link to="/" className=" button">
              Know more
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default About;
