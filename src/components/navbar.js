import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Navbar = () => {
  return ( 
        <nav className="navbar">
        <div className="menu">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/skills">Skills</NavLink>
            <NavLink to="/experience">Experience</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            {/* <NavLink to="/services">Services</NavLink> */}
            <NavLink to="/contact">Contact</NavLink>
        </div>
    </nav>
    )
}

export default Navbar;