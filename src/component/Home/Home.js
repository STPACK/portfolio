import React, { useRef, useEffect } from "react";
import { TimelineLite, Power3 } from "gsap";
import ImgHome from "../../assets/img/home4.jpg";
import cv from "../../assets/pdf/Clay-Doe-Cv.pdf";
import "./home.css";

const Home = () => {
  let images = useRef(null);
  let content = useRef(null);
  let social = useRef(null);
  

  useEffect(() => {
    let tl = new TimelineLite();
    const headlineFirst = content.children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const button = headlineThird.nextSibling;

    tl.from(images, { opacity: 0, duration: 1, delay: 0.2, x: 60 }).from(
      content,
      { opacity: 0, duration: 0.5, y: 22, ease: Power3.easeOut },
      0.8
    );

    tl.from(
      [headlineFirst, headlineSecond, headlineThird],
      { opacity: 0, duration: 1, y: 22, ease: Power3.easeOut, stagger: 0.2 },
      1
    )
      .from(
        button,
        { opacity: 0, duration: 0.8, y: 22, ease: Power3.easeOut },
        1
      )
      .from(
        social.children,
        {
          opacity: 0,
          duration: 0.8,
          x: 22,
          ease: Power3.easeOut,
          stagger: 0.2,
        },
        1
      );
  }, []);

  return (
    <>
      <section className="home" id="home">
        <div className="home__container bd-container bd-grid">
          <div className="home__data" ref={(el) => (content = el)}>
            <span className="home__greeting">Hello My name is</span>
            <h1 className="home__name">Sattha</h1>
            <span className="home__profession">Web Developer</span>
            <a download="sattha_cv" href={cv} className="button button-light">
              Download CV
            </a>
          </div>
          <div className="home__social" ref={(el) => (social = el)}>
            <a href="/" className="home__social-icon" target="_blank">
              <i className="bx bxl-facebook-square"></i>
            </a>
            <a href="/" className="home__social-icon" target="_blank">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="/" className="home__social-icon" target="_blank">
              <i className="bx bxl-github"></i>
            </a>
          </div>
          <div className="home__img" ref={(el) => (images = el)}>
            <img src={ImgHome} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
