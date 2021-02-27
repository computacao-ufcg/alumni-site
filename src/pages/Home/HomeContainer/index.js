import React, { useState, useEffect } from "react";

import SearchImg from "../../../assets/search.png";

import Button from "../../../components/Button";

import { api_AS } from "../../../services/api";
import handleSubmit from "../../../services/login";

import "./styles.css";

function HomeContainer() {
  const [statistics, setStatistics] = useState({});
  const [courseName, setCourseName] = useState("computing-science");
  const year = new Date().getFullYear();

  useEffect(() => {
    handleSubmit();
    handleStatistics();
  }, []);

  const handleStatistics = async () => {
    let query = `alumniSiteStatistics?courseName=${ courseName }`;
    const res = await api_AS.get(query, {
      headers: { "Authentication-Token": localStorage.getItem("eureca-token") },
    });

    if (res.status === 200) {
      setStatistics(res.data);
      console.log(statistics.historyYears);
    } else {
      console.error("error: response error");  
    }
  }

  return (
    <div id='content'>
      <div className='info'>
        <h1 className='main-text'>
          Seja <br />
          <hr /> bem-vindo
        </h1>

        <p>
          Em <b>{ year }</b>, o Departamento de Sistemas e Computação da UFCG 
          completa <b>{ statistics.historyYears }</b> anos de fundação. Nesses anos, 
          formamos um total de <b>{ statistics.numberAlumniCourse }</b> profissionais, 
          que são reconhecidos no mercado de trabalho pela sua competência e 
          ética profissional.
        </p>

        <Button name='Participe' link='/tutorial' />
      </div>

      <div className='vertical-line'></div>

      <div id='data'>
        <img src={SearchImg} alt='search' className="img-home"></img>
        <div id='statistics'>
          <div id='first_item'>
            <h3>{ statistics.numberAlumniGraduatedInTheLastYear }</h3>
            <p>Alunos formados no último ano</p>
          </div>
          <div id='second_item'>
            <h3>{ statistics.numberMatchedAlumniCourse }</h3>
            <p>Egressos <br/> mapeados</p>
          </div>
          <div id='third_item'>
            <h3>{ statistics.numberAcademyEmployedCourse }</h3>
            <p>Egressos <br/> trabalhando na <br/> academia</p>
          </div>
          <div id='fourth_item'>
            <h3>{ statistics.numberGovernmentEmployedCourse }</h3>
            <p>Egressos <br/> trabalhando no <br/> governo</p>
          </div>
          <div id='fifth_item'>
            <h3>{ statistics.numberMixedCompanyEmployedCourse }</h3>
            <p>Egressos <br/> trabalhando na <br/> indústria</p>
          </div>
          <div id='sixth_item'>
            <h3>{ statistics.numberPrivateCompanyEmployedCourse }</h3>
            <p>Egressos trabalhando em companhias privadas</p>
          </div>
          <div id='seventh_item'>
            <h3>{ statistics.numberPublicCompanyEmployedCourse }</h3>
            <p>Egressos trabalhando em companhias públicas</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContainer;