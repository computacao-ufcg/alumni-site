import React from "react";

import "./styles.css";

function StatisticCard(props) {
  return (
    <div className="grid-item">
      <p className="title-item-box">{ props.name }</p>
      <p className="value-item-box">{ props.value }</p>
    </div>
  )
}

export default StatisticCard;