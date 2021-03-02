import React from "react";

import { Link } from "react-router-dom";

import "./styles.css";

import Logo from "../../assets/logo-cc.png";

function Header() {
  return (
    <>
      <header className='header-container'>
        <div className='image-section'>
          <Link to='/'>
            <img src={Logo} alt='' />
          </Link>
        </div>

        <nav className='topics-section'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/tutorial'>Participe</Link>
            </li>
            <li>
              <Link to='/statistics'>Estatísticas</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
