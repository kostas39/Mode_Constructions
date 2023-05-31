import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
        <ul className="header2">
         <li><a href="/home">Home</a></li>
         <li><a href="/services">Services</a></li>
         <li><a href="/projects">Projects</a></li>
         <li><a href="/about">About US</a></li>
         <li><a href="/contact">Contact Us </a></li>
        </ul>
    </div>
  )
}


export default Navbar;
