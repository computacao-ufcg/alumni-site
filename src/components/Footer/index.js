import React from "react";

import "./styles.css";

function Footer() {
  return (
    <>
      <footer className='footer-container'>
        <div className='footer-text'>
          <h5>
            Unidade Acadêmica de Sistemas e Computação - UFCG | All rights
            reserved &copy;
          </h5>
        </div>
        <div className='social-icons'>
          <a
            href='https://www.linkedin.com/groups/1097807/'
            className='home__social-icon'
            target='_blank'
            rel='noreferrer'
          >
            <i className='bx bxl-linkedin-square'></i>
          </a>
          <a
            href='http://www.instagram.com/computacaoufcg'
            className='home__social-icon'
            target='_blank'
            rel='noreferrer'
          >
            <i className='bx bxl-instagram-alt'></i>
          </a>
          <a
            href='https://github.com/computacao-ufcg'
            className='home__social-icon'
            target='_blank'
            rel='noreferrer'
          >
            <i className='bx bxl-github'></i>
          </a>
          <a 
            href='mailto:secretaria-ccc@computacao.ufcg.edu.br' 
            className='home__social-icon' 
            target='_blank'
            rel='noreferrer'
          >
            <i className='bx bx-mail-send'></i>
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
