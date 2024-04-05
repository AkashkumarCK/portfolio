import React from 'react'
import'./Hero.css'
const Hero = () => {
  return(
    <section className='hero-container'>
        <div className='hero-content'>
            <h2>Hii.. I am AkashKumarC.K</h2>           
            <p>I am ready to work as a frontend and backend developer,I have skills in database(mysql),software programming and to secure a challenging position in a reputed organization to expand my knowledge and skills as well as to ensure my knowledge is used for the growth of the organization</p>
        </div>
        <div className='hero-img'>
             <div><div className='tech-icon'>
                <img  className='im' src='./assests/images/reacticon.png'alt=''/>
             </div>
             <img className='pro' src='./assests/images/profile.jpg'alt=''/>
            </div>
            <div>
            <div className='tech-icon'>
                <img  className='im'src='./assests/images/html.png'alt=''/>
             </div>
             <div className='tech-icon'>
                <img className='im'src='./assests/images/css.png'alt=''/>
             </div>
             <div  id="Skills" className='tech-icon'>
                <img className='im' src='./assests/images/javascript.png'alt=''/>
             </div>
            </div>
            </div>
    </section>
  )
}
export default Hero