import React from "react";

import "./styles.css";

import Logo from "../../assets/logo-cc.png";

function Header() {
  return (
    <>
      <header className="header-container">
        <div className="image-section">
          <img src={ Logo } alt=""/>
        </div>
        
        <nav className="topics-section">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Tutorial</a></li>
            <li><a href="#">Saiba mais</a></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header;