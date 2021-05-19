import React from "react";
import { Link } from "react-scroll";
import imgWork1 from "../../assets/img/work1.JPG";
import imgWork2 from "../../assets/img/work2.JPG";
import "./project.css";
const Project = () => {

  const webStore ="https://stweb-store.web.app/"
  const twitterClone ="https://twitter-clone-b807b.web.app"
  return (
    <>
      <section className="project section bd-container" id="project">
        <div className="project__container bd-grid">
          <div className="project__data">
            <i className="bx bx-chat project__icon"></i>
            <div>
              <h2 className="project__title">Project in mind</h2>
              <p className="project__description">
                Hire me to carry out the following projects
              </p>
            </div>
            <div>
              <Link to="contact" className="button button-white">
                Hire me
              </Link>
            </div>
          </div>
        </div>
        <span className="section-subtitle">My recent works</span>
        <h2 className="section-title">Project</h2>
        <div className="portfolio__container bd-grid">
          <div className="portfolio__content">
            <a href={webStore} target="_blank" rel="noreferrer">
              <img src={imgWork1} alt="" className="portfolio__img" />
            </a>
            <div className="portfolio__data">
              <span className="portfolio__subtitle">
                Build by react, manage state with redux ,Use firebase to
                authentication and store the data with
                firebase-realtime-database <br />
              </span>
              <a href={webStore} target="_blank" rel="noreferrer">
                <h2 className="portfolio__title ">Web Shopping Store </h2>
              </a>
              <a href={webStore} target="_blank" rel="noreferrer" className="button button-link">
                View Detail
              </a>
            </div>
          </div>
          <div className="portfolio__content">
            <a href={twitterClone} target="_blank" rel="noreferrer">
              <img src={imgWork2} alt="" className="portfolio__img" />
            </a>
            <div className="portfolio__data">
              <span className="portfolio__subtitle">
                Build by react, manage state with redux , have a tweet and reply
                tweet function
              </span>
              <a href={twitterClone} target="_blank" rel="noreferrer">
                <h2 className="portfolio__title">Twitter Clone</h2>
              </a>
              <a href={twitterClone} target="_blank" rel="noreferrer" className="button button-link">
                View Detail
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
