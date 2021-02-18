import React from "react";
import SearchImg from "../../../assets/search.png";
import Button from "../../../components/Button";
import "./styles.css";

export default function HomeContainer() {
  return (
    <div id='content'>
      <div className='info'>
        <h1 className='main-text'>
          Seja <br /><hr /> bem-vindo
        </h1>

        <Button 
          name='Participe'
          link='/tutorial' />
      </div>

      <div className='vertical-line'></div>

      <div id='data'>
        <img src={SearchImg} alt='search'></img>
        <div id='statistics'>
          <div id='first'>
            <h3>100</h3>
            <p>Egressos cadastrados</p>
          </div>
          <div id='second'>
            <h3>300</h3>
            <p>alunos formados no ultimo ano</p>
          </div>
          <div id='third'>
            <h3>40</h3>
            <p>anos de historia</p>
          </div>
        </div>
        <Button 
          name='Ver mais'
          link='/seeMore'
          className='seemore-btn' />
      </div>
    </div>
  );
}
