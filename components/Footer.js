import React from 'react'
import critologoimage from '../assets/images/logotype-white.svg'
import whitebackgroundlines from '../assets/images/background-lines-white-right.svg'
import { Link } from 'react-router-dom'

const Footer = () => {

  return (
    <footer className="footer">

    <div className="container">
      <img className="background-lines-white-right" src={whitebackgroundlines} alt="background-lines"/>
      <div className="logo">
      <img  src={critologoimage} alt=" crito logo"/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
      </div>
      <div className="grid-1">
        <div className="one">
            <h3 className="title">Company</h3>
            <Link to="/company"className="company" ><p>About</p></Link>
            <Link to="/company"className="company" ><p>Features</p></Link>
            <Link to="/company"className="company" ><p>Works</p></Link>
            <Link to="/company"className="company" ><p>Career</p></Link>
        </div>
        <div className="one">
            <h3 className="title">Help</h3>
            <Link to="/company"className="company" ><p>Customer Support</p></Link>
            <Link to="/company"className="company" ><p>Delivery Details</p></Link>
            <Link to="/company"className="company" ><p>Terms & Conditions</p></Link>
            <Link to="/company"className="company" ><p>Privacy Policy</p></Link>
      </div>
      <div className="one">
        <h3 className="title">Resources</h3>
        <Link to="/company"className="company" ><p>Free eBooks</p></Link>
        <Link to="/company"className="company" ><p>Development tutorial</p></Link>
        <Link to="/company" className="company" ><p>How to-Blog</p></Link>
        <Link to="/company" className="company"><p>Youtube Playlist</p></Link>
      </div>
      <div className="one">
        <h3 className="title">Link</h3>
        <Link to="/company" className="company"><p>Free eBooks</p></Link>
        <Link to="/company"className="company" ><p>Development tutorial</p></Link>
        <Link to="/company"className="company" ><p>How to-Blog</p></Link>
        <Link to="/company" className="company"><p>Youtube Playlist</p></Link>
        </div>
        </div>
    </div>
    <hr style={{color: "white"}}/>
    <div className="copyright">
        <div className="container">
            <div className="copy">
                <p >© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
            </div>
            <div className="social-media">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="https://www.instagram.com" target="_blank"rel="noopener noreferrer" ><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
              </div>
        </div>
    </div>    
</footer>
  )
}

export default Footer