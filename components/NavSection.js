import React from 'react'
import img_logotype from '../assets/images/logotype.svg'
import Button from './generics/Button'
import { NavLink,Link } from 'react-router-dom'

const NavSection = () => {
  return (
    <div className="container">
   <Link to ="/"> <img src={img_logotype} alt="Crito logo"/></Link>
     <div className="menu">
         <div className="top-menu">
             <div className="contact-information">
               <div className="content-box">
                   <i className="fa-light fa-phone-volume"></i>
                   +46 (8) 121 470 50
               </div>
               <div className="content-box">
                   <i className="fa-light fa-envelope"></i>
                  info@crito.com
               </div>
               <div className="content-box last">
                   <i className="fa-sharp fa-regular fa-location-dot"></i>
                   Sveavägen 31, 111 34 STOCKHOLM
               </div>
             </div>
             <div className="social-media">
               <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" ><i className="fa-brands fa-facebook"></i></a>
               <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter"></i></a>
               <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
               <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
             </div>
         </div>
       <div className="main-menu">
           <nav>
           <NavLink to="/">Home</NavLink>
               <NavLink to="/services">Service</NavLink>
               <NavLink to="/news">News</NavLink>
               <NavLink to="/contacts">Contact</NavLink>
           </nav>
           <Button type="yellow" url="login.html" title="Login"/>
       </div>
     </div>
</div>
  )
}

export default NavSection