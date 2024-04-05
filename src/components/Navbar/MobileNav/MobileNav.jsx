import React from 'react'
import"./MobileNav.css";
const MobileNav = ({isOpen,toggleMenu}) => {
  return (<>
    <div 
    className={`mobile-menu ${isOpen ? "active":""}`}
     onClick={toggleMenu}>
    <div className='mobile-menu-container'>
    <img className="logo"src='./assests/images/portfolioimage.jpg' alt='no'/>
            <ul>
                <li>
                    <a className='menuitem' href='/'>Home</a>
                </li>
                <li>
                    <a className='menuitem'href='#Skills'>Skills</a>
                </li>
                <li>
                    <a className='menuitem'href='#education'>Education</a>
                </li>
                <li>
                    <a className='menuitem'href='#contact'>Contact Me</a>
                </li>
                <button className='contact-btn'>Hire Me</button>
                </ul>
    </div> 
 </div>    
    </>
  )
}

export default MobileNav