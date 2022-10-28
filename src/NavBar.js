//import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import bg from "./bg.jpg"
import "./navbar.css"

export default function NavBar() {
    {/*
  return 
  
    <>
    <nav className="nav">
      <Link to="/">Tianyou Zhang</Link>
      <ul>
        <CustomLink to="/About">About</CustomLink>
        <CustomLink to="/Cool">Cool</CustomLink>
      </ul>  
    </nav>
    </>
    */}
    // learn about hooks
    
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={bg} alt='logo' />
                </a>
                
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about' onClick={closeMenu}>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#testimonials' onClick={closeMenu}>Testimonials</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#demo' onClick={closeMenu}>Demo</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
    
}

{/*
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
*/}
