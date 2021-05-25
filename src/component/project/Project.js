import React from "react";
import { Link } from "react-scroll";
import imgWork1 from "../../assets/img/work1.JPG";
import imgWork2 from "../../assets/img/work2.JPG";
import imgWork3 from "../../assets/img/work3.JPG";
import "./Project.css";
const Project = () => {
  const webStore = "https://stweb-store.web.app/";
  const twitterClone = "https://twitter-clone-b807b.web.app";
  const chatApp = "https://chat-app-bfe6a.web.app/";
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
                Build By React
                <ul>
                  <li>Manage state with redux </li>
                  <li>Use Redux-Thunk to allows action and dispatch </li>
                  <li>Use firebase to authentication and stores data </li>
                  <li>
                    Use localStorage for loading and editing cart state when you
                    not login
                  </li>
                </ul>
              </span>
              <div>
                <a href={webStore} target="_blank" rel="noreferrer">
                  <h2 className="portfolio__title ">Web Shopping Store </h2>
                </a>
                <a
                  href="https://github.com/STPACK/web_store_customer"
                  target="_blank"
                  rel="noreferrer"
                  className="button button-link"
                >
                  View Source Code
                </a>
              </div>
            </div>
          </div>

          <div className="portfolio__content">
            <a href={twitterClone} target="_blank" rel="noreferrer">
              <img src={imgWork2} alt="" className="portfolio__img" />
            </a>
            <div className="portfolio__data">
              <span className="portfolio__subtitle">
                Build By React
                <ul>
                  <li>Manage state with redux </li>
                  <li>Use Redux-Thunk to allows action and dispatch </li>
                  <li>Have reply tweet function and show like and retweet </li>
                </ul>
              </span>
              <div>
                <a href={twitterClone} target="_blank" rel="noreferrer">
                  <h2 className="portfolio__title">Twitter Clone</h2>
                </a>
                <a
                  href="https://github.com/STPACK/twitter_clone"
                  target="_blank"
                  rel="noreferrer"
                  className="button button-link"
                >
                  View Source Code
                </a>
              </div>
            </div>
          </div>
          <div className="portfolio__content">
            <a href={chatApp} target="_blank" rel="noreferrer">
              <img src={imgWork3} alt="" className="portfolio__img" />
            </a>
            <div className="portfolio__data">
              <span className="portfolio__subtitle">
                Build By React
                <ul>
                  <li>Realtime chat with fireStore firebase </li>
                  <li>Sign in with google</li>
                </ul>
              </span>
              <div>
                <a href={chatApp} target="_blank" rel="noreferrer">
                  <h2 className="portfolio__title">Chat app</h2>
                </a>
                <a
                  href="https://github.com/STPACK/chat_app_firebase"
                  target="_blank"
                  rel="noreferrer"
                  className="button button-link"
                >
                  View Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
