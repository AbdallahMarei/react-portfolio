import React from 'react'
import "./footer.styles.css"
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer>
        <div className="navbar-links-footer">
           <ul>
               <li><Link to="/">Home</Link></li>
               <li><a href="#about-page">About</a></li>
               <li><a href="#services-page">Services</a></li>
               <li><Link to="/skills">Qualifications</Link></li>
                <li><Link to="/skills">Projects</Link></li>
               <li><a href="#testimonials-page">Testimonials</a></li>
               <li><Link to="/contact">Contact</Link></li>
           </ul>
        </div>
        <div className="icons">
          <a href="https://www.linkedin.com/in/abdallah-marei/" rel="noreferrer" target="_blank"><i className="fab fa-linkedin-in"></i></a>
           <a href="https://github.com/AbdallahMarei" rel="noreferrer" target="_blank"><i className="fab fa-github"></i></a>
           <a href="https://www.facebook.com/abdullah.mari" rel="noreferrer" target="_blank"><i className="fab fa-facebook-f"></i></a>
        </div>
        <p>&copy Copyright 2021. Made by Abdallah Marei</p>
   </footer>
    )
}

export default Footer
