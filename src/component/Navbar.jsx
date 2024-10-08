import React, { useState } from "react";
import menuItems from "./MenuItems";
import "./Navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(prevState => !prevState);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">😁 Prasad Lokhande</h1>
      <div className="menu-icon" onClick={toggleMenu}>
        <i className={isActive ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={`nav-menu ${isActive ? "active" : ""}`}>
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href={item.url} className={item.cName} id="hover-underline-animation">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
