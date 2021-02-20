import React from "react";

import "./styles.css";

function StatisticsPanel() {
  return (
    <>
      <h1 className="title-panel">Painel de estatísticas</h1>

      <div className="grid-box">
        <div className="grid-container">
          <div className="grid-item">
            <p className="title-item-box">Anos de história do curso</p>
            <p className="value-item-box">590</p>
          </div>
          <div className="grid-item">
            <p className="title-item-box">Egressos registrados no sistema</p>
            <p className="value-item-box">590</p>
          </div>
          <div className="grid-item">
            <p className="title-item-box">Número de egressos com match</p>
            <p className="value-item-box">590</p>
          </div>
          <div className="grid-item">
            <p className="title-item-box">Total de egressos</p>
            <p className="value-item-box">590</p>
          </div>
          <div className="grid-item">
            <p className="title-item-box">Egressos trabalhando na academia</p>
            <p className="value-item-box">590</p>
          </div>
          <div className="grid-item">
            <p className="title-item-box">Egressos trabalhando no governo</p>
            <p className="value-item-box">590</p>
          </div>
          <div className="grid-item">
            <p className="title-item-box">Egressos trabalhando na indústria</p>
            <p className="value-item-box">590</p>
          </div>
          <div className="grid-item">
            <p className="title-item-box">Egressos trabalhando em companhias privadas</p>
            <p className="value-item-box">590</p>
          </div>
          <div className="grid-item">
            <p className="title-item-box">Egressos trabalhando em companhias públicas</p>
            <p className="value-item-box">590</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default StatisticsPanel;