import React,{useState} from 'react'
import {Link} from 'react-scroll';
import './navbar.css'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const showMenuHandler =()=>{
    setShowMenu(!showMenu)
  }
  return (
    <header className="l-header" id="header">
      <nav className="nav bd-container">
        <a href="/" className="nav__logo">STPACK</a>
        <div className={`nav__menu ${showMenu?'show-menu':''}`} >
          <ul className="nav__list">
            <li className="nav__item"> <Link className="nav__link" to="home" exact activeClass="active-link" onClick={showMenuHandler}>Home</Link> </li>
            <li className="nav__item"> <Link className="nav__link" to="about" activeClass="active-link"  onClick={showMenuHandler} >About</Link> </li>
            <li className="nav__item"> <Link className="nav__link" to="project" activeClass="active-link" onClick={showMenuHandler} >Project</Link> </li>
            <li className="nav__item"> <Link className="nav__link" to="contact" activeClass="active-link" onClick={showMenuHandler} >Contact</Link> </li>
          </ul>
        </div>
        <div className="nav__toggle">
        <i className='bx bx-menu' onClick={showMenuHandler}></i>
        </div>
      </nav>
      
    </header>
  )
}

export default Navbar
