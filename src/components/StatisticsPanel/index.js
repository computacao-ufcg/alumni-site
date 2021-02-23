import React, { useState, useEffect } from "react";

import "./styles.css";

import { api_AS } from "../../services/api";
import handleSubmit from "../../services/login";

import StatisticCard from "./StatisticCard";

function StatisticsPanel() {
  const [statistics, setStatistics] = useState({});
  const [courseName, setCourseName] = useState("computing-science");

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
    } else {
      console.error("error: response error");
    }
  }

  return (
    <>
      <h1 className="title-panel">Painel de estatísticas</h1>

      <div className="grid-box">
        <div className="grid-container">
          <StatisticCard 
            name="Anos de história do curso"
            value={ statistics.historyYears } />

          <StatisticCard 
            name="Total de egressos"
            value={ statistics.numberAlumniCourse } />

          <StatisticCard 
            name="Alunos formados no último ano"
            value={ statistics.numberAlumniGraduatedInTheLastYear } />

          <StatisticCard 
            name="Egressos mapeados"
            value={ statistics.numberMatchedAlumniCourse } />

          <StatisticCard 
            name="Egressos trabalhando na academia"
            value={ statistics.numberAcademyEmployedCourse } />

          <StatisticCard 
            name="Egressos trabalhando no governo"
            value={ statistics.numberGovernmentEmployedCourse } />

          <StatisticCard 
            name="Egressos trabalhando na indústria"
            value={ statistics.numberMixedCompanyEmployedCourse } />

          <StatisticCard 
            name="Egressos trabalhando no governo"
            value={ statistics.numberGovernmentEmployedCourse } /> 

          <StatisticCard 
            name="Egressos trabalhando em companhias privadas"
            value={ statistics.numberPrivateCompanyEmployedCourse } />

          <StatisticCard 
            name="Egressos trabalhando em companhias públicas"
            value={ statistics.numberPublicCompanyEmployedCourse } /> 
        </div>
      </div>
    </>
  )
}

export default StatisticsPanel;