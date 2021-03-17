import React, { useState, useEffect } from "react";

import SearchImg from "../../../assets/search.png";

import Button from "../../../components/Button";

import { api_AS } from "../../../services/api";
import handleSubmit from "../../../services/login";

import "./styles.css";

function HomeContainer() {
  const [statistics, setStatistics] = useState({});
  const [courseName, setCourseName] = useState("computing-science");
  const [level, setLevel] = useState("undergraduate");
  const year = new Date().getFullYear();

  useEffect(() => {
    handleSubmit();
    handleStatistics();
  }, []);

  const handleStatistics = async () => {
    let query = `alumniSiteStatistics?courseName=${ courseName }&level=${ level }`;
    const res = await api_AS.get(query, {
      headers: { "Authentication-Token": localStorage.getItem("eureca-token") },
    });
    console.log(res);
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
        <div className="paragraphs">
          <p>
            Em <b>{ year }</b>, a Unidade Acadêmica de Sistemas e Computação (UASC) da
            Universidade Federal de Campina Grande (UFCG)
            completa <b>{ statistics.historyYears }</b> anos de existência. Nesses anos,
            formamos um total de <b>{ statistics.numberAlumniCourse }</b> profissionais, 
            que são reconhecidos no mercado de trabalho pela sua competência e 
            ética profissional.
          </p>
          <p>
            Este sítio <i>web</i> traz estatísticas sobre a atuação desses egressos no mercado
            de trabalho. Os dados são obtidos através dos perfis públicos dos egressos
            no LinkedIn.
          </p>
          <p>
            Se você é graduado em um dos cursos oferecidos pela UASC/UFCG,
            nós o convidamos para juntar-se ao nosso grupo de egressos no LinkedIn
            para ter seus dados contabilizados aqui.
          </p>
          <p>
            Aqui também é possível consultar de forma mais simples os perfis de nossos egressos
            cadastrados no LinkedIn.
          </p>

          <Button name='Participe' link='/tutorial' className="btn-participate" />
        </div>
      </div>

      <div className='vertical-line'></div>

      <div id='data'>
        <img src={SearchImg} alt='search' className="img-home"></img>
        <div id='statistics'>
          <div id='first_item'>
            <h3>
              { statistics.numberAlumniGraduatedInTheLastYear !== null ? statistics.numberAlumniGraduatedInTheLastYear : "-" }
            </h3>
            <p>Alunos formados no último ano</p>
          </div>
          <div id='second_item'>
            <h3>
              { statistics.numberMatchedAlumniCourse !== null ? statistics.numberMatchedAlumniCourse : "-" }
            </h3>
            <p>Egressos <br/> mapeados</p>
          </div>
          <div id='third_item'>
            <h3>
              { statistics.numberAcademyEmployedCourse !== null ? statistics.numberAcademyEmployedCourse : "-" }
            </h3>
            <p>Egressos <br/> trabalhando na <br/> academia</p>
          </div>
          <div id='fourth_item'>
            <h3>
              { statistics.numberGovernmentEmployedCourse !== null ? statistics.numberGovernmentEmployedCourse : "-" }
            </h3>
            <p>Egressos <br/> trabalhando no <br/> governo</p>
          </div>
          <div id='fifth_item'>
            <h3>
              { statistics.numberMixedCompanyEmployedCourse !== null ? statistics.numberMixedCompanyEmployedCourse : "-" }
            </h3>
            <p>Egressos <br/> trabalhando na <br/> indústria</p>
          </div>
          <div id='sixth_item'>
            <h3>
              { statistics.numberPrivateCompanyEmployedCourse !== null ? statistics.numberPrivateCompanyEmployedCourse : "-" }
            </h3>
            <p>Egressos trabalhando em companhias privadas</p>
          </div>
          <div id='seventh_item'>
            <h3>
              { statistics.numberPublicCompanyEmployedCourse !== null ? statistics.numberPublicCompanyEmployedCourse : "-" }
            </h3>
            <p>Egressos trabalhando em companhias públicas</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContainer;