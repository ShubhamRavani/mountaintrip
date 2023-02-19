import React from "react";
import "./Navbar.css";
import eclipse from "../../images/eclipse.png";
import logo from "../../images/logo.png";

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={eclipse} alt="eclipse" />
      </div>
      <ul className="app__navbar-links">
        {["home", "your trip", "about us", "shop"].map((item) => (
          <li className="text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-logo1">
        <img src={logo} alt="logo" />
      </div>
    </nav>
  );
};

export default Navbar;
