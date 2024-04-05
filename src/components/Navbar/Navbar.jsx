import React from 'react'
import'./Navbar.css'
import MobileNav from './MobileNav/MobileNav';
import { useState } from 'react';
 const Navbar = () => {
    const [openMenu,setOpenMenu]=useState(false);
    const toggleMenu=()=>{
        setOpenMenu(!openMenu);
    };
  return (
    <>
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
    <nav className='nav-wrapper'>
        <div className='nav-content'>
            <img className="logo"src='./assests/images/portfolioimage.jpg' alt='no'/>
            <ul>
                <li>
                    <a className='menuitem' href='/'>Home</a>
                </li>
                <li>
                    <a className='menuitem' href='#Skills'>Skills</a>
                </li>
                <li>
                    <a className='menuitem' href='#education'>Education</a>
                </li>
                <li>
                    <a className='menuitem' href='#contact'>Contact Me</a>
                </li>
                <button className='contact-btn'>Hire Me</button>
            </ul>
            <button class="menu-btn" onClick={toggleMenu}>
            <span class={"material-symbols-outlined"}
            style={{fontSize:"1.0rem"}}>{openMenu?
            <img className='menuicons' src='./assests/images/closeicon.png' alt='no'/>:
            <img className='menuicons' src='./assests/images/menuicon.png'alt='no'/>}
            </span>
            </button>
        </div>
        </nav>
        </>
  )
}

export default Navbar