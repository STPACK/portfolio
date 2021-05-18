import React from "react";
import { Link } from "react-router-dom";
import ImgHome from "../../assets/img/home.jpg";
import "./home.css";


const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="home__container bd-container bd-grid">
          <div className="home__data">
            <span className="home__greeting">Hello My name is</span>
            <h1 className="home__name">Sattha</h1>
            <span className="home__profession">Web Developer</span>
            <Link download="" to="#" className="button button-light">
              Download CV
            </Link>
          </div>
          <div className="home__social">
            <Link to="#" className="home__social-icon">
              <i className="bx bxl-facebook-square"></i>
            </Link>
            <Link to="#" className="home__social-icon">
              <i className="bx bxl-instagram"></i>
            </Link>
            <Link to="#" className="home__social-icon">
              <i className="bx bxl-twitter"></i>
            </Link>
          </div>
          <div className="home__img">
            <img src={ImgHome} alt="" />
          </div>
        </div>
      </section>
     
    </>
  );
};

export default Home;
