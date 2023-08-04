import React, { useState } from "react";
import menuItems from "./MenuItems";
import "./Navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">
      😁 Prasad
      </h1>
      <div className="menu-icon" onClick={handleClick}>
      <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={active ? "nav-menu active" : "nav-menu"}>
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url} className={item.cName} id="hover-underline-animation">
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
