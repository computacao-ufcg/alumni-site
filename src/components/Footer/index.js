import React from "react";

import "./styles.css";

function Footer() {
  return (
    <>
      <footer className="footer-container">
        <div className="footer-text">
          <h5>Departamento de Sistemas e Computação - UFCG | All rights reserved &copy;</h5>
        </div>
        <div className="social-icons">
          <a href="#" class="home__social-icon" target="_blank">
            <i class="bx bxl-linkedin-square"></i>
          </a>
          <a href="http://www.instagram.com/computacaoufcg" class="home__social-icon" target="_blank">
            <i class="bx bxl-instagram-alt"></i>
          </a>
          <a href="https://github.com/computacao-ufcg" class="home__social-icon" target="_blank">
            <i class="bx bxl-github"></i>
          </a>
          <a href="#" class="home__social-icon" target="_blank">
            <i class="bx bx-mail-send"></i>
          </a>
        </div>
      </footer>
    </>
  )
}

export default Footer;