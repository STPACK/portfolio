import React from "react";
import { Link } from "react-router-dom";
import imgWork1 from '../../assets/img/work1.jpg'
import imgWork2 from '../../assets/img/work2.jpg'
import "./project.css";
const Project = () => {
  return (
    <>
      <section className="project section bd-container">
        <div className="project__container bd-grid">
          <div className="project__data">
            <i className="bx bx-chat project__icon"></i>
            <div>
              <h2 className="project__title">Project in mind</h2>
              <p className="project__description">
                Hire me to carry out the following projects{" "}
              </p>
            </div>
            <div>
              <Link to="/" className="button button-white">
                Hire me
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio section bd-container">
          <span className="section-subtitle">My recent works</span>
          <h2 className="section-title">Portfolio</h2>
          <div className="portfolio__nav">
              <span className="portfolio__item">All</span>
              <span className="portfolio__item">Web</span>
              <span className="portfolio__item">Ui</span>
              <span className="portfolio__item">App</span>
          </div>

          <div className="portfolio__container bd-grid">

              <div className="portfolio__content">
                  <Link to="#"><img src={imgWork1} alt="" className="portfolio__img" /></Link>
                  <div className="portfolio__data">
                      <span className="portfolio__subtitle">Web development</span>
                      <Link to="#"><h2 className="portfolio__title">New portfolio of work done for client</h2></Link>
                      <Link to="#" className="button button-link">View Detail</Link>
                  </div>
              </div>
              <div className="portfolio__content">
                  <Link to="#"><img src={imgWork2} alt="" className="portfolio__img" /></Link>
                  <div className="portfolio__data">
                      <span className="portfolio__subtitle">Twitter Clone</span>
                      <Link to="#"><h2 className="portfolio__title">New portfolio of work done for client</h2></Link>
                      <Link to="#" className="button button-link">View Detail</Link>
                  </div>
              </div>

          </div>

       
        </section>

    </>
  );
};

export default Project;
