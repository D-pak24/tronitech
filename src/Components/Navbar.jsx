import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLinkClick = () => {
    closeMenu();
  };

  return (
    <nav className="nav">
      <input type="checkbox" id="nav-check" checked={isOpen} />
      <div className="nav-header">
        <div className="logo">
          <img src={props.img} alt="logo" />
        </div>
      </div>
      <div className="nav-btn" onClick={toggleMenu}>
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      
      <ul className={isOpen ? "nav-list open" : "nav-list"}>
        <li className="reg">
          <Link to={"/register"} onClick={handleLinkClick}>Register</Link>
        </li>
        <li>
          <Link to={"/"} onClick={handleLinkClick}>Home</Link>
        </li>
        <li>
          <Link to={"/about"} onClick={handleLinkClick}>About</Link>
        </li>
        <li>
          <Link to={"/technical"} onClick={handleLinkClick}>Technical Events</Link>
        </li>
        <li>
          <Link to={"/nontechnical"} onClick={handleLinkClick}>Non-Technical Events</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
