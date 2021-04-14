import React from "react";

import { Link } from "react-router-dom";

import Button from "../Button";

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
              <Button name='Home' link='/' />
            </li>
            <li>
              <Button name='Participe' link='/tutorial' />
            </li>
            <li>
              <Button name='Procure egressos' link='/statistics' />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
