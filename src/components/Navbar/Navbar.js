import React, { useState } from "react";
import "./Navbar.css";


const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="navbar">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        Menu
      </button>
      <ul className={`header2 ${isDropdownOpen ? "open" : ""}`}>
        <li><a href="/home">Home</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/about">About US</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
    </div>
  );
}


export default Navbar;
