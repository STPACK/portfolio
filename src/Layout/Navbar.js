import React,{useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const showMenuHandler =()=>{
    setShowMenu(!showMenu)
  }
  return (
    <header className="l-header" id="header">
      <nav className="nav bd-container">
        <Link to="/" className="nav__logo">STPACK</Link>
        <div className={`nav__menu ${showMenu?'show-menu':''}`} >
          <ul className="nav__list">
            <li className="nav__item"> <NavLink className="nav__link" to="/" exact activeClassName="active-link" onClick={showMenuHandler}>Home</NavLink> </li>
            <li className="nav__item"> <NavLink className="nav__link" to="/about" activeClassName="active-link"  onClick={showMenuHandler} >About</NavLink> </li>
            <li className="nav__item"> <NavLink className="nav__link" to="/project" activeClassName="active-link" onClick={showMenuHandler} >Project</NavLink> </li>
            <li className="nav__item"> <NavLink className="nav__link" to="/contact" activeClassName="active-link" onClick={showMenuHandler} >Contact</NavLink> </li>
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
