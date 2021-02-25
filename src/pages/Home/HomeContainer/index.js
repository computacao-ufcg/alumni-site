import React, { useState, useEffect } from "react";

import SearchImg from "../../../assets/search.png";

import Button from "../../../components/Button";

import { api_AS } from "../../../services/api";
import handleSubmit from "../../../services/login";

import "./styles.css";

function HomeContainer() {
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

        <Button name='Participe' link='/tutorial' />
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
            <h3>{ statistics.historyYears }</h3>
            <p>Anos de historia</p>
          </div>
          <div id='fourth'>
            <h3>40</h3>
            <p>anos de historia</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContainer;