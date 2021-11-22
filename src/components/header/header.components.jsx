import React from 'react';
import {Link} from "react-router-dom";
import "./header.styles.css";

class Header extends React.Component{
    constructor(props){
        super(props);

        this.state={
            navBarActive: false
        }
    }
    changeNavBar = () => {
        let changeActive = !this.state.navBarActive
        this.setState({navBarActive: changeActive})
    }
    render(){
        return (
            <header>
        <nav className="navbar">
            <div className="logo">
                <Link to="/"><img src="images/logo1.png" alt="the logo for the website" /></Link>
            </div>
            <div className="toggle-button" onClick={this.changeNavBar}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <div className={`${this.state.navBarActive ? "active" : ""} navbar-links`}>
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
        </nav>
    </header>
        )
    }
}

export default Header
