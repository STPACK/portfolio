import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import ImgHome from '../../assets/img/home.jpg'

const Home = () => {
    return (
        <div>
            <section className="home">
                <div className="home__container bd-container bd-grid">
                    <div className="home__data">
                        <span className="home__greeting">Hello My name is</span>
                        <h1 className="home__name">Sattha</h1>
                        <span className="home__profession">Web Developer</span>
                        <Link download="" to="#" className="button button-light">Download CV</Link>
                    </div>
                    <div className="home__social">
                        <Link to="#" className="home__social-icon"><i class='bx bxl-facebook-square'></i></Link>
                        <Link to="#" className="home__social-icon"><i class='bx bxl-instagram' ></i></Link>
                        <Link to="#" className="home__social-icon"><i class='bx bxl-twitter' ></i></Link>
                    </div>
                    <div className="home__img">
                        <img src={ImgHome} alt="" />
                    </div>


                </div>

            </section>
           
        </div>
    )
}

export default Home
