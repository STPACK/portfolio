import React from "react";
import { Link } from "react-scroll";
import ProjectClass from "./ProjectClass";
import imgWork1 from "../../assets/img/work1.JPG";
import imgWork2 from "../../assets/img/work2.JPG";
import imgWork3 from "../../assets/img/work3.JPG";
import imgWork4 from "../../assets/img/work4.JPG";
import "./Project.css";
const Project = () => {
  const webStore = "https://stweb-store.web.app/";
  const twitterClone = "https://twitter-clone-b807b.web.app";
  const chatApp = "https://chat-app-bfe6a.web.app/";
  const snakesLadder = "https://snakeleadder.web.app/";
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
          <ProjectClass
            webLink={snakesLadder}
            gitLink="https://github.com/STPACK/Snakes_Ladders-"
            imgWork={imgWork4}
            title="Snakes-Ladder Games"
          >
            Build By React
            <ul>
              <li>Fill row and column for making a game table</li>
              <li>Can play by multiple player(4) </li>
              <li>Roll a dice to get number of walk amount</li>
              <li>Have 3 special action in game’s board</li>
              <li>Moving and blinking animation with GSAP</li>
            </ul>
          </ProjectClass>

          <ProjectClass
            webLink={webStore}
            gitLink="https://github.com/STPACK/web_store_customer"
            imgWork={imgWork1}
            title="Web Shopping Store"
          >
            Build By React
            <ul>
              <li>Manage state with redux </li>
              <li>Use Redux-Thunk to allows action and dispatch </li>
              <li>Use firebase to authentication and stores data </li>
              <li>
                Use localStorage for loading and editing cart state when you not
                login
              </li>
            </ul>
          </ProjectClass>

          <ProjectClass
            webLink={twitterClone}
            gitLink="https://github.com/STPACK/twitter_clone"
            imgWork={imgWork2}
            title="Twitter Clone"
          >
            Build By React
            <ul>
              <li>Manage state with redux </li>
              <li>Use Redux-Thunk to allows action and dispatch </li>
              <li>Have reply tweet function and show like and retweet </li>
            </ul>
          </ProjectClass>

          <ProjectClass
            webLink={chatApp}
            gitLink="https://github.com/STPACK/chat_app_firebase"
            imgWork={imgWork3}
            title="Chat App"
          >
            Build By React
            <ul>
              <li>Realtime chat with fireStore firebase </li>
              <li>Sign in with google</li>
            </ul>
          </ProjectClass>
        </div>
      </section>
    </>
  );
};

export default Project;
