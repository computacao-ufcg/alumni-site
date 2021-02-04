import React from 'react';
import Header from '../../components/Header';
import SearchImg from '../../assets/search.png';

export default function Home() {
    return (
        <div id="page-home">
            <Header/>

            <div id="content">
                <div id="info">
                    <h1>Seja <br/> bem-vindo</h1>

                    <p>
                    Em 2013 o Departamento de Sistemas e Computação da UFCG completa 
                    40 anos de fundação. Nesses anos, formamos 1265 profissionais, que 
                    são reconhecidos no mercado de trabalho pela sua competência e ética 
                    profissional.
                    </p>

                    <button>Participe</button>
                </div>

                <div>
                    <img src={SearchImg} alt="search"></img>
                </div>
            </div>
        </div>
    )
}