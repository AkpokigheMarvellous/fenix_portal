import React, { useState } from "react"
import "../css/NavbarStyles.css"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"

import Logo from '../assets/logo.png';

const Navbar = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <nav className='navbar'>
      <Link to="/home">
          <img src={Logo} alt="example" />
        </Link>
        {/*
        if large screen ma xa bhane Mobile add huxa
        if mobile screen ma xa bhane nav-links-mobile add huxa
        */}
        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
          <Link to='home' className='home'>
            <li>Home</li>
          </Link>
          <Link to='/about' className='about'>
            <li>About</li>
          </Link>
          <Link to='/clients' className='clients'>
            <li>Clients</li>
          </Link>
          <Link to='/contact' className='contact'>
            <li>Contact</li>
          </Link>
          <Link to='/signin' className='signin'>
            <li>SignIn</li>
          </Link>
          <Link to='/signup' className='signup'>
            <li>SignUp</li>
          </Link>
        </ul>
        {/* 
        whenever we click on button = setMobile(!Mobile) ==  is mobile oppsite to setMobile 
        */}
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </>
  )
}
export default Navbar