import React from "react";
import SearchImg from "../../../assets/search.png";
import Button from "../../../components/Button";
import "./styles.css";

export default function HomeContainer() {
  return (
    <div id='content'>
      <div className='info'>
        <h1>
          Seja <br /><hr /> bem-vindo
        </h1>

        <p>
          Em 2013 o Departamento de Sistemas e Computação da UFCG completa 40
          anos de fundação. Nesses anos, formamos 1265 profissionais, que são
          reconhecidos no mercado de trabalho pela sua competência e ética
          profissional.
        </p>

        <Button />
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
      </div>
    </div>
  );
}
