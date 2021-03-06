import React, { useState, useEffect } from "react";

import { Loader } from "rsuite";

import { api_AS } from "../../../services/api";
import handleSubmit from "../../../services/login";

import "./styles.css";

function HomeContainer() {
  const [statistics, setStatistics] = useState({});
  const [courseName, setCourseName] = useState("computing-science");
  const [level, setLevel] = useState("undergraduate");
  const [loading, setLoading] = useState(true);

  const year = new Date().getFullYear();

  useEffect(async () => {
    await handleSubmit();
    handleStatistics();
  }, []);

  const handleStatistics = async () => {
    setLoading(true);
    let query = `alumniSiteStatistics?courseName=${ courseName }&level=${ level }`;
    const res = await api_AS.get(query, {
      headers: { "Authentication-Token": sessionStorage.getItem("eureca-token") },
    });
    
    if (res.status === 200) {
      setStatistics(res.data);
      setLoading(false);
    } else {
      console.error("Response error");  
    }
  }

  return (
    <React.Fragment>
      {
        loading ? 
          <>
            <div style={{ height: 445 }}></div>
            <Loader backdrop content="loading..." vertical size='md' /> 
          </> : 
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
              </div>
            </div>

            <div className='vertical-line'></div>

            <div id='data'>
              <div className="img-home"></div>
              <div id='statistics'>
                <div id='first_item'>
                  <h3>
                    { statistics.numberAlumniGraduatedInTheLastYear }
                  </h3>
                  <p>Alunos formados no último ano</p>
                </div>
                <div id='second_item'>
                  <h3>
                    { statistics.numberMatchedAlumniCourse }
                  </h3>
                  <p>Egressos <br/> mapeados</p>
                </div>
                <div id='third_item'>
                  <h3>
                    { statistics.numberAcademyEmployedCourse }
                  </h3>
                  <p>Egressos <br/> trabalhando na <br/> academia</p>
                </div>
                <div id='fourth_item'>
                  <h3>
                    { statistics.numberGovernmentEmployedCourse }
                  </h3>
                  <p>Egressos <br/> trabalhando no <br/> governo</p>
                </div>
                <div id='fifth_item'>
                  <h3>
                    { statistics.numberMixedCompanyEmployedCourse }
                  </h3>
                  <p>Egressos <br/> trabalhando na <br/> indústria</p>
                </div>
                <div id='sixth_item'>
                  <h3>
                    { statistics.numberPrivateCompanyEmployedCourse }
                  </h3>
                  <p>Egressos trabalhando em companhias privadas</p>
                </div>
                <div id='seventh_item'>
                  <h3>
                    { statistics.numberPublicCompanyEmployedCourse }
                  </h3>
                  <p>Egressos trabalhando em companhias públicas</p>
                </div>
              </div>
            </div>
          </div>
      }
    </React.Fragment>
  );
}

export default HomeContainer;