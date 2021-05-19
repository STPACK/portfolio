import React from "react";
import Qualification from "./Qualification";
import imgAbout from "../../assets/img/about2.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <section className="about section bd-container" id="about">
        <span className="section-subtitle">My history</span>
        <h2 className="section-title">About me</h2>
        <div className="about__container bd-grid">
        <img src={imgAbout} alt="" className="about__img" />
          <div className="about__data bd-grid">
            <p className="about__description">
              <span>
                Hello, My name is Sattha (Pack)
                <br />
              </span>
                I graduated in electrical engineering and worked in
                engineer position for 3 years. I currently need to change my
                career to developer and I learn about programming by online
                learning. I am interested in applying for web developer and I
                will do my best. I developed my website by react  and
                firebase.
                <br />
                Although I have less experience in web developer, but I have an
                experience in other developing engineering programs. I have a
                good problem-solving skill in term of programming, which enables
                me to develop and improve website.
            </p>
          </div>
        </div>

        
        <span className="section-subtitle">Experience and Education</span>
        <h2 className="section-title">Qualification</h2>
        <div className="qualification__container bd-grid">

          <div className="qualification__content">
            <h2 className="qualification__title">
              <i className="bx bx-bookmark qualification__title-icon "></i>
              Education
            </h2>
            <Qualification
              title="Electrical Engineering"
              icon="bx bx-book-bookmark"
              detail="Bangkok University"
              time="2010-2014"
            />
          </div>

          <div className="qualification__content">
            <h2 className="qualification__title">
              <i className="bx bx-briefcase-alt qualification__title-icon "></i>
              Work Experience
            </h2>
            <Qualification
              title="Production Engineer/ Supervisor"
              icon="bx bx-briefcase-alt"
              detail="CPRAM Co., LTD  - Pathum Thani"
              time="Aug 2015 - June 2018"
            />
          </div>

          <div className="qualification__content">
            <h2 className="qualification__title">
              <i className="bx bx-certification qualification__title-icon "></i>
              Certifacates
            </h2>
            <Qualification
              title="POSN Computer Academic Olympiad CAMP 1-2"
              icon="bx bxs-certification"
              detail="The Promotion of Academic Olympiad and Development of Science - Chiangmai university"
              time="2007-2008"
            />
            <Qualification
              title="Karakuri Kaizen Basic,Intermediate, Advance Course"
              icon="bx bxs-certification"
              detail="Technology Promotion Association Thailan-Japan"
              time="2015 - 2016"
            />
          </div>

          <div className="qualification__content">
            <h2 className="qualification__title">
              <i className="bx bxs-school qualification__title-icon "></i>
              Online Courses
            </h2>

            <Qualification
              title="React - The Complete Guide (incl Hooks, React Router, Redux)"
              icon="bx bxl-react"
              detail="Academind by Maximilian Schwarzmüller - www.udemy.com"
              time="2020-2021"
            />
            <Qualification
              title="React JS Frontend Web Development for Beginners"
              icon="bx bxl-react"
              detail="Ryan Dhungel - www.udemy.com"
              time="2020"
            />
            <Qualification
              title="Vue.js Jump-start with Nuxt.js & Firebase"
              icon="bx bxl-vuejs"
              detail="M. Hendra, Learning & teaching is gratifying - www.udemy.com"
              time="2020"
            />
            <Qualification
              title="Nuxt.js - Vue.js on Steroids"
              icon="bx bxl-vuejs"
              detail="Academind by Maximilian Schwarzmüller - www.udemy.com"
              time="2020"
            />
            <Qualification
              title="The Web Developer Bootcamp"
              icon="bx bxl-html5"
              detail="Colt Steele , Developer and Bootcamp Instructor - www.udemy.com"
              time="2020"
            />
          </div>
        </div>
    

    
        <span className="section-subtitle">What i offer</span>
        <h2 className="section-title">Skills</h2>
        <div className="services__container bd-grid">

          <div className="services__data">
            <i className="bx bx-laptop services__icon"></i>
            <h3 className="services__title">Web development</h3>
            <p className="services__description">
             Basic web development , Html Css Javascript
            </p>
          
          </div>

          <div className="services__data">
            <i className="bx bxl-react services__icon"></i>
            <h3 className="services__title">React</h3>
            <p className="services__description">
             Working with state and component,React Hook ,Redux ,React Route
            </p>
          
          </div>

          <div className="services__data">
            <i className="bx bx-devices services__icon"></i>
            <h3 className="services__title">Development tool</h3>
            <p className="services__description">
              Git , Firebase , Axios , Firebase ,Adobe Photoshop
            </p>
           
          </div>
        </div>
  
      </section>

      
    </>
  );
};

export default About;
