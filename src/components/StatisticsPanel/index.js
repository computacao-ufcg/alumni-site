import React from "react";

import "./styles.css";

import StatisticCard from "./StatisticCard";

function StatisticsPanel() {
  return (
    <>
      <h1 className="title-panel">Painel de estatísticas</h1>

      <div className="grid-box">
        <div className="grid-container">
          <StatisticCard 
            name="Anos de história do curso"
            value="590" />

          <StatisticCard 
            name="Egressos registrados no sistema"
            value="590" />

          <StatisticCard 
            name="Egressos mapeados"
            value="590" />

          <StatisticCard 
            name="Total de egressos"
            value="590" />

          <StatisticCard 
            name="Egressos trabalhando na academia"
            value="590" />

          <StatisticCard 
            name="Egressos trabalhando no governo"
            value="590" />

          <StatisticCard 
            name="Egressos trabalhando na indústria"
            value="590" />

          <StatisticCard 
            name="Egressos trabalhando no governo"
            value="590" /> 

          <StatisticCard 
            name="Egressos trabalhando em companhias privadas"
            value="590" />

          <StatisticCard 
            name="Egressos trabalhando em companhias públicas"
            value="590" /> 
        </div>
      </div>
    </>
  )
}

export default StatisticsPanel;